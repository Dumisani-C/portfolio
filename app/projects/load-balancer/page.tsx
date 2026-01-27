export default function LoadBalancerPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-white/60 hover:text-white">
          ← Back home
        </a>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
          Custom Load Balancer
        </h1>

        <p className="mt-4 text-white/70">
          A systems project exploring request routing, health checks, and
          resilience patterns under failure and load.
        </p>

        <div className="mt-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold">What I built</h2>
          <ul className="mt-4 space-y-2 text-white/70">
            <li>• Routing logic + backend selection strategy</li>
            <li>• Health checks + failover behavior</li>
            <li>• Hooks for observability + performance testing</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/Dumisani-C/LoadBalancer"
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
