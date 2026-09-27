import type { ImageMetadata } from "astro";
import paradeep from "../assets/photos/paradeep.jpg";
import conveyor from "../assets/photos/conveyor.jpg";
import hfl from "../assets/photos/hfl.jpg";
import shipyard from "../assets/photos/shipyard.jpg";
import tug from "../assets/photos/tug.jpg";
import press from "../assets/photos/press.jpg";
import goa365 from "../assets/photos/goa365.jpg";
import monarch from "../assets/photos/monarch.jpg";
import sunsand from "../assets/photos/sunsand.jpg";
import florenza from "../assets/photos/florenza.jpg";
import football from "../assets/photos/football.jpg";
import academy from "../assets/photos/academy.jpg";
import modest from "../assets/photos/modest.jpg";
import mandovi from "../assets/photos/hero-mandovi.jpg";
import wind from "../assets/photos/wind.jpg";
import gcarb from "../assets/photos/gcarb.jpg";

export type Fact = { label: string; value: string };

export type Business = {
  slug: string;
  name: string;
  kicker: string;
  lede: string;
  paragraphs: string[];
  facts: Fact[];
  image: ImageMetadata;
  imageAlt: string;
  imageCredit?: string;
  website?: { href: string; label: string };
  contact: string[];
  source: string;
  note?: string;
};

