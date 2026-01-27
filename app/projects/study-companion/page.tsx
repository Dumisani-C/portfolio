export default function StudyCompanionPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-white/60 hover:text-white">
          ← Back home
        </a>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
          Study Companion
        </h1>

        <p className="mt-4 text-white/70">
          An adaptive study agent that builds daily plans from deadlines and
          performance, rebalances when you miss a day, and schedules spaced
          repetition automatically.
        </p>

        <div className="mt-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold">What it does</h2>
          <ul className="mt-4 space-y-2 text-white/70">
            <li>• Plans your week from deadlines + difficulty</li>
            <li>• Auto-adjusts when life happens (no guilt, just rebalance)</li>
            <li>• Spaced repetition + targeted practice generation</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/Dumisani-C/Study-Companion"
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
