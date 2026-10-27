---
title: Timecard generator
kind: Software, AI tools, integration, and agents
status: In development
summary: "An agent that fills in a timecard from the work itself. It reads email, calendar, and Teams chat, matches the activity to projects, and drafts the hours, so you review a draft instead of reconstructing the week from memory."
image: /img/software/timecard-generator.svg
imageAlt: "Illustration of email, calendar, and chat feeding a filled timecard"
stack: [Python, Microsoft 365, LLM agents]
order: 5
---
Filling in a timecard at the end of the week means reconstructing the week from memory. Most of that information is already sitting in email, the calendar, and chat.

## How it works

- Reads the week's email, calendar, and Teams chat.
- Matches each piece of activity to a project.
- Drafts the hours by project and day, with the evidence behind each entry.

You review and correct a draft instead of starting from a blank page.

## Status

In development, on Microsoft 365.