export const businesses: Business[] = [
  {
    slug: "goa-carbon",
    name: "Goa Carbon Limited",
    kicker: "Calcined petroleum coke",
    lede: "The Group’s featured company, and the second largest manufacturer of calcined petroleum coke in the country.",
    paragraphs: [
      "Goa Carbon Limited was established in 1967, on the company page. An older Group essay, The Good Earth, dates the concern to 1976. The company page describes a plant on each of India’s coasts, in Goa and at Paradeep, and a third in central India at Bilaspur, and puts installed capacity at 240,000 metric tonnes a year.",
      "Calcined petroleum coke, a pure form of carbon, is used to make anodes for aluminium smelting, as a carbon source in steel, and in speciality segments such as titanium dioxide and other chemicals. The company is listed on the Bombay Stock Exchange and the National Stock Exchange of India.",
      "The company page records ISO 9001 and ISO 14001 certification at all plants, laboratories for quality control, access to domestic and imported green petroleum coke, expertise in blending green cokes, and port-based plants serving export markets. Clients named on the Group site include domestic aluminium majors and international names such as Rio Tinto, Aluminium Pechiney and DUBAL, along with NALCO, HINDALCO, INDAL, TELCO, BHEL and Jindal Steel.",
      "In June 2024 the company introduced gcarb+, a branded recarburiser. That announcement names Anupam Misra as executive director and states a combined annual capacity of 308,000 metric tonnes. [Placeholder: client to confirm] which capacity figure is current. In November 2024 Goa Carbon awarded Thermax a contract for a flue-gas desulphurisation system aimed at removing more than 90 percent of SO₂ from kiln off-gases, reported a research agreement with BITS Pilani, Goa Campus, and said it was pursuing GreenCo certification. Goa Carbon has also supported chess player Bhakti Kulkarni, and in June 2025 named badminton player Aarush Pawaskar a Dempo goodwill ambassador.",
    ],
    facts: [
      { label: "Established", value: "1967 on the company page; 1976 in The Good Earth" },
      { label: "Plants", value: "Goa, Paradeep, Bilaspur" },
      { label: "Capacity, as published", value: "240,000 MT on the company page; 308,000 MT in June 2024" },
      { label: "Listings", value: "BSE and NSE" },
      { label: "Standards", value: "ISO 9001 and ISO 14001 at all plants" },
    ],
    image: paradeep,
    imageAlt: "The Paradeep plant of Goa Carbon Limited, with kiln and materials-handling structures.",
    website: { href: "http://www.goacarbon.com/", label: "goacarbon.com" },
    contact: [
      "Dempo House, Campal, Panaji, Goa 403001",
      "Phone: 0832-2441353 (direct), 2441300 (board)",
      "Fax: 0832-2427192 / 2228588 / 2225098",
      "head_mkt@goacarbon.com",
    ],
    source: "https://www.dempos.com/our-companies/goa-carbon-ltd/",
    note: "The company page also cites a turnover “touching Indian Rupees Four Thousand Two Hundred Million, equivalent to US $89 million in the fiscal year preceding the recent global economic downturn.” That figure is published with that qualifier and is not presented here as a current result.",
  },
  {
    slug: "hindustan-foods",
    name: "Hindustan Foods Limited",
    kicker: "Food processing",
    lede: "Still on the companies menu. [Placeholder: client to confirm] whether it remains a Group company after Vanity Case took a controlling stake in 2013.",
    paragraphs: [
      "Hindustan Foods Limited was established in 1988 when the Dempo Group entered FMCG through a joint venture with Glaxo India Limited, to manufacture nutritional food products.",
      "In 2013, Vanity Case Group bought a controlling stake. Since then the company has diversified across food and non-food FMCG, including personal care, home care, food and beverages, pest control, and leather shoes and accessories.",
      "An earlier Group account, The Good Earth, describes cereal-based baby foods, instant porridges, breakfast cereals and health drinks, with brand names Bonny Mix, Bonny Meal, Rozana and Morning Feast, and Farex made by arrangement. That account also records ISO 9001 compliance and HACCP certification by BVQI, and associations with Glaxo, Heinz and Dumex. Research and development at the foods business included an instant porridge formula with milk, fruits, nuts, dates, fibre, wheat and maize.",
    ],
    facts: [
      { label: "Established", value: "1988, joint venture with Glaxo India" },
      { label: "2013", value: "Vanity Case Group acquired a controlling stake" },
      { label: "Scope today, as published", value: "Food and non-food contract manufacturing" },
    ],
    image: hfl,
    imageAlt: "Interior of a Hindustan Foods production hall, with stainless vessels and overhead piping.",
    website: { href: "http://www.hindustanfoodslimited.com/", label: "hindustanfoodslimited.com" },
    contact: [
      "The Centrium, Level II, Phoenix Market City",
      "LBS Marg, Kurla (W), Mumbai 400 070",
      "Phone: +91 22 6180 1700",
      "business@thevanitycase.com",
    ],
    source: "https://www.dempos.com/our-companies/hindustan-foods-ltd/",
    note: "[Placeholder: client to confirm] The 2013 change of control is on the company page. The page does not state Dempo’s current stake.",
  },
  {
    slug: "shipbuilding",
    name: "Dempo Shipbuilding & Engineering",
    kicker: "Shipbuilding and repair",
    lede: "Two yards in Goa, on the Zuari at Undir, Bandora, and on the Mandovi at Bainguinim, Old Goa.",
    paragraphs: [
      "Dempo Shipbuilding & Engineering Pvt. Ltd. builds, converts, modernises and repairs vessels, including underwater repair. The yards include dry docking, jetties, a CAD centre, a prefabrication workshop, a slipway, a lathe and a bonded warehouse. The company is a member of the Confederation of Indian Industry and a signatory to the CII Model Code of Conduct for Ethical Business Practices.",
      "The company page records certification by the Indian Register Quality System to ISO 9001:2008, with accreditation by the Dutch Accreditation Council (RvA). Clients named across the Group site include the Indian Navy, Larsen & Toubro, the National Institute of Ocean Technology, Mundhra Port & SEZ, United Shippers, M. Pallonji, Jindal ITF and Adani Enterprises.",
      "In December 2024 the yard at Bainguinim launched a 10-tonne bollard-pull tug on air bags for Reach Asia, Kolkata. The tug measures 20 metres in length, 7.5 metres in breadth and 2 metres in draft. Earlier reports on the site cover a keel-laying for a 4,000-tonne floating dock for Goa Shipyard, and annual repairs of an Indian Coast Guard high-speed interceptor boat.",
    ],
    facts: [
      { label: "Yards", value: "Bainguinim, Old Goa (Mandovi); Undir, Bandora (Zuari)" },
      { label: "Slipway", value: "120 × 20 m, hydraulic winch of 20 tonnes" },
      { label: "Dry docks", value: "Two, each 90 × 18 m" },
      { label: "Outfitting quay", value: "120 m" },
      { label: "Fabrication", value: "Covered and open bays, monthly throughput over 150 tonnes" },
    ],
    image: shipyard,
    imageAlt: "A vessel under construction on the slipway at Dempo Shipbuilding.",
    website: { href: "http://www.demposhipbuilding.com", label: "demposhipbuilding.com" },
    contact: [
      "Bainguinim, Old Goa 403402, Goa",
      "Phone: 0832-2903612 / 2285328 / 2285469",
      "Fax: 0832-2284134",
      "marketing@dspl.co.in",
    ],
    source: "https://www.dempos.com/our-companies/dempo-shipbuilding-engineering-pvt-ltd/",
  },
  {
    slug: "modest-infrastructure",
    name: "Modest Infrastructure",
    kicker: "Shipbuilding, Gujarat",
    lede: "A subsidiary of Dempo Shipbuilding, with a working yard at the Old Port, Bhavnagar.",
    paragraphs: [
      "Modest Infrastructure Private Limited is a subsidiary of Dempo Shipbuilding & Engineering. Its head office is in Goa, with registered and liaison offices in Mumbai. The shipyard at the Old Port, Bhavnagar, Gujarat, covers about 67,000 square metres and is certified to ISO 9001:2008 by the Indian Registry of Quality Systems.",
      "The yard builds medium-sized vessels up to 8,000 dwt. Deliveries recorded on the company page include product tankers, oil tankers, offshore survey vessels and cement carriers, for international and domestic clients including the Indian Navy.",
      "The company page describes a second yard as under development at Ratanpar, Bhavnagar, on the Gulf of Khambhat, with a 1.3 km waterfront on 40 acres and plans to reclaim an adjoining 60 acres, for vessels up to 45,000 dwt. [Placeholder: client to confirm] whether that yard was built. News on the site includes a caisson gate for Mumbai Port Trust, contracts for Scorpene submarine pontoons and INS Vikrant pontoons, and a memorandum with the Government of Gujarat for a registered vehicle scrapping facility.",
    ],
    facts: [
      { label: "Working yard", value: "Old Port, Bhavnagar — about 67,000 sq m" },
      { label: "Build capacity, as published", value: "Up to 8,000 dwt" },
      { label: "Ratanpar yard", value: "[Placeholder: client to confirm]" },
    ],
    image: modest,
    imageAlt: "A vessel alongside the quay at Modest Infrastructure’s Bhavnagar yard.",
    website: { href: "http://www.modship.com/", label: "modship.com" },
    contact: [
      "Dempo House, Campal, Panaji, Goa 403001",
      "Phone: +91 832 2441300",
      "modship@modship.com",
      "Registered office: 203, Tulsiani Chambers, Nariman Point, Mumbai 400021",
      "Mumbai phone: +91 22 22825370 / 22833688",
    ],
    source: "https://www.dempos.com/our-companies/modest-infrastructure-pvt-ltd/",
  },
  {
    slug: "dempo-industries",
    name: "Dempo Industries",
    kicker: "Newspapers and publishing",
    lede: "Publisher of The Navhind Times and the Marathi daily Navprabha, from Navhind Bhavan in Panaji.",
    paragraphs: [
      "The Navhind Times, Goa’s first English daily, has been in publication since 18 February 1963. The company page describes it as the largest circulated English daily in the state, covering governance, politics, development, environment, education, employment, technology, culture, sports and lifestyle. It reported the first Assembly elections in 1963 and the Opinion Poll.",
      "Supplements and columns named on the page include Panorama, Zest and Kuriocity, along with Live Your Dreams, Aspire & Inspire, Against Personal Odds, Navhind Global Dialogues, Positive Thoughts, Navhind Dialogues, Uncommon Life, Health First, Mentoring, Goan Footprints, Made in India and Brand Magic. Goa Seeks Action invites readers to raise civic issues.",
      "Navprabha has been published since 15 August 1970. The page describes it as a well-edited Marathi daily, with the Sunday supplement Angaan, the health section Ayush, a readers’ letters forum, the Navprabha Diwali Ank, and space for younger writers through Kutumb and the Tarunai column.",
      "The same company page also carries GoGoaNow.com and KuriocityCreative. An earlier account, The Good Earth, records an energy division that had installed two wind energy converters in Rajasthan and one in Karnataka, selling power to the state distribution companies. The current companies menu does not give that division its own page.",
    ],
    facts: [
      { label: "The Navhind Times", value: "From 18 February 1963" },
      { label: "Navprabha", value: "From 15 August 1970" },
      { label: "Also published", value: "GoGoaNow.com, KuriocityCreative" },
    ],
    image: press,
    imageAlt: "A printing press in the Navhind Times press hall.",
    website: { href: "http://www.navhindtimes.com/", label: "navhindtimes.com" },
    contact: [
      "Navhind Papers and Publications, Navhind Bhavan",
      "Ismael Gracias Road, Panaji, Goa 403001",
      "Phone: 0832-6651104, 6651111",
      "navhind@navhindtimes.com",
    ],
    source: "https://www.dempos.com/our-companies/dempo-industries-pvt-ltd/",
  },
  {
    slug: "goa-365",
    name: "GOA 365",
    kicker: "Television and digital news",
    lede: "Goa’s first English news channel, owned and operated by Audio Visual Media Goa.",
    paragraphs: [
      "GOA 365 launched on 7 July 2004. It began with a part-interest from the Dempo promoters and, in January 2016, came under the direct editorial and administrative supervision of the Group, moving studio and offices to Navhind Bhavan that month.",
      "The channel broadcasts in English and Konkani. Programmes named on the site include Story Behind the Story, Face to Face, Assembly Audit, Straight Forward, the Goa 365 Show, Movie Outlook and Talk from the Heart, made with The Navhind Times. Earlier series Gavponn and Family No. 1 each ran to 100 episodes.",
      "It was among the first channels in the state to telecast proceedings of the Goa Legislative Assembly live, and has covered Shigmo, Carnival and Eid. The website goa365.tv offers live streaming and Goa365 Shorts. The channel is also on Facebook at goa365tv and on Twitter at goa365tv1.",
    ],
    facts: [
      { label: "Launched", value: "7 July 2004" },
      { label: "Within the Group", value: "Direct supervision from January 2016" },
      { label: "Languages", value: "English and Konkani" },
    ],
    image: goa365,
    imageAlt: "GOA 365 broadcast studio, as published on the Group website.",
    website: { href: "http://www.goa365.tv/", label: "goa365.tv" },
    contact: [
      "Navhind Bhavan, Ismael Gracias Road, Panaji, Goa 403001",
      "Phone: 0832-6651105",
      "goa365tv@gmail.com",
    ],
    source: "https://www.dempos.com/our-companies/audio-visual-media-goa-goa365/",
  },
  {
    slug: "devashri",
    name: "Devashri Nirman",
    kicker: "Real estate",
    lede: "Known commercially as Devashri Real Estate Developers, building in Goa since 1993.",
    paragraphs: [
      "Devashri Nirman LLP is the Group’s real-estate wing. The company page, which still carries this line, says the family has more than 1,000 customers in completed projects, with a residential footprint in Panjim, Taleigao, Porvorim, Vasco, Caranzalem and Candolim. That count is undated.",
      "Completed work named on the page includes Gokul and Dwarka at Tonca, Miramar (1994); Dempo Trade Centre, Patto (1996); Dempo Odyssey, Vasco (1998); Mathura and Brindavan, Tonca (2000); Dempo Tower, Patto (2001); Devashri Enclave, Porvorim (2002); Devashri Darshan (2004); Devashri Gardens phases I, II and III at Porvorim (2006, 2008 and 2010); Devashri Vasant Vihar, Caranzalem (2009); Devashri Splendor, Porvorim (2010); Devashri Gopika Vihar, Taleigao (2011); and Devashri Sun & Sand phases I and II at Candolim (2013 and 2014).",
      "The same page still describes Devashri Habitat at Chimbel, Devashri Royale at Porvorim and Monarch Palms at Candolim as under construction. [Placeholder: client to confirm] those statuses. A January 2024 announcement introduces Florenza, 1 and 2 BHK apartments at Arpora. Later news also names Vista Bonita at Candolim.",
    ],
    facts: [
      { label: "Active since", value: "1993" },
      { label: "Customers on that page", value: "More than 1,000 — undated" },
      { label: "Office", value: "Dempo Tower, Patto, Panjim" },
    ],
    image: monarch,
    imageAlt: "Monarch Palms at Candolim, a Devashri residential project.",
    website: { href: "http://www.devashrigroup.com/", label: "devashrigroup.com" },
    contact: [
      "710, Seventh Floor, Dempo Tower, EDC Plaza, Patto, Panjim 403001",
      "Phone: 9822486671 / 9822586671",
      "sales@devashrigroup.com",
    ],
    source: "https://www.dempos.com/our-companies/devashri-nirman-llp/",
  },
  {
    slug: "dempo-sports-club",
    name: "Dempo Sports Club",
    kicker: "Football",
    lede: "Five times I-League champion, on the club page. A “fifth decade” line on that page is not treated as current.",
    paragraphs: [
      "Dempo Sports Club began as Bicholim Football Club, a First Division side in the 1960s. Founder chairman Vasantrao Dempo patronised the club, and it continued under Vasudeva V. Dempo. The company page calls an I-League title a record five times the most notable of its honours.",
      "Other marks recorded there: an 11-time winner of the Goa League, a four-time winner of the Rovers Cup, and a regular at the Federation Cup, the Durand Cup and the Indian Super Cup. Several full India internationals have been associated with the club. It reached the semi-finals of the AFC Cup in 2008, and also appeared in 2005, 2006 and 2009.",
      "The club runs youth programmes at under-15, under-17 and under-19. In April 2024 Dempo SC returned to the I-League after nine years, finishing second, with a 3–1 win over Sudeva Delhi FC at the Ella ground in Old Goa. In September 2024 the club won the FC Bayern Youth Cup India at the GMC Athletic Stadium, finishing on 21 points without conceding. Four players — Favio Martins, Tanuj Singh, Pradip Kullu and Jonathan Silva — were selected for the side that travelled to Munich. In 2026 Dempo Challengers won the Badminton Pro League, unbeaten, beating Prassa Challengers 120–104 in the final at the Indoor Stadium, Campal.",
    ],
    facts: [
      { label: "I-League", value: "Champions five times, as published" },
      { label: "Goa League", value: "11 titles, as published" },
      { label: "Rovers Cup", value: "Four titles, as published" },
      { label: "Youth", value: "Under-15, under-17 and under-19" },
    ],
    image: football,
    imageAlt: "Dempo Sports Club players contesting a header during a match.",
    website: { href: "http://www.demposportsclub.com/", label: "demposportsclub.com" },
    contact: [
      "Dempo House, Campal, Panaji, Goa 403001",
      "Phone: 0832-24441444",
      "dsc@dempos.com",
    ],
    source: "https://www.dempos.com/our-companies/dempo-sports-club-pvt-ltd/",
    note: "The phone number is reproduced exactly as published on the club’s company page.",
  },
  {
    slug: "dempo-travels",
    name: "Dempo Travels",
    kicker: "Travel",
    lede: "IATA-accredited travel agents in Goa, operating since 1961.",
    paragraphs: [
      "Dempo Travels Pvt. Ltd. describes itself as the oldest IATA-accredited Goan travel agent, operating since 1961, in corporate and leisure travel. An earlier Group account dates the debut to 1960 and calls the firm among the first in India to be accredited by IATA.",
      "Services named on the company page include worldwide hotel reservations, car rentals, cruises, conferences, inbound and outbound tours, passport and visa services, and travel insurance. A holiday department plans domestic and overseas trips. Corporate clients are offered an after-office-hours facility through weekends and holiday closures.",
      "The office faces the Captain of Ports jetty in Panjim.",
    ],
    facts: [
      { label: "Operating since", value: "1961, on the company page" },
      { label: "Accreditation", value: "IATA" },
      { label: "Office", value: "Opposite the Captain of Ports jetty, Panjim" },
    ],
    image: mandovi,
    imageAlt: "Fishing boats on the Mandovi at Panaji. Dempo Travels sits opposite the Captain of Ports jetty.",
    imageCredit: "Vyacheslav Argenberg, CC BY 4.0, via Wikimedia Commons",
    website: { href: "http://www.dempotravels.com/", label: "dempotravels.com" },
    contact: [
      "Opposite Captain of Ports Jetty, Panjim, Goa 403001",
      "Phone: 0832-2426151 / 52 / 53",
      "dempoholidays@dempos.com",
    ],
    source: "https://www.dempos.com/our-companies/dempo-travels-pvt-ltd/",
    note: "The travels page does not publish a usable office photograph. The picture is the Mandovi at Panaji, credited in CREDITS.md, and is not a photograph of the agency.",
  },
  {
    slug: "emerging",
    name: "Recent and emerging ventures",
    kicker: "Projects on the anvil",
    lede: "Four ventures described with statuses that still read as they did around 2015. [Placeholder: client to confirm]",
    paragraphs: [
      "Goa Medical Research Pvt. Ltd. is described as a clinical-trial facility at Corlim, with a built-up area of 4,500 square metres, currently leased out. The page says some medical research activities are planned there.",
      "V. S. Dempo Mining Corporation Pvt. Ltd. is tied to a memorandum signed in October 2006 with the Government of Maharashtra, to process low-iron material in Sindhudurg district, with mega-project status, aimed at a high-iron concentrate. This is separate from the Goa iron-ore mining and logistics businesses, which the Group’s own editorial note says were divested to Sesa Goa (later Vedanta) in June 2009.",
      "At Varca and Carmona in South Goa, the Group owns about 8 hectares of beachside land. Plans described on the site are for a luxury resort of 150 rooms, a convention centre and about 35 villas, in joint development. The project had in-principle approval from the Investment Promotion Board; regulatory clearances with the Government of Goa were still in process when the page was written.",
      "At Ella, Tiswadi, the Group proposes a K12 school and football academy on about 12 acres, with the school on 5 acres. The page describes courtyards, a rotunda, laboratories, and later phases for a pool, a multipurpose hall and an amphitheatre. A school partner is said to have been identified. The project had in-principle IPB approval, with regulatory permissions still required before breaking ground.",
    ],
    facts: [
      { label: "Corlim laboratory", value: "4,500 m², leased out" },
      { label: "Maharashtra mining MoU", value: "October 2006" },
      { label: "Varca / Carmona land", value: "About 8 hectares" },
      { label: "Ella campus", value: "About 12 acres" },
    ],
    image: sunsand,
    imageAlt: "Devashri Sun and Sand at Candolim, completed residential work by the Group’s real-estate wing.",
    contact: ["Enquiries: Dempo House, Campal, Panaji 403001", "mail@dempos.com", "+91 832 2441300"],
    source: "https://www.dempos.com/our-companies/recent-and-emerging-businesses/",
    note: "[Placeholder: client to confirm] The Corlim laboratory, the 2006 Maharashtra memorandum, the Varca resort and the Ella school are summarised as the page left them. That page’s status language is frozen around 2015 and is not a current progress report.",
  },
];

