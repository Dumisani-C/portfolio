export default function BurnoutResearchPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-white/60 hover:text-white">
          ← Back home
        </a>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
          Predicting Burnout Risk in Work-Study College Students
        </h1>

        <p className="mt-4 text-lg text-white/70">
          Research presented at <strong>PEARC25</strong> as part of the NSF
          Leadership-Class Computing Facility (LCCF) Advanced Computing Student
          Challenge.
        </p>

        {/* Problem */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The problem</h2>
          <p className="mt-3 text-white/70">
            Work-study college students balance academic load, employment, and
            limited recovery time. Burnout is often detected too late, after
            performance and wellbeing have already declined. This research
            explores whether burnout risk can be predicted earlier using
            time-use and workload data.
          </p>
        </section>

        {/* Data */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Data & features</h2>
          <ul className="mt-3 space-y-2 text-white/70">
            <li>• Student time-use records (sleep, work, academic activity)</li>
            <li>• Weekly workload and schedule imbalance indicators</li>
            <li>• Engineered features capturing recovery vs. demand</li>
          </ul>
        </section>

        {/* Methods */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Methods</h2>
          <p className="mt-3 text-white/70">
            I cleaned and processed the dataset, engineered meaningful features,
            and trained machine learning models to predict burnout risk.
            Computation and model evaluation were accelerated using the
            <strong> TACC Stampede3 supercomputer</strong>.
          </p>
        </section>

        {/* Results */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Results</h2>
          <ul className="mt-3 space-y-2 text-white/70">
            <li>
              • Identified strong relationships between sleep deficit,
              workload imbalance, and burnout risk
            </li>
            <li>
              • Built predictive models that generalize beyond simple heuristics
            </li>
            <li>
              • Produced visualizations that clearly communicate risk patterns
            </li>
          </ul>
        </section>

        {/* Impact */}
        <section className="mt-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h2 className="text-2xl font-semibold">Impact & continuation</h2>
          <p className="mt-3 text-white/70">
            This research directly informed the design of my later systems,
            including the <strong>Class-Life Balance Optimizer</strong> and
            <strong> Study Companion</strong>. Rather than stopping at prediction,
            I used these insights to build tools that actively help students
            plan, recover, and adapt.
          </p>
        </section>
      </div>
    </main>
  );
}

