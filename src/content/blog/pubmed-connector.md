---
title: "Stop searching PubMed. Ask it."
description: How a PubMed connector for an AI assistant turns a literature search into a screened evidence table and a synthesis, and why it beats Google, PubMed search, and Scholar alerts.
date: 2026-10-28
tags: [AI, literature review, PubMed, "1,4-dioxane"]
draft: true
---

Every exposure or risk assessment starts with the literature. What is known about this chemical? What has changed since the last time we looked? The tools most of us use to answer that have not changed much in twenty years, and they all stop at the same point: they hand you a list.

This post is about a different way to do it, using an AI assistant connected directly to PubMed. I did not build anything fancy. I turned on an existing connector and set up a workflow on top of it. That is the point: the barrier to getting real value from AI here is low.

## What the usual tools do, and where they stop

**Google** ranks by popularity, not relevance. Search a chemical and you get news stories, law firm pages, and government fact sheets before you get a study. It is fine for orientation and useless for a review.

**PubMed search** is precise. It is also a list. A query on a well-studied chemical returns dozens or hundreds of results, and every one is an abstract you have to open, read, and decide on. Keyword search also pulls in papers that only mention your chemical in passing.

**Google Scholar alerts** tell you when something new appears. They send titles. They do not tell you whether the new paper is relevant, what it found, or whether it contradicts what you already knew.

None of them does the part that takes the time: reading, sorting, extracting, and comparing.

## What a connector does differently

A connector gives an AI assistant direct access to a data source. Here, that's PubMed's search and article data. Instead of the assistant guessing from what it remembers, it runs the search itself, reads the abstracts it gets back, and cites them.

That changes what you can ask for. Not "find papers on X," but:

- Pull everything on X from the last three years.
- Throw out the papers that only use X as a lab reagent.
- Put the human, animal, and in vitro studies in a table with the key finding and a limitation for each.
- Tell me where the studies disagree, and why.
- Check every week and tell me only when something relevant is new.

## A real example: 1,4-dioxane, 2023 to 2026

I ran this on 1,4-dioxane, a chemical I work on. The query was 1,4-dioxane in the title or abstract, combined with drinking water, groundwater, exposure, toxicity, or cancer, for 2023 through 2026.

**Search.** 73 papers.

**Screen.** I had it screen the 40 most recent.

| Bucket | Papers |
| --- | --- |
| Exposure and occurrence | 7 |
| Toxicology and mode of action | 5 |
| Treatment and remediation | 13 |
| Loosely related (other VOCs, other contaminants) | 5 |
| Off-topic | 10 |

A quarter of the results had nothing to do with dioxane as a contaminant. Most used it as a solvent: fluorescent probes for imaging tumors, organic synthesis, an MRI contrast study. One was about dioxins, a different chemical entirely. By hand, that's ten abstracts read and thrown away. Here, it was a line in a table.

**Synthesize.** The useful part is what came back when I asked it to compare the relevant papers:

- **The cancer mode of action is contested, and it matters.** An independent expert panel found the strongest support for a non-genotoxic mode of action for dioxane's rodent liver tumors, driven by metabolic saturation, oxidative stress, and regenerative proliferation. The panel concluded that this supports non-linear extrapolation in risk assessment ([Regul Toxicol Pharmacol 2025](https://doi.org/10.1016/j.yrtph.2025.105950)). A cell study published the same year argues that dioxane transforms human bronchial cells at environmentally relevant concentrations and calls it a human carcinogen ([J Extracell Vesicles 2025](https://doi.org/10.1002/jev2.70072)). Those two conclusions point to different drinking water numbers. A 2025 review makes the same point: disagreement over mode of action is why standards differ so much around the world ([Environ Sci Technol 2025](https://doi.org/10.1021/acs.est.5c05147)).
- **Water levels did not predict blood levels.** In 92 Long Island residents, dioxane was detected in 32% of tap water and 24% of blood samples, and the two were not correlated. The authors suggest other exposure sources or different time windows ([Environ Sci Technol 2026](https://doi.org/10.1021/acs.est.5c15309)). For anyone reconstructing exposure from tap water data, that's worth knowing.
- **Occurrence is broad.** Using EPA's third Unregulated Contaminant Monitoring Rule data, more than 97 million U.S. residents were served by a public water system with detectable levels of at least one of four industrial contaminants, and 22% of systems had detectable 1,4-dioxane ([Environ Health Perspect 2025](https://doi.org/10.1289/EHP14721)). A national survey in China found dioxane in about 90% of drinking water samples ([Environ Pollut 2025](https://doi.org/10.1016/j.envpol.2025.127544)).

**Expand.** For the expert panel paper, I asked for related articles. PubMed returned about a hundred similar papers spanning decades of mode-of-action work, which is the backbone of a deeper review if one is needed.

Every claim above came with a PMID and a DOI. I checked them against the abstracts before writing this, which is the part you never skip.

## Why it's worth switching

**Time goes to judgment, not triage.** Screening 40 abstracts by hand is an hour or two. Here it took minutes, and my time went into checking the result and thinking about what it meant.

**It compares, which no search engine does.** Seeing that two 2025 papers reach opposite conclusions about mode of action is the insight. A list of titles doesn't give you that.

**Alerts that read the paper.** Set it to rerun weekly, and it screens only the new papers and tells you whether anything changes the picture. One line saying "nothing new that matters" is worth more than ten titles to skim.

**It's reproducible.** The query, the date, the screening buckets, and the table are all written down, so you can rerun it next quarter or hand it to a colleague.

## The limits

- PubMed only covers biomedical and life sciences journals. Engineering, treatment chemistry, regulatory documents, and grey literature need other sources.
- Screening is based on abstracts. When a number matters, read the full paper.
- It can misclassify a paper or misread an abstract. Treat the output as a strong first draft that a scientist checks, not a finished review.
- Think about what you put into any AI tool. Keep confidential case details out unless your tools and agreements allow it.

## Getting started

If you use Claude, the PubMed connector is available to turn on. Start with a scoped question: one chemical, one angle, a date range. Ask for a table, then ask where the studies disagree. Once that works, ask for a weekly alert.

If your team wants help setting this up, or wants to see what else in your workflow could work this way, [get in touch](/contact).

*Sources retrieved from PubMed on October 28, 2026.*
