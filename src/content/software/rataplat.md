---
title: Rataplat
kind: Software, AI tools, integration, and agents
status: In development
summary: A recommender for boulderers. Climbs are tagged by style, climbers log what they send, and the model suggests climbs at an area that match their strengths and tastes, which matters at huge areas like Fontainebleau.
image: /img/software/rataplat.svg
imageAlt: "Illustration of a boulder with style tags"
stack: [Python, Recommender systems, NLP, Android]
order: 0
---
Rataplat is a climbing recommender for boulderers, built around a simple problem: at a huge area like Fontainebleau there are thousands of problems, and finding the ones you will actually enjoy is mostly luck.

## How it works

- Every climb is tagged by style: crimpy, slopey, compression, prow, and so on.
- Climbers log what they send and what they think of it, and the tags they add are crowdsourced back into the database.
- The model learns a climber's strengths and tastes from their log and suggests climbs at an area that match.

## Status

The first version of the recommender was a content-based model in R. I am rebuilding it in Python and releasing it as an Android app. Graphs of a climber's strengths and a feed of what similar climbers are sending are planned for later versions.
