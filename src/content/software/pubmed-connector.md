---
title: PubMed literature review and alerts
kind: Software, AI tools, integration, and agents
status: Live
summary: "A literature review workflow on top of Claude's PubMed connector. It pulls every study on a topic, screens out the noise, builds an evidence table, compares what the papers say, and sends recurring alerts when new work appears."
image: /img/software/pubmed-connector.svg
imageAlt: "Illustration of a literature search with results and a new-papers alert"
stack: [Claude, MCP, PubMed]
order: 4
---

PubMed search finds papers. It does not read them, sort them, or tell you whether they agree. This workflow does that part, using Claude's PubMed connector.

I did not build the connector. It is an off-the-shelf integration that gives the model direct access to PubMed. What I built is the workflow on top of it: how to scope a question, build the query, screen results, extract an evidence table, and write a synthesis that flags where studies conflict.

## What it does

- **Search.** Builds a PubMed query from a plain-language question, with synonyms and field tags, and pulls every result for the date range.
- **Screen.** Reads every title and abstract and sorts them into relevant, adjacent, and off-topic, so you only read what matters.
- **Expand.** Follows related-article links from the key papers to catch work the query missed.
- **Tabulate.** One row per relevant paper: study type, population, exposure, outcome, key finding, limitation, PMID, and DOI.
- **Synthesize.** A short memo grouped by question, with the agreements, the conflicts, and what they mean for exposure and risk assessment.
- **Alert.** A scheduled rerun that screens only new papers and sends a digest when something relevant appears.

## A test run

On 1,4-dioxane, 2023 to 2026, the search returned 73 papers. Of the first 40, a quarter were off-topic, mostly studies that use dioxane as a lab solvent. The synthesis surfaced a live disagreement over dioxane's cancer mode of action that matters for how it is regulated.

## Limits

PubMed only covers biomedical and life sciences literature, screening is based on abstracts unless full text is pulled, and every finding needs a human check before it goes into a report.
