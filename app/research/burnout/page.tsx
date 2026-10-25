import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Student Stress Prediction · Dumisani Chikomo",
  description:
    "PEARC25 research: predicting student stress levels from 20 survey " +
    "features with six classifiers, run on TACC's Stampede3.",
};

const cx = (...parts: string[]) => parts.join(" ");

const DATASET_URL =
  "https://www.kaggle.com/datasets/rxnach/student-stress-factors-a-comprehensive-analysis";

/* All numbers below come from the notebook's printed outputs. */
const TEST_RESULTS = [
  { model: "Logistic Regression", acc: "88.2%", f1: "0.882" },
  { model: "Random Forest (tuned)", acc: "88.2%", f1: "0.881" },
  { model: "Gradient Boosting", acc: "87.3%", f1: "0.872" },
  { model: "K-Nearest Neighbors", acc: "85.0%", f1: "0.850" },
  { model: "SVM (tuned)", acc: "84.5%", f1: "0.847" },
];

const CV_RESULTS = [
  { model: "Gradient Boosting", mean: "88.1%", sd: "2.1" },
  { model: "Decision Tree", mean: "88.0%", sd: "3.5" },
  { model: "Logistic Regression", mean: "87.7%", sd: "2.8" },
  { model: "Random Forest", mean: "87.3%", sd: "2.5" },
  { model: "SVM (RBF)", mean: "86.7%", sd: "2.8" },
  { model: "K-Nearest Neighbors", mean: "86.4%", sd: "3.8" },
];

const PER_CLASS = [
  { label: "Low (0)", p: "0.90", r: "0.82", f1: "0.86", n: 74 },
  { label: "Medium (1)", p: "0.89", r: "0.92", f1: "0.90", n: 72 },
  { label: "High (2)", p: "0.86", r: "0.91", f1: "0.88", n: 74 },
];

const FEATURE_GROUPS = [
  {
    group: "Psychological",
    items: "anxiety level, self-esteem, mental health history, depression",
  },
  {
    group: "Physical",
    items: "headache, blood pressure, sleep quality, breathing problems",
  },
  {
    group: "Environmental",
    items: "noise level, living conditions, safety, basic needs",
  },
  {
    group: "Academic",
    items: "academic performance, study load, teacher-student relationship",
  },
  {
    group: "Social",
    items:
      "future career concerns, social support, peer pressure, " +
      "extracurricular activities, bullying",
  },
];

/* ---------- small building blocks ---------- */

function H2({ n, children }: { n: number; children: string }) {
  return (
    <h2
      className={cx(
        "mb-6 flex items-baseline gap-4 font-display text-[1.6rem]",
        "font-bold tracking-[-0.02em] text-white",
      )}
    >
      <span className="font-mono text-[0.9rem] font-normal text-chalk-faint">
        {String(n).padStart(2, "0")}
      </span>
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return (
    <p
      className={cx(
        "mb-5 max-w-[68ch] text-[1.05rem] leading-[1.75] text-chalk-soft",
        "[&_b]:font-medium [&_b]:text-chalk",
      )}
    >
      {children}
    </p>
  );
}

type FigureProps = {
  n: number;
  src: string;
  w: number;
  h: number;
  alt: string;
  caption: ReactNode;
};

function Figure({ n, src, w, h, alt, caption }: FigureProps) {
  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-lg border border-rule bg-white p-3">
        <Image
          src={src}
          width={w}
          height={h}
          alt={alt}
          sizes="(min-width: 1024px) 860px, 100vw"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 max-w-[68ch] text-[0.92rem] leading-[1.6] text-chalk-soft">
        <span className="font-mono text-chalk">Figure {n}.</span> {caption}
      </figcaption>
    </figure>
  );
}

type TableProps = {
  n: number;
  caption: string;
  head: string[];
  rows: (string | number)[][];
  numeric?: boolean[];
};

