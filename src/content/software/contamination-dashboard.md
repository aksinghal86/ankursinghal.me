---
title: Water contamination data platform
kind: Litigation data support, apps, and dashboards
status: Client only
summary: One data and analytics hub for the whole case comprising 100K+ rows of data. Visualizations of all the extracted data in a map or a table format. Data can be downloaded from the dashboard with underlying reports or files also directly accessible from the dashboard. Allows transformations of the data and analyses on the fly. 
image: /img/software/contamination-platform.svg
imageAlt: "Illustration of a map with sample locations sized by concentration"
stack: [Python, Django REST Framework, React, PostgreSQL, Leaflet, R]
links:
  - label: Client sign-in
    url: https://dioxane.ehe-analytics.com/dashboard
order: 2
---

This is a tool that the team at EH&E built under my supervision for the legal team and experts working on a 1,4-dioxane case. We received lab results spanning over a decade in various types of files, e.g., scanned lab reports, excel outputs, and regulatory summaries. Files included results for 1,4-dioxane, VOCs, and PFAS sampled in multiple locations with inconsistent naming conventions. The challenge was to extract the data in a rapid and efficient manner, harmonize sampling locations and analyte names, and then supply it in a database that had been QC'ed and could be the single true source of case data. 

We used a suite of AI tools that we built for data extraction along with a team to extract when AI couldn't and to review and QC the data. We built a data pipeline to host the data, but we also went further to provide value for our clients. We created a dashboard where the legal team and experts can visualize the data dynamically on a map or in a table format, parse or filter to their needs, and analyze it on the fly. In addition, we designed the dashboard to be the data and analytics hub for the case. Users can download the data directly from the dashboard, view the underlying report or file in the dashboard, and track the progress of the case so they never have to leave the dashboard and find files embedded deep within some folder structures on their Dropbox or a network storage solution.  

While not an expert, I used my knowledge across the relevant fields - hydrogeology, 1,4-dioxane chemistry, uses with chlorinated solvents, fate-and-transport of 1,4-dioxane and chlorinated solvents - to conduct analyses that identified potential gaps in the data set and to suggest additional sampling that moved the case forward. Without a consolidated database, intimate knowledge of the data, and a unique perspective across multiple fields, such insights may not have ever come to forth or may have come much later when it would have been impossible to address. 

## What it does

- All the data in one place. Every result is in one database, searchable by location, chemical, and date, with a map for orientation. Nobody has to hunt through folders.
- Easy downloads. Export the results as a table, or pull the original lab reports. Each result links back to the report it came from, so any number can be traced to its source in a click.
- Quality-controlled, once. Every file was logged, extracted, and checked before it went in. 
- One foundation for every analysis. Charts, tables, and expert opinions all draw on the same checked data. When two people run numbers, they get the same answer.
- Updates in one place. When new data arrives, it’s loaded and QC’d once and everyone sees it. 

## How it is built

A Django REST Framework back end and a React front end, with a Leaflet map. Analysis and figures in R.

Limited access. 
