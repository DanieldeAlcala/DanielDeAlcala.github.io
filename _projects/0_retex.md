---
layout: page
title: ReTeX
description: From the image of a document page to LaTeX that compiles back into the same page. Personal research project, work in progress.
img:
importance: 0
category: work
permalink: /projects/retex/
related_publications: false
toc:
  sidebar: left
_styles: >
  .rx-status { display:inline-block; font-size:.8rem; padding:.15rem .6rem; border-radius:999px;
    border:1px solid var(--global-divider-color); color:var(--global-text-color-light); margin-bottom:1rem; }
  .rx-kpis { display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:.75rem; margin:1.25rem 0 1.5rem; }
  .rx-kpi { border:1px solid var(--global-divider-color); border-radius:8px; padding:.8rem 1rem; background:var(--global-card-bg-color); }
  .rx-kpi b { display:block; font-size:1.6rem; line-height:1.2; color:var(--global-text-color); font-variant-numeric:tabular-nums; }
  .rx-kpi span { font-size:.8rem; color:var(--global-text-color-light); }
  .rx-pipe { width:100%; height:auto; margin:.5rem 0 1rem; color:var(--global-text-color); }
  .rx-pipe .box { fill:var(--global-card-bg-color); stroke:var(--global-divider-color); }
  .rx-pipe .hl { stroke:var(--global-theme-color); }
  .rx-pipe text { fill:currentColor; font-size:13px; font-family:inherit; }
  .rx-pipe .sub { fill:var(--global-text-color-light); font-size:11px; }
  .rx-pipe .arrow { stroke:var(--global-text-color-light); fill:none; stroke-width:1.5; }
  table.rx-table { width:100%; font-variant-numeric:tabular-nums; margin-bottom:.5rem; }
  table.rx-table th, table.rx-table td { padding:.35rem .5rem; border-bottom:1px solid var(--global-divider-color); }
  table.rx-table td.n, table.rx-table th.n { text-align:right; }
  .rx-caption { font-size:.85rem; color:var(--global-text-color-light); }
  .rx-tabs { display:flex; flex-wrap:wrap; gap:.4rem; margin:1rem 0; }
  .rx-tabs button { font-size:.85rem; padding:.3rem .7rem; border-radius:999px; cursor:pointer;
    border:1px solid var(--global-divider-color); background:var(--global-bg-color); color:var(--global-text-color); }
  .rx-tabs button[aria-selected="true"] { border-color:var(--global-theme-color); color:var(--global-theme-color); font-weight:600; }
  .rx-tabs button .dot { display:inline-block; width:.5rem; height:.5rem; border-radius:50%; margin-right:.35rem; vertical-align:middle; }
  .rx-tabs .good .dot { background:#2e8b57; } .rx-tabs .partial .dot { background:#c9a227; } .rx-tabs .fail .dot { background:#c0392b; }
  .rx-pair { display:grid; grid-template-columns:1fr 1fr; gap:.75rem; }
  .rx-pair figure { margin:0; }
  .rx-pair img { width:100%; height:auto; border:1px solid var(--global-divider-color); border-radius:4px; background:#fff; }
  .rx-pair figcaption { font-size:.8rem; color:var(--global-text-color-light); margin-top:.3rem; text-align:center; }
  .rx-meta { margin:.8rem 0; }
  .rx-loss { display:flex; flex-wrap:wrap; gap:.4rem .9rem; font-size:.8rem; color:var(--global-text-color-light); font-variant-numeric:tabular-nums; }
  .rx-code { max-height:420px; overflow:auto; font-size:.75rem; background:var(--global-code-bg-color); padding:.75rem; border-radius:6px; white-space:pre; }
  @media (max-width:576px) { .rx-pair { grid-template-columns:1fr; } }
---

<span class="rx-status">Work in progress · paper in preparation · model not released yet</span>

**ReTeX** reads the **image** of a document page and writes **LaTeX code that compiles back into that page**: the same text, equations, tables and figures, in the same place, with the same fonts and margins. Document conversion becomes an image-to-code problem, and the LaTeX compiler is the judge.

This is a personal research project. The results below come from the latest model, evaluated on **400 real arXiv pages from papers submitted between July and September 2026**, after every paper the model was trained on.

<div class="rx-kpis">
  <div class="rx-kpi"><b>0.79</b><span>mean page fidelity (fid_v3, 0–1), counting pages that fail to compile as 0</span></div>
  <div class="rx-kpi"><b>0.91</b><span>median page fidelity</span></div>
  <div class="rx-kpi"><b>362 / 400</b><span>outputs compile with no manual fixes</span></div>
  <div class="rx-kpi"><b>+0.10</b><span>over the previous model on the same pages (95% CI +0.06 to +0.14)</span></div>
</div>

## Why LaTeX, and why the rendered page

Most document converters output plain text, Markdown or a JSON tree. These formats lose what makes a page a page: equations stop being math, tables lose their spans, and the layout disappears. LaTeX keeps all of it, and it can be compiled.

The same page can be written in many different ways in LaTeX, so comparing the generated code with the original source would punish valid answers. ReTeX is therefore judged on what the code **produces**: the candidate is compiled, and its page is compared with the input.

## How it works

<svg class="rx-pipe" viewBox="0 0 860 150" role="img" aria-label="Pipeline: page image, vision-language model, LaTeX code, compiler, rendered page, compared with the input page">
  <defs><marker id="rxa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor" opacity=".55"/></marker></defs>
  <rect class="box" x="4" y="30" width="120" height="60" rx="6"/><text x="64" y="57" text-anchor="middle">Page image</text><text class="sub" x="64" y="75" text-anchor="middle">input</text>
  <path class="arrow" d="M124,60 H164" marker-end="url(#rxa)"/>
  <rect class="box hl" x="168" y="30" width="150" height="60" rx="6" stroke-width="2"/><text x="243" y="57" text-anchor="middle">Vision-language</text><text x="243" y="74" text-anchor="middle">model + LoRA</text>
  <path class="arrow" d="M318,60 H358" marker-end="url(#rxa)"/>
  <rect class="box" x="362" y="30" width="110" height="60" rx="6"/><text x="417" y="57" text-anchor="middle">LaTeX code</text><text class="sub" x="417" y="75" text-anchor="middle">output</text>
  <path class="arrow" d="M472,60 H512" marker-end="url(#rxa)"/>
  <rect class="box" x="516" y="30" width="110" height="60" rx="6"/><text x="571" y="57" text-anchor="middle">Compiler</text><text class="sub" x="571" y="75" text-anchor="middle">tectonic</text>
  <path class="arrow" d="M626,60 H666" marker-end="url(#rxa)"/>
  <rect class="box" x="670" y="30" width="120" height="60" rx="6"/><text x="730" y="57" text-anchor="middle">Rendered page</text><text class="sub" x="730" y="75" text-anchor="middle">PDF</text>
  <path class="arrow" d="M730,90 V125 H64 V92" marker-end="url(#rxa)" stroke-dasharray="4 4"/>
  <text class="sub" x="397" y="142" text-anchor="middle">compared with the input page: fid_v3</text>
</svg>

- **Model.** Qwen3-VL-8B fine-tuned with LoRA. The model writes the whole document, from `\documentclass` to `\end{document}`, in one pass.
- **Training data.** Two sources:
  - a **programmatic generator** that samples a structured page description (about 30 style axes, plus a sequence of sections, paragraphs, equations, lists, tables and figures), turns it into LaTeX and keeps it only if it compiles;
  - about **59,000 real arXiv pages**, each paired with a one-page LaTeX source that reproduces the image exactly. Their preambles are rewritten into a canonical form that renders identically.
- **Real figures.** Photos and plots cannot be written as code. The evaluation supplies the page's own image files, and the model only has to decide where each figure goes and how big it is.

## How it is measured

**fid_v3** is a page-fidelity metric built for this project. It works on the compiled PDF, not on pixels:

1. Both PDFs are turned into an inventory of what is **visible**: every word (with its position, font, size and style), every image and every vector stroke.
2. The two inventories are aligned.
3. The loss is split into 14 costs grouped in five families: **content** (missing, invented or wrong text), **graphics**, **geometry** (paper, margins, scale), **placement** (where things land) and **style** (fonts, colour).

A perfect copy scores 1, a page that does not compile scores 0, and garbage scores close to 0. The headline number, **fid_v3_all**, is the mean over all pages with failures counted as 0, so it rewards models that both compile and reproduce the page. Before it was adopted, the metric was checked against blind human judgments, using a protocol registered before the analysis.

**The benchmark.** `realbench_v1` holds 400 pages from 400 arXiv papers submitted between 2 July and 24 September 2026. All training data comes from papers up to June 2026, so the model has never seen these papers. Pages are grouped into four structural bands:

| Band | What it contains | Pages |
|---|---|---:|
| B1 | one column, no floats, default margins | 111 |
| B2 | one column, no floats, custom page geometry | 169 |
| B3 | one column with figures or tables | 47 |
| B4 | two columns | 73 |

## Results

The latest model compared with the previous one (Qwen2.5-VL-3B), on the same 400 pages and with the same generation protocol. Greedy decoding; if an output does not reach `\end{document}`, it is generated again with a mild repetition penalty. The code is never repaired afterwards.

<table class="rx-table">
  <thead><tr><th></th><th class="n">Previous (3B)</th><th class="n">ReTeX (8B)</th><th class="n">Difference [95% CI]</th></tr></thead>
  <tbody>
    <tr><td><b>All pages</b> · fid_v3_all</td><td class="n">0.689</td><td class="n"><b>0.790</b></td><td class="n">+0.101 [+0.061, +0.140]</td></tr>
    <tr><td>Compiles</td><td class="n">325 / 400</td><td class="n"><b>362 / 400</b></td><td class="n">+37</td></tr>
    <tr><td>B1 · one column</td><td class="n">0.705</td><td class="n">0.807</td><td class="n">+0.102 [+0.025, +0.178]</td></tr>
    <tr><td>B2 · custom geometry</td><td class="n">0.757</td><td class="n">0.832</td><td class="n">+0.075 [+0.023, +0.126]</td></tr>
    <tr><td>B3 · figures and tables</td><td class="n">0.516</td><td class="n">0.672</td><td class="n">+0.156 [+0.033, +0.280]</td></tr>
    <tr><td>B4 · two columns</td><td class="n">0.618</td><td class="n">0.744</td><td class="n">+0.126 [+0.024, +0.228]</td></tr>
  </tbody>
</table>
<p class="rx-caption">Confidence intervals from a paired bootstrap over pages. The comparison was run once on this benchmark, with the decision criterion written before generation. On a separate development set of 400 other real pages, the gain was +0.113 [+0.073, +0.156].</p>

When the output compiles, the page is usually very close to the original: the median fid_v3 is 0.91. **Most of the remaining gap is compilation.** On the development set, most compilation failures were macros from packages the model forgot to load (`\multirow`, `\mathscr`, `\cites`…).

## Examples

Real outputs of the model on pages from the benchmark, chosen to show what works and what does not. <span style="color:#2e8b57">●</span> good, <span style="color:#c9a227">●</span> partial, <span style="color:#c0392b">●</span> failure. All pages come from papers under a CC BY 4.0 licence.

<div class="rx-tabs" role="tablist" id="rx-tabs">
{% for ex in site.data.retex_examples %}
  <button role="tab" class="{{ ex.kind }}" aria-selected="{% if forloop.first %}true{% else %}false{% endif %}" data-i="{{ forloop.index0 }}"><span class="dot"></span>{{ ex.label }}</button>
{% endfor %}
</div>

{% for ex in site.data.retex_examples %}
{% capture base %}{{ '/assets/retex/' | relative_url }}{{ ex.id }}{% endcapture %}
<div class="rx-panel" data-i="{{ forloop.index0 }}" {% unless forloop.first %}hidden{% endunless %}>
  <div class="rx-pair">
    <figure><a href="{{ base }}/input.jpg" target="_blank" rel="noopener"><img src="{{ base }}/input.jpg" alt="Original page from arXiv {{ ex.arxiv }}" loading="lazy"></a><figcaption>Input page</figcaption></figure>
    <figure><a href="{{ base }}/render.jpg" target="_blank" rel="noopener"><img src="{{ base }}/render.jpg" alt="Page compiled from the LaTeX written by ReTeX" loading="lazy"></a><figcaption>ReTeX output, compiled</figcaption></figure>
  </div>
  <div class="rx-meta">
    <p><b>fid_v3 = {{ ex.fid }}</b> · {{ ex.band }}. {{ ex.note }}</p>
    <div class="rx-loss"><span>Loss by family:</span>{% for kv in ex.loss %}<span>{{ kv[0] }} {{ kv[1] }}</span>{% endfor %}</div>
    <p class="rx-caption">Source: {{ ex.authors }}, “{{ ex.paper }}”, <a href="https://arxiv.org/abs/{{ ex.arxiv }}">arXiv:{{ ex.arxiv }}</a>, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. The page was re-rendered from the paper's LaTeX source.</p>
  </div>
  <details data-src="{{ base }}/generated.tex"><summary>Show the LaTeX written by the model</summary><pre class="rx-code">Loading…</pre></details>
</div>
{% endfor %}

<script>
  (function () {
    var tabs = document.querySelectorAll("#rx-tabs button");
    var panels = document.querySelectorAll(".rx-panel");
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        tabs.forEach(function (x) { x.setAttribute("aria-selected", x === t ? "true" : "false"); });
        panels.forEach(function (p) { p.hidden = p.dataset.i !== t.dataset.i; });
      });
    });
    document.querySelectorAll(".rx-panel details").forEach(function (d) {
      d.addEventListener("toggle", function () {
        var pre = d.querySelector("pre");
        if (!d.open || pre.dataset.loaded) return;
        fetch(d.dataset.src).then(function (r) { return r.text(); }).then(function (txt) {
          pre.textContent = txt; pre.dataset.loaded = "1";
        }).catch(function () { pre.textContent = "Could not load the code."; });
      });
    });
  })();
</script>

## What we learned along the way

- **On real pages, the main failure was never finishing the preamble.** Real arXiv preambles are long and full of custom macros. Trained on them as they are, the model learned to keep writing `\newcommand` lines until it ran out of tokens. Rewriting the training preambles into a canonical form that renders the same page removed almost all of these loops (from 120 to 5 truncated outputs out of 400) and was the largest single improvement.
- **Measure the render, and measure it carefully.** An earlier metric gave a blank page 0.47 and did not penalise an extra duplicated page. Replacing it (fid_v3) changed which experiments looked like progress.
- **Seeds matter.** Retraining the same recipe with a different seed moves the score by up to about ±0.05, so every comparison is paired, has a confidence interval, and has a decision criterion written before the run.

## Limitations and next steps

- **Placement is the next bottleneck**, especially for floats and two-column pages: the text is right, but it does not always land where it should.
- Pages are handled one at a time. Multi-page documents, bibliographies and cross-references are future work.
- The next phase is **reinforcement learning with the compiler in the loop**, using fid_v3 on the compiled page as the reward.

## Demo

A public demo will come with the paper. Until then, the examples above are real, unedited outputs of the model.
