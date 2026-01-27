export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
          <a href="#" className="font-semibold tracking-tight">
            Dumisani<span className="text-white/60">.dev</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#work" className="hover:text-white">
              Work
            </a>
            <a href="#systems" className="hover:text-white">
              Systems
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="/resume.pdf"
            className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500"
          >
            Resume →
          </a>
        </nav>
      </div>
    </header>
  );
}
