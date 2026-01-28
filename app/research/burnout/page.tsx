"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const visualizations = [
  { src: "/demos/burnout/model_comparison.png", alt: "Model Comparison", title: "Model Performance" },
  { src: "/demos/burnout/confusion_matrix.png", alt: "Confusion Matrix", title: "Confusion Matrix" },
  { src: "/demos/burnout/rf_feature_importance.png", alt: "Feature Importance", title: "Feature Importance" },
  { src: "/demos/burnout/correlation_heatmap.png", alt: "Correlation Heatmap", title: "Correlation Heatmap" },
  { src: "/demos/burnout/stress_distribution.png", alt: "Stress Distribution", title: "Stress Distribution" },
  { src: "/demos/burnout/cv_comparison.png", alt: "Cross-Validation", title: "Cross-Validation" },
];

const modelResults = [
  { model: "Random Forest (Tuned)", accuracy: "88.6%", f1: "88.6%", best: true },
  { model: "Logistic Regression", accuracy: "88.2%", f1: "88.2%", best: false },
  { model: "SVM (Tuned)", accuracy: "87.7%", f1: "87.7%", best: false },
  { model: "Gradient Boosting", accuracy: "87.3%", f1: "87.2%", best: false },
  { model: "K-Nearest Neighbors", accuracy: "85.0%", f1: "85.0%", best: false },
];

const topPredictors = [
  { name: "Bullying", correlation: 0.75 },
  { name: "Future Career Concerns", correlation: 0.74 },
  { name: "Anxiety Level", correlation: 0.74 },
  { name: "Depression", correlation: 0.73 },
  { name: "Headache", correlation: 0.71 },
];

const techStack = ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"];

const featureCategories = [
  { category: "Psychological", features: "anxiety_level, self_esteem, mental_health_history, depression" },
  { category: "Physical Health", features: "headache, blood_pressure, sleep_quality, breathing_problem" },
  { category: "Environmental", features: "noise_level, living_conditions, safety, basic_needs" },
  { category: "Academic", features: "academic_performance, study_load, teacher_student_relationship" },
  { category: "Social", features: "future_career_concerns, social_support, peer_pressure, bullying" },
];

