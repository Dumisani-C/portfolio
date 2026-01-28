"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const screenshots = [
  { src: "/demos/study-companion/image.png", alt: "Main Interface" },
  { src: "/demos/study-companion/Screenshot 2026-01-27 203305.png", alt: "Study Planning" },
  { src: "/demos/study-companion/Screenshot 2026-01-27 203312.png", alt: "Progress Tracking" },
  { src: "/demos/study-companion/Screenshot 2026-01-27 203349.png", alt: "Schedule View" },
];

const projectDetails = {
  author: "Dumisani Chikomo",
  role: "Full-Stack Developer",
  timeline: "2025 - Present",
  categories: ["AI", "Education", "Productivity"],
  technologies: ["Python", "LangChain", "OpenAI", "React"],
  github: "https://github.com/Dumisani-C/Study-Companion",
};

const keyFeatures = [
  "Plans your week from deadlines + difficulty",
  "Auto-adjusts when life happens (no guilt, just rebalance)",
  "Spaced repetition + targeted practice generation",
  "AI-powered study recommendations",
];

export default function StudyCompanionPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % screenshots.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);

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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl">✕</button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-8 text-white/70 hover:text-white text-5xl p-4">‹</button>
          <motion.div key={selectedImage} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-[90vw] h-[80vh] max-w-7xl" onClick={(e) => e.stopPropagation()}>
            <Image src={screenshots[selectedImage].src} alt={screenshots[selectedImage].alt} fill className="object-contain" priority />
          </motion.div>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-8 text-white/70 hover:text-white text-5xl p-4">›</button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">{selectedImage + 1} / {screenshots.length}</div>
        </motion.div>
      )}

      {/* Main Content */}
      <section className="px-6 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left - Gallery */}
            <div className="lg:col-span-3">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-video rounded-xl overflow-hidden border border-white/10 cursor-pointer mb-4"
                onClick={() => setLightboxOpen(true)}
              >
                <Image src={screenshots[selectedImage].src} alt={screenshots[selectedImage].alt} fill className="object-contain bg-black" priority />
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded text-white/70 text-sm">Click to enlarge</div>
              </motion.div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {screenshots.map((screenshot, i) => (
                  <button key={i} onClick={() => setSelectedImage(i)} className={`relative flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${selectedImage === i ? "border-cyan-400" : "border-white/10 hover:border-white/30"}`}>
                    <Image src={screenshot.src} alt={screenshot.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Info */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold mb-4">Study Companion</h1>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                An adaptive study agent that builds daily plans from deadlines and performance, rebalances when you miss a day, and schedules spaced repetition automatically.
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
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {projectDetails.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs border border-white/20 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <a href={projectDetails.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg transition-colors text-sm">
                <span>View on GitHub</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
