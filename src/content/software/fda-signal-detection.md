---
title: FDA signal detection tool
kind: Software, AI tools, integration, and agents
status: In development
summary: "A tool for finding early signs that a medication is linked to an adverse event. It works from FDA adverse event reports, scores drug and event pairs for disproportionate reporting, and flags the ones that deserve a closer look."
image: /img/software/fda-signal-detection.svg
imageAlt: "Illustration of drug and adverse event pairs plotted against a signal threshold"
stack: [Python, FAERS, Statistics, LLM agents]
order: 3
---
Legal teams want to know early when a medication starts to look linked to an adverse event. Most early signals turn out to be noise. The useful thing is to find the few that are not.

## How it works

- Pulls reports from the FDA Adverse Event Reporting System (FAERS).
- Scores drug and event pairs for disproportionate reporting, using standard signal detection statistics.
- Uses language model agents to check flagged pairs against the published literature.
- Ends with a short list for a human reviewer, who decides what goes to the legal team.

## Status

In development.
