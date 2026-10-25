import type { ReactNode } from "react";

/* Everything you'll want to edit lives in this file. */

export const EMAIL = "chikomodumisan@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/dumisani-chikomo-5a730718a";
export const GITHUB = "https://github.com/Dumisani-C";

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "open-source", label: "Open Source" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
] as const;

export const STATUS_LINES = [
  "Watching Man United, shipping code, anything but a merge conflict",
  "Teaching CI to leave the review comments for me",
  "Turning messy problems into small, useful tools",
  "Currently building in Berea, KY",
];
export const STATUS_AFTER_A_MINUTE = "You've been reading a while. Want to chat?";

export const ABOUT: string[] = [
  "I study computer science and economics, and the two keep meeting. " +
    "Economics trains me to ask who's losing time, where the real cost sits, " +
    "and what changes if it goes away. Computer science lets me build the " +
    "answer. The best problems are usually the ones people have stopped " +
    "complaining about.",
  "I like work that sits between people and systems. I start by listening to " +
    "whoever has the problem, then go deep enough into the stack to fix it " +
    "properly, whether that's a slow query, a CI pipeline or a model that " +
    "won't generalize.",
  "When something breaks, I want to understand why, not just make the error " +
    "go away. That curiosity is most of how I learn.",
  "Open source taught me to write code other people have to read, review and " +
    "maintain, and to take feedback line by line without taking it personally.",
];
export const ABOUT_QUIET =
  "Off the clock: football, video games, and whatever I'm building next.";

type Job = {
  company: string;
  where?: string;
  dates: string;
  role: string;
  points: ReactNode[];
  tags?: string[];
  link?: { href: string; label: string };
};

export const EXPERIENCE: Job[] = [
  {
    company: "Credit Karma",
    where: "Intuit · Charlotte, NC",
    dates: "May 2026 — Jul 2026",
    role: "Software Engineering Intern · CK Intelligence",
    points: [
      "Designed and built a two-part AI-augmented PR review system: a weekly " +
        "miner that extracts recurring feedback patterns from historical PRs " +
        "into reusable team memory, and a CI-triggered reviewer that checks " +
        "every new PR before human reviewers look at it.",
      <>
        Validated the problem through <b>12 engineer interviews</b> before writing
        code, then seeded the miner on <b>400+ historical PRs</b> to bootstrap the
        first pattern set.
      </>,
      <>
        Reached <b>80% accuracy</b> on held-out validation. Deployed to production
        and used by the Credit Karma Intelligence team across core repos to
        support, not replace, human review.
      </>,
    ],
    tags: ["Claude Code", "GitHub MCP", "CircleCI", "Internal AI Gateway"],
  },
  {
    company: "Berea College",
    where: "Berea, KY",
    dates: "Aug 2025 — Present",
    role: "Information Technology Support Specialist",
    points: [
      <>
        Work with a 20+ person IT team to resolve <b>50+ tickets a week</b> for
        1,600+ students and staff.
      </>,
      <>
        Perform 30+ virus removals and security patches a month, cutting repeat
        infections by <b>25%</b>.
      </>,
      "Wrote troubleshooting documentation and structured workflows that speed " +
        "up onboarding for new IT staff.",
    ],
  },
  {
    company: "NSF / TACC",
    where: "Advanced Computing Student Challenge",
    dates: "May 2025 — Jul 2025",
    role: "Machine Learning & HPC Researcher",
    points: [
      <>
        Selected as <b>1 of 25 students</b> nationwide to run data-intensive
        student wellness research on the Stampede3 supercomputer.
      </>,
      "Analyzed 1,100+ student records across 20+ variables and compared 6 " +
        "models with 5-fold cross-validation to find the strongest predictors " +
        "of student stress.",
      <>
        Built a 3-class stress classifier reaching <b>88.2% accuracy and F1</b>;
        presented the findings at PEARC25.
      </>,
    ],
    tags: ["Python", "scikit-learn", "pandas", "NumPy", "Stampede3"],
    link: { href: "/research/burnout", label: "Read the research" },
  },
  {
    company: "The Difference",
    dates: "Jul 2025 — Aug 2025",
    role: "Software Engineering Intern",
    points: [
      <>
        Optimized 15+ MySQL queries and indexing strategies, cutting backend
        latency by <b>40%</b>.
      </>,
      "Migrated and refactored 10+ database tables with the backend team for " +
        "better schema consistency.",
      "Built relational data models and backend APIs for a weight-management " +
        "platform serving 1,000+ users.",
    ],
    tags: ["Python", "Flask", "MySQL"],
  },
];

export const EDUCATION = {
  school: "Berea College",
  detail: "B.S. Computer Science",
};

