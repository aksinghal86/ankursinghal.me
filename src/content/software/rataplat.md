---
title: Rataplat
kind: Software, AI tools, integration, and agents
status: Live
summary: A recommender for boulderers. Climbs are tagged by style, climbers log what they send, and the model suggests climbs at an area that match their strengths and tastes, which matters at huge areas like Fontainebleau.
image: /img/software/rataplat.svg
imageAlt: "Rataplat logo: an orange squirrel with a tail shaped like a climbing hold"
links:
  - label: Get it on Google Play
    url: https://play.google.com/store/apps/details?id=com.rataplat.app
stack: [Python, Recommender systems, NLP, Android]
order: 0
---
Rataplat is a climbing recommender for boulderers, built around a simple problem: at a huge area like Fontainebleau there are thousands of problems, and finding the ones you will actually enjoy is mostly luck.

## How it works

- Every climb is tagged by style: crimpy, slopey, compression, prow, and so on.
- Climbers log what they send and what they think of it, and the tags they add are crowdsourced back into the database.
- The model learns a climber's strengths and tastes from their log and suggests climbs at an area that match.

## Status

Rataplat is live on Google Play for Android. The first version of the recommender was a content-based model in R, and I rebuilt it in Python for the app. It covers Fontainebleau for now, with a logbook that works offline. Graphs of a climber's strengths and a feed of what similar climbers are sending are planned for later versions.

[Get Rataplat on Google Play](https://play.google.com/store/apps/details?id=com.rataplat.app)
