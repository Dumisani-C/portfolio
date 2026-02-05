"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ left: cursorXSpring, top: cursorYSpring }}
      />
      <motion.div
        className="cursor-ring"
        style={{ left: cursorXSpring, top: cursorYSpring, x: -16, y: -16 }}
      />
    </>
  );
}

function TerminalWindow() {
  const [text, setText] = useState("");
  const fullText = `> const dumisani = {
    role: "AI Engineer & Full-Stack Dev",
    focus: ["ML Systems", "Agentic AI", "HPC"],
    status: "Building the future..."
  };`;

  useEffect(() => {
    let i = 0;
    setText("");
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="rounded-2xl bg-[#0d0d0d] border border-[#222] overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161616] border-b border-[#222]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-white/40 text-xs">terminal</span>
      </div>
      <div className="p-4 min-h-[160px]">
        <pre className="text-white/90 whitespace-pre-wrap">{text}<span className="animate-blink">▋</span></pre>
      </div>
    </div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 8,
    direction: Math.random() > 0.5 ? 1 : -1,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -60 * p.direction, -30, -80 * p.direction, 0],
            x: [0, 30 * p.direction, -20 * p.direction, 40 * p.direction, 0],
            opacity: [0.1, 0.5, 0.3, 0.6, 0.1],
            scale: [1, 1.2, 0.8, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Larger floating orbs - white with glow */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-white"
        style={{ left: "15%", top: "25%", boxShadow: "0 0 15px rgba(255,255,255,0.8)" }}
        animate={{ 
          y: [0, -50, 20, -30, 0], 
          x: [0, 30, -20, 40, 0],
          opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
          scale: [1, 1.3, 0.9, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-white"
        style={{ left: "75%", top: "15%", boxShadow: "0 0 12px rgba(255,255,255,0.6)" }}
        animate={{ 
          y: [0, 40, -60, 20, 0], 
          x: [0, -40, 20, -30, 0],
          opacity: [0.2, 0.6, 0.3, 0.7, 0.2] 
        }}
        transition={{ duration: 22, repeat: Infinity, delay: 3, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-white/20"
        style={{ left: "85%", top: "55%", boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
        animate={{ 
          y: [0, -70, 30, -40, 0], 
          x: [0, -50, 30, -20, 0],
          opacity: [0.1, 0.4, 0.2, 0.5, 0.1],
          scale: [1, 1.5, 0.8, 1.4, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-2.5 h-2.5 rounded-full bg-white"
        style={{ left: "8%", top: "65%", boxShadow: "0 0 14px rgba(255,255,255,0.7)" }}
        animate={{ 
          y: [0, 50, -40, 60, 0], 
          x: [0, 40, -30, 50, 0],
          opacity: [0.25, 0.6, 0.35, 0.7, 0.25] 
        }}
        transition={{ duration: 20, repeat: Infinity, delay: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-white/30"
        style={{ left: "50%", top: "75%", boxShadow: "0 0 18px rgba(255,255,255,0.5)" }}
        animate={{ 
          y: [0, -80, 40, -50, 0], 
          x: [0, 60, -40, 30, 0],
          opacity: [0.15, 0.5, 0.25, 0.6, 0.15],
          scale: [1, 1.4, 0.7, 1.3, 1]
        }}
        transition={{ duration: 28, repeat: Infinity, delay: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-white"
        style={{ left: "35%", top: "40%", boxShadow: "0 0 10px rgba(255,255,255,0.9)" }}
        animate={{ 
          y: [0, 30, -50, 40, 0], 
          x: [0, -30, 50, -40, 0],
          opacity: [0.3, 0.8, 0.4, 0.9, 0.3] 
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 1, ease: "easeInOut" }}
      />
    </div>
  );
}

function TimeDisplay() {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: false 
      }));
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="font-mono">{time}</span>;
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white noise">
      <FloatingParticles />
      
      {/* Gradient Mesh Background */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />

      {/* Minimal Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter glitch">
            D<span className="text-white/50">_</span>C
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
            <a href="#work" className="hover-line hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover-line hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover-line hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-sm hidden sm:block"><TimeDisplay /></span>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Asymmetric Editorial Layout */}
      <section className="min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left - Typography */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-white status-dot" />
                <span className="text-sm text-white/50 uppercase tracking-widest">Available for work</span>
              </div>
              
              <h1 className="display-text">
                <span className="block text-white">DUMISANI</span>
                <span className="block outline-text">CHIKOMO</span>
              </h1>
              
              <p className="mt-8 text-xl text-white/40 max-w-md leading-relaxed">
                AI Engineer crafting intelligent systems. 
                <span className="text-white"> Research</span> to 
                <span className="text-white/70"> production</span>.
              </p>
              
              <div className="mt-10 flex items-center gap-6">
                <a
                  href="#work"
                  className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/80 transition-colors duration-300"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="hover-line text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </motion.div>
            
            {/* Right - Terminal + Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              <TerminalWindow />
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bento-item p-4 text-center">
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-xs text-white/40 mt-1">Projects</div>
                </div>
                <div className="bento-item p-4 text-center">
                  <div className="text-3xl font-bold text-white">ML</div>
                  <div className="text-xs text-white/40 mt-1">Focus</div>
                </div>
                <div className="bento-item p-4 text-center">
                  <div className="text-3xl font-bold text-white">HPC</div>
                  <div className="text-xs text-white/40 mt-1">Research</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 border-y border-white/10 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              {["PYTHON", "TYPESCRIPT", "NEXT.JS", "PYTORCH", "LANGCHAIN", "FASTAPI", "POSTGRESQL", "DOCKER", "HPC", "ML/AI"].map((tech, j) => (
                <span key={j} className="text-4xl font-bold text-white/10 hover:text-cyan-400/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <p className="text-white/50">Recent engineering projects</p>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">View All</a>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tenant Payment System */}
            <motion.a
              href="/projects/tenant-system"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4">
                <Image
                  src="/demos/tenant-system.png"
                  alt="Tenant Payment System"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Full-Stack", "Payments", "Auth"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs border border-white/20 rounded-md text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">Tenant Payment System</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Full-stack system for landlord-tenant workflows with payments, roles, and support tickets.
              </p>
            </motion.a>

            {/* Study Companion */}
            <motion.a
              href="/projects/study-companion"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4">
                <Image
                  src="/demos/study-companion/image.png"
                  alt="Study Companion"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["AI", "Agent", "LangChain"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs border border-white/20 rounded-md text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">Study Companion</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Adaptive study agent that reflects, prioritizes weak areas, and rebalances plans dynamically.
              </p>
            </motion.a>

            {/* Load Balancer */}
            <motion.a
              href="/projects/load-balancer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4 bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950">
                {/* Network visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central node */}
                    <div className="w-16 h-16 rounded-full bg-emerald-500/30 border-2 border-emerald-400 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    {/* Connection lines */}
                    <div className="absolute -left-16 top-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-400/50" />
                    <div className="absolute -right-16 top-1/2 w-12 h-0.5 bg-gradient-to-l from-transparent to-emerald-400/50" />
                    <div className="absolute left-1/2 -top-12 w-0.5 h-8 bg-gradient-to-b from-transparent to-emerald-400/50" />
                    <div className="absolute left-1/2 -bottom-12 w-0.5 h-8 bg-gradient-to-t from-transparent to-emerald-400/50" />
                    {/* Outer nodes */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-teal-500/50 border border-teal-400/50" />
                    <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-teal-500/50 border border-teal-400/50" />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-6 h-6 rounded-full bg-teal-500/50 border border-teal-400/50" />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-6 h-6 rounded-full bg-teal-500/50 border border-teal-400/50" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-emerald-400/70 font-mono">Layer 7 · 8 Algorithms</div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Python", "FastAPI", "Redis", "K8s"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs border border-white/20 rounded-md text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise Load Balancer</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                High-performance Layer 7 load balancer with circuit breakers, Redis caching, and Kubernetes deployment.
              </p>
            </motion.a>

            {/* Class-Life Balance */}
            <motion.a
              href="/projects/class-life-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4">
                <Image
                  src="/demos/class-life-balance/image.png"
                  alt="Class-Life Balance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Productivity", "Planning", "Students"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs border border-white/20 rounded-md text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">Class-Life Optimizer</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Planning tool to help students balance work, classes, and recovery time effectively.
              </p>
            </motion.a>

            {/* Burnout Research */}
            <motion.a
              href="/research/burnout"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4">
                <Image
                  src="/images/image.png"
                  alt="PEARC25 Research Presentation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {["ML", "Research", "HPC"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs border border-white/20 rounded-md text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">Burnout Prediction</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                ML research analyzing work-study student burnout patterns using TACC Stampede3 HPC.
              </p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Introduction with Photo */}
          <div className="grid lg:grid-cols-5 gap-12 mb-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <span className="text-white/50 text-sm font-mono">// about me</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Hello, I&apos;m <span className="text-white">Dumisani</span>
              </h2>
              <div>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  I&apos;m a full-stack developer and ML researcher. My journey started with solving real problems — managing 50+ IT tickets weekly for 1,600+ users, optimizing MySQL queries to cut backend latency by 40%, and building <span className="text-white">AI agents</span> that help people balance their work and personal lives.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  What drives me is the intersection of <span className="text-white">intelligent systems</span> and <span className="text-white/80">human-centered design</span>. I don&apos;t just build software — I build agents that adapt, learn, and genuinely help people accomplish their goals. From ML models on TACC supercomputers achieving 88.6% accuracy to enterprise load balancers with 8 routing algorithms, I focus on turning insights into production-ready tools.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/images/image.png"
                  alt="Dumisani presenting at PEARC25"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs bg-white/10 text-white rounded border border-white/20">PEARC25</span>
                    <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded border border-white/20">TACC</span>
                  </div>
                  <p className="text-white/70 text-sm mt-2">Presenting research at Greater Columbus Convention Center in Columbus, Ohio</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">My Philosophy</h3>
              <div className="space-y-4">
                {[
                  { title: "Agent-First Thinking", desc: "I design systems as autonomous agents that can reason, adapt, and take action — not just respond to inputs.", color: "white" },
                  { title: "Research-Driven Development", desc: "My projects stem from real research. The Class-Life Balance Optimizer was born from my PEARC25 burnout prediction study.", color: "white" },
                  { title: "Human-Centered AI", desc: "AI should amplify human capability, not replace it. I build tools that empower users to make better decisions.", color: "white" },
                  { title: "End-to-End Ownership", desc: "From ML model training on HPC clusters to deploying production APIs — I own the full stack.", color: "white" },
                ].map((item) => (
                  <div key={item.title} className="bento-item p-5">
                    <div className="text-white font-semibold mb-2">{item.title}</div>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">The Stack</h3>
              <div className="space-y-4">
                {[
                  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C/C++"], color: "white" },
                  { label: "AI / ML", items: ["Scikit-learn", "LangChain", "Gemini API", "Pandas", "NumPy"], color: "white" },
                  { label: "Full-Stack", items: ["Next.js", "React", "Django REST", "FastAPI", "PostgreSQL"], color: "white" },
                  { label: "Infrastructure", items: ["Docker", "Kubernetes", "AWS", "TACC HPC", "Git/GitHub Actions"], color: "white" },
                ].map((group) => (
                  <div key={group.label} className="bento-item p-5">
                    <div className="text-xs font-mono text-white/70 mb-3">{group.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full hover:border-white/50 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-white/50 text-sm font-mono">// let&apos;s connect</span>
            <h2 className="text-6xl md:text-8xl font-bold mt-4 mb-8">
              Say<br />
              <span className="outline-text">Hello</span>
            </h2>
            
            <p className="text-white/50 text-xl mb-12 max-w-xl mx-auto">
              Working on AI systems, research projects, or need a full-stack engineer? 
              Let&apos;s talk.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:chikomodumisani@gmail.com"
                className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/80 transition-colors duration-300 flex items-center gap-2"
              >
                <span>Email Me</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://github.com/Dumisani-C"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dumisani-chikomo-5a730718a"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold">D<span className="text-white/50">_</span>C</span>
            <span className="text-white/30 text-sm">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
