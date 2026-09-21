# Case Study — Online Course Design Studio

**Repository:** [online-course-design](https://github.com/Freddricklogan/online-course-design) · **Live demo:** [freddricklogan.github.io/online-course-design](https://freddricklogan.github.io/online-course-design/) · **Author:** Freddrick Logan

---

## 1. Who has this problem

Faculty asked to move a course online or blended, the instructional designers and teaching centres that support them, programme directors facing a course-quality review, and graduate students in instructional design. This is my own field: I design online and blended courses at Illinois Tech and lead educational-technology work across programmes. The commonest failure is not a lack of frameworks; it is a course built from its content outward, with objectives added afterwards to satisfy a template.

## 2. The problem, as a scenario

A professor is given a semester to put a graduate course online. She records her lectures, uploads the readings, adds a weekly discussion board and a final paper. The course runs. Students report isolation; posts answer the prompt and nothing else; the final paper asks for analysis no activity practised; the syllabus objectives were written the night before the review. The reviewer asks whether assessments measure the stated objectives and whether learners practise toward each. Nobody can point to the row where they do.

## 3. What it costs to leave it alone

A course that costs as much as a good one and teaches less; a year-two redesign that could have been the year-one design; a programme failing an accreditation-linked review it did not see coming. I will not put a figure on it — development budgets and review consequences differ across institutions. What is certain is that the reviewer's discipline is learnable, and a designer who can see alignment on one page will not build the course in the scenario.

## 4. The approach, and the alternative I rejected

I wrote a seventeen-section playbook with alignment at its centre. A backward-design module builder asks for a Bloom level and a verb, then shows the assessment and activity types that align and reports the alignment status — constructive alignment demonstrated live. An ABCD assembler builds a measurable objective from its parts. A mini rubric builder turns criteria into an analytic table. Two self-checks let a designer audit a course against alignment-centred quality standards, one of them modelled on the publicly described Quality Matters concept and labelled as illustrative. Around them sit ADDIE, backward design and Bloom, four learning theories, Gagné and Merrill applied to online modules, cognitive load and multimedia rules, assessment that holds up online, modalities as design choices, the Community of Inquiry with a weekly facilitation rhythm, a storyboard template, and tools chosen by function, not brand. The resource then joined the shared Learning Resource Kit: Executive Shell, collapsible sections with saved progress, a five-question quiz written from this content that records xAPI statements locally, and a print layout.

The alternative I rejected was an LMS how-to. Tool instructions date in a release cycle and teach nothing about design; the builder and self-checks will still be right in ten years.

## 5. What the code does today

Real: the authored content across seventeen sections with an executive summary and glossary; five working widgets — module builder, ABCD assembler, rubric builder, alignment self-check, QM-style review — moved from inline script to a module without rewriting; the kit layer with progress, quiz, xAPI 1.0.3 statements and print; a strict content-security policy with no inline script or style; tests that validate the quiz configuration and mount the kit against the real page.

Simulated: the QM-style review mirrors the structure of the eight general standards from public descriptions and is not the official scored rubric; the page says so.

Worth knowing: the self-checks' weights are pedagogical devices; reading time is words at 230 per minute; progress counts a section as opened, not read.

## 6. Evidence

Measured locally with the commands CI runs: 7 tests passing across two files — quiz validity, page invariants, and the vendored kit mounted on this page; coverage 79.84% of all files with `src/config.js` at 100% and the vendored kit at 78.75% from this page's smoke test; ESLint and html-validate clean. The conversion audit records 96 inline style attributes replaced by 23 classes, 26 custom properties namespaced, 7 buttons typed, 11 tables given a body and a `<main>` landmark added. Headless Chrome on the converted page: zero console errors; a Create-level objective with its first verb reports aligned assessment and activity, two ABCD parts assemble into an objective, one rubric criterion adds a row, two alignment elements score 32% Emerging, three review standards score 3 of 8; Expand all opens 17 of 17 sections and the KPI strip follows; no horizontal scroll at 1280 or 400 pixels.

## 7. What it would take to run this in production

As a public resource it is in production now. For a designer-certification or faculty-development programme it needs the kit's statements sent to the institution's learning record store — endpoint, credentials, consent notice, identified actor, one origin in the content-security policy — and a second reader for the questions if it counts toward a credential. Days of integration; the content does not change.

## 8. Limits and next steps

Builders that do not save or export; fixed rubric performance levels; no worked full module; a review modelled on public descriptions only. Next: export of the storyboard and rubric as text, a complete worked module from objective to grade, a UDL section linked to the accessibility resource, and per-section questions in place of one quiz at the end.

## 9. Who should look at this

**Hiring manager:** evidence of my core craft — instructional design with alignment made visible — packaged to a standard an institution can adopt.
**Consulting client:** the review I run on a course before it launches: objectives, evidence, practice, presence, and the standards a reviewer will apply.
**Engineer:** read `src/page.js` for the module builder's alignment lookup and the rubric builder's escaping, and `tests/kit.test.js` for the kit mounted against this page's real markup.