export const furtherActivities = {
  title: "Activities described elsewhere on the site",
  paragraphs: [
    "The About page names calcined petroleum coke, shipbuilding and repair, newspaper publishing and the media, pig iron, baby foods, real estate, sports promotion, travel, renewable energy, and mining. [Placeholder: client to confirm] which of those are still current. The same site’s editorial note says the Goa iron-ore mining and logistics businesses were divested in June 2009.",
    "Pig iron is described in The Good Earth through Aparant Iron and Steel Pvt. Ltd., a South Goa plant commissioned in 2001, using Tata Korf technology, with a stated capacity of 160,000 tonnes a year, a 4 MW captive power plant, and a 10 km pipeline from the Selaulim reservoir. Aparant does not have its own page in the current companies menu.",
    "Wind energy is described in the same account: two converters in Rajasthan and one in Karnataka, with power sold to the state distribution companies. The About page still names renewable energy among current activities. There is no separate company page for the energy division.",
    "The iron-ore business that began in 1941 with V. S. Dempo & Co. Pvt. Ltd. is the subject of an editorial note on the site: V. S. Dempo & Co. and Dempo Mining Corporation, the mining and logistics concerns, were divested to Sesa Goa Ltd (since named Vedanta Ltd) in June 2009.",
  ],
  source: "https://www.dempos.com/the-good-earth/",
  divestmentSource: "https://www.dempos.com/a-prelude-to-dempos-date-with-history-group-founders-birth-centenary/",
};

export const extraImages = {
  conveyor,
  tug,
  florenza,
  academy,
  gcarb,
  wind,
};