export default function BurnoutResearchPage() {
  const [selectedViz, setSelectedViz] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextViz = () => setSelectedViz((prev) => (prev + 1) % visualizations.length);
  const prevViz = () => setSelectedViz((prev) => (prev - 1 + visualizations.length) % visualizations.length);

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

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-50">✕</button>
          <button onClick={(e) => { e.stopPropagation(); prevViz(); }} className="absolute left-4 md:left-8 text-white/70 hover:text-white text-5xl z-50 p-4">‹</button>
          <motion.div key={selectedViz} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-[90vw] h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={visualizations[selectedViz].src} alt={visualizations[selectedViz].alt} fill className="object-contain" priority />
          </motion.div>
          <button onClick={(e) => { e.stopPropagation(); nextViz(); }} className="absolute right-4 md:right-8 text-white/70 hover:text-white text-5xl z-50 p-4">›</button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">{selectedViz + 1} / {visualizations.length}</div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="px-6 pt-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">PEARC25 Research</span>
                <span className="px-3 py-1 text-xs bg-rose-500/20 text-rose-400 rounded-full border border-rose-500/30">Machine Learning</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Student Stress Level Prediction Using Machine Learning</h1>
              <p className="text-white/70 leading-relaxed mb-6">
                A machine learning research project that predicts student stress levels based on psychological, physical, environmental, and social factors. Achieved <span className="text-orange-400 font-semibold">88.6% accuracy</span> using a tuned Random Forest classifier.
              </p>
              <p className="text-white/50 text-sm mb-6">
                Presented at <strong className="text-white/70">PEARC25</strong> as part of the NSF Leadership-Class Computing Facility (LCCF) Advanced Computing Student Challenge. Computation accelerated using <strong className="text-white/70">TACC Stampede3 supercomputer</strong>.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs border border-white/20 rounded">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/Dumisani-C" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-black font-medium rounded-lg transition-colors text-sm">
                  <span>View on GitHub</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right - Main Visualization */}
            <div>
              <motion.div
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 cursor-pointer group"
                onClick={() => setLightboxOpen(true)}
              >
                <Image src={visualizations[selectedViz].src} alt={visualizations[selectedViz].alt} fill className="object-contain bg-white" priority />
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded text-white/70 text-sm">Click to enlarge</div>
              </motion.div>
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {visualizations.map((viz, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedViz(i)}
                    className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${selectedViz === i ? "border-orange-400" : "border-white/10 hover:border-white/30"}`}
                  >
                    <Image src={viz.src} alt={viz.alt} fill className="object-cover bg-white" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-8 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400">88.6%</div>
              <div className="text-white/50 text-sm mt-1">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">1,100</div>
              <div className="text-white/50 text-sm mt-1">Student Records</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">20</div>
              <div className="text-white/50 text-sm mt-1">Features</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">6</div>
              <div className="text-white/50 text-sm mt-1">ML Models</div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Results */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Model Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-white/50 text-sm font-medium">Model</th>
                  <th className="pb-3 text-white/50 text-sm font-medium">Test Accuracy</th>
                  <th className="pb-3 text-white/50 text-sm font-medium">F1-Score</th>
                </tr>
              </thead>
              <tbody>
                {modelResults.map((result, i) => (
                  <tr key={i} className={`border-b border-white/5 ${result.best ? "bg-orange-500/10" : ""}`}>
                    <td className="py-3 text-sm">
                      {result.model}
                      {result.best && <span className="ml-2 px-2 py-0.5 text-xs bg-orange-500 text-black rounded">Best</span>}
                    </td>
                    <td className="py-3 text-sm text-white/70">{result.accuracy}</td>
                    <td className="py-3 text-sm text-white/70">{result.f1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Predictors */}
      <section className="px-6 py-12 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Top Stress Predictors</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {topPredictors.map((predictor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-lg border border-white/10 bg-[#0a0a0a]"
              >
                <div className="text-2xl font-bold text-orange-400">{predictor.correlation}</div>
                <div className="text-sm text-white/70 mt-1">{predictor.name}</div>
                <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
                  <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: `${predictor.correlation * 100}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Dataset Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCategories.map((cat, i) => (
              <div key={i} className="p-4 rounded-lg border border-white/10">
                <h3 className="font-semibold text-orange-400 mb-2">{cat.category}</h3>
                <p className="text-white/60 text-sm font-mono">{cat.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="px-6 py-12 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Key Insights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-orange-400 text-xl">→</div>
              <p className="text-white/70"><strong className="text-white">Social factors</strong> (bullying, peer pressure) have the highest impact on stress</p>
            </div>
            <div className="flex gap-4">
              <div className="text-orange-400 text-xl">→</div>
              <p className="text-white/70"><strong className="text-white">Mental health indicators</strong> correlate strongly with stress levels</p>
            </div>
            <div className="flex gap-4">
              <div className="text-orange-400 text-xl">→</div>
              <p className="text-white/70"><strong className="text-white">Physical symptoms</strong> (headache, sleep quality) serve as early warning signs</p>
            </div>
            <div className="flex gap-4">
              <div className="text-orange-400 text-xl">→</div>
              <p className="text-white/70"><strong className="text-white">Random Forest</strong> with hyperparameter tuning achieved the best performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-900/20 to-rose-900/20 border border-orange-500/20">
            <h2 className="text-2xl font-bold mb-4">Impact & Continuation</h2>
            <p className="text-white/70 leading-relaxed">
              This research directly informed the design of my later systems, including the <strong className="text-orange-400">Class-Life Balance Optimizer</strong> and <strong className="text-orange-400">Study Companion</strong>. Rather than stopping at prediction, I used these insights to build tools that actively help students plan, recover, and adapt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

