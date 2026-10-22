---
title: Formaldehyde Emissions Estimator
kind: Dashboards and data tools
status: Live
summary: Estimates indoor air formaldehyde from laminate flooring for a specific home, using the emissions-decay model from our published study. It was my first Shiny app.
stack: [R, Shiny, Exponential decay model]
links:
  - label: Open the app
    url: https://aksinghal86.shinyapps.io/laminate-flooring-estimates
  - label: Code on GitHub
    url: https://github.com/aksinghal86/laminate-flooring-estimates
  - label: Paper in Risk Analysis
    url: https://onlinelibrary.wiley.com/doi/abs/10.1111/risa.12926
order: 2
detail: true
---

The [Formaldehyde Emissions Estimator](https://aksinghal86.shinyapps.io/laminate-flooring-estimates) lets a homeowner estimate indoor air formaldehyde from laminate flooring based on the characteristics of their own house.

## Background

In 2015, a major flooring retailer faced scrutiny after reports that some of its laminate flooring, made by Chinese suppliers, contained more formaldehyde than California Air Resources Board rules allow. A high concentration in a product does not by itself mean high exposure. Exposure depends on how much flooring is installed, how much air moves through the house, and how fast the product off-gasses. Formaldehyde levels in flooring also fall over time.

We were asked to work out long-term exposures and cancer risk compared with benchmarks such as California's Proposition 65 level of 40 µg/day. I led a team of analytical chemists, polymer scientists, exposure assessors, and air modelers. We collected what was then the largest consumer product dataset of its kind and built a bi-exponential model of emissions over time. The work was presented to the U.S. Consumer Product Safety Commission and [published in Risk Analysis](https://onlinelibrary.wiley.com/doi/abs/10.1111/risa.12926).

The app puts that model in a form anyone can adjust. Change the house parameters and it returns the expected indoor concentration and risk.

*Disclosure: we were retained by the flooring retailer, and some of the work supported litigation.*
