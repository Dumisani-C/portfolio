export default function TenantSystemPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-white/60 hover:text-white">
          ← Back home
        </a>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
          Tenant Payment & Support System
        </h1>

        <p className="mt-4 text-white/70">
          A full-stack system modeling landlord–tenant workflows: payments,
          roles, and support tickets — designed to for operational
          processes.
        </p>

        <div className="mt-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold">What I built</h2>
          <ul className="mt-4 space-y-2 text-white/70">
            <li>• Role-based access (tenant, landlord, admin)</li>
            <li>• Payment lifecycle and status tracking</li>
            <li>• Support ticket workflow for requests and resolution</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/Dumisani-C/advanced_payment_and_support_system"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-500"
          >
            View Code →
          </a>
          <a
            href="https://github.com/Dumisani-C/advanced_payment_and_support_system"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white/10 px-5 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15"
          >
            Repo README →
          </a>
        </div>
      </div>
    </main>
  );
}

