import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Shield, Zap, Code, Globe, Activity, Layers, Lock, Search, TrendingUp, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/20 to-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start gap-8 py-12 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.02] border border-white/[0.08] text-sm text-neutral-300 font-medium shadow-[0_0_15px_rgba(255,255,255,0.03)] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.12] hover:border-white/[0.15]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            Now available: AI Platform v2.0
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 leading-[1.1]"
          >
            Find the Perfect AI<br/>for Your Needs
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed"
          >
            Discover, compare, and explore the latest AI tools in one place. Your ultimate gateway to every useful AI platform launched today.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-xl"
          >
            <div className="flex items-center gap-3 p-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl group focus-within:border-blue-500/50 transition-all duration-300">
              <Search className="w-5 h-5 text-neutral-500 ml-3" />
              <input 
                type="text" 
                placeholder="Search for AI tools (e.g. Logo Maker, Code Assistant)..." 
                className="bg-transparent border-none outline-none text-white w-full py-3 text-sm md:text-base placeholder:text-neutral-600"
              />
              <button className="hidden sm:block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                Search
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.03] shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">
              Explore Tools <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/[0.15] text-white font-medium hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2">
              Join Us
            </button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] lg:h-[800px] w-full [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
        >
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}


export function FeaturesSection() {
  const features = [
    { icon: Brain, title: "AI Architecture", desc: "Advanced models optimized for real-time reasoning, automation, and decision making." },
    { icon: Zap, title: "Ultra-fast Response", desc: "Low-latency infrastructure ensures instant execution across all environments." },
    { icon: Lock, title: "Enterprise Security", desc: "End-to-end protection with secure environments and best-in-class practices." },
    { icon: Globe, title: "Global Infrastructure", desc: "Deploy instantly across multiple regions with high availability." },
    { icon: Cpu, title: "High Performance", desc: "Optimized compute and acceleration for demanding workloads." },
    { icon: Activity, title: "Real-time Monitoring", desc: "Track performance, activity, and system health with precision." },
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Built for the next generation.</h2>
          <p className="text-xl text-neutral-400">A flexible and scalable foundation designed to power modern AI applications and intelligent systems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-neutral-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShowcaseSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">From input to action.</h2>
          <p className="text-xl text-neutral-400">Turn data into intelligent outcomes with systems that understand context and execute in real time.</p>
        </div>
        
        <div className="relative rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] overflow-hidden h-[600px] flex items-center justify-center shadow-2xl">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          {/* Mock UI Card */}
          <div className="relative z-10 p-8 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl max-w-2xl w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-neutral-500 font-mono ml-2">nexus-terminal ~ agent-04</div>
              </div>
              <div className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded-full">ONLINE</div>
            </div>
            
            <div className="font-mono text-sm text-neutral-400 space-y-3">
              <p className="flex items-center gap-2"><span className="text-blue-400">→</span> Initializing neural pathways...</p>
              <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Cognitive engine synchronized.</p>
              <p className="flex items-center gap-2"><span className="text-blue-400">→</span> Connecting to spatial environment...</p>
              <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Spatial mapping complete.</p>
              <p className="flex items-center gap-2"><span className="text-blue-400">→</span> Loading behavioral parameters...</p>
              <p className="text-white mt-6 pt-4 border-t border-white/5">&gt; System ready for deployment.</p>
              <span className="inline-block w-2 h-4 bg-white animate-pulse mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




export function CategoriesSection() {
  const categories = [
    { name: "Design", icon: Layers, count: "120+" },
    { name: "Writing", icon: Code, count: "85+" },
    { name: "Coding", icon: Cpu, count: "60+" },
    { name: "Video", icon: Activity, count: "45+" },
    { name: "Marketing", icon: Globe, count: "95+" },
    { name: "Productivity", icon: Zap, count: "110+" },
    { name: "Image Gen", icon: Sparkles, count: "70+" },
    { name: "Other", icon: ArrowRight, count: "50+" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">Explore by Category</h2>
            <p className="text-xl text-neutral-400">Find the right AI tool tailored for your specific workflow or industry.</p>
          </div>
          <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
            View All Categories <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <cat.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-white font-semibold mb-1">{cat.name}</h3>
              <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">{cat.count} Tools</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedToolsSection() {
  const tools = [
    { name: "Jasper", category: "Writing", rating: 4.8, price: "Paid", desc: "Advanced AI writing assistant for marketing teams.", logo: "https://picsum.photos/seed/jasper/100/100" },
    { name: "Midjourney", category: "Design", rating: 4.9, price: "Paid", desc: "High-quality AI image generation via Discord.", logo: "https://picsum.photos/seed/mid/100/100" },
    { name: "GitHub Copilot", category: "Coding", rating: 4.7, price: "Paid", desc: "AI-powered code suggestions and completions.", logo: "https://picsum.photos/seed/copilot/100/100" },
    { name: "Synthesia", category: "Video", rating: 4.6, price: "Paid", desc: "Create AI videos from text in minutes.", logo: "https://picsum.photos/seed/synth/100/100" },
  ];

  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span className="text-blue-400 font-semibold tracking-widest uppercase text-xs">Top Picks</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-white">Featured AI Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="group flex flex-col p-5 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md hover:bg-white/[0.06] transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 overflow-hidden border border-white/10 group-hover:scale-105 transition-transform">
                  <img src={tool.logo} alt={tool.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col items-end">
                  <div className="px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold uppercase mb-2">
                    {tool.price}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-yellow-500 font-bold">
                    ★ {tool.rating}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-neutral-400 mb-6 flex-grow">{tool.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs text-neutral-500 font-medium">{tool.category}</span>
                <button className="flex items-center gap-1.5 text-xs text-white hover:text-blue-400 transition-colors font-semibold group/btn">
                  Visit <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  const points = [
    { title: "Universal Directory", desc: "Access the most complete database of AI tools, from enterprise giants to niche startups.", icon: Globe },
    { title: "Fair Comparisons", desc: "Easily compare features, pricing, and capabilities to find the perfect fit for your budget.", icon: Shield },
    { title: "Daily Updates", desc: "Our platform tracks new launches every single day, so you never miss a game-changing tool.", icon: TrendingUp },
    { title: "Curated Excellence", desc: "We filter out the noise, showcasing only the most effective and reliable AI platforms.", icon: Zap },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 text-white">Why Choose<br/><span className="text-blue-500">Ai Junction?</span></h2>
            <p className="text-xl text-neutral-400 mb-12">We solve the problem of AI discovery by organizing the chaotic world of new technologies into one single, powerful platform.</p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {points.map((point, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{point.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/10 blur-[100px] rounded-full" />
            <div className="relative border border-white/10 rounded-[3rem] bg-black/40 backdrop-blur-xl p-8 h-full flex flex-col justify-center overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 blur-[60px] rounded-full" />
              <div className="space-y-8 relative z-10">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold">1500+ AI Tools</div>
                    <div className="text-xs text-neutral-500">Organized and verified daily</div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-6 transform translate-x-8">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Daily Trends</div>
                    <div className="text-xs text-neutral-500">Discover what's viral right now</div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Expert Reviews</div>
                    <div className="text-xs text-neutral-500">Real feedback from power users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-16 border-t border-white/5 bg-[#020202]">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <span className="text-white font-semibold text-xl tracking-tight">Ai Junction</span>
          </div>
          <p className="text-neutral-500 max-w-xs leading-relaxed">
            The world's premium directory for 3D animated AI platforms. Discover, compare, and explore the future of intelligence.
          </p>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li><a href="/tools" className="hover:text-white transition-colors">All AI Tools</a></li>
            <li><a href="/discover" className="hover:text-white transition-colors">Recently Added</a></li>
            <li><a href="/discover" className="hover:text-white transition-colors">Trending Tools</a></li>
            <li><a href="/tools" className="hover:text-white transition-colors">Categories</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">For Creators</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li><a href="/join" className="hover:text-white transition-colors">Submit Your AI</a></li>
            <li><a href="/join" className="hover:text-white transition-colors">Partnership</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Feedback</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Support</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">Our Mission</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">Story</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-medium mb-6">Social</h4>
          <ul className="space-y-4 text-sm text-neutral-500">
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-600">
        <div>© 2026 Ai Junction. Created by Raja Paswan.</div>
        <div className="flex gap-6 mt-4 md:mt-0 italic">
          Empowering your workflow with intelligence.
        </div>
      </div>
    </footer>
  );
}
