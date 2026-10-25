"use client";

import { useEffect, useRef, useState } from "react";
import { TERMINAL } from "../app/content";

type Line = { cmd: string; out: string };

const HELP = "Commands: whoami, projects, experience, contact, clear";

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    outRef.current?.scrollTo({ top: outRef.current.scrollHeight });
  }, [history]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") return setHistory([]);
    const out = cmd === "help" ? HELP : TERMINAL[cmd] ?? `command not found: ${cmd}. Try help.`;
    setHistory((h) => [...h, { cmd, out }]);
  };

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close terminal" : "Open terminal"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="absolute top-6 right-6 z-20 h-[54px] w-16 cursor-pointer rounded-lg border border-rule bg-night-2 font-mono text-base text-chalk transition-colors hover:border-chalk-faint lg:fixed"
      >
        &gt;_
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Terminal"
          className="fixed top-[92px] right-6 z-30 w-[min(460px,calc(100vw-48px))] rounded-[10px] border border-rule bg-[#050505] font-mono text-[0.84rem] shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center justify-between border-b border-rule px-3.5 py-2.5 text-chalk-faint">
            <span>dumi@portfolio: ~</span>
            <button type="button" onClick={() => setOpen(false)} className="cursor-pointer text-chalk-soft hover:text-chalk">
              close
            </button>
          </div>
          <div ref={outRef} className="max-h-[300px] overflow-y-auto p-3.5 leading-[1.6] whitespace-pre-wrap text-chalk-soft">
            {history.length === 0 && (
              <p className="mb-4">
                Type <span className="text-accent">help</span> to see what I can tell you.
              </p>
            )}
            {history.map((l, i) => (
              <div key={i} className="mb-4">
                <div className="text-chalk">&gt; {l.cmd}</div>
                <div>{l.out}</div>
              </div>
            ))}
          </div>
          <form
            className="flex gap-2 px-3.5 pb-3.5 text-accent"
            onSubmit={(e) => {
              e.preventDefault();
              run(value);
              setValue("");
            }}
          >
            <span>&gt;</span>
            <input
              ref={inputRef}
              id="terminal-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
              autoComplete="off"
              spellCheck={false}
              aria-label="Command"
              className="min-w-0 flex-1 bg-transparent text-chalk outline-none"
            />
          </form>
        </div>
      )}
    </>
  );
}