function Table({ n, caption, head, rows, numeric = [] }: TableProps) {
  return (
    <div className="my-10">
      <p className="mb-3 text-[0.92rem] text-chalk-soft">
        <span className="font-mono text-chalk">Table {n}.</span> {caption}
      </p>
      <div className="overflow-x-auto rounded-lg border border-rule">
        <table className="w-full min-w-[480px] border-collapse text-left text-[0.95rem]">
          <thead>
            <tr className="border-b border-rule bg-night-2">
              {head.map((h, i) => (
                <th
                  key={h}
                  className={cx(
                    "px-4 py-3 font-mono text-[0.75rem] font-normal uppercase",
                    "tracking-[0.12em] text-chalk-faint",
                    numeric[i] ? "text-right" : "",
                  )}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={String(r[0])} className="border-b border-rule last:border-0">
                {r.map((c, i) => (
                  <td
                    key={i}
                    className={cx(
                      "px-4 py-3 text-chalk",
                      numeric[i] ? "text-right font-mono tabular-nums" : "",
                    )}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- page ---------- */

export default function StressResearchPage() {
  return (
    <main
      className={cx(
        "min-h-screen bg-night text-chalk",
        "px-6 pt-12 pb-24 sm:px-14 lg:px-24",
      )}
    >
      <article className="mx-auto max-w-[860px]">
        <Link
          href="/#experience"
          className={cx(
            "group inline-flex items-center gap-2 font-mono text-[0.85rem]",
            "tracking-[0.06em] text-chalk-soft hover:text-chalk",
          )}
        >
          <span aria-hidden className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Back to portfolio
        </Link>

        {/* Title block */}
        <header className="mt-14 mb-14 border-b border-rule pb-10">
          <p
            className={cx(
              "mb-5 font-mono text-[0.8rem] uppercase tracking-[0.18em]",
              "text-chalk-faint",
            )}
          >
            PEARC25 · NSF LCCF Advanced Computing Student Challenge
          </p>
          <h1
            className={cx(
              "font-display text-[clamp(2rem,4.4vw,3.2rem)] font-bold",
              "leading-[1.08] tracking-[-0.03em] text-white text-balance",
            )}
          >
            Predicting Student Stress Levels from Psychological, Physical,
            Environmental, Academic and Social Factors
          </h1>
          <p className="mt-6 text-[1.05rem] text-chalk">
            Dumisani Chikomo
            <span className="text-chalk-faint"> · Berea College</span>
          </p>
          <p className="mt-1 font-mono text-[0.85rem] text-chalk-faint">
            Computation on TACC Stampede3 · Summer 2025
          </p>
        </header>

        {/* Abstract */}
        <section className="mb-16 rounded-lg border border-rule bg-night-2 p-7">
          <p
            className={cx(
              "mb-3 font-mono text-[0.78rem] uppercase tracking-[0.18em]",
              "text-chalk-faint",
            )}
          >
            Abstract
          </p>
          <p className="max-w-[68ch] text-[1.05rem] leading-[1.75] text-chalk">
            Student stress is common, and support services usually find out about
            it late. Using survey data from 1,100 students across 20 features, I
            trained and compared six classifiers to sort students into low, medium
            and high stress. With 5-fold stratified cross-validation and grid-search
            tuning, the best models reached <b>88.2% accuracy</b> (macro F1 0.88)
            on a held-out test set of 220 students. A simple logistic regression
            matched a tuned random forest, which suggests the signal is largely
            linear. Bullying, future career concerns, anxiety and depression had
            the strongest correlations with stress, while the random forest leaned
            most on blood pressure, sleep quality and basic needs.
          </p>
        </section>

        {/* 1. Question */}
        <section className="mb-16">
          <H2 n={1}>Research question</H2>
          <P>
            Can a student&apos;s stress level be predicted from information a
            college could realistically collect, and which factors carry the most
            signal? A reliable early-warning model would let counselors and
            advisors reach out before stress turns into burnout.
          </P>
        </section>

        {/* 2. Data */}
        <section className="mb-16">
          <H2 n={2}>Data</H2>
          <P>
            I used the{" "}
            <a
              href={DATASET_URL}
              target="_blank"
              rel="noopener"
              className="text-chalk underline underline-offset-4 hover:text-white"
            >
              Student Stress Factors dataset
            </a>{" "}
            (Kaggle): <b>1,100 students</b>, <b>20 numeric features</b> and a
            3-class target, <code className="font-mono text-chalk">stress_level</code>{" "}
            (0 = low, 1 = medium, 2 = high). The classes are close to balanced
            (373 / 358 / 369), and the data has no missing values or duplicate rows.
          </P>
          <Table
            n={1}
            caption="Feature groups used as model inputs."
            head={["Group", "Features"]}
            rows={FEATURE_GROUPS.map((g) => [g.group, g.items])}
          />
          <Figure
            n={1}
            src="/demos/burnout/stress_distribution.png"
            w={1706}
            h={732}
            alt="Bar and pie charts of the three stress classes"
            caption="Distribution of the target. The three stress levels are close
              to evenly split, so accuracy is a fair headline metric."
          />
        </section>

        {/* 3. Methods */}
        <section className="mb-16">
          <H2 n={3}>Methods</H2>
          <ol
            className={cx(
              "mb-6 grid max-w-[68ch] list-decimal gap-3 pl-5 text-[1.05rem]",
              "leading-[1.7] text-chalk-soft marker:font-mono marker:text-chalk-faint",
              "[&_b]:font-medium [&_b]:text-chalk",
            )}
          >
            <li>
              <b>Exploratory analysis:</b> Pearson correlations with the target,
              a full correlation heatmap, and per-class distributions of the top
              features.
            </li>
            <li>
              <b>Preprocessing:</b> stratified 80/20 train/test split (880 / 220),
              then standardization fitted on the training set only.
            </li>
            <li>
              <b>Model comparison:</b> logistic regression, decision tree, random
              forest, SVM (RBF), k-nearest neighbors and gradient boosting, each
              scored with 5-fold stratified cross-validation.
            </li>
            <li>
              <b>Tuning:</b> grid search over 108 random forest configurations and
              32 SVM configurations (5 folds each).
            </li>
            <li>
              <b>Evaluation:</b> accuracy and weighted F1 on the untouched test
              set, plus per-class precision and recall and a confusion matrix.
            </li>
          </ol>
          <P>
            The best random forest used 50 trees with a maximum depth of 10
            (cross-validated accuracy 88.5%). Work ran in Python with pandas,
            NumPy, scikit-learn, matplotlib and seaborn, in Jupyter on TACC&apos;s
            Stampede3 supercomputer.
          </P>
          <Table
            n={2}
            caption="5-fold cross-validated accuracy on the training set, before
              tuning (mean ± standard deviation, in percentage points)."
            head={["Model", "Mean accuracy", "± SD"]}
            numeric={[false, true, true]}
            rows={CV_RESULTS.map((r) => [r.model, r.mean, r.sd])}
          />
        </section>

        {/* 4. Results */}
        <section className="mb-16">
          <H2 n={4}>Results</H2>
          <P>
            On the held-out test set, <b>logistic regression and the tuned random
            forest tied at 88.2% accuracy</b>. Gradient boosting followed at 87.3%.
            Tuning helped the random forest in cross-validation, but the tuned SVM
            generalized worst (84.5%).
          </P>
          <Table
            n={3}
            caption="Test-set performance (220 students)."
            head={["Model", "Accuracy", "F1 (weighted)"]}
            numeric={[false, true, true]}
            rows={TEST_RESULTS.map((r) => [r.model, r.acc, r.f1])}
          />
          <Figure
            n={2}
            src="/demos/burnout/model_comparison.png"
            w={2085}
            h={734}
            alt="Bar charts comparing test accuracy and F1 for five models"
            caption="Test accuracy (left) and F1 (right) for each model. The top
              two are within rounding of each other."
          />
          <Table
            n={4}
            caption="Per-class results for the tuned random forest."
            head={["Class", "Precision", "Recall", "F1", "Students"]}
            numeric={[false, true, true, true, true]}
            rows={PER_CLASS.map((c) => [c.label, c.p, c.r, c.f1, c.n])}
          />
          <Figure
            n={3}
            src="/demos/burnout/confusion_matrix.png"
            w={2003}
            h={734}
            alt="Confusion matrix for the tuned random forest"
            caption="Confusion matrix for the tuned random forest. The largest
              share of errors is low-stress students flagged as medium or high
              (recall 0.82), the safer direction for an early-warning tool."
          />
        </section>

        {/* 5. Factors */}
        <section className="mb-16">
          <H2 n={5}>Which factors matter</H2>
          <P>
            Two different questions give two different lists. Asking which
            features move with stress (correlation), the strongest are{" "}
            <b>bullying (r = 0.75)</b>, <b>future career concerns (0.74)</b>,{" "}
            <b>anxiety (0.74)</b>, <b>depression (0.73)</b> and{" "}
            <b>headaches (0.71)</b>. Asking which features the random forest
            relies on to separate classes, the top three are{" "}
            <b>blood pressure</b>, <b>sleep quality</b> and <b>basic needs</b>.
          </P>
          <P>
            The gap is expected: many features are correlated with each other, so
            the model can lean on one and treat the rest as redundant. Neither list
            shows cause and effect.
          </P>
          <Figure
            n={4}
            src="/demos/burnout/correlation_analysis.png"
            w={2085}
            h={884}
            alt="Bar chart of feature correlations with stress level"
            caption="Correlation of the strongest features with stress level."
          />
          <Figure
            n={5}
            src="/demos/burnout/rf_feature_importance.png"
            w={1785}
            h={1184}
            alt="Random forest feature importance chart"
            caption="Random forest feature importance (mean decrease in
              impurity). This shows what the model uses, not what causes stress."
          />
        </section>

        {/* 6. Limitations */}
        <section className="mb-16">
          <H2 n={6}>Limitations</H2>
          <ul
            className={cx(
              "grid max-w-[68ch] list-disc gap-3 pl-5 text-[1.05rem] leading-[1.7]",
              "text-chalk-soft marker:text-chalk-faint",
            )}
          >
            <li>
              One public dataset of self-reported survey answers; results may not
              transfer to a specific college without retraining.
            </li>
            <li>
              A 220-student test set means a single misclassification moves
              accuracy by about 0.5 points, so the top models are effectively tied.
            </li>
            <li>
              Correlation and feature importance describe patterns in the data,
              not causes.
            </li>
            <li>
              Predicting stress about individuals raises privacy and consent
              questions that any real deployment would need to address first.
            </li>
          </ul>
        </section>

        {/* 7. Conclusion */}
        <section className="mb-16">
          <H2 n={7}>Conclusion and next steps</H2>
          <P>
            Stress level can be predicted from routine survey data with about 88%
            accuracy, and a simple, explainable logistic regression does as well
            as a tuned ensemble. Next steps are SHAP values to explain individual
            predictions, validation on a more diverse student population, and a
            student-facing tool. That last step became my{" "}
            <Link
              href="/projects/class-life-balance"
              className="text-chalk underline underline-offset-4 hover:text-white"
            >
              Class-Life Balance Optimizer
            </Link>
            .
          </P>
        </section>

        {/* Cite */}
        <section className="border-t border-rule pt-10">
          <p
            className={cx(
              "mb-3 font-mono text-[0.78rem] uppercase tracking-[0.18em]",
              "text-chalk-faint",
            )}
          >
            Cite
          </p>
          <pre
            className={cx(
              "overflow-x-auto rounded-lg border border-rule bg-night-2 p-5",
              "font-mono text-[0.82rem] leading-[1.6] text-chalk-soft",
            )}
          >
            {`Chikomo, D. (2025). Predicting student stress levels from
psychological, physical, environmental, academic and social
factors. PEARC25, NSF LCCF Advanced Computing Student Challenge.`}
          </pre>
        </section>
      </article>
    </main>
  );
}