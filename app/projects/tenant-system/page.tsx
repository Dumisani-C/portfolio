"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const screenshots = [
  { src: "/demos/tenant-system/Screenshot 2026-01-27 134641.png", alt: "Dashboard Overview" },
  { src: "/demos/tenant-system/Screenshot 2026-01-27 135551.png", alt: "Payment Tracking" },
  { src: "/demos/tenant-system/Screenshot 2026-01-27 135719.png", alt: "Support Tickets" },
  { src: "/demos/tenant-system/Screenshot 2026-01-27 135740.png", alt: "Role Management" },
  { src: "/demos/tenant-system/Screenshot 2026-01-27 135839.png", alt: "System Features" },
];

const projectDetails = {
  author: "Dumisani Chikomo",
  role: "Full-Stack Developer",
  published: "2025",
  timeline: "2025 - Present",
  categories: ["Full-Stack", "Payments", "Management"],
  technologies: ["Next.js", "PostgreSQL", "TypeScript", "Auth"],
  github: "https://github.com/Dumisani-C/advanced_payment_and_support_system",
};

const keyFeatures = [
  "Role-based access control for tenants, landlords, and admins",
  "Complete payment lifecycle tracking with status updates",
  "Support ticket workflow for tenant requests",
  "Real-time notifications and updates",
  "Secure authentication system",
];

export default function TenantSystemPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % screenshots.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Back Button */}
      <div className="px-6 pt-8">
        <div className="max-w-6xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
          >
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
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-50"
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white text-5xl z-50 p-4"
          >
            ‹
          </button>

          {/* Main Lightbox Image */}
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-[90vw] h-[80vh] max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[selectedImage].src}
              alt={screenshots[selectedImage].alt}
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white text-5xl z-50 p-4"
          >
            ›
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {selectedImage + 1} / {screenshots.length}
          </div>
        </motion.div>
      )}

      {/* Main Content - Side by Side Layout */}
      <section className="px-6 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Gallery */}
            <div className="lg:col-span-3">
              {/* Main Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-video rounded-xl overflow-hidden border border-white/10 cursor-pointer group mb-4"
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  src={screenshots[selectedImage].src}
                  alt={screenshots[selectedImage].alt}
                  fill
                  className="object-contain bg-black"
                  priority
                />
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded text-white/70 text-sm">
                  Click to enlarge
                </div>
              </motion.div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {screenshots.map((screenshot, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === i
                        ? "border-amber-400"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Project Info */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold mb-4">Tenant Payment System</h1>
              
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                A full-stack system modeling landlord–tenant workflows: payments,
                roles, and support tickets — designed for operational processes.
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
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs border border-white/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-2">Categories</p>
                  <div className="flex flex-wrap gap-2">
                    {projectDetails.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-1 text-xs border border-white/20 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={projectDetails.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-medium rounded-lg transition-colors text-sm"
              >
                <span>View on GitHub</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Key Features - Below */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="text-amber-400 mt-0.5">•</span>
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

