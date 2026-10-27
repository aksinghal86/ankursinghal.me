---
title: NFL pick'em tools
kind: Software, AI tools, integration, and agents
status: In development
summary: An MCP server that gives a language model live access to rating systems, market lines, and my pick history for pick'em strategy, plus a mobile app for win-total predictions and pick logging.
image: /img/software/nfl-pickem.svg
imageAlt: "Illustration of predicted win totals compared with market lines"
stack: [Python, MCP, React Native, Expo]
order: 7
---
Two related side projects, built mostly to learn the Model Context Protocol (MCP) and agent tooling on a problem I care about.

## The MCP server

Gives a language model live access to rating systems, market lines, line movement, and my own pick history, so it can help with against-the-spread picks and track which signals have actually been accurate.

## The app

A free mobile app for season-long win-total predictions. It combines several team rating systems into an ensemble, weighted by how well each has predicted in the past, and lets anyone log their own picks.

## Status

In development, with Python for the server and React Native and Expo for the app.
