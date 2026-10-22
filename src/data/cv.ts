// The CV, as data. Edit here; the CV page, and its print/PDF view, update together.
// Keep case details general: chemicals and the kind of work, not clients or parties.

export const profile = [
  `Ankur Singhal is an environmental health scientist with more than a decade of experience in exposure and risk assessment, toxicology, industrial hygiene, and regulatory evaluations, including California's Proposition 65. He has led large, multidisciplinary teams on complex litigation and regulatory matters.`,
  `He brings a rigorous, data-driven approach to public and occupational health, combining field studies, simulation modeling, and quantitative exposure reconstruction across a broad range of environmental contaminants. He is also a full-stack developer who builds custom software tools for clients and dashboards for data analysis and visualization.`,
  `He is a published author and frequent conference speaker, with work in Environmental Monitoring and Assessment, Risk Analysis, and Professional Practices of Product Stewardship.`,
];

export const education = [
  { degree: 'M.A., Endocrinology', school: 'University of California, Berkeley', year: '2011' },
  { degree: 'B.A., Molecular and Cell Biology', school: 'University of California, Berkeley', year: '2008' },
];

export const societies = [
  'Society for Risk Analysis (SRA)',
  'American Industrial Hygiene Association (AIHA), Risk Assessment Committee 2018 to 2020',
  'Product Stewardship Society (PSS), Credentialing Committee 2018 to 2020; chapter author, Professional Practices of Product Stewardship (2019)',
  'Society of Toxicology (SOT)',
  'Society of Environmental Toxicology and Chemistry (SETAC)',
  'International Society of Exposure Science (ISES)',
];

export interface Position {
  title: string;
  org: string;
  when: string;
  note?: string;
}

export const positions: Position[] = [
  { title: 'Principal Scientist, Advanced Analytics', org: 'Environmental Health & Engineering, Inc. (EH&E)', when: '2024 to present' },
  { title: 'Senior Scientist, Advanced Analytics', org: 'Environmental Health & Engineering, Inc. (EH&E)', when: '2020 to 2024' },
  { title: 'Senior Analytics Scientist', org: 'Paustenbach and Associates', when: '2020' },
  {
    title: 'Owner and Principal Consultant',
    org: 'Empirical Solutions Consulting, LLC',
    when: '2019 to 2020',
    note: 'Founded a consulting company providing subcontractor services in industrial hygiene, Proposition 65 evaluations, exposure assessment, and litigation support. Also delivered ad hoc data analysis and full-stack software development for construction firms, utility providers, and consumer product manufacturers.',
  },
  { title: 'Managing Scientist', org: 'Exponent, Inc.', when: '2017 to 2019' },
  { title: 'Senior Scientist', org: 'Exponent, Inc.', when: '2015 to 2017' },
  { title: 'Scientist', org: 'Exponent, Inc.', when: '2013 to 2015' },
];

