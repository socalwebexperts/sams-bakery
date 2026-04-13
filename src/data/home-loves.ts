/**
 * Static “What Our Customers LOVE!” cards on the home page (not driven by CMS).
 * Links go to /menu/{slug} for the matching menu item page.
 */
export const HOME_LOVE_ITEMS = [
  {
    slug: "gata",
    title: "Gata",
    description: "Sweet Armenian pastry by the pound",
    price: "$10.50 / lb",
    image: "/media/uploads/gata.jpg",
  },
  {
    slug: "lahmajun",
    title: "Lahmajun",
    description: "Thin flatbread with seasoned meat and herbs",
    price: "$2.50",
    image: "/media/uploads/lahmajun.jpg",
  },
  {
    slug: "cheese-borek-khachapouri",
    title: "Cheese borek (Khachapouri)",
    description: "Cheese-filled phyllo",
    price: "$2.50",
    image: "/media/uploads/cheese-borek-khachapouri.jpg",
  },
  {
    slug: "pelmeni-beef",
    title: "Pelmeni (beef)",
    description: "Frozen beef dumplings",
    price: "$18.00",
    image: "/media/uploads/pelmeni-beef.jpg",
  },
] as const;
