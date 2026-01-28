"use client";

import { motion } from "framer-motion";

const projectDetails = {
  author: "Dumisani Chikomo",
  role: "Backend Engineer",
  timeline: "2025 - Present",
  categories: ["Infrastructure", "Backend", "DevOps"],
  technologies: ["Python", "FastAPI", "Redis", "Docker", "Kubernetes", "Prometheus"],
  github: "https://github.com/Dumisani-C/LoadBalancer",
};

const highlights = [
  { title: "8 Routing Algorithms", desc: "Including EWMA and adaptive routing with real-time backend scoring" },
  { title: "Circuit Breakers", desc: "Automatic failover and recovery for fault tolerance" },
  { title: "Redis Caching", desc: "80%+ hit rate with sliding-window rate limiting" },
  { title: "JWT Authentication", desc: "HS256/RS256 support with per-IP throttling" },
  { title: "50+ Prometheus Metrics", desc: "Full observability with Grafana dashboards" },
  { title: "Kubernetes Ready", desc: "HPA support with zero-downtime deploys" },
];

export default function LoadBalancerPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Back Button */}
      <div className="px-6 pt-8">
        <div className="max-w-6xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
            <span>←</span>
            <span>Back to projects</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <section className="px-6 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left - Visual */}
            <div className="lg:col-span-3">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950">
                {/* Architecture diagram */}
                <div className="absolute inset-0 p-8">
                  <div className="h-full flex flex-col justify-between">
                    {/* Top: Clients */}
                    <div className="flex justify-center gap-4">
                      {[1,2,3,4].map(i => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-xs text-white/50"
                        >
                          C{i}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Connection lines */}
                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="relative"
                      >
                        <div className="w-32 h-20 rounded-xl bg-emerald-500/20 border-2 border-emerald-400 flex flex-col items-center justify-center">
                          <div className="text-emerald-400 text-sm font-bold">Load Balancer</div>
                          <div className="text-emerald-400/60 text-xs">Layer 7</div>
                        </div>
                        {/* Pulse effect */}
                        <div className="absolute inset-0 rounded-xl border-2 border-emerald-400 animate-ping opacity-20" />
                      </motion.div>
                    </div>
                    
                    {/* Bottom: Backends */}
                    <div className="flex justify-center gap-4">
                      {['API-1', 'API-2', 'API-3'].map((name, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="w-16 h-12 rounded-lg bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-xs text-teal-400"
                        >
                          {name}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-mono">
                  <span className="text-emerald-400/70">8 algorithms</span>
                  <span className="text-teal-400/70">80%+ cache hit</span>
                  <span className="text-cyan-400/70">50+ metrics</span>
                </div>
              </div>
            </div>

            {/* Right - Info */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold mb-4">Enterprise Load Balancer</h1>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                High-performance Layer 7 load balancer built for fault tolerance and scale. Features advanced routing algorithms, circuit breakers, and full Kubernetes integration.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Author</p>
                  <p className="font-medium text-sm">{projectDetails.author}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Timeline</p>
                  <p className="font-medium text-sm">{projectDetails.timeline}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-2">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {projectDetails.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs border border-white/20 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <a href={projectDetails.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium rounded-lg transition-colors text-sm">
                <span>View on GitHub</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-xl font-bold mb-6">Key Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-lg border border-white/10 bg-white/5"
                >
                  <h3 className="font-semibold text-emerald-400 mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