// Selected experience, by topic. Keep to chemicals and the kind of work; no clients, parties, or case figures.
export const selectedExperience = [
  `Led scientific support for litigation over lead in a community's drinking water. Analyzed several years of residential tap water samples, conducted exposure assessments, modeled estimated blood lead levels, and performed risk assessments.`,
  `Managed a multi-year effort, with a team of more than ten, to prepare and file drinking water claims for water providers across the U.S. in the national PFAS settlements with 3M, DuPont, Tyco, and BASF. Oversaw data collection and validation, and built a custom web platform to gather, manage, and visualize data for court filings and client engagement.`,
  `Led evaluations of PFAS (PFOA, PFOS, and short-chain compounds), including toxicology, epidemiology, transport and fate, and regulatory benchmarks such as EPA MCLs. Supported work on the largest drinking water settlement in U.S. history.`,
  `Analyzed PFAS in water, soil, and sediment using principal component analysis and unsupervised clustering. Created interactive dashboards with geospatial overlays and time series plots.`,
  `Evaluated exposure to ethylene oxide from sterilization facilities using dispersion modeling, site sampling data, and community- and individual-level risk assessments. Developed an interactive cancer risk dashboard from EPA's NATA and AirToxScreen data.`,
  `Evaluated the basis of EPA's 2016 IRIS cancer potency factor for ethylene oxide: the toxicology and epidemiology EPA relied on, and the NIOSH model used to estimate historical exposures. Analyzed cancer registry and ambient air monitoring data near ethylene oxide emitters.`,
  `Built a data platform that integrates 1,4-dioxane, VOC, and PFAS results from multiple laboratories, with a map-based dashboard, and designed the sampling and analysis plans that follow from it.`,
  `Analyzed the relationship between ambient air lead and children's blood lead near a smelter, using mixed-effects and regression models.`,
  `Reconstructed historical exposure to asbestos from construction products, and studied how fibers released by cutting asbestos cement pipe travel through the air.`,
  `Built geospatial models for PCB contamination from spill events, and dashboards to communicate findings to legal teams and communities.`,
  `Conducted exposure assessments after a coal ash spill, quantifying exposure to lead, arsenic, and silica using environmental and biological sampling, site health and safety plan review, and individual exposure histories.`,
  `Led formaldehyde exposure assessments for laminate flooring in homes. Designed and managed large sampling programs, including environmental chamber testing and in-home emission measurements, and developed models of emission decay. Findings were presented to the U.S. Consumer Product Safety Commission and published.`,
  `Conducted hundreds of California Proposition 65 assessments across consumer and food products, focused on lead, cadmium, phthalates, bisphenol A, acrylamide, and formaldehyde.`,
  `Designed software tools and screening methods to assess product inventories of more than 100,000 items for Proposition 65-listed chemicals, supporting clients entering the California market or e-commerce platforms.`,
  `Assessed health risk from widespread radionuclide contamination of groundwater and soil at a CERCLA site.`,
  `Evaluated exposure of workers and homeowners to silica emitted during tile cutting.`,
  `Evaluated claims that airborne dust from a former Naval site posed a cancer hazard to nearby residents, including exposure to lead, arsenic, and cadmium from dust moving into homes.`,
  `Developed methods for assessing allergic contact dermatitis risk from wearable devices, which have unusual materials and regulatory context. Published.`,
  `Updated a PBPK model for malathion using in vivo human data. Published.`,
  `Analyzed the carbon emissions trajectories of buildings in Boston and Cambridge under disclosure and performance standards, using clustering on eleven years of reported data.`,
  `Contributed to deterministic and stochastic models of SARS-CoV-2 transmission in grocery stores, restaurants, airplanes, and airports, and to dashboards tracking transmission across the U.S. and in local schools, universities, and communities.`,
  `Built a publicly available climbing route recommendation engine using natural language processing, collaborative filtering, SVD, and neural networks, with a supporting API and mobile app.`,
];

export const skills = [
  { area: 'Programming and scripting', items: 'R (Shiny, ggplot2, tidyverse, tidymodels), Python (pandas, scikit-learn, TensorFlow), SQL, JavaScript, HTML and CSS' },
  { area: 'Data analysis and modeling', items: 'Generalized linear models, Bayesian inference, Monte Carlo simulation, PCA' },
  { area: 'Geospatial analysis', items: 'QGIS, R (sf, terra), web-based interactive mapping with JavaScript, R, and Python' },
  { area: 'Visualization and dashboards', items: 'R Shiny, Plotly, Tableau; custom dashboards for litigation and client use' },
  { area: 'Data engineering and workflow', items: 'API development, web scraping, ETL pipelines, reproducible workflows (R Markdown, Jupyter, Git)' },
  { area: 'Cloud and DevOps', items: 'DigitalOcean, Heroku, GitHub Actions, Docker, basic CI/CD' },
  { area: 'Tools and platforms', items: 'Git, PostgreSQL' },
];

export const underReview = [
  'Transport of airborne asbestos fibers in the ambient air: effects of fiber type and debris binding on fiber dispersion. Submitted to Aerosol Science & Technology, 2026.',
];

