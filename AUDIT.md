# Conversion audit — online-course-design

Produced by the Learning Resource Kit converter (`apply/convert.mjs`) from the single-file original (previous revision in git history).

## Findings

- Custom properties prefixed with --lr-: 26 (gold-soft, accent2, accent3, paper2, paper3, panel2, panel3, accent, paper, navy2, panel, line2, muted, serif, navy, line, body, gold, good, warn, sans, maxw, ink, dim, bad, r).
- Inline style attributes converted to classes: 96 occurrences, 23 distinct declarations.
- Inline script blocks moved to src/page.js: 1; shared collapsible script replaced by the kit: 1.
- No <main> landmark in the original; content between the top nav and the footer wrapped in <main>.
- Buttons given an explicit type: 7; tables given a <tbody>: 11; <th> given a scope: 38; raw ampersands encoded: 3; top navigation given an accessible name.
- Sections with ids: 17 (what, models, theories, gagne, merrill, multimedia, builder, objectives, assessment, modalities, community, facilitation, storyboard, tools, quality, qmreview, glossary).

## What changed for the reader

- Executive Shell header, KPI strip (sections, reading time, sections opened, quiz, statements) and footer.
- Collapsible sections are keyboard-operable with saved progress; deep links still open their section.
- A five-question quiz at the end records xAPI 1.0.3 statements in the browser only.
- A print stylesheet expands every section.
- Strict content-security policy: no inline script or style, no network calls.
