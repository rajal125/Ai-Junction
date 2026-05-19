import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Database setup
  const dbUrl = process.env.DATABASE_URL;

  if (!dbUrl) {
    console.warn('DATABASE_URL is not set. Using mock data fallback.');
  }

  const pool = new Pool({
    connectionString: dbUrl,
    ssl: dbUrl ? {
      rejectUnauthorized: false // Required for Supabase
    } : undefined
  });

  // Verify connection and create table if it doesn't exist
  if (dbUrl) {
    try {
      const client = await pool.connect();
      console.log('Successfully connected to PostgreSQL');
      
      await client.query(`
        CREATE TABLE IF NOT EXISTS tools (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          category TEXT NOT NULL,
          pricing TEXT NOT NULL,
          description TEXT NOT NULL,
          rating DECIMAL(3,1) NOT NULL,
          visit_url TEXT
        )
      `);

      // Check if table is empty and seed it if so
      const res = await client.query('SELECT COUNT(*) FROM tools');
      if (parseInt(res.rows[0].count) === 0) {
        console.log('Seeding initial tools into database...');
        const initialTools = [
          ["ChatGPT", "Writing", "Freemium", "The world's most popular AI chatbot.", 4.9],
          ["Claude", "Writing", "Freemium", "Next-gen AI assistant with advanced reasoning.", 4.8],
          ["Luma Dream Machine", "Video", "Paid", "Create high-quality videos from text/images.", 4.7],
          ["Perplexity", "Search", "Freemium", "AI-powered search engine for accurate answers.", 4.8],
          ["Canva AI", "Design", "Freemium", "Magic Studio for seamless design automation.", 4.6]
        ];
        for (const tool of initialTools) {
          await client.query(
            'INSERT INTO tools (name, category, pricing, description, rating) VALUES ($1, $2, $3, $4, $5)',
            tool
          );
        }
      }
      
      client.release();
    } catch (err) {
      console.error('Error connecting to PostgreSQL or setting up schema:', err);
      // Continue even if DB fails, maybe using fallback mock data in API
    }
  }

  app.use(express.json());

  // API Routes
  app.get("/api/tools", async (req, res) => {
    if (!dbUrl) {
      return res.json([
        { name: "ChatGPT", category: "Writing", pricing: "Freemium", desc: "The world's most popular AI chatbot.", rating: 4.9 },
        { name: "Claude", category: "Writing", pricing: "Freemium", desc: "Next-gen AI assistant with advanced reasoning.", rating: 4.8 },
        { name: "Luma Dream Machine", category: "Video", pricing: "Paid", desc: "Create high-quality videos from text/images.", rating: 4.7 },
        { name: "Perplexity", category: "Search", pricing: "Freemium", desc: "AI-powered search engine for accurate answers.", rating: 4.8 },
        { name: "Canva AI", category: "Design", pricing: "Freemium", desc: "Magic Studio for seamless design automation.", rating: 4.6 }
      ]);
    }

    try {
      const { rows } = await pool.query('SELECT * FROM tools ORDER BY rating DESC');
      res.json(rows.map(row => ({
        name: row.name,
        category: row.category,
        pricing: row.pricing,
        desc: row.description, // Mapping description -> desc for frontend compatibility
        rating: parseFloat(row.rating.toString())
      })));
    } catch (err) {
      console.error('Error fetching tools:', err);
      // Fallback data if DB is not ready
      res.json([
        { name: "ChatGPT", category: "Writing", pricing: "Freemium", desc: "The world's most popular AI chatbot.", rating: 4.9 },
        { name: "Claude", category: "Writing", pricing: "Freemium", desc: "Next-gen AI assistant with advanced reasoning.", rating: 4.8 },
      ]);
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
