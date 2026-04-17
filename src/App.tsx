import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "@/components/navbar";
import { Chatbot } from "@/components/chatbot";
import { 
  HeroSection, 
  FeaturesSection, 
  CategoriesSection,
  FeaturedToolsSection,
  WhyChooseSection,
  Footer 
} from "@/components/landing";
import { motion } from 'framer-motion';
import { Search, Filter, Sparkles, TrendingUp, Info, UserPlus, Mail, ArrowRight, ExternalLink, Zap, Globe, Shield, Activity, Cpu, Layers, Code } from 'lucide-react';

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedToolsSection />
      <FeaturesSection />
      <WhyChooseSection />
    </>
  );
}

function ToolsPage() {
  const tools = [
    { name: "ChatGPT", category: "Writing", pricing: "Freemium", desc: "The world's most popular AI chatbot.", rating: 4.9 },
    { name: "Claude", category: "Writing", pricing: "Freemium", desc: "Next-gen AI assistant with advanced reasoning.", rating: 4.8 },
    { name: "Luma Dream Machine", category: "Video", pricing: "Paid", desc: "Create high-quality videos from text/images.", rating: 4.7 },
    { name: "Cursor", category: "Coding", pricing: "Paid", desc: "The AI code editor for efficient engineering.", rating: 4.9 },
    { name: "Perplexity", category: "Search", pricing: "Freemium", desc: "AI-powered search engine for accurate answers.", rating: 4.8 },
    { name: "Canva AI", category: "Design", pricing: "Freemium", desc: "Magic Studio for seamless design automation.", rating: 4.6 },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div>
            <h1 className="text-5xl font-bold tracking-tighter text-white mb-4">All AI Tools</h1>
            <p className="text-xl text-neutral-400">Browse through our exhaustive directory of expert-reviewed AI platforms.</p>
          </div>
          <div className="flex gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <input type="text" placeholder="Search tools..." className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors w-64" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full">{tool.pricing}</span>
                <span className="text-xs text-yellow-500 font-bold">★ {tool.rating}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-neutral-400 mb-6">{tool.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5 uppercase tracking-tighter text-[10px] font-bold text-neutral-500">
                <span>{tool.category}</span>
                <button className="text-white hover:text-blue-500 transition-colors flex items-center gap-1">Visit <ExternalLink className="w-3 h-3"/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DiscoverPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-purple-500 font-bold uppercase tracking-widest text-xs">New Release</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter text-white mb-6">Discover the Next<br/>Big AI Solution</h1>
            <p className="text-xl text-neutral-400 mb-8 max-w-lg">We track clinical tech advancements and newly launched AI tools daily. Be the first to try out cutting-edge platforms.</p>
            <button className="px-8 py-4 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-500 transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] flex items-center gap-2">
              Try Something Random <Search className="w-4 h-4"/>
            </button>
          </div>
          <div className="p-8 rounded-[3rem] bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6">
               <TrendingUp className="w-12 h-12 text-purple-500/50" />
             </div>
             <h2 className="text-3xl font-bold text-white mb-4">Trending This Week</h2>
             <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">#{i}</div>
                      <span className="font-bold text-white">AI Platform {i}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </div>
                ))}
             </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Recently Added</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1,2,4,5].map(i => (
            <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="h-32 rounded-xl bg-white/5 mb-4 overflow-hidden">
                <img src={`https://picsum.photos/seed/${i * 10}/400/300`} className="w-full h-full object-cover opacity-50 transition-opacity hover:opacity-100" />
              </div>
              <h3 className="font-bold text-white">Tool Name {i}</h3>
              <p className="text-xs text-neutral-500 mt-1">2 hours ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-12 text-center italic group cursor-default">
           Our <span className="group-hover:text-blue-500 transition-colors">Story.</span>
        </h1>
        
        <div className="space-y-16">
          <section className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4"><Info className="text-blue-500"/> I am Raja Paswan</h2>
            <div className="text-lg md:text-xl text-neutral-400 leading-relaxed space-y-6">
              <p>I am a BTech IT student with a passion for emerging technologies. While exploring the rapidly evolving landscape of AI, I noticed a major problem — people don’t know which AI tools exist or which one is right for their work.</p>
              <p>Every day, dozens of groundbreaking AI tools are launched, but users cannot track or compare them easily. The sheer volume of information is overwhelming.</p>
              <p className="text-white font-medium">AI Junction was created to solve this problem by bringing all AI tools into one unified, user-friendly platform.</p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-neutral-400">To simplify AI discovery for everyone, from students to enterprise executives, by organizing the world's AI tools in a transparent and accessible way.</p>
            </div>
            <div className="p-8 rounded-3xl bg-purple-600/10 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-neutral-400">To become the global standard platform where the future of software is discovered, categorized, and explored through a futuristic 3D interface.</p>
            </div>
          </div>

          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-white mb-6">Future Goals</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto italic">"We aim to integrate AI-powered personalized recommendations and a community-driven rating system that makes finding tools as easy as breathing."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function JoinPage() {
  return (
    <div className="pt-40 pb-24 min-h-screen relative overflow-hidden">
       {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 rotate-12">
          <UserPlus className="w-10 h-10 text-blue-500" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">List Your AI Tool.</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mb-16">Get in front of thousands of daily users searching for the next big AI innovation. Join our ecosystem of verified AI platforms.</p>
        
        <div className="grid md:grid-cols-2 gap-12 text-left w-full max-w-4xl">
           <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
             <h3 className="text-2xl font-bold text-white mb-6">Submit Product</h3>
             <div className="space-y-4">
               <input type="text" placeholder="AI Tool Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
               <input type="email" placeholder="Founder Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
               <textarea placeholder="Tell us about your AI..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 h-32" />
               <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">Submit to AI Junction</button>
             </div>
           </div>
           
           <div className="flex flex-col justify-center space-y-12">
             <div className="flex gap-6">
               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center"><Zap className="text-blue-400"/></div>
               <div>
                 <h4 className="text-white font-bold mb-2">Fast Approval</h4>
                 <p className="text-neutral-500 text-sm">Most submissions are reviewed and listed within 24-48 hours.</p>
               </div>
             </div>
             <div className="flex gap-6">
               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center"><Globe className="text-purple-400"/></div>
               <div>
                 <h4 className="text-white font-bold mb-2">Global Reach</h4>
                 <p className="text-neutral-500 text-sm">Our audience spans across 50+ countries with high buyer intent.</p>
               </div>
             </div>
             <div className="flex gap-6">
               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center"><Shield className="text-green-400"/></div>
               <div>
                 <h4 className="text-white font-bold mb-2">Verified Listing</h4>
                 <p className="text-neutral-500 text-sm">Gain trust with an 'AI Junction Verified' badge for your product.</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">Get in Touch.</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">Have questions? Want to partner up? We're here to help you navigate the AI junction.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <Mail className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-neutral-500 mb-6 text-sm">Our support team usually responds in 4 hours.</p>
            <a href="mailto:support@aijunction.com" className="text-blue-400 font-bold hover:underline">support@aijunction.com</a>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <Globe className="w-10 h-10 text-purple-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Socials</h3>
            <p className="text-neutral-500 mb-6 text-sm">Join our growing community online.</p>
            <div className="flex gap-4">
               {['TW', 'GH', 'DS'].map(s => <div key={s} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:bg-white/10 transition-colors">{s}</div>)}
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <Info className="w-10 h-10 text-green-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-2">Office</h3>
            <p className="text-neutral-500 mb-6 text-sm">Currently operating from our digital HQ.</p>
            <p className="text-white font-bold">New Delhi, India</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Your Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" />
              <input type="email" placeholder="Your Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <textarea placeholder="Your Message..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 h-32 mb-6" />
            <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-neutral-100 transition-all">Send Message</button>
          </div>

          <div className="mt-24 space-y-4">
             <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
             {[
               { q: "How do I list my tool?", a: "Simply visit the Join Us page and fill out the submission form. Our team will review it within 48 hours." },
               { q: "Is Ai Junction free to use?", a: "Yes, browsing and discovering tools is completely free. We also offer premium feature spots for founders." },
               { q: "Who created Ai Junction?", a: "AI Junction was created by Raja Paswan, a BTech IT student, to simplify AI discovery." }
             ].map((faq, idx) => (
               <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                 <h4 className="text-white font-bold mb-2">{faq.q}</h4>
                 <p className="text-neutral-500 text-sm">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans cursor-default scroll-smooth relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
