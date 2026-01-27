export default function ClassLifeBalancePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-white/60 hover:text-white">
          ← Back home
        </a>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
          Class-Life Balance Optimizer
        </h1>

        <p className="mt-4 text-white/70">
          A data-driven planning system built after my burnout research to help
          students balance academics, work, and recovery time.
        </p>

        <div className="mt-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold">What I built</h2>
          <ul className="mt-4 space-y-2 text-white/70">
            <li>• Adaptive schedule planning based on workload and deadlines</li>
            <li>• Rule-based logic informed by student burnout research</li>
            <li>• Clean full-stack architecture designed for iteration</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/Dumisani-C/class-life-balance-optimizer"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-500"
          >
            View Code →
          </a>
        </div>
      </div>
    </main>
  );
}
