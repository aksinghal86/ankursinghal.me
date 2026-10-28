---
title: "Filing PFAS claims for 1,850 water systems was a data problem"
description: What I learned building the data side of AFFF settlement claims for more than 1,850 public water systems, most of them very small.
date: 2026-10-28
tags: [PFAS, AFFF, drinking water, data]
draft: true
---

For the last three years, a big part of my job has been helping public water systems file claims in the AFFF settlements. AFFF is the firefighting foam at the center of the PFAS litigation, and the settlements with its manufacturers pay water systems that found PFAS in their drinking water sources. Our team at EH&E has now filed claims for 1,857 water systems.

I came into this thinking of it as a claims job. It turned out to be a data job.

## Most of these systems are tiny

When people hear "water system," they picture a city utility. A few of ours are exactly that. But when I matched our list against EPA's Safe Drinking Water Information System (SDWIS), the national database of public water systems, the median system we filed for serves 175 people.

The spread is huge:

- 1,468 of the systems serve fewer than 3,300 people each. Together they serve about 460,000 people.
- 51 systems serve 100,000 people or more. Those 51 account for about two-thirds of the roughly 26 million people served by every system we filed for.

That split shaped the whole job. A large utility has a lab contract, a compliance staff, and decades of organized sampling results. A mobile home park or a small campground has whatever the operator kept. Both get the same claim form.

## What a claim asks for

Each settlement asks a version of the same questions. Is this a public water system that qualifies? Which of its sources were tested for PFAS, when, and what was found? How much water does each source produce?

Answering those means going back through lab reports and production records that are incomplete, inconsistent, and sometimes decades old, then checking each source against that settlement's eligibility rules. The rules aren't the same across settlements. Some turn on system size, some on whether the system had to test under EPA's fifth Unregulated Contaminant Monitoring Rule (UCMR 5), some on when PFAS was measured. A system can qualify for one settlement and not the next.

Doing that once is careful work. Doing it for 1,857 systems, more than 5,300 drinking water sources, and several settlements with different deadlines is where a spreadsheet stops being enough.

## What we built

So we treated it as a data problem from the start. We built:

- An online intake tool, so water providers could send their information and documents directly instead of by email.
- Screening methods that check lab reports and production data against each settlement's criteria.
- A data pipeline that standardizes records from systems that keep them in very different ways.
- Dashboards that track every system and every source, so we could see where each claim stood and what was still missing.

None of that replaced the people. Behind it were hundreds of calls with water providers, a lot of document review, and judgment calls about what each system's data actually showed and what it could support. [YOUR EXPERIENCE: one concrete example of a judgment call or a records problem, anonymized, if you want one here.] What the infrastructure did was make that judgment consistent across nearly two thousand systems, and let a team of about ten keep track of it all.

## What the data can't tell you

The population numbers come from SDWIS and are only as good as what each system reports to its state. They count people served, not people exposed, and a system with a claim may have had a single low detection in one well. Eligibility under a settlement is a legal test. It isn't a health finding.

## What's next

More AFFF manufacturers have settled with water systems since the first rounds: Carrier, Archroma, Amerex, and National Foam. [CHECK: current approval status and claim deadlines for these settlements, with a link to the official settlement site.] We're working up and filing claims in those now. Personal injury claims are expected to follow the water system settlements, and much of the same infrastructure will carry over.

If you represent water systems in these settlements and want to compare notes on the data side, [get in touch](/contact).
