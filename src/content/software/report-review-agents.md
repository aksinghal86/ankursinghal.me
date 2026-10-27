---
title: Multi-agent report review
kind: Software, AI tools, integration, and agents
status: In development
summary: A pipeline of language model agents for expert report work. A writer drafts, a technical reviewer checks the science, a critic argues the other side, and a rebuttal stage answers, so weaknesses surface before opposing counsel finds them.
image: /img/software/report-review-agents.svg
imageAlt: "Illustration of four stages: writer, technical reviewer, critic, rebuttal"
stack: [Python, Django, React, LLM agents]
order: 2
---
Expert reports get attacked by people who are paid to find their weaknesses. This pipeline tries to find them first.

## How it works

Four language model agents work in sequence:

1. **Writer.** Drafts a section from the analysis and the source material.
2. **Technical reviewer.** Checks the science, the numbers, and the citations.
3. **Critic.** Argues the other side, the way opposing experts and counsel would.
4. **Rebuttal.** Answers the critique, or flags the points that cannot be answered and need more work.

The point is not to let a model write the report. It is to put a draft through a hard review cycle in minutes, so the expert spends time on the weak points instead of finding them.

## Status

In development, on a Django and React stack.
