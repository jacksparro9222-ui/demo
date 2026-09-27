export type Story = {
  title: string;
  date: string;
  iso: string;
  category: string;
  summary: string;
  source: string;
};

const records: Story[] = [
  {
    title: "Grant for Team Tech Infinity at the FIRST Global Challenge",
    date: "7 September 2026",
    iso: "2026-09-07",
    category: "CSR",
    summary:
      "The Group extended a grant to Team Tech Infinity, a five-member student robotics team from Goa representing India at the FIRST Global Challenge 2026 in Incheon, from 7 to 10 October. The team — Anam Raza, Sparsh Swapnesh Verlekar, Dhruv Samir Salgaonkar, Soham Mahesh Redkar and Avaneesh Devendra Phadte — won the Vikram Sarabhai Award for National Excellence at Bharatiya Yantra Khel Mahotsav 2026. The 2026 game is “Igniting Innovation”.",
    source:
      "https://www.dempos.com/dempo-group-extends-grant-to-student-robotics-team-from-goa-for-south-korea-challenge/",
  },
  {
    title: "The Language of Perseverance",
    date: "31 August 2026",
    iso: "2026-08-31",
    category: "Education",
    summary:
      "The fifth Spell Bee, organised by The Navhind Times with the BBA department of Srinivassa Sinai Dempo College, Autonomous, ran from 18 to 21 August at the Cujira campus. Nearly 1,400 students from Classes VIII–IX and XI–XII took part. Spell Bee is described as the only competition of its kind in the state.",
    source: "https://www.dempos.com/the-language-of-perseverance/",
  },
  {
    title: "Dempo Incubation Centre for Venture Acceleration",
    date: "2 July 2026",
    iso: "2026-07-02",
    category: "Education",
    summary:
      "Srinivassa Sinai Dempo College (Autonomous), Cujira, received a grant under the Goa Startup Policy 2025 to establish the Dempo Incubation Centre for Venture Acceleration (DIVA). The scheme provides a one-time capital grant of up to ₹10 lakh and an operational grant of up to ₹3 lakh a year for three years. Focus areas named in the report are sustainability and equal opportunity, sports and health, social impact and education, and the blue economy.",
    source:
      "https://www.dempos.com/ss-dempo-college-receives-grant-for-startup-incubation-centre/",
  },
  {
    title: "Five Navhind Times journalists win GUJ awards",
    date: "26 May 2026",
    iso: "2026-05-26",
    category: "Media",
    summary:
      "Diana Fernandes, Wahab Khan, Upendra Naik, Bhiva Parab and Hemant Parab won Goa Union of Journalists awards. Fernandes was selected for investigative journalism, for “Brexit fallout: Goans seek greener pastures in EU”, an award instituted in honour of Lambert Mascarenhas. Khan won for environmental journalism. Parab (Bhiva) won for art and culture, 2024. Naik won for video journalism in 2023 and 2024, and for environmental journalism in 2024. Photographer Hemant Parab won for photojournalism. Winners were chosen from over 200 entries for 2023, 2024 and 2025.",
    source: "https://www.dempos.com/five-navhind-times-journalists-win-guj-awards/",
  },
  {
    title: "Dempo Challengers win the Badminton Pro League",
    date: "14 May 2026",
    iso: "2026-05-14",
    category: "Sport",
    summary:
      "Dempo Challengers completed an unbeaten debut to win the Badminton Pro League 2026, defeating Prassa Challengers 120–104 in the final at the Indoor Stadium, Campal, Panaji. Rushin Joshi and Mukesh Gauns were named Impact Pair of the playoff stage. Soham Naik, Malaika Lobo and Sudhanva Udupa won MVP awards.",
    source: "https://www.dempos.com/dempo-challengers-win-badminton-pro-league-2026/",
  },
  {
    title: "Admissions for PGDM AI² at Dempo AI Business School",
    date: "13 May 2026",
    iso: "2026-05-13",
    category: "Education",
    summary:
      "Admissions were announced for the PGDM AI² programme at Dempo AI Business School, Srinivasa Sinai Dempo College, Cujira, for 2026–27. The programme is AICTE approved, with the degree awarded by Goa University, in full-time and weekend formats. Specialisations named: Marketing, Human Resource Management and Finance.",
    source:
      "https://www.dempos.com/admissions-open-for-pgdm-ai%C2%B2-programme-at-srinivasa-sinai-dempo-college/",
  },
  {
    title: "Dempo Vishwa Gramshala closes a three-year school engagement",
    date: "12 May 2026",
    iso: "2026-05-12",
    category: "CSR",
    summary:
      "Dempo Vishwa Gramshala, a programme of the Vasantrao Dempo Education and Research Foundation, completed a three-year engagement begun in 2023 with Government High School Kasarpal, a PM Shri school, and Government High School Sal in Bicholim, in collaboration with the Directorate of Education. Work covered infrastructure, learning spaces, sports facilities and student engagement.",
    source:
      "https://www.dempos.com/dvg-completes-engagement-with-government-schools-at-kasarpal-and-sal/",
  },
  {
    title: "A new Dempo Vishwa Gramshala adoption, 2026–2029",
    date: "30 July 2026",
    iso: "2026-07-30",
    category: "CSR",
    summary:
      "After the 2023–2026 programme, Dempo Vishwa Gramshala adopted Government High School Kirlawada, Chimbel, and the aided Ideal High School, Piligao. An MoU with the Directorate of Education was signed in March 2026, for a projected tenure of 2026–2029. The report describes early campus works aimed at teaching and learning spaces, using repaired and reused resources.",
    source: "https://www.dempos.com/dvg-q1-progress-at-ghs-chimbel-and-ihs-piligao/",
  },
  {
    title: "Dempo PACE results in IIT-JEE Mains, Session 1",
    date: "20 February 2026",
    iso: "2026-02-20",
    category: "Education",
    summary:
      "Students of Dempo Higher Secondary School of Science (Dempo PACE), Miramar, recorded percentiles above 99 in IIT-JEE Mains Session 1, 2026. Pratham Sinai Navelkar led the institute at 99.56, followed by Achintya Saxena at 99.52, Pramit Mahajan at 99.28 and Joy Kakodkar at 99.05. At the Panaji centre, eleven of thirty-nine students scored above the 90th percentile.",
    source:
      "https://www.dempos.com/dempo-pace-students-record-strong-performance-in-iit-jee-mains-session-1/",
  },
  {
    title: "Top Goa ranks at JEE and NEET 2025",
    date: "14 October 2025",
    iso: "2025-10-14",
    category: "Education",
    summary:
      "Dempo-PACE reported Rishabh Talwadker as Goa state topper in NEET with 616/720, Rohan Keni as Goa state topper in IIT-JEE Mains 2025 with Advanced AIR 1343, Yuvi Sinai Surlakar with NEET 575/720, and Aadi Pai Kuchelkar with JEE Advanced AIR 5520. Programmes are offered at Panaji and Margao.",
    source: "https://www.dempos.com/top-ranks-in-goa-at-iit-jee-mains-advanced-and-neet-2025/",
  },
  {
    title: "Support for para-footballer Niklesh Pednekar",
    date: "3 September 2025",
    iso: "2025-09-03",
    category: "Sport",
    summary:
      "Through the Group’s sports policy, Dempo supported Goa para-footballer Niklesh Pednekar, named to represent India at the West Asian Football Championship, with an advanced prosthetic blade. At Dempo House, chairman Shrinivas Dempo presented a cheque, joined by HR head Arvind Kuri and Tinkesh and Sydenstrica Gautam of the Tinkesh Ability Foundation. Shrinivas Dempo said: “Let what has happened remain in the past, don’t let it take away from your future.”",
    source: "https://www.dempos.com/dempo-group-supports-para-footballer-niklesh-pednekar/",
  },
  {
    title: "A 10-tonne bollard-pull tug leaves the Bainguinim yard",
    date: "18 December 2024",
    iso: "2024-12-18",
    category: "Shipbuilding",
    summary:
      "Dempo Shipbuilding & Engineering launched a 10T bollard-pull tug on air bags at Bainguinim, Old Goa, built for Reach Asia, Kolkata. The tug is 20 metres long, 7.5 metres in breadth and 2 metres in draft.",
    source: "https://www.dempos.com/dsepl-launches-10t-bollard-pull-tug/",
  },
  {
    title: "Inspiring Educational Institution Award 2026",
    date: "26 January 2026",
    iso: "2026-01-26",
    category: "Education",
    summary:
      "Srinivassa Sinai Dempo College, Autonomous, Cujira, received the Inspiring Educational Institution Award 2026 from the Vibrant Goa Foundation. Shri Mauvin Godinho, Minister for Industries, presented it. The report cites programmes in commerce, economics, management, artificial intelligence and aviation, and quotes principal Prof. (Dr.) Manoj S. Kamat crediting staff, students, parents and the management.",
    source:
      "https://www.dempos.com/ss-dempo-college-of-commerce-and-economics-and-goa-chamber-of-commerce-industry-submit-draft-on-retail-policy-for-the-state-2/",
  },
  {
    title: "Girija Dempo visits Dempo Vishwa Gramshala schools",
    date: "9 September 2025",
    iso: "2025-09-09",
    category: "CSR",
    summary:
      "The report names Girija Dempo as Executive Assistant to the Chairman and describes her visit on 8 August 2025 to Government High School Sal, Government High School Kasarpal and Government Primary School Kasarpal. It calls 2025–26 the final year of that adoption and says the programme would sponsor events and a marble plaque before a new memorandum.",
    source: "https://www.dempos.com/ms-girija-dempo-visits-dvgs-adopted-schools/",
  },
  {
    title: "Aarush Pawaskar named a Dempo goodwill ambassador",
    date: "23 June 2025",
    iso: "2025-06-23",
    category: "Sport",
    summary:
      "Goa Carbon announced badminton player Aarush Pawaskar as a Dempo goodwill ambassador. The note says he won silver at the France Open under-17 championship in February 2025, trains under Uttsav Mishra in Bengaluru, and that Goa Carbon had supported him since 2023–24.",
    source:
      "https://www.dempos.com/goa-carbon-ltd-appoints-aarush-pawaskar-as-dempo-goodwill-ambassador/",
  },
  {
    title: "Blood donation on Vasudeva V. Dempo’s 25th death anniversary",
    date: "28 November 2024",
    iso: "2024-11-28",
    category: "CSR",
    summary:
      "On 28 November 2024 the Group held a blood donation drive at Dempo House for the 25th death anniversary of former chairman Vasudeva V. Dempo.",
    source: "https://www.dempos.com/honouring-a-legacy-of-compassion/",
  },
  {
    title: "Goa Carbon awards a flue-gas desulphurisation contract",
    date: "11 November 2024",
    iso: "2024-11-11",
    category: "Goa Carbon",
    summary:
      "Goa Carbon awarded Thermax a contract for a flue-gas desulphurisation system for calcined petroleum coke kiln off-gases, aimed at removing more than 90 percent of SO₂. The report also notes a research agreement with BITS Pilani, Goa Campus, and a pursuit of GreenCo certification.",
    source: "https://www.dempos.com/gcl-to-install-cutting-edge-fgd-unit/",
  },
  {
    title: "Dempo SC wins the FC Bayern Youth Cup India",
    date: "18 September 2024",
    iso: "2024-09-18",
    category: "Sport",
    summary:
      "Dempo SC won the FC Bayern Youth Cup India 2024 at the GMC Athletic Stadium, Goa, finishing on 21 points without conceding. Favio Martins, Tanuj Singh, Pradip Kullu and Jonathan Silva were selected for the side travelling to Munich.",
    source: "https://www.dempos.com/dempo-sc-wins-fc-bayern-youth-cup-india-2024/",
  },
  {
    title: "Goa Challengers defend the Ultimate Table Tennis title",
    date: "13 September 2024",
    iso: "2024-09-13",
    category: "Sport",
    summary:
      "Goa Challengers beat Dabang Delhi TTC 8–2 to become the first team to defend an Ultimate Table Tennis title. The report names Harmeet Desai and Yangzi Liu among the players and says the win brought pride to the Dempo Group. The final was at the Jawaharlal Nehru Indoor Stadium.",
    source: "https://www.dempos.com/goa-challengers-become-first-team-to-defend-their-utt-title/",
  },
  {
    title: "Sponsorship for swimmer Aarohi Borde",
    date: "10 September 2024",
    iso: "2024-09-10",
    category: "CSR",
    summary:
      "Chairman Shrinivas Dempo presented a one-time sponsorship to Goan swimmer Aarohi Nilesh Borde. The report says Sharmila Prabhu, Senior General Manager, Finance and Taxation, and Dr. Krishna Gopal Rajanala, General Manager, HR, were present.",
    source: "https://www.dempos.com/sponsorship-for-upcoming-goan-aquatics-champion-aarohi-borde/",
  },
  {
    title: "Goa Carbon introduces gcarb+",
    date: "29 June 2024",
    iso: "2024-06-29",
    category: "Goa Carbon",
    summary:
      "Goa Carbon launched gcarb+, a branded recarburiser and carbon additive. The announcement names chairman Shrinivas V. Dempo and Anupam Misra, executive director, and states a combined annual capacity of 308,000 metric tonnes. The company page still prints 240,000. [Placeholder: client to confirm] the current figure.",
    source:
      "https://www.dempos.com/goa-carbon-limited-introduces-gcarb-to-revolutionise-the-recarb-business/",
  },
  {
    title: "Dempo Sports Club returns to the I-League",
    date: "29 April 2024",
    iso: "2024-04-29",
    category: "Sport",
    summary:
      "Dempo SC returned to the I-League after nine years, finishing second. The report describes a 3–1 win over Sudeva Delhi FC at the Ella ground in Old Goa, with goals from Laximanrao Rane, Rahul Paswan and Shubham Rawat.",
    source: "https://www.dempos.com/dempo-sports-club-is-back-in-the-i-league-after-9-years/",
  },
  {
    title: "Founder’s anniversary marked at Dempo House",
    date: "14 March 2024",
    iso: "2024-03-14",
    category: "The house",
    summary:
      "On 4 March 2024 chairman Shrinivas Dempo garlanded the founder’s statue at the head office. Pallavi Dempo and Yatish Dempo attended. The post is titled as a numbered birth anniversary. The year of birth is not repeated here. [Placeholder: client to confirm]",
    source: "https://www.dempos.com/108th-birth-anniversary-of-our-group-founder/",
  },
  {
    title: "Devashri announces Florenza at Arpora",
    date: "8 January 2024",
    iso: "2024-01-08",
    category: "Real estate",
    summary:
      "Devashri announced Florenza at Arpora, described as 1 and 2 BHK apartments. The note points readers to devashrigroup.com for project details and does not give a completion date.",
    source: "https://www.dempos.com/devashris-florenza-at-arpora-goa-1-2-bhk-apartments/",
  },
];

