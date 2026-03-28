export type PortfolioGroup = "residential" | "adu" | "commercial";

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

const R2 = "https://pub-a6e43974d13d4b6daf6364e5369b0349.r2.dev/evdesignstudio-project-images";

const r2 = (folder: string, file: string) =>
  `${R2}/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "linda-vista",
    title: "1860 Linda Vista",
    category: "residential",
    portfolioGroup: "residential",
    location: "Los Angeles, CA",
    year: "2024",
    status: "Completed",
    heroImage: r2("01- Linda Vista", "1860 LINDA VISTA - LIVING 10.jpg"),
    thumbnail: r2("01- Linda Vista", "c7YOW.jpg"),
    description:
      "A comprehensive residential design capturing modern living through thoughtful spatial planning, refined material selections, and purposeful integration of natural light.",
    details:
      "The project balances openness with intimacy — shared spaces feel generous while private rooms maintain comfort and seclusion. Exterior elevations reinforce a contemporary language that sits confidently in the neighborhood. Drawings are coordinated for permitting and construction pricing, reducing gaps between design intent and built result.",
    scope: ["Architecture", "Interior Design", "Plans", "Permitting"],
    gallery: [
      r2("01- Linda Vista", "1860 LINDA VISTA - LIVING 10.jpg"),
      r2("01- Linda Vista", "4QkZz.jpg"),
      r2("01- Linda Vista", "P1QLu.jpg"),
      r2("01- Linda Vista", "c7YOW.jpg"),
      r2("01- Linda Vista", "rQkWN.jpg"),
    ],
  },
  {
    slug: "mentor-ave-adu",
    title: "Mentor Ave — ADU",
    category: "residential",
    portfolioGroup: "adu",
    location: "Los Angeles, CA",
    year: "2026",
    status: "Completed",
    heroImage: r2("02-Mentor ave - ADU", "Screenshot 2026-03-11 113818.png"),
    thumbnail: r2("02-Mentor ave - ADU", "Screenshot 2026-03-11 113818.png"),
    description:
      "A new accessory dwelling unit designed to maximize livable space on an existing residential lot while meeting all ADU code requirements for the City of Los Angeles.",
    details:
      "The design prioritizes efficient space planning — fitting living, sleeping, cooking, and bathing into a compact footprint without sacrificing comfort. The ADU complements the existing primary residence in massing and finish, creating a cohesive property that reads as a unified whole rather than an afterthought. Documentation follows LA's streamlined ADU review process for faster permitting.",
    scope: ["ADU Design", "Plans", "3D Visualization", "Permitting"],
    gallery: [
      r2("02-Mentor ave - ADU", "Screenshot 2026-03-11 113818.png"),
      r2(
        "02-Mentor ave - ADU",
        "_users_4e1008f1-9acc-49ab-87e5-c625721e0451_generated_dcc88973-7553-4425-a580-f1f348b61b9b_generated_video.MP4",
      ),
    ],
  },
  {
    slug: "maine-ave",
    title: "2435 Maine Ave",
    category: "residential",
    portfolioGroup: "residential",
    location: "Los Angeles, CA",
    year: "2025",
    status: "In Progress",
    heroImage: r2("03-Maine", "2435 MAINE-7.jpg"),
    thumbnail: r2("03-Maine", "2 STORY OPTION MAINE AVE-3D.png"),
    description:
      "A two-story residential new construction designed to maximize lot potential through smart massing, strong curb appeal, and code-compliant planning.",
    details:
      "Massing studies explored single- and two-story configurations to find the right balance of program, height, and setbacks. The selected scheme delivers generous living areas on the ground level with bedrooms above, while maintaining a proportioned street elevation. 3D studies validate how the design sits on the site and relates to neighboring structures before documentation begins.",
    scope: ["Architecture", "Massing Studies", "3D Visualization", "Plans"],
    gallery: [
      r2("03-Maine", "2435 MAINE-7.jpg"),
      r2("03-Maine", "2 STORY OPTION MAINE AVE-3D.png"),
      r2("03-Maine", "2 STORY OPTION MAINE AVE.png"),
    ],
  },
  {
    slug: "spirare-spiritual-space",
    title: "SPIRARE — Spiritual Space",
    category: "commercial",
    portfolioGroup: "commercial",
    location: "Los Angeles, CA",
    year: "2024",
    status: "Completed",
    heroImage: r2("04-SPIRARE-Spiritual Space", "ChRzm.jpg"),
    thumbnail: r2("04-SPIRARE-Spiritual Space", "aqYPX.jpg"),
    description:
      "A contemplative commercial space exploring the intersection of architecture and spirituality — where material, light, and proportion create environments for reflection and community.",
    details:
      "The design draws on the Latin root 'spirare' — to breathe — shaping volumes that encourage pause and presence. Natural light is directed to define zones of gathering and solitude. Material selections favor warmth and tactility, reinforcing a sense of grounding. The result is an interior that feels purposeful without being prescriptive, supporting varied uses from meditation to small group assembly.",
    scope: ["Concept Design", "Interior Design", "Visualization", "Material Studies"],
    gallery: [
      r2("04-SPIRARE-Spiritual Space", "ChRzm.jpg"),
      r2("04-SPIRARE-Spiritual Space", "EQ1jF.jpg"),
      r2("04-SPIRARE-Spiritual Space", "RYfbV.jpg"),
      r2("04-SPIRARE-Spiritual Space", "RdLWk.jpg"),
      r2("04-SPIRARE-Spiritual Space", "aqYPX.jpg"),
    ],
  },
  {
    slug: "bac-art-center",
    title: "BAC — Art Center",
    category: "commercial",
    portfolioGroup: "commercial",
    location: "Los Angeles, CA",
    year: "2024–2025",
    status: "In Progress",
    heroImage: r2("05-BAC- Art Center", "12-22-24EAST ELEVATION PS.png"),
    thumbnail: r2("05-BAC- Art Center", "L2nyV.jpg"),
    description:
      "An art center designed to house creative programming, exhibition spaces, and community engagement — with elevations that signal institutional presence while inviting public access.",
    details:
      "Elevation studies resolved how the building addresses each street face differently — the east elevation as the primary public frontage, the south as a secondary entry, and remaining sides handling service and back-of-house needs. Form-finding work tested massing options that balance gallery volume requirements with the site's constraints and zoning envelope. The result is a building that reads as a cultural anchor: confident, legible, and built to last.",
    scope: ["Architecture", "Elevations", "Form Finding", "Construction Documentation"],
    gallery: [
      r2("05-BAC- Art Center", "12-22-24EAST ELEVATION PS.png"),
      r2("05-BAC- Art Center", "12-6-24- south elvation.png"),
      r2("05-BAC- Art Center", "NORTH ELEVATION 2.png"),
      r2("05-BAC- Art Center", "West elevation PH.png"),
      r2("05-BAC- Art Center", "form finfing.png"),
      r2("05-BAC- Art Center", "7NkOz.jpg"),
      r2("05-BAC- Art Center", "9PSrf.jpg"),
      r2("05-BAC- Art Center", "GAziu.jpg"),
      r2("05-BAC- Art Center", "L2nyV.jpg"),
      r2("05-BAC- Art Center", "Pwq0T.jpg"),
      r2("05-BAC- Art Center", "w8Rg4.jpg"),
    ],
  },
  {
    slug: "skinny-martini-distillery",
    title: "Skinny Martini Distillery",
    category: "commercial",
    portfolioGroup: "commercial",
    location: "Los Angeles, CA",
    year: "2023–2024",
    status: "Completed",
    heroImage: r2("06-Skinny Martini-Distillery", "IMG_8862.PNG"),
    thumbnail: r2("06-Skinny Martini-Distillery", "IMG_8729.PNG"),
    description:
      "Interior design and branding for a craft distillery — balancing industrial character with refined hospitality to create an atmosphere that enhances the tasting experience.",
    details:
      "The project transforms a raw commercial space into a destination that tells the brand's story through material, layout, and finish. Production areas are visible but organized, so guests understand the craft without feeling like they're in a factory. Seating zones offer variety — bar, lounge, and table — so the space works for casual drop-ins and private events alike. Branding elements are integrated into the architecture rather than applied as signage.",
    scope: ["Interior Design", "Branding", "Space Planning", "Visualization"],
    gallery: [
      r2("06-Skinny Martini-Distillery", "IMG_8727.PNG"),
      r2("06-Skinny Martini-Distillery", "IMG_8728.PNG"),
      r2("06-Skinny Martini-Distillery", "IMG_8729.PNG"),
      r2("06-Skinny Martini-Distillery", "IMG_8855.PNG"),
      r2("06-Skinny Martini-Distillery", "IMG_8856.PNG"),
      r2("06-Skinny Martini-Distillery", "IMG_8862.PNG"),
      r2("06-Skinny Martini-Distillery", "IMG_8864.PNG"),
      r2("06-Skinny Martini-Distillery", "IMG_9150.jpg"),
      r2("06-Skinny Martini-Distillery", "IMG_9152.jpg"),
      r2("06-Skinny Martini-Distillery", "IMG_9153.jpg"),
      r2("06-Skinny Martini-Distillery", "IMG_9154.jpg"),
      r2("06-Skinny Martini-Distillery", "IMG_9155.jpg"),
      r2("06-Skinny Martini-Distillery", "IMG_9156.jpg"),
      r2("06-Skinny Martini-Distillery", "IMG_9157.PNG"),
      r2("06-Skinny Martini-Distillery", "IMG_9159.jpg"),
    ],
  },
];

export function getPortfolioByCategory(category: "commercial" | "residential") {
  return portfolioItems.filter((item) => item.category === category);
}

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