export const OPEN_SOURCE: {
  project: string;
  org: string;
  dates: string;
  href?: string;
  points: ReactNode[];
  tags?: string[];
}[] = [
  {
    project: "BCSR",
    org: "Berea College Student Software Development Team",
    dates: "Fall 2026 — Present",
    href: "https://github.com/BCStudentSoftwareDevTeam/bcsr",
    points: [
      <>
        Contribute to BCSR, a full-stack course and term management app, using
        <b> Python, Flask, Jinja2 and SQLite</b>.
      </>,
      <>
        Implement fixes and features from GitHub issues, submit PRs and address
        reviewer feedback; merged the project&apos;s <b>Code of Conduct (#110)</b>.
      </>,
    ],
    tags: ["Python", "Flask", "Jinja2", "Peewee", "SQLite"],
  },
  {
    project: "Runestone Interactive Textbooks",
    org: "Runestone Academy",
    dates: "2026 — Present",
    href: "https://github.com/pearcej",
    points: [
      <>
        Contribute to open-source interactive textbooks on Runestone, including
        <b> Problem Solving with Algorithms and Data Structures using C++</b> and
        <b> AI4ALL</b>, an introduction to AI and ML concepts.
      </>,
      <>
        Improve chapters, code examples and interactive exercises that students
        run directly in the browser, in books used in computer science courses.
      </>,
    ],
    tags: ["C++", "Python", "Runestone", "Open Source"],
  },
];

export type Project = {
  title: string;
  stack: string;
  blurb: string;
  href?: string; // internal page ("/projects/...") or external URL
  stats?: { value: string; label: string }[];
};

export const PROJECT_GROUPS: { label: string; items: Project[] }[] = [
  {
    label: "Built Independently",
    items: [
      {
        title: "Class-Life Balance Optimizer",
        stack: "Gemini · Django · React",
        blurb:
          "An AI weekly planner for students, built after the burnout research. " +
          "It schedules study time around classes, work and recovery, and adapts " +
          "as deadlines move.",
        href: "/projects/class-life-balance",
      },
      {
        title: "Advanced Payment & Support System",
        stack: "Full-stack · Payments · Auth",
        blurb:
          "Tenant and landlord workflows in one place: online rent payments with " +
          "full status tracking, role-based access for tenants, landlords and " +
          "admins, and support tickets.",
        href: "/projects/tenant-system",
      },
      {
        title: "Study Companion",
        stack: "Local LLM · Agents",
        blurb:
          "A study agent that plans your week from deadlines and difficulty, " +
          "rebalances when you miss a day, and schedules spaced repetition " +
          "automatically.",
        href: "/projects/study-companion",
      },
      {
        title: "Layer 7 Load Balancer",
        stack: "Python · FastAPI · Redis · Kubernetes",
        blurb:
          "A load balancer built for fault tolerance: eight routing algorithms " +
          "including EWMA, circuit breakers, Redis caching with sliding-window " +
          "rate limiting, and Prometheus metrics.",
        href: "/projects/load-balancer",
        stats: [
          { value: "8", label: "routing algorithms" },
          { value: "80%+", label: "cache hit rate" },
          { value: "50+", label: "metrics" },
        ],
      },
      {
        title: "Image Super-Resolution",
        stack: "Deep Learning · CNN",
        blurb:
          "A neural network that upscales low-resolution images and reconstructs " +
          "the detail lost in downsampling.",
        href: "https://github.com/Dumisani-C/image-super-resolution-ann",
      },
    ],
  },
];

export const SKILLS: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: [
      "Python", "TypeScript", "JavaScript", "Java",
      "C/C++", "SQL", "HTML", "CSS",
    ],
  },
  {
    label: "Frameworks",
    items: [
      "React", "Next.js", "Node.js", "Express", "Django",
      "Flask", "FastAPI", "Spring Boot", "Tailwind CSS", "Jinja2",
    ],
  },
  {
    label: "AI & ML",
    items: [
      "Claude Code", "MCP", "OpenAI API", "Gemini API", "LangChain",
      "PyTorch", "scikit-learn", "pandas", "NumPy", "MediaPipe",
    ],
  },
  {
    label: "Data & Infrastructure",
    items: [
      "PostgreSQL", "MySQL", "SQLite", "Redis", "Peewee",
      "Docker", "Kubernetes", "Prometheus", "CircleCI",
      "Git/GitHub", "REST APIs", "TACC HPC",
    ],
  },
];

/* Commands for the >_ terminal */
export const TERMINAL: Record<string, string> = {
  whoami: [
    "Dumisani Chikomo. Computer Science @ Berea College.",
    "SWE intern, Credit Karma (CK Intelligence), 2026.",
    "NSF/TACC ACSC researcher, PEARC25.",
    "Building AI dev tools. Man United, unfortunately.",
  ].join("\n"),
  projects: [
    "AI PR Reviewer        400+ PRs mined, 80% accuracy",
    "Stress Prediction     88.2% accuracy on Stampede3",
    "Class-Life Optimizer  Gemini + Django + React",
    "Payment & Support     rent, roles, tickets",
    "Study Companion       local LLM study agent",
    "LoadBalancer          8 algorithms, circuit breakers",
  ].join("\n"),
  experience: [
    "2026  Credit Karma        SWE Intern",
    "2025  Berea College       IT Support Specialist",
    "2025  NSF / TACC ACSC     ML & HPC Researcher",
    "2025  The Difference      SWE Intern",
  ].join("\n"),
  opensource: [
    "BCSR                  Berea Student Software Dev Team",
    "Runestone             cppds, AI4ALL interactive textbooks",
  ].join("\n"),
  contact: [
    `email     ${EMAIL}`,
    "github    github.com/Dumisani-C",
    "linkedin  linkedin.com/in/dumisani-chikomo-5a730718a",
  ].join("\n"),
};
