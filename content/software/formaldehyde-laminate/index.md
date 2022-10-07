---
author: Ankur Singhal
categories:
- Software
- Dashboard
date: "2018-09-02"
draft: false
featured: true
links:
- icon: door-open
  icon_pack: fas
  name: website
  url: https://aksinghal86.shinyapps.io/laminate-flooring-estimates
- icon: github
  icon_pack: fab
  name: code
  url: https://github.com/aksinghal86/laminate-flooring-estimates
- icon: newspaper
  icon_pack: far
  name: Paper
  url: https://onlinelibrary.wiley.com/doi/abs/10.1111/risa.12926
excerpt: This tool was created (in R Shiny) as a supplement for the work that we did to estimate formaldehyde emissions from laminate flooring and the corresponding indoor air formaldehyde concentrations. Concentrations are based on various parameters that can be adjusted by the user. 
# layout: single-sidebar
subtitle: For estimating indoor air formaldehyde concentrations from laminate flooring
tags:
- R
- Shiny
- Exponential decay
title: Formaldehyde Emissions Estimator
---

## [Formaldehyde emissions estimator app](https://aksinghal86.shinyapps.io/laminate-flooring-estimates) allows a user to estimate indoor air formaldehyde concentrations from laminate flooring based on characteristics of their house.

---

Back in 2015, the well-known flooring manufacturer [Lumber Liquidators, Inc.](https://www.llflooring.com) got in a lot of trouble because of an exposé by [60 Minutes on CBS](https://www.cbsnews.com/news/lumber-liquidators-linked-to-health-and-safety-violations/) that Lumber Liquidators' flooring contained high amounts of [formaldehyde](https://www.epa.gov/formaldehyde), a known [cancer-causing chemical](https://www.p65warnings.ca.gov/fact-sheets/formaldehyde-furniture-products) to the State of California. Apparently, Lumber Liquidators was in violation of the [California Air Resources Board](https://ww2.arb.ca.gov/resources/fact-sheets/formaldehyde) requirement for the amount of formaldehyde in laminate flooring. 

I can't dispute that the Lumber Liquidators was in fact being duped by its Chinese suppliers. They were told that the flooring was compliant when in fact they were being supplied with flooring containing high amounts of formaldehyde. Ultimately, Lumber Liquidators ended up [settling with California Air Resources Board for \$2.5 million](https://ww2.arb.ca.gov/lumber-liquidators-inc-settlement) and paying a [penalty of \$33 million](https://www.washingtonpost.com/local/legal-issues/lumber-liquidators-to-pay-33-million-for-misleading-investors-about-formaldehyde-in-laminate-flooring/2019/03/12/d45258be-44c9-11e9-8aab-95b8d80a1e4f_story.html) for "misleading investors about formaldehyde-laced laminate flooring from China."  

But, high concentration in a product doesn't necessarily mean high exposures. There are various factors that come into play, e.g., the amount of flooring installed, the air flow through the house, etc. These parameters are in turn dependent on various other factors. Also, and importantly, formaldehyde levels in the flooring do not stay constant over time. As you would expect, the total amount of formaldehyde in the product goes down over time as formaldehyde off-gases. 

So, we were asked by Lumber Liquidators to evaluate what would be the long-term exposures to people who installed their laminate flooring and what might be the cancer risk compared to some established benchmarks like California's Proposition 65 exposure level of 40 μg/day. A lot of data were collected and analyzed in the process and to conduct the evaluation. All of the work was eventually [published in the peer-reviewed literature](https://onlinelibrary.wiley.com/doi/abs/10.1111/risa.12926). (If you would like a copy, please reach out.)

I also [created a tool](https://aksinghal86.shinyapps.io/laminate-flooring-estimates) to visualize the results and to easily get estimates of indoor air concentrations and formaldehyde risks for any homeowner based on their own specific parameters. This was my first use of R Shiny! The [code is available on Github](https://github.com/aksinghal86/laminate-flooring-estimates) as well. 

*Full disclosure: We were retained by Lumber Liquidators, Inc. to conduct the evaluation. Some of the work was used to support litigation.*