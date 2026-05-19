import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2, ExternalLink, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useNavigate } from 'react-router-dom';

// Initialize AI
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

interface Tool {
  name: string;
  category: string;
  description: string;
  link?: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  tools?: Tool[];
}

const SYSTEM_INSTRUCTION = `You are the AI Junction Assistant. Your goal is to help users navigate our AI directory and find the perfect AI tools for their needs.
AI Junction is a futuristic 3D directory created by Raja Paswan.

Key Tools in our directory:
- ChatGPT (Writing/All-purpose)
- Claude (Complex reasoning/Writing)
- Luma Dream Machine (High-quality Video)
- Cursor (AI Code Editor)
- Perplexity (AI Search)
- Canva AI (Design)
- Midjourney (Image Gen)
- Jasper (Marketing Writing)
- GitHub Copilot (Coding)
- Synthesia (AI Video)

When you suggest tools, you MUST provide them in both your natural response AND in a structured JSON format at the very end of your message.
The structured data should be wrapped in [TOOL_DATA]...[/TOOL_DATA] tags.
Example:
[TOOL_DATA]
[
  {"name": "Cursor", "category": "Coding", "description": "AI code editor built for pair programming."},
  {"name": "Perplexity", "category": "Search", "description": "Answer engine that provides real-time information with citations."}
]
[/TOOL_DATA]

Always be helpful, professional, and futuristic. Use emojis where appropriate. If you don't know a specific tool, suggest a category and help the user think through their requirements.`;

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm your AI Junction guide. Looking for a specific AI tool or need a recommendation?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const parseToolData = (text: string): { content: string, tools: Tool[] } => {
    const regex = /\[TOOL_DATA\]([\s\S]*?)\[\/TOOL_DATA\]/;
    const match = text.match(regex);
    
    if (match) {
      try {
        const tools: Tool[] = JSON.parse(match[1].trim());
        const content = text.replace(regex, '').trim();
        return { content, tools };
      } catch (e) {
        console.error("Failed to parse tool data", e);
      }
    }
    return { content: text, tools: [] };
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))
      });

      const result = await chat.sendMessage({
        message: userMessage
      });

      const responseText = result.text || "I'm sorry, I couldn't process that. Please try again.";
      const { content, tools } = parseToolData(responseText);
      
      setMessages(prev => [...prev, { role: 'assistant', content, tools }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops! Technical glitch in the matrix. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] md:h-[600px] bg-[#0a0a0a]/98 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 flex items-center justify-between">
              <div 
                className="flex items-center gap-3 cursor-pointer group/header"
                onClick={() => {
                  navigate('/');
                  setIsOpen(false);
                }}
              >
                <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover/header:scale-110">
                  <img src="/logo.png" alt="Ai Junction Logo" className="w-full h-full object-contain mix-blend-screen contrast-125 brightness-110" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm group-hover/header:text-blue-400 transition-colors">AI Junction AI</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">Neural Link Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
                id="close-chat"
              >
                <X className="w-5 h-5 text-neutral-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'bg-white/5 border border-white/10'}`}>
                      {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-blue-500" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white/5 text-neutral-300 border border-white/10 rounded-tl-none shadow-xl backdrop-blur-md'}`}>
                      {m.content}
                    </div>
                  </div>
                  
                  {m.tools && m.tools.length > 0 && (
                    <div className="mt-4 flex flex-col gap-3 w-full max-w-[85%] pl-11">
                      <div className="flex items-center gap-2 text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1">
                        <Sparkles className="w-3 h-3" /> Recommended Tools
                      </div>
                      {m.tools.map((tool, tIdx) => (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: tIdx * 0.1 }}
                          key={tIdx} 
                          className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all group/card shadow-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                             <h4 className="text-white font-bold text-sm tracking-tight">{tool.name}</h4>
                             <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full font-bold uppercase">{tool.category}</span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-normal mb-3">{tool.description}</p>
                          <button className="flex items-center gap-1.5 text-[10px] text-blue-400 font-bold uppercase group-hover/card:text-blue-300 transition-colors">
                            Explore <ExternalLink className="w-3 h-3" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 text-neutral-300 border border-white/10 rounded-tl-none flex items-center gap-2">
                       <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                       <span className="italic text-xs text-neutral-500 tracking-tight">Syncing with neural net...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-black/40">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-4 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-neutral-600"
                  id="chat-input"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group-focus-within:scale-105 shadow-lg shadow-blue-600/20"
                  id="send-chat"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-center text-neutral-600 mt-3 font-medium uppercase tracking-widest">Powered by Gemini AI Technology</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all duration-300 border border-white/10 relative z-10 overflow-hidden group"
        id="toggle-chat"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X className="w-8 h-8 relative z-10" /> : <Bot className="w-8 h-8 relative z-10" />}
      </motion.button>
    </div>
  );
}

