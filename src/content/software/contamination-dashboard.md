---
title: Water contamination data platform
kind: Litigation apps, dashboards, and data tools
status: Client only
summary: One data and analytics hub for the whole case. Visualizations of all the extracted data in a map or a table format. Data can be downloaded from the dashboard with underlying reports or files also directly accessible from the dashboard. Allows transformations of the data and analyses on the fly. 
image: /img/software/contamination-platform.svg
imageAlt: "Illustration of a map with sample locations sized by concentration"
stack: [Python, Django REST Framework, React, PostgreSQL, Leaflet, R]
links:
  - label: Client sign-in
    url: https://dioxane.ehe-analytics.com/dashboard
order: 2
---

This is a tool that I built for the legal team and experts working on a case with large number of analytical results across more than a decade in scanned lab reports. As the data and analytics hub of the case, we used AI tools along with humans to extract data from laboratory reports, built a database, and then fed into this tool as the one consolidated data resource, where the legal team and experts can explore the data, download the data and the underlying reports, or create their own visualizations. 

## What it does

- All the data in one place. Every result is in one database, searchable by location, chemical, and date, with a map for orientation. Nobody has to hunt through folders.
- Easy downloads. Export the results as a table, or pull the original lab reports. Each result links back to the report it came from, so any number can be traced to its source in a click.
- Quality-controlled, once. Every file was logged, extracted, and checked before it went in. 
- One foundation for every analysis. Charts, tables, and expert opinions all draw on the same checked data. When two people run numbers, they get the same answer.
- Updates in one place. When new data arrives, it’s loaded and QC’d once and everyone sees it. 

## How it is built

A Django REST Framework back end and a React front end, with a Leaflet map. Analysis and figures in R.

Limited access. 
