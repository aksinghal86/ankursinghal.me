---
title: PubMed connector
kind: Software, AI tools, integration, and agents
status: In development
summary: "Connects a language model to PubMed. It pulls the studies for a topic and date range, does what PubMed search alone cannot (grouping, comparing, and summarizing the literature), and sends recurring alerts when new papers appear."
image: /img/software/pubmed-connector.svg
imageAlt: "Illustration of a literature search with results and a new-papers alert"
stack: [Python, MCP, PubMed, LLM agents]
order: 4
---
PubMed is good at finding papers and bad at telling you what they say as a group. This connector gives a language model direct access to PubMed so it can do both.

## What it does

- Pulls the studies on a topic for a chosen date range.
- Groups, compares, and summarizes them: which designs, which populations, which findings agree and which conflict.
- Runs on a schedule and sends an alert when new papers on a topic appear.

It is built on the Model Context Protocol (MCP), so the same connector works with any model or agent that supports it. It is a successor to [smartlyt](/software/smartlyt), which clustered search results with simpler methods.

## Status

In development.
