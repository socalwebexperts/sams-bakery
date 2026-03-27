export type PortfolioGroup = "residential" | "land-surveying" | "adu" | "commercial";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: "commercial" | "residential";
  /** Display section on the portfolio index (matches home page categories). */
  portfolioGroup: PortfolioGroup;
  location: string;
  year: string;
  status: "Completed" | "In Progress";
  heroImage: string;
  thumbnail: string;
  description: string;
  details: string;
  scope: string[];
  gallery: string[];
}

const p = (file: string) => `/portfolio/${file}`;

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "glendale-mills-avenue",
    title: "3309 Mills Ave, Glendale",
    category: "residential",
    portfolioGroup: "residential",
    location: "Glendale, CA",
    year: "2022–2024",
    status: "Completed",
    heroImage: p("p13_img01_7200x10828.png"),
    thumbnail: p("p02_img01_3411x1110.jpeg"),
    description:
      "New construction in Glendale: a contemporary single-family home with a strong street presence, thoughtful glazing, and a coordinated envelope from concept through permit-ready drawings.",
    details:
      "The layout prioritizes everyday comfort—natural light, privacy from neighbors, and views where the site allows—while elevations stay legible at sidewalk scale. The construction set supports both agency review and builder pricing: structure, waterproofing, energy code, and exterior assemblies are coordinated so the owner can move into permitting and construction with fewer scope gaps or redesign loops.",
    scope: ["Architecture", "Plans", "Permitting", "Construction documentation"],
    gallery: [
      p("p02_img01_3411x1110.jpeg"),
      p("p03_img01_3411x1110.jpeg"),
      p("p04_img01_1441x361.jpeg"),
      p("p04_img02_1352x422.jpeg"),
      p("p04_img03_882x332.jpeg"),
      p("p04_img04_940x328.jpeg"),
      p("p06_img01_839x1080.jpeg"),
      p("p07_img01_838x1080.jpeg"),
      p("p09_img01_1826x1080.jpeg"),
      p("p10_img01_639x824.jpeg"),
      p("p11_img01_639x824.jpeg"),
      p("p12_img01_7200x10828.png"),
      p("p13_img01_7200x10828.png"),
      p("p18_img01_615x795.jpeg"),
      p("p19_img01_615x795.jpeg"),
    ],
  },
  {
    slug: "tujunga-irma-adu",
    title: "11015 Irma Ave, Tujunga — ADU",
    category: "residential",
    portfolioGroup: "adu",
    location: "Tujunga, CA",
    year: "2023",
    status: "Completed",
    heroImage: p("p25_img01_1706x1098.png"),
    thumbnail: p("p24_img02_1656x1114.png"),
    description:
      "Conversion of an existing two-car garage into a compact accessory dwelling unit—adding legal square footage and long-term flexibility without overwhelming the lot.",
    details:
      "The plan fits a full small unit—cooking, bathing, sleeping, and storage—without sacrificing the rear yard. Exterior elevations show how new windows, doors, and finishes relate to the existing house so the city sees a coherent property, not a tacked-on box. Documentation is organized for L.A. ADU workflows: planning clearances, Title 24, and typical structural and utility tie-ins.",
    scope: ["ADU conversion", "Plans", "Elevations", "Permitting"],
    gallery: [p("p24_img02_1656x1114.png"), p("p24_img03_1656x960.png"), p("p25_img01_1706x1098.png"), p("p25_img02_1654x968.png")],
  },
  {
    slug: "educational-facility-planning",
    title: "Educational facility planning",
    category: "commercial",
    portfolioGroup: "commercial",
    location: "Los Angeles, CA",
    year: "2022–2025",
    status: "Completed",
    heroImage: p("p20_img01_1132x575.jpeg"),
    thumbnail: p("p20_img01_1132x575.jpeg"),
    description:
      "Planning and documentation for an educational building—balancing clear circulation, varied learning environments, and support spaces across multiple levels.",
    details:
      "Diagrams first answered who goes where: arrival, security, circulation, and breakout zones. Level plans then allocated classrooms, labs, offices, and shared spaces so traffic doesn’t collide with instruction. The result is a building that is easier to run day to day—clear sight lines for staff, logical adjacencies for classes, and paths that still work when schedules or enrollment change.",
    scope: ["Programming", "Planning", "Diagrams", "Floor plans"],
    gallery: [
      p("p20_img01_1132x575.jpeg"),
      p("p21_img01_1561x790.jpeg"),
      p("p21_img02_1697x816.jpeg"),
      p("p22_img01_525x514.png"),
      p("p22_img02_461x450.png"),
      p("p22_img03_460x450.png"),
      p("p22_img04_460x450.jpeg"),
      p("p22_img05_461x450.png"),
      p("p22_img06_461x450.png"),
      p("p22_img07_461x450.png"),
      p("p22_img08_461x450.jpeg"),
      p("p22_img09_461x450.png"),
      p("p22_img10_461x450.jpeg"),
      p("p22_img11_461x450.png"),
      p("p22_img12_461x450.jpeg"),
      p("p23_img01_470x460.png"),
      p("p23_img02_461x450.png"),
      p("p23_img03_461x450.png"),
      p("p23_img04_461x450.png"),
      p("p23_img05_470x460.png"),
      p("p23_img06_460x450.png"),
      p("p23_img07_460x450.png"),
      p("p23_img08_461x450.png"),
      p("p23_img09_525x514.png"),
      p("p23_img10_470x460.png"),
      p("p23_img11_461x450.png"),
      p("p23_img12_461x450.png"),
      p("p23_img13_461x450.png"),
      p("p23_img14_470x460.png"),
      p("p23_img15_461x450.png"),
    ],
  },
  {
    slug: "form-finding-site-study",
    title: "Form finding & site study",
    category: "commercial",
    portfolioGroup: "land-surveying",
    location: "Los Angeles, CA",
    year: "2022–2025",
    status: "Completed",
    heroImage: p("p31_img01_1706x2156.jpeg"),
    thumbnail: p("p30_img01_1704x2156.jpeg"),
    description:
      "A concept-phase study linking big-picture site strategy to tectonic detail—exploded axon, vision diagrams, and resolution at columns, skylights, and truss connections.",
    details:
      "Early work locked site logic: approach, orientation, and how the mass reads from the street and from key viewpoints. Presentation plates turn that into a single coherent scheme stakeholders can react to. Detail studies then close the gap between concept and construction—how columns land, how skylights shed water, how trusses and cables resolve—so engineers and builders aren’t guessing later.",
    scope: ["Concept design", "Diagrams", "Site analysis", "Detail studies"],
    gallery: [
      p("p27_img01_470x460.png"),
      p("p27_img02_470x460.png"),
      p("p27_img03_470x460.png"),
      p("p27_img04_470x460.png"),
      p("p27_img05_525x514.png"),
      p("p27_img06_525x514.png"),
      p("p27_img07_525x514.png"),
      p("p27_img13_470x460.png"),
      p("p27_img24_470x460.png"),
      p("p27_img35_470x460.png"),
      p("p27_img44_470x460.png"),
      p("p27_img45_470x460.png"),
      p("p27_img46_470x460.png"),
      p("p27_img47_470x460.png"),
      p("p27_img48_470x460.png"),
      p("p28_img01_614x795.jpeg"),
      p("p29_img01_614x795.jpeg"),
      p("p30_img01_1704x2156.jpeg"),
      p("p31_img01_1706x2156.jpeg"),
      p("p32_img01_1628x1631.jpeg"),
      p("p32_img02_828x533.jpeg"),
      p("p32_img03_803x536.jpeg"),
      p("p26_img01_525x514.png"),
      p("p26_img02_525x514.png"),
      p("p26_img03_525x514.png"),
      p("p26_img13_525x514.png"),
      p("p26_img14_525x514.png"),
      p("p26_img15_525x514.png"),
      p("p26_img16_525x514.png"),
      p("p26_img17_525x514.png"),
      p("p26_img18_525x514.png"),
      p("p26_img19_525x514.png"),
      p("p26_img20_525x514.png"),
    ],
  },
  {
    slug: "environmental-biomimicry-study",
    title: "Environmental & biomimicry study",
    category: "commercial",
    portfolioGroup: "commercial",
    location: "Los Angeles, CA",
    year: "2022–2025",
    status: "Completed",
    heroImage: p("p33_img01_1920x1080.jpeg"),
    thumbnail: p("p34_img01_1656x1250.jpeg"),
    description:
      "Research-driven environmental analysis connecting climate data, airflow ideas, and biomimetic precedent to design moves that improve comfort and efficiency.",
    details:
      "The analysis connects climate to form: where heat builds up, how air can move with or without mechanical help, and how shapes in nature handle the same stresses. Those ideas feed directly into façade and massing choices—so comfort and energy aren’t fixed only with equipment after the fact. Side-by-side studies compare options early, when changing glazing, depth, or shading is still inexpensive.",
    scope: ["Environmental analysis", "Biomimicry", "Diagrams", "Research"],
    gallery: [
      p("p33_img01_1920x1080.jpeg"),
      p("p34_img01_1656x1250.jpeg"),
      p("p35_img01_939x790.jpeg"),
      p("p35_img02_864x974.jpeg"),
      p("p35_img03_627x391.jpeg"),
      p("p35_img04_765x435.jpeg"),
      p("p36_img01_390x401.png"),
      p("p36_img02_390x401.png"),
      p("p36_img03_390x401.png"),
      p("p36_img04_390x401.png"),
      p("p36_img05_390x401.jpeg"),
      p("p36_img06_390x401.jpeg"),
      p("p36_img07_390x401.jpeg"),
      p("p36_img08_390x401.jpeg"),
      p("p36_img09_390x401.jpeg"),
      p("p36_img10_390x401.jpeg"),
      p("p36_img11_390x401.jpeg"),
      p("p36_img12_390x401.jpeg"),
      p("p36_img13_390x401.png"),
      p("p36_img14_390x401.jpeg"),
      p("p36_img15_390x401.jpeg"),
      p("p36_img16_390x401.jpeg"),
      p("p36_img17_390x401.jpeg"),
      p("p36_img18_390x401.png"),
      p("p36_img19_390x401.png"),
      p("p36_img20_390x401.png"),
      p("p36_img21_390x401.png"),
      p("p36_img22_390x401.png"),
      p("p36_img23_390x401.png"),
      p("p36_img24_390x401.png"),
      p("p37_img01_2056x1058.png"),
      p("p37_img02_1556x2654.png"),
    ],
  },
  {
    slug: "otis-campus-planning",
    title: "Campus planning & context",
    category: "commercial",
    portfolioGroup: "commercial",
    location: "Los Angeles, CA",
    year: "2022–2025",
    status: "Completed",
    heroImage: p("p46_img02_1639x1549.jpeg"),
    thumbnail: p("p47_img01_1695x1695.jpeg"),
    description:
      "Campus-scale planning and visualization—relating buildings, open space, and circulation across an urban academic setting.",
    details:
      "Site diagrams show how buildings frame quads and connectors, where people actually walk, and how landscape holds daily use—not just a pretty master plan. Vertical studies test how towers read from afar and how bases meet the pedestrian. The goal is an institution that feels ordered and navigable: recognizable from the skyline, welcoming at the ground floor, and consistent across phases of development.",
    scope: ["Campus planning", "Diagrams", "Visualization", "Context"],
    gallery: [
      p("p39_img01_1387x915.jpeg"),
      p("p39_img02_977x756.jpeg"),
      p("p39_img03_1146x867.jpeg"),
      p("p40_img81_1747x864.jpeg"),
      p("p41_img01_837x1079.jpeg"),
      p("p42_img01_836x1079.jpeg"),
      p("p43_img01_1414x1903.jpeg"),
      p("p44_img01_1414x1948.jpeg"),
      p("p45_img01_1705x1598.jpeg"),
      p("p46_img02_1639x1549.jpeg"),
      p("p47_img01_1695x1695.jpeg"),
    ],
  },
  {
    slug: "daylight-occupancy-study",
    title: "Daylight & occupancy study",
    category: "commercial",
    portfolioGroup: "commercial",
    location: "Los Angeles, CA",
    year: "2022–2025",
    status: "Completed",
    heroImage: p("p48_img09_1920x1080.jpeg"),
    thumbnail: p("p48_img01_1877x1215.jpeg"),
    description:
      "Daylight and occupancy analysis using a time-of-day visualization sequence paired with sectional depth studies.",
    details:
      "The sequence shows where desks and collaboration zones fall in and out of direct sun, when glare might hit screens, and which hours need shading or electric light backup. Sections explain ceiling heights, shelf and partition heights, and how light enters deep plans. That lets the team adjust glazing area, overhang depth, and furniture layout while changes are still on paper—not after glass is ordered.",
    scope: ["Daylight analysis", "Visualization", "Sections", "Studies"],
    gallery: [
      p("p48_img01_1877x1215.jpeg"),
      p("p48_img02_1877x1215.png"),
      p("p48_img03_1877x1215.png"),
      p("p48_img04_1877x1215.png"),
      p("p48_img05_1877x1215.png"),
      p("p48_img06_1877x1215.png"),
      p("p48_img07_1877x1215.png"),
      p("p48_img08_1877x1215.png"),
      p("p48_img09_1920x1080.jpeg"),
      p("p49_img01_1501x971.jpeg"),
      p("p49_img02_1501x971.png"),
      p("p49_img03_1501x971.png"),
      p("p49_img04_1501x971.png"),
      p("p49_img05_1501x971.png"),
      p("p49_img06_895x748.jpeg"),
    ],
  },
  {
    slug: "portfolio-presentation-plates",
    title: "Studio portfolio & identity",
    category: "commercial",
    portfolioGroup: "commercial",
    location: "Studio",
    year: "2022–2025",
    status: "Completed",
    heroImage: p("p50_img01_1414x1999.jpeg"),
    thumbnail: p("p01_img01_1414x2000.png"),
    description:
      "Opening and closing treatments for the studio’s body of work—setting tone, typography, and visual hierarchy for how projects are introduced and summarized.",
    details:
      "The opening treatment signals how the studio works: clarity first, minimal noise, and respect for the projects themselves. The closing piece reinforces the same values—rigor, follow-through, and communication—so a prospective client leaves with a clear sense of capability, not just a stack of images.",
    scope: ["Brand alignment", "Portfolio design", "Presentation graphics"],
    gallery: [p("p01_img01_1414x2000.png"), p("p50_img01_1414x1999.jpeg")],
  },
];

export function getPortfolioByCategory(category: "commercial" | "residential") {
  return portfolioItems.filter((item) => item.category === category);
}

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
