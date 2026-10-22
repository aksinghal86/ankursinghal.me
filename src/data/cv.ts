// The CV, as data. Edit here; the CV page, and its print/PDF view, update together.
// Keep case details general: chemicals and the kind of work, not clients or parties.

export const profile = [
  `Ankur Singhal is an environmental health scientist specializing in quantitative exposure science. He combines exposure assessment with data collection, data analytics, and machine learning to give clients end-to-end risk assessment. He has designed field studies, simulation studies, and exposure reconstructions to generate data; built mathematical and machine learning models to characterize and predict exposures; and performed human health risk assessments.`,
  `He also builds interactive software, including web applications and dashboards, for clients and the public, and has been a driver of new technology adoption at his firm. He publishes in peer-reviewed journals and presents at meetings of the American Industrial Hygiene Association (AIHA), Society for Risk Analysis (SRA), International Society of Exposure Science (ISES), Society of Toxicology (SOT), and Product Stewardship Society.`,
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

export interface Job {
  org: string;
  title: string;
  when: string;
  bullets: string[];
}

export const experience: Job[] = [
  {
    org: 'Environmental Health & Engineering (EH&E)',
    title: 'Senior Scientist, Analytics group',
    when: 'October 2020 to present',
    bullets: [
      'Provides litigation support for PFAS contamination of drinking water, including source attribution using PCA, clustering, and other statistical methods; toxicology, epidemiology, and regulatory review; and interactive mapping tools. Built data collection and processing systems used to support water system claims in the AFFF settlements.',
      'Evaluates ethylene oxide cancer risk: the basis of EPA\'s IRIS value and the NIOSH model behind it, NATA and AirToxScreen results, emissions inventory and ambient monitoring data, and cancer registry incidence near facilities. Built a public dashboard of emissions and modeled risk.',
      'Built a litigation data platform that integrates 1,4-dioxane, VOC, and PFAS results from multiple laboratories, and designs the sampling and analysis plans that follow from it.',
      'Analyzes lead exposure: airborne lead and children\'s blood lead near a smelter, and water lead levels by service line material under the Lead and Copper Rule.',
      'Reconstructs historical asbestos exposure from construction products, and studies the airborne transport of fibers released from asbestos cement pipe.',
      'Analyzes the carbon emissions trajectories of buildings under disclosure and performance standards, using clustering on a decade of reported data.',
      'Researches, develops, and promotes new technology within the firm: moving code to GitHub, cloud computing, and interactive web tools in R Shiny, Flask, Django, and React. Works with language model tools and agent workflows for analysis and report review.',
      'Modeled COVID-19 transmission in airplanes, airports, buildings, and schools, and built Tableau dashboards of local statistics for communities.',
      'Supports other litigation matters, from one-off analyses to full exposure assessments, report writing, expert critique, and responses to Daubert challenges. Continues Proposition 65 assessments for existing clients.',
    ],
  },
  {
    org: 'Paustenbach and Associates',
    title: 'Senior Analytics Scientist',
    when: 'April 2020 to October 2020',
    bullets: [
      'Assessed risk from radionuclide contamination of soil and groundwater at a CERCLA site, including potential exposure of the nearby community.',
      'Evaluated PFOA, PFOS, formaldehyde, and asbestos. Continued Proposition 65 assessments.',
    ],
  },
  {
    org: 'Empirical Solutions Consulting, LLC',
    title: 'Principal Consultant',
    when: 'July 2019 to April 2020',
    bullets: [
      'Founded a consultancy supporting other firms with litigation support, software development, and data analysis.',
      'Evaluated lead exposure of a community near a smelter using air dispersion modeling and statistical methods to predict the probability of exposure in space and time, and conducted personalized exposure assessments.',
      'Built a web tool that predicts indoor formaldehyde exposure from a published emissions model.',
      'Built a recommendation system for rock climbers: a database of climbs built with natural language processing of route descriptions and comments (bag of words, TF-IDF, sentiment analysis), and recommendation models (content filtering, collaborative filtering, neural networks) that predict a climber\'s preference for a route.',
    ],
  },
  {
    org: 'Exponent, Inc.',
    title: 'Managing Scientist, Health Sciences group',
    when: 'January 2013 to May 2019',
    bullets: [
      'Promoted from Scientist to Managing Scientist in six years, one of the youngest in the group to do so.',
      'Led an extensive sampling program on formaldehyde emissions from laminate flooring and built a bi-exponential emissions model. The work was published in the peer-reviewed literature and presented to the U.S. Consumer Product Safety Commission.',
      'Created quality control and quality management programs for Fortune 500 companies to maintain compliance with consumer product regulations, including CPSIA and California Proposition 65.',
      'Consulted on risk assessment, environmental and occupational toxicology, PBPK modeling, environmental fate and transport, air pollution, odor abatement, and ventilation engineering in toxic tort cases and regulatory matters.',
      'Assessed health risk from chemicals in water, sediment, ambient air, food, soil, the workplace, and consumer products, and from hazardous waste sites, landfills, and manufacturing processes.',
      'Developed methods for estimating allergic contact dermatitis risk from wearable devices, now published.',
      'Interacted regularly with local, regional, state, and federal regulatory agencies.',
    ],
  },
];

export const otherWork = [
  'PBPK model for malathion, updated using in vivo human data (published).',
  'Deep learning for air quality: predicting air quality at any location from low-cost sensor data, weather, and photographs.',
  'Quality assessment and control programs that help consumer product companies manage Proposition 65 and CPSIA compliance.',
  'Evaluation of a claim that airborne dust from a former Naval site posed a cancer hazard to nearby residents.',
  'Ad hoc data analysis for construction, utility, and consumer products companies.',
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
  'Bogen KT, Lewis RC, Singhal A, Sheehan P. 2020. Development of a novel method for estimating dermal contact with hand-applied cleaning solutions. Environmental Monitoring and Assessment 192:157.',
  'Sheehan P, Singhal A, Bogen KT, MacIntosh D, Kalmes RM, McCarthy J. 2018. Potential exposure and cancer risk from formaldehyde emissions from installed Chinese manufactured laminate flooring. Risk Analysis. doi:10.1111/risa.12926',
  'Singhal A, Posson M, Kalmes R, Gauthier A, Lewis R, Schenk J, Goswami E, Sheehan P. 2018. Proposition (Prop) 65 risk assessment. In: G Hart (Ed), Professional Practices of Product Stewardship (pp. 423-427). Falls Church, VA: Product Stewardship Society.',
  'Singhal A, Bogen KT, Sheehan P. 2018. Wearable devices. In: G Hart (Ed), Professional Practices of Product Stewardship (pp. 428-433). Falls Church, VA: Product Stewardship Society.',
  'Bogen KT, Singhal A. 2016. Malathion dermal permeability in relation to dermal load: assessment by PBPK modeling of in vivo human data. Journal of Environmental Science and Health, Part B.',
  'Marconett CN, Singhal A, Sundar SN, Firestone GL. 2012. Indole-3-carbinol disrupts estrogen receptor-alpha dependent expression of insulin-like growth factor-1 receptor and insulin receptor substrate-1 and proliferation of human breast cancer cells. Molecular and Cellular Endocrinology 363:74-84.',
  'Marconett CN, Morgenstern TJ, San Ramon AK, Sundar SN, Singhal A, Firestone GL. 2010. BZL101, a phytochemical extract from Scutellaria barbata plant, disrupts proliferation of human breast and prostate cancer cells through distinct mechanisms dependent on the cancer cell phenotype. Cancer Biology and Therapy 10:397-405.',
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