export const preprints = [
  { title: 'Building sector carbon use trajectories under evolving disclosure and performance standards: an eleven-year analysis of Boston and Cambridge, Massachusetts, 2014 to 2024. SSRN preprint, August 2026.', url: 'https://papers.ssrn.com/abstract=7270660' },
];

export const inPreparation = [
  'Ambient air lead and blood lead in children in La Oroya, Peru.',
  'Water lead levels by service line material under the Lead and Copper Rule in Benton Harbor, Michigan.',
];

export const publications = [
  'Bogen KT, Lewis RC, Singhal A, Sheehan P. 2020. Development of a novel method for estimating dermal contact with hand-applied cleaning solutions. Environmental Monitoring and Assessment 192(3):157.',
  'Sheehan P, Singhal A, Bogen KT, MacIntosh D, Kalmes RM, McCarthy J. 2018. Potential exposure and cancer risk from formaldehyde emissions from installed Chinese manufactured laminate flooring. Risk Analysis 38(6):1128-1142. doi:10.1111/risa.12926',
  'Singhal A, Posson M, Kalmes R, Gauthier A, Lewis R, Schenk J, Goswami E, Sheehan P. 2018. Proposition (Prop) 65 risk assessment. In: Hart GA (Ed), Professional Practices of Product Stewardship (pp. 423-427). Falls Church, VA: Product Stewardship Society.',
  'Singhal A, Bogen KT, Sheehan P. 2018. Wearable devices. In: Hart GA (Ed), Professional Practices of Product Stewardship (pp. 428-433). Falls Church, VA: Product Stewardship Society.',
  'Bogen KT, Singhal A. 2017. Malathion dermal permeability in relation to dermal load: assessment by physiologically based pharmacokinetic modeling of in vivo human data. Journal of Environmental Science and Health, Part B 52(2):138-146. doi:10.1080/03601234.2016.1248150',
  'Marconett CN, Singhal A, Sundar SN, Firestone GL. 2012. Indole-3-carbinol disrupts estrogen receptor-alpha dependent expression of insulin-like growth factor-1 receptor and insulin receptor substrate-1 and proliferation of human breast cancer cells. Molecular and Cellular Endocrinology 363:74-84.',
  'Marconett CN, Morgenstern TJ, San Ramon AK, Sundar SN, Singhal A, Firestone GL. 2010. BZL101, a phytochemical extract from Scutellaria barbata plant, disrupts proliferation of human breast and prostate cancer cells through distinct mechanisms dependent on the cancer cell phenotype. Cancer Biology and Therapy 10(4):397-405.',
];

export const presentations = [
  'Schenk J, Singhal A, Scrafford C, Kalmes R. Emerging regulatory issues and exposure assessment of furfuryl alcohol (FFA). Joint Annual ISES/ISEE Meeting, Ottawa, Canada, August 26-30, 2018.',
  'Singhal A, Kalmes R, Posson M. 2018. Addressing chemical exposure from consumer products: lessons learned. 2nd Annual Product Stewardship Society Conference, Washington, DC, September 27-29, 2018.',
  'Singhal A, Kalmes R, Sheehan P. 2018. Lessons learned from formaldehyde sampling conducted in U.S. homes. American Industrial Hygiene Conference and Exposition (AIHce), Philadelphia, PA, May 2018.',
  'Singhal A. 2018. Determining compliance for Proposition 65. Webinar for the International Society of Primerus Law Firms.',
  'Singhal A. 2017. Oral (non-food-mediated) exposure to plastic product additives. European Chemicals Agency (ECHA) workshop on additives in plastics, Brussels, Belgium, November 7-8, 2017.',
  'Singhal A, Sheehan PJ. 2017. Consumer wearables: a new product stewardship challenge. 1st Annual Meeting of the Product Stewardship Society, Tampa, FL, November 2-4, 2017.',
  'Gauthier AM, Lewis RC, Bogen KT, Singhal A, Sheehan PJ. 2017. Wearable technology biocompatibility: a unique opportunity in green chemistry and engineering. 21st Annual Green Chemistry and Engineering Conference, Reston, VA, June 13-15, 2017.',
  'Lewis RC, Winegar E, Posson M, Gauthier AM, Singhal A, Sheehan PJ. 2017. Exposure to an ethanol-based cleaning product. American Industrial Hygiene Conference and Exposition, Seattle, WA, June 4-7, 2017.',
  'Singhal A, Bogen KT, Lewis RC, Gauthier AM, Winegar E, Sheehan PJ. 2017. A novel approach to estimating dermal contact with hand-applied cleaning solutions: a simulation study involving denatured alcohol. 56th Annual Meeting of the Society of Toxicology, Baltimore, MD, March 2017.',
  'Winegar E, Bogen KT, Lewis RC, Gauthier AM, Singhal A, Sheehan PJ. 2017. A use-simulation study of a denatured alcohol cleaning product to assess potential worker exposure. 56th Annual Meeting of the Society of Toxicology, Baltimore, MD, March 10-16, 2017.',
  'Singhal A, Posson M, Jones A, Lewis RC, Gauthier A, Schenk J, Kalmes R, Sheehan PJ. 2016. Assessing risk for consumer products under California\'s Proposition 65 regulations. 37th Annual Meeting of SETAC, Orlando, FL, November 6-10, 2016.',
  'Sheehan P, Singhal A, Bogen KT, Kalmes R. 2016. Evaluating the Proposition 65 health significance of formaldehyde exposures from Chinese manufactured laminate flooring. 55th Annual Meeting of the Society of Toxicology, New Orleans, LA, March 13-17, 2016.',
  'Singhal A, Bogen KT. 2016. How malathion dermal absorption varies with dermal load, based on physiologically based pharmacokinetic modeling of in vivo human data. 55th Annual Meeting of the Society of Toxicology, New Orleans, LA, March 13-17, 2016.',
  'Sheehan P, Lowney Y, Kalmes R, Bogen KT, Posson M, Glomski M, Singhal A, Volberg V, Beckerman B, Goswami E. 2015. Assessing user exposure to consumer products: methods specific to product use and exposure route to assess consumer health risk. 36th Annual Meeting of SETAC North America, Salt Lake City, UT, November 1-5, 2015.',
  'Kalmes R, Lowney Y, Sheehan P, Singhal A. 2015. Assessing incidental hand-to-mouth exposure to lead from consumer products. 36th Annual Meeting of SETAC North America, Salt Lake City, UT, November 1-5, 2015.',
  'Sheehan P, Bogen KT, Singhal A, Kalmes R, Volberg V. 2015. Wearable technology products and allergic contact dermatitis: chemical exposure and risk assessment challenges and developments. 36th Annual Meeting of SETAC North America, Salt Lake City, UT, November 1-5, 2015.',
  'Sheehan P, Bogen KT, Singhal A, Kalmes R, Roberts M, Fedoruk MJ. 2015. Wearable products and allergic contact dermatitis: a new risk assessment challenge. 54th Annual Meeting of the Society of Toxicology, San Diego, CA, March 22-26, 2015.',
  'Singhal A, Sheehan P, Turnham P, Bogen KT, Anderson E. 2014. Experimental comparison of dust concentrations from simulations in glove box and room chamber test environments. American Industrial Hygiene Association Annual Meeting, San Antonio, TX, May 31-June 5, 2014.',
  'Sheehan P, Posson M, Singhal A, Bogen KT, Hellerstein J. 2014. Assessing anthraquinone (AQ) exposure from food packaging: a product stewardship challenge in Europe. American Industrial Hygiene Association Annual Meeting, San Antonio, TX, May 31-June 5, 2014.',
  'Singhal A, Bogen KT. 2014. Benchmark dose analysis of NTP data on tumors induced in rodents chronically exposed to dietary anthraquinone. 53rd Annual Meeting of the Society of Toxicology, Phoenix, AZ, March 23-27, 2014.',
];
