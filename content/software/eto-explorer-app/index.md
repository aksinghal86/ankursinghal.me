---
author: Ankur Singhal
categories:
- Software
- Dashboard
date: "2022-08-02"
draft: false
featured: true
links:
- icon: door-open
  icon_pack: fas
  name: website
  url: https://dashboards.theempiricalsolutions.com/p/eto-explorer-app
- icon: github
  icon_pack: fab
  name: code
  url: https://github.com/ehe-analytics/ethylene-oxide/tree/main/dashboard
# - icon: newspaper
#   icon_pack: far
#   name: Blog post
#   url: https://education.rstudio.com/blog/2020/07/palmerpenguins-cran/
excerpt: Ethylene oxide explorer is a tool to visualize emissions reported by facilities to the Toxics Release Inventory (TRI) and the corresponding cancer risk estimates calculated by the EPA as part of NATA and AirToxScreen. 
# layout: single-sidebar
subtitle: To visualize and analyze ethylene oxide emissions and cancer risks. 
tags:
- R
- Shiny
- GIS
- map
title: Ethylene Oxide Explorer
---

## [Ethylene Oxide Explorer](https://dashboards.theempiricalsolutions.com/p/eto-explorer-app) is a tool to visualize ethylene oxide emissions and estimated cancer risks on a map. It also has capabilities to compare emissions by facilities over time or to view the raw data in a data table.  

---

Ethylene oxide is a colorless, flammable gas with important industrial uses, e.g., it is used an intermediate for making ethylene glycol, which is the antifreeze you put in your car. It is also the most effective sterilant for sterilizing medical devices and spices. Issue is that ethylene oxide is also classified as a carcinogen by federal and international agencies and has been categorized as a hazardous air pollutant by EPA. Therefore, there is a need to regulate emissions to limit exposures to the communities near sterilizing facilties. 

There are lots of nuances around this issue that are better suited for a blog post, but to touch upon some, ethylene oxide is also produced endogenously, i.e., by the body itself, as part of exhaled breath and is a natural byproduct of combustion and even vehicle emissions. So, everyone is exposed to it and it is hard to tease out the contribution from the environment versus the contribution from industrial emissions. 

Nevertheless, since EPA is tasked to ensure the safety of the general public and to communicate risks from a contaminant to the public, EPA conducts complex modeling to estimate cancer risks to the nearby communities from emissions reported by facilities. This is a multi-year effort that estimates point concentration of a chemical at every census tract in the US using numerous inputs, e.g., nearby meteorology, geography, etc. This estimated point concentration is then used to generate an estimated cancer risk for that census tract. 

EPA has done this modeling twice now. The first assessment was called [National Air Toxics Assessment (NATA)](https://www.epa.gov/national-air-toxics-assessment). It was released in 2017 and was conducted using emissions reported by faciliteis in 2014. The latest version is called [Air Toxics Screening Assessment (AirToxScreen)](https://www.epa.gov/AirToxScreen), which was released in Spring 2022 using data reported in 2017. 

Which brings me to the [Ethylene Oxide Explorer tool](https://dashboards.theempiricalsolutions.com/p/eto-explorer-app) that I built.While EPA also has a tool, I think it is slow and difficult to use, breaks all the time, presents the information in a different way that I would like, and does not allow one to compare results between NATA and AirToxScreen. My goal was to address these issues and to bring ethylene oxide-specific information from both the NATA and AirToxScreen assessments into one place. 

The Ethylene Oxide Explorer tool maps not only cancer risks from the highest impacted census tracts from both NATA and AirToxScreen, it also shows ethylene oxide emissions from facilities that, according to EPA, also contribute to said risk. One can also compare emissions between facilities and over time, e.g., say you were interested in understanding how emissions from a facility near you have changed over time compared to another facility in a different state. Lastly, all the data used to develop the dashboard can also be viewed in a table format. 

I have other modules and capabilities I would like to build into this tool but am swamped with other projects at the time. If you would like to collaborate or have ideas on how to improve, please do email me using info provided in the [CV](/cv/) or via the [contact form](/contact/). 

*Full disclosure: I have been retained by clients to test and implement technologies to control ethylene oxide emissions. I am also involved in a litigation project supporting client on this matter. [See here](/project/) for more details.*