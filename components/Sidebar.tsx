"use client";

import { useEffect, useState } from "react";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  NAV,
  STATUS_AFTER_A_MINUTE,
  STATUS_LINES,
} from "../app/content";

const cx = (...parts: string[]) => parts.join(" ");

/* Icon paths, split into short pieces so they copy cleanly */
const LINKEDIN_PATH = [
  "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
  "M3 9.5h4V21H3z",
  "M9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06",
  "c4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1",
  "c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z",
].join(" ");

const GITHUB_PATH = [
  "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7",
  "c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47",
  "c-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03",
  "c.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33",
  "c-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68",
  "c-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02",
  "a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02",
  "c.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68",
  "c0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74",
  "c0 .27.18.58.69.48A10 10 0 0 0 12 2z",
].join(" ");

/* Types each status line, deletes it, moves on. After a minute: invite to chat. */
function useStatusLine() {
  const [text, setText] = useState(STATUS_LINES[0]);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stopped = false;
    let timer: ReturnType<typeof setTimeout>;
    const finale = setTimeout(() => {
      stopped = true;
      clearTimeout(timer);
      setText(STATUS_AFTER_A_MINUTE);
    }, 60_000);

    if (!reduce) {
      let line = 0;
      let i = STATUS_LINES[0].length;
      let deleting = true;
      const tick = () => {
        if (stopped) return;
        const full = STATUS_LINES[line];
        if (deleting) {
          i--;
          if (i <= 0) {
            deleting = false;
            line = (line + 1) % STATUS_LINES.length;
          }
        } else if (++i >= full.length) {
          deleting = true;
          setText(full);
          timer = setTimeout(tick, 2600);
          return;
        }
        setText(STATUS_LINES[line].slice(0, Math.max(0, i)));
        timer = setTimeout(tick, deleting ? 22 : 45);
      };
      timer = setTimeout(tick, 2600);
    }

    return () => {
      stopped = true;
      clearTimeout(timer);
      clearTimeout(finale);
    };
  }, []);

  return text;
}

/* Which section of the right side is in view */
function useActiveSection() {
  const [active, setActive] = useState<string>(NAV[0].id);

  useEffect(() => {
    const update = () => {
      let current: string = NAV[0].id;
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        const top = el?.getBoundingClientRect().top ?? Infinity;
        if (top <= innerHeight * 0.35) current = id;
      }
      const page = document.documentElement.scrollHeight;
      if (innerHeight + scrollY >= page - 4) current = NAV[NAV.length - 1].id;
      setActive(current);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, []);

  return active;
}

const linkStyle = cx(
  "inline-flex items-center gap-2 text-ink-soft",
  "transition-colors hover:text-ink",
);

export default function Sidebar() {
  const status = useStatusLine();
  const active = useActiveSection();

  const goTo = (e: React.MouseEvent, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <aside
      className={cx(
        "no-scrollbar bg-paper text-ink [color-scheme:light]",
        "selection:bg-ink selection:text-paper",
        "lg:sticky lg:top-0 lg:h-dvh lg:overflow-y-auto",
      )}
    >
      <div
        className={cx(
          "flex min-h-full flex-col gap-10 px-6 pt-16 pb-12 sm:px-14",
          "lg:justify-between lg:gap-[clamp(12px,2.2vh,32px)]",
          "lg:pr-16 lg:pl-[88px]",
          "lg:pt-[clamp(24px,7vh,96px)] lg:pb-[clamp(18px,4vh,56px)]",
        )}
      >
        <div>
          <h1
            className={cx(
              "font-display font-bold leading-none tracking-[-0.02em]",
              "text-balance lg:whitespace-nowrap",
              "text-[clamp(2.2rem,min(3.4vw,8vh),4.4rem)]",
            )}
          >
            Dumisani Amon Chikomo
          </h1>

          <ul
            className={cx(
              "mt-7 font-mono text-[1.02rem] leading-[1.75] text-ink-soft",
              "lg:mt-[clamp(8px,2.2vh,28px)] lg:leading-[1.6]",
              "lg:text-[clamp(0.82rem,1.9vh,1.02rem)]",
            )}
          >
            <li>Software Engineer</li>
            <li>Full-Stack · AI · Systems</li>
          </ul>

          <a
            href={`mailto:${EMAIL}?subject=Hey%20from%20dumisanichikomo.com`}
            className={cx(
              "group mt-5 flex min-h-[1.4em] w-fit items-center gap-2.5",
              "font-mono text-[0.84rem] text-ink-faint",
              "transition-colors hover:text-ink",
              "lg:mt-[clamp(8px,1.8vh,20px)]",
            )}
          >
            <i aria-hidden className="size-[7px] flex-none rounded-full bg-dot" />
            <span className="underline-offset-[3px] group-hover:underline">
              {status}
            </span>
            <span
              aria-hidden
              className={cx(
                "ml-0.5 inline-block w-[0.6em] border-b border-ink-faint",
                "animate-blink motion-reduce:animate-none",
              )}
            />
          </a>

          <p
            className={cx(
              "mt-10 max-w-[34ch] leading-[1.6] text-ink-soft",
              "text-[clamp(1.15rem,1.6vw,1.4rem)]",
              "lg:mt-[clamp(10px,2.8vh,40px)] lg:leading-[1.55]",
              "lg:text-[clamp(0.98rem,min(1.6vw,2.7vh),1.4rem)]",
            )}
          >
            If something keeps slowing people down, I want to know why, and
            then I want to build the thing that fixes it.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className={cx(
              "mt-10 inline-block rounded-full bg-ink px-[30px] py-[18px]",
              "font-mono text-[0.86rem] font-medium tracking-[0.12em]",
              "uppercase text-paper transition hover:-translate-y-0.5",
              "hover:bg-black motion-reduce:transition-none",
              "lg:mt-[clamp(12px,2.8vh,40px)] lg:py-[clamp(11px,2vh,18px)]",
            )}
          >
            Let&apos;s talk opportunities
          </a>
        </div>

        <nav aria-label="Sections" className="hidden lg:block">
          <ol className="grid gap-[clamp(0px,0.5vh,6px)]">
            {NAV.map(({ id, label }, n) => {
              const on = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => goTo(e, id)}
                    aria-current={on ? "true" : undefined}
                    className={cx(
                      "group inline-flex items-center gap-[18px]",
                      "py-[clamp(2px,0.7vh,8px)] font-mono uppercase",
                      "text-[clamp(0.82rem,1.9vh,1.02rem)] tracking-[0.14em]",
                      "transition-colors hover:text-ink",
                      on ? "font-medium text-ink" : "text-ink-soft",
                    )}
                  >
                    <span
                      className={cx(
                        "inline-block h-px bg-current",
                        "transition-[width] duration-300",
                        "group-hover:w-[60px]",
                        on ? "w-[60px]" : "w-9",
                      )}
                    />
                    {String(n + 1).padStart(2, "0")}
                    &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
                    {label}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <ul
          className={cx(
            "flex flex-wrap gap-x-[26px] gap-y-3",
            "font-mono text-[0.92rem] tracking-[0.04em]",
          )}
        >
          <li>
            <a href={LINKEDIN} target="_blank" rel="noopener" className={linkStyle}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
                <path d={LINKEDIN_PATH} />
              </svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={GITHUB} target="_blank" rel="noopener" className={linkStyle}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
                <path d={GITHUB_PATH} />
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`} title={EMAIL} className={linkStyle}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                className="size-4"
                aria-hidden
              >
                <rect x="3" y="5" width="18" height="14" rx="1.5" />
                <path d="m3.5 6 8.5 7 8.5-7" />
              </svg>
              Email
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}