export interface PortfolioItem {
  slug: string;
  title: string;
  category: "commercial" | "residential";
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

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "westwood-modern-residence",
    title: "Westwood Modern Residence",
    category: "residential",
    location: "Westwood, Los Angeles",
    year: "2024",
    status: "Completed",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description:
      "A 5,200 sq ft contemporary residence that reimagines indoor-outdoor living through seamless glass transitions and cantilevered volumes.",
    details:
      "Nestled in the hills of Westwood, this residence was designed for a family seeking a sanctuary that merges architectural ambition with everyday comfort. The home features floor-to-ceiling glazing across the rear facade, creating a transparent relationship between the interior living spaces and the sculpted landscape beyond. The cantilevered upper volume provides shade to the ground-floor terrace while creating a dramatic architectural statement visible from the street. Material choices — warm white oak, honed limestone, and blackened steel — ground the modernist form in tactile richness.",
    scope: [
      "Architecture",
      "Interior Design",
      "Permitting",
      "Construction Administration",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
  },
  {
    slug: "pacific-palisades-estate",
    title: "Pacific Palisades Estate",
    category: "residential",
    location: "Pacific Palisades, CA",
    year: "2023",
    status: "Completed",
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    description:
      "An 8,400 sq ft estate perched on a bluff overlooking the Pacific, designed to frame ocean views from every primary living space.",
    details:
      "This estate commission required a delicate balance between monumental architectural ambition and the intimate scale of domestic life. The home is organized around a central courtyard that draws ocean breezes deep into the plan. Two wings — one for living and entertaining, the other for private quarters — are connected by a glass bridge that hovers above a reflecting pool. The material palette draws from the coastal landscape: weathered teak, hand-laid stone, and patinated bronze hardware. Every window was precisely positioned to capture specific views of the Pacific horizon.",
    scope: [
      "Architecture",
      "Landscape Design",
      "Permitting",
      "Engineering Coordination",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18f6b0c62?w=1200&q=80",
    ],
  },
  {
    slug: "silverlake-hillside-home",
    title: "Silver Lake Hillside Home",
    category: "residential",
    location: "Silver Lake, Los Angeles",
    year: "2024",
    status: "In Progress",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    description:
      "A hillside dwelling that steps down the terrain, creating a series of interconnected pavilions surrounded by native landscaping.",
    details:
      "Designed for a creative couple, this 3,800 sq ft home responds to its steeply sloped site by cascading down the hillside in a series of interconnected volumes. Each level captures distinct views of the Silver Lake Reservoir and the downtown skyline beyond. The structural system of exposed concrete and steel allows for generous cantilevers that extend the living spaces outward over the landscape. Green roofs on lower volumes are visible from upper terraces, blurring the line between architecture and terrain.",
    scope: [
      "Architecture",
      "Structural Engineering",
      "Hillside Permitting",
      "Soils & Geology Coordination",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
    ],
  },
  {
    slug: "dtla-mixed-use-tower",
    title: "DTLA Mixed-Use Tower",
    category: "commercial",
    location: "Downtown Los Angeles",
    year: "2025",
    status: "In Progress",
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    description:
      "A 22-story mixed-use tower that combines ground-floor retail, creative office space, and luxury residences within a singular sculptural form.",
    details:
      "Situated at a pivotal intersection in the Arts District, this tower was conceived as a vertical neighborhood. The ground-floor retail arcade is designed as an extension of the street, with double-height spaces that spill onto a landscaped public plaza. The creative office floors feature column-free floor plates of 18,000 sq ft, while the residential levels above offer panoramic views through a faceted curtain wall. The building's form — a gentle twist that responds to solar orientation — reduces energy consumption while creating a dynamic silhouette on the skyline.",
    scope: ["Architecture", "Planning", "Permitting", "Consulting"],
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=1200&q=80",
    ],
  },
  {
    slug: "culver-city-creative-campus",
    title: "Culver City Creative Campus",
    category: "commercial",
    location: "Culver City, CA",
    year: "2023",
    status: "Completed",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description:
      "A 45,000 sq ft adaptive reuse of a mid-century industrial building into a Class-A creative office campus with courtyard gardens.",
    details:
      "This adaptive reuse project transformed a 1960s industrial warehouse into a contemporary creative campus for a media company. The existing sawtooth roof structure was preserved and celebrated, with new skylights flooding the deep floor plates with natural light. A central courtyard was carved from the building's core, introducing landscaping and outdoor collaboration spaces at the heart of the workplace. New insertions — including a floating mezzanine, a cantilevered conference volume, and a rooftop terrace — are expressed in contrasting materials to create a dialogue between old and new.",
    scope: [
      "Architecture",
      "Adaptive Reuse Consulting",
      "Interior Design",
      "Permitting",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80",
    ],
  },
  {
    slug: "santa-monica-boutique-hotel",
    title: "Santa Monica Boutique Hotel",
    category: "commercial",
    location: "Santa Monica, CA",
    year: "2024",
    status: "Completed",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description:
      "A 62-key boutique hotel that draws from California coastal modernism, featuring open-air corridors and a rooftop pool overlooking the ocean.",
    details:
      "Designed to evoke the relaxed sophistication of the California coast, this boutique hotel is organized around a series of planted courtyards that bring daylight and fresh air into every corridor and public space. The lobby, bar, and restaurant occupy a single flowing ground-floor space that opens entirely to an oceanfront terrace. Guest rooms are detailed with custom millwork in bleached walnut, terrazzo floors, and floor-to-ceiling windows with operable shading fins. The rooftop infinity pool and lounge deck offer unobstructed views of the Santa Monica Pier and Pacific horizon.",
    scope: [
      "Architecture",
      "Hospitality Consulting",
      "Interior Design",
      "Full Permitting",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
    ],
  },
  {
    slug: "bel-air-contemporary-villa",
    title: "Bel Air Contemporary Villa",
    category: "residential",
    location: "Bel Air, Los Angeles",
    year: "2023",
    status: "Completed",
    heroImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    description:
      "A 12,000 sq ft villa that integrates sculptural concrete forms with lush, terraced gardens on a two-acre estate.",
    details:
      "This ambitious villa commission for an art collector required spaces capable of displaying large-scale contemporary works alongside the rituals of daily living. The home is organized as a procession of volumes connected by glazed links, each housing a distinct program: a grand entertaining pavilion, a private family wing, a guest house, and a dedicated art gallery. Board-formed concrete, rammed earth walls, and expansive water features create a contemplative atmosphere, while the landscape — designed in collaboration with a noted botanist — features over 200 species of drought-tolerant plantings.",
    scope: [
      "Architecture",
      "Interior Design",
      "Art Installation Consulting",
      "Full Permitting",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=1200&q=80",
    ],
  },
  {
    slug: "venice-beach-retail-complex",
    title: "Venice Beach Retail Complex",
    category: "commercial",
    location: "Venice, Los Angeles",
    year: "2024",
    status: "In Progress",
    heroImage:
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80",
    description:
      "A 28,000 sq ft retail and dining destination that reinterprets the eclectic Venice boardwalk vernacular in a contemporary architectural language.",
    details:
      "Inspired by the vibrant street culture and artistic legacy of Venice Beach, this retail complex creates a curated marketplace for independent retailers, chef-driven restaurants, and cultural programming. The design features a covered open-air arcade anchored by a public courtyard with a permanent stage for performances and community events. The architecture employs a restrained material palette — exposed steel, board-formed concrete, and reclaimed timber — that provides a neutral backdrop for the colorful tenants while maintaining architectural coherence. Operable facades allow individual shops to fully open onto the pedestrian paseo.",
    scope: [
      "Architecture",
      "Retail Planning",
      "Permitting",
      "Community Engagement",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=1200&q=80",
      "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=1200&q=80",
    ],
  },
];

export function getPortfolioByCategory(category: "commercial" | "residential") {
  return portfolioItems.filter((item) => item.category === category);
}

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
