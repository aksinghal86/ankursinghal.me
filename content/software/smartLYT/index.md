---
author: Ankur Singhal
categories:
- Software
- ML
- Dashboard
date: "2022-09-02"
draft: false
featured: true
links:
- icon: door-open
  icon_pack: fas
  name: website
  url: https://aksinghal86.shinyapps.io/smartlyt
- icon: github
  icon_pack: fab
  name: code
  url: https://github.com/aksinghal86/smart-lit-search
# - icon: newspaper
#   icon_pack: far
#   name: Blog post
#   url: https://education.rstudio.com/blog/2020/07/palmerpenguins-cran/
excerpt: smartLYT uses an unsupervised clustering algorithm to group documents from PubMed search results into discrete clusters to focus literature deep dives. 
# layout: single-sidebar
subtitle: For smarter and more directed PubMed searches
tags:
- R
- Shiny
- unsupervised learning
title: smartLYT
---

## [smartlyt](https://aksinghal86.shinyapps.io/smartlyt) is an R Shiny app that allows you to cluster your PubMed literature searches. 

---

### Because Efficiency

How many dead-end rabbit holes do you go down when you need to do a deep literature dive on a certain topic or a chemical? I for one have to do a lot of literature dives and I get so frustrated and overwhelmed when I search a topic and hundreds of articles show up. Then begins the process of randomly picking some articles, going through the references, accepting, rejecting, reading abstracts, and starting over again. Every time I start to gain traction, I hit a tangential topic and there go several more precious hours. 

Wouldn't it be nice if someone could give you a list of a few *relevant* papers to get you a head start? Save yourself some time and the client some of those beloved \$\$\$s.

### The smartLYT app

Well, I created just the right tool in [smartlyt](https://aksinghal86.shinyapps.io/smartlyt). I always thought that it would be a good idea to create a document clusterer, which would ping PubMed, get the results, and automatically cluster documents based on context, i.e., by finding similarity between titles and abstracts of different papers. This way, when you do the initial dive, at least you have some pre-defined islands to explore as opposed to just diving in blind. 

### The approach

smartlyt uses a [term frequency-inverse document frequency (TF-IDF)](https://en.wikipedia.org/wiki/Tf%E2%80%93idf)] to first weight the terms in an abstract relative to the corpus and then uses simple hierarchical clustering to group documents together. This is one of the simpler techniques out there to cluster documents. In the future, I plan on developing this tool by 1) improving its speed; 2) comparing against different methods like [Latent Dirichlet Allocation (LDA)](https://towardsdatascience.com/latent-dirichlet-allocation-lda-9d1cd064ffa2); and 3) using network mapping to identify articles that cite each other. The last bit is the natural next step of this tool. 

If anyone would like to contribute especially towards improving the UI (my JavaScript skills are, ahem, limited to be kind), please reach out. I would love the help. Nearly all my projects are up for collaboration. 
