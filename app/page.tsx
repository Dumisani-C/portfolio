import Link from "next/link";
import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Terminal from "../components/Terminal";
import {
  ABOUT,
  ABOUT_QUIET,
  EDUCATION,
  EXPERIENCE,
  OPEN_SOURCE,
  PROJECT_GROUPS,
  SKILLS,
  type Project,
} from "./content";

const cx = (...parts: string[]) => parts.join(" ");

const bodyText = "text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.7] max-w-[62ch]";
const bullets = cx(
  "grid list-disc gap-2.5 pl-[18px] leading-[1.65] text-chalk-soft",
  "marker:text-chalk-faint [&_b]:font-medium [&_b]:text-chalk",
);
const card = "group block rounded-xl border border-rule bg-night-2 p-7";
const cardHover = cx(
  "transition hover:-translate-y-0.5 hover:border-chalk-faint",
  "motion-reduce:transition-none",
);

function Heading({ children }: { children: string }) {
  return (
    <h2
      className={cx(
        "mb-12 font-mono text-[1.05rem] font-normal uppercase",
        "tracking-[0.28em] text-chalk-soft",
      )}
    >
      <span className="tracking-normal text-chalk-faint">&lt;</span>
      {children}
      <span className="tracking-normal text-chalk-faint">&gt;</span>
    </h2>
  );
}

function Label({ children }: { children: string }) {
  return (
    <p
      className={cx(
        "mb-[22px] font-mono text-[0.85rem] uppercase",
        "tracking-[0.28em] text-chalk-faint",
      )}
    >
      {children}
    </p>
  );
}

function Tags({ items }: { items?: string[] }) {
  if (!items) return null;
  return (
    <ul className="mt-[18px] flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className={cx(
            "rounded-full border border-rule px-3 py-[5px]",
            "font-mono text-[0.74rem] tracking-[0.04em] text-chalk-soft",
          )}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

type SectionProps = { id: string; title: string; children: ReactNode };

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-12 pb-[110px]">
      <Heading>{title}</Heading>
      {children}
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const external = p.href && !p.href.startsWith("/");
  const body = (
    <>
      <div className="mb-2.5 font-mono text-[0.76rem] tracking-[0.04em] text-chalk-faint">
        {p.stack}
      </div>
      <h3
        className={cx(
          "mb-2.5 flex items-baseline gap-2.5 font-display",
          "text-[1.4rem] font-bold tracking-[-0.015em] text-white",
        )}
      >
        {p.title}
        {p.href && (
          <span
            aria-hidden
            className={cx(
              "font-mono text-[0.95rem] text-chalk-faint transition",
              "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
              "group-hover:text-chalk",
            )}
          >
            {external ? "↗" : "→"}
          </span>
        )}
      </h3>
      <p className="max-w-[62ch] leading-[1.65] text-chalk-soft">{p.blurb}</p>
      {p.stats && (
        <div
          className={cx(
            "mt-[18px] flex flex-wrap gap-x-7 gap-y-2.5 border-t border-rule pt-4",
            "font-mono text-[0.8rem] text-chalk-faint",
          )}
        >
          {p.stats.map((s) => (
            <span key={s.label}>
              <b className="block font-display text-2xl font-bold text-white tabular-nums">
                {s.value}
              </b>
              {s.label}
            </span>
          ))}
        </div>
      )}
    </>
  );

  if (!p.href) return <div className={card}>{body}</div>;
  if (external) {
    return (
      <a href={p.href} target="_blank" rel="noopener" className={cx(card, cardHover)}>
        {body}
      </a>
    );
  }
  return (
    <Link href={p.href} className={cx(card, cardHover)}>
      {body}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:items-start">
      <Sidebar />

      <main className="relative min-w-0">
        <Terminal />

        <div
          className={cx(
            "max-w-[780px] px-6 pt-[72px] pb-14 sm:px-14",
            "lg:pt-[150px] lg:pr-[72px] lg:pb-16 lg:pl-24",
          )}
        >
          {/* About */}
          <Section id="about" title="About">
            {ABOUT.map((p) => (
              <p key={p.slice(0, 24)} className={cx(bodyText, "mb-[1.5em] text-chalk")}>
                {p}
              </p>
            ))}
            <p className={cx(bodyText, "text-chalk-soft")}>{ABOUT_QUIET}</p>
          </Section>

          {/* Experience */}
          <Section id="experience" title="Experience">
            {EXPERIENCE.map((job) => (
              <div key={job.company} className="mb-16">
                <h3
                  className={cx(
                    "mb-[26px] flex flex-wrap items-baseline gap-x-4 gap-y-1.5",
                    "font-display text-[clamp(1.7rem,2.6vw,2.3rem)] font-bold",
                    "tracking-[-0.02em] text-white",
                  )}
                >
                  {job.company}
                  {job.where && (
                    <small
                      className={cx(
                        "font-mono text-[0.8rem] font-normal",
                        "tracking-[0.06em] text-chalk-faint",
                      )}
                    >
                      {job.where}
                    </small>
                  )}
                </h3>
                <div
                  className={cx(
                    "mb-1.5 font-mono text-[0.82rem] tracking-[0.06em]",
                    "text-chalk-soft tabular-nums",
                  )}
                >
                  {job.dates}
                </div>
                <p
                  className={cx(
                    "mb-3.5 font-display text-[1.3rem] font-semibold",
                    "tracking-[-0.01em] text-white",
                  )}
                >
                  {job.role}
                </p>
                <ul className={cx(bullets, "text-[1.02rem]")}>
                  {job.points.map((pt, i) => (
                    <li key={i} className="max-w-[64ch]">
                      {pt}
                    </li>
                  ))}
                </ul>
                <Tags items={job.tags} />
                {job.link && (
                  <Link
                    href={job.link.href}
                    className={cx(
                      "group mt-5 inline-flex items-center gap-2 font-mono",
                      "text-[0.82rem] tracking-[0.06em] text-chalk",
                      "hover:underline underline-offset-4",
                    )}
                  >
                    {job.link.label}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                )}
              </div>
            ))}

            <Label>Education</Label>
            <h3 className="mb-1 font-display text-[1.35rem] font-bold text-white">
              {EDUCATION.school}
            </h3>
            <p className="font-display text-[1.05rem] font-semibold text-chalk">
              {EDUCATION.detail}
            </p>
          </Section>

          {/* Open Source */}
          <Section id="open-source" title="Open Source">
            <ul className="grid gap-3.5">
              {OPEN_SOURCE.map((o) => (
                <li key={o.project} className={card}>
                  <div
                    className={cx(
                      "mb-2.5 font-mono text-[0.76rem]",
                      "tracking-[0.04em] text-chalk-faint",
                    )}
                  >
                    {o.org} · {o.dates}
                  </div>
                  <h3
                    className={cx(
                      "mb-3 font-display text-[1.4rem] font-bold",
                      "tracking-[-0.015em] text-white",
                    )}
                  >
                    {o.href ? (
                      <a
                        href={o.href}
                        target="_blank"
                        rel="noopener"
                        className="hover:underline"
                      >
                        {o.project} ↗
                      </a>
                    ) : (
                      o.project
                    )}
                  </h3>
                  <ul className={bullets}>
                    {o.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <Tags items={o.tags} />
                </li>
              ))}
            </ul>
          </Section>

          {/* Projects */}
          <Section id="projects" title="Projects">
            {PROJECT_GROUPS.map((g) => (
              <div key={g.label}>
                <Label>{g.label}</Label>
                <ul className="mb-16 grid gap-3.5">
                  {g.items.map((p) => (
                    <li key={p.title}>
                      <ProjectCard p={p} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          {/* Skills */}
          <Section id="skills" title="Skills">
            <div className="grid gap-9">
              {SKILLS.map((g) => (
                <div key={g.label}>
                  <Label>{g.label}</Label>
                  <ul className="flex flex-wrap gap-2.5">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className={cx(
                          "rounded-full border border-rule px-4 py-[9px]",
                          "font-mono text-[0.88rem] text-chalk",
                        )}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <footer
            className={cx(
              "flex flex-wrap justify-between gap-2",
              "font-mono text-[0.8rem] text-chalk-faint",
            )}
          >
            <span>Dumisani Chikomo · Charlotte, NC</span>
            <span>Built with Next.js + Tailwind. &gt;_</span>
          </footer>
        </div>
      </main>
    </div>
  );
}