import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
          <span className="drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
            Dumisani Amon Chikomo
          </span>
        </h1>

        <p className="mt-3 text-lg text-white/70">
          Data-driven AI systems • Full-stack engineering • Student success
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          I build systems that turn research insights into real tools — from
          predicting burnout risk to adaptive study planning and agentic AI.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            className="rounded-xl bg-white/10 px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
          <p className="text-sm text-white/60">Research → System → Agent</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Work that connects data to real tools
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            My projects follow a clear arc: I studied burnout risk with ML + HPC,
            then built Class-Life Balance Optimizer, and evolved it into Study
            Companion.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-black/40 p-5 ring-1 ring-white/10">
              <p className="text-xs text-white/60">FOUNDATION</p>
              <h3 className="mt-2 font-semibold">Burnout Research (PEARC25)</h3>
              <p className="mt-2 text-sm text-white/70">
                ML research on work-study student burnout using time-use data and
                HPC (TACC Stampede3).
              </p>
              <a
                className="mt-3 inline-block text-sm text-purple-300 hover:text-purple-200"
                href="/research/burnout"
              >
                Read case study →
              </a>
            </div>

            <div className="rounded-2xl bg-black/40 p-5 ring-1 ring-white/10">
              <p className="text-xs text-white/60">SYSTEM</p>
              <h3 className="mt-2 font-semibold">Class-Life Balance Optimizer</h3>
              <p className="mt-2 text-sm text-white/70">
                Planning tool built directly after my research to help students
                balance work, classes, and recovery time.
              </p>
              <a
                className="mt-3 inline-block text-sm text-purple-300 hover:text-purple-200"
                href="/projects/class-life-balance"
              >
                View project →
              </a>
            </div>

            <div className="rounded-2xl bg-black/40 p-5 ring-1 ring-white/10">
              <p className="text-xs text-white/60">AGENT</p>
              <h3 className="mt-2 font-semibold">Study Companion</h3>
              <p className="mt-2 text-sm text-white/70">
                Adaptive study agent that reflects, prioritizes weak areas, and
                rebalances plans when life happens.
              </p>
              <a
                className="mt-3 inline-block text-sm text-purple-300 hover:text-purple-200"
                href="/projects/study-companion"
              >
                Explore agent →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section id="systems" className="mx-auto max-w-6xl px-6 pb-24">
        <p className="text-sm text-white/60">SYSTEMS & INFRASTRUCTURE</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Engineering beyond the interface
        </h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Alongside student-facing AI tools, I build backend systems that focus
          on reliability, performance, and real-world workflows.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.07]">
            <p className="text-xs text-white/60">INFRASTRUCTURE</p>
            <h3 className="mt-2 text-xl font-semibold">Custom Load Balancer</h3>
            <p className="mt-3 text-sm text-white/70">
              A security-focused load balancer built to explore request routing,
              health checks, and fault tolerance under load.
            </p>

            <ul className="mt-4 space-y-1 text-sm text-white/65">
              <li>• Request routing & health checks</li>
              <li>• Failure handling & service resilience</li>
              <li>• Observability hooks for performance analysis</li>
            </ul>

            <div className="mt-4 flex gap-4 text-sm">
              <a className="text-purple-300 hover:text-purple-200" href="/projects/load-balancer">
                View code →
              </a>
              <a className="text-white/60 hover:text-white" href="/projects/load-balancer">
                System design →
              </a>
            </div>
          </div>

          <div className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.07]">
            <p className="text-xs text-white/60">REAL-WORLD APP</p>
            <h3 className="mt-2 text-xl font-semibold">
              Tenant Payment & Support System
            </h3>
            <p className="mt-3 text-sm text-white/70">
              A full-stack system modeling real landlord–tenant workflows
              including payments, roles, and support requests.
            </p>

            <ul className="mt-4 space-y-1 text-sm text-white/65">
              <li>• Role-based access (tenant, landlord, admin)</li>
              <li>• Payment lifecycle & status tracking</li>
              <li>• Integrated support ticket workflows</li>
            </ul>

            <div className="mt-4 flex gap-4 text-sm">
              <a className="text-purple-300 hover:text-purple-200" href="/projects/tenant-system">
                View project →
              </a>
              <a className="text-white/60 hover:text-white" href="/projects/tenant-system">
                Screenshots →
              </a>
            </div>
          </div>
        </div>
      </section>
            {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
          <p className="text-sm text-white/60">CONTACT</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Let’s build something meaningful
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            If you’re working on AI systems, Full Stack Engineering, or data-driven
            products — I’d love to connect.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:chikomodumisani@gmail.com"
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500"
            >
              Email me
            </a>

            <a
              href="https://github.com/Dumisani-C"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dumisani-chikomo-5a730718a"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              className="rounded-xl bg-white/10 px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15"
            >
              Download resume
            </a>
          </div>
        </div>
      </section>
            <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-white/50">
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Dumisani Chikomo. All rights reserved.</p>
          <p className="text-white/40">
            Built with Next.js + TypeScript + Tailwind.
          </p>
        </div>
      </footer>


    </main>
  );
}
