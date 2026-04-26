/**
 * Static “What Our Customers LOVE!” cards on the home page (not driven by CMS).
 * With an image, the card opens the photo in the site-wide menu lightbox (see Layout).
 */
export const HOME_LOVE_ITEMS = [
  {
    slug: "beef-borek",
    title: "Beef borek",
    description: "Seasoned beef in flaky layers",
    price: "$2.50",
    image: "/media/uploads/beef-borek.jpg",
  },
  {
    slug: "gata",
    title: "Gata",
    description: "Sweet Armenian pastry by the pound",
    price: "$12.00 / lb",
    image: "/media/uploads/gata.jpg",
  },
  {
    slug: "cream-puff",
    title: "Cream puff",
    description: "Light choux with sweet cream",
    price: "$2.50 each",
    image: "/media/uploads/cream-puff.jpg",
  },
  {
    slug: "lahmajun",
    title: "Lahmajun",
    description: "Thin flatbread with seasoned meat and herbs",
    price: "$2.50",
    image: "/media/uploads/lahmajun.jpg",
  },
] as const;