export const stories: Story[] = records.sort((a, b) => (a.iso < b.iso ? 1 : a.iso > b.iso ? -1 : 0));

export const podcasts = {
  insights: {
    title: "Insights of Masters",
    source: "https://www.dempos.com/news-and-updates/insights-of-masters-podcast/",
    episodes: [
      { title: "Autism is my superpower, with Pranav Bakshi", date: "8 September 2026" },
      { title: "Driving innovation in robotics, with Shailendra Salvi of Yaskawa India", date: "11 May 2026" },
      { title: "Designing change, with Dr Anjlee Agarwal", date: "30 March 2026" },
      { title: "Crafting emotion in a bottle, with master perfumer Rajiv Sheth", date: "8 September 2025" },
      { title: "The Parsi Gara heritage, with Zenobia S. Davar", date: "10 August 2025" },
      { title: "Leaving the nest, with Ramya Sundarajan of WeLive Foundation", date: "14 May 2025" },
      { title: "Reclaiming calm with Vedic meditation, with Sam Wysock-Wright", date: "24 January 2025" },
    ],
  },
  brandMagic: {
    title: "Brand Magic",
    source: "https://www.dempos.com/news-and-updates/brand-magic-podcast/",
    episodes: [
      { title: "Gayatri Rattha, Minus Thirty", date: "14 April 2026" },
      { title: "Kedar Chitale, Chitale Bandhu Mithaiwale", date: "19 October 2025" },
      { title: "Dr Avanti Kumar Singh", date: "15 June 2025" },
      { title: "Tanmay Bakshi", date: "31 May 2025" },
      { title: "S. Mukund Kamath, Ideal Icecream", date: "12 January 2025" },
      { title: "Devavrat Kamat, Café Madras, Mumbai", date: "12 October 2024" },
      { title: "Vicram Sharma, Baidyanath Group", date: "19 May 2024" },
      { title: "Zenia K. Patel, Parsi Dairy Farm", date: "26 February 2024" },
    ],
  },
};
