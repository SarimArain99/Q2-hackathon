const blogs = [
  {
    id: 1,
    title: "Top 10 Furniture Trends for 2024",
    image:
      "https://media.johnlewiscontent.com/i/johnlewis/Small-space-furniture-lead?fmt=auto",
    description: "Discover the latest trends in furniture design for 2024.",
    blog: "Discover the latest trends in furniture design for 2024, including innovative styles and materials that are transforming spaces. This year's trends focus on sustainable materials, bold colors, and multifunctional furniture designed for modern living. Modular furniture is also on the rise, catering to smaller urban spaces. From eco-friendly materials like bamboo and reclaimed wood to high-tech features like built-in charging stations, there's something for everyone. Learn how to incorporate these trends into your home to create stylish and functional spaces.",
    author: "Jane Smith",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Furniture Deco Paint",
    image:
      "https://www.alankaram.in/wp-content/uploads/2022/12/A7402720-2048x1365-1.jpg",
    description: "Learn how to transform your old furniture with deco paint.",
    blog: "Learn how to transform your old furniture with deco paint, giving it a fresh and stylish look. This guide covers the best techniques for prepping surfaces, choosing the right type of paint, and applying finishes that last. Discover creative ideas for using stencils, metallic paints, and chalk paints to add personality to your furniture. Whether you're aiming for a vintage look, a sleek modern finish, or something in between, this guide will help you achieve professional results. Tips on maintaining painted furniture are also included to keep it looking new for years.",
    author: "John Doe",
  },
  {
    id: 3,
    title: "Elevating Spaces: How Modern Furniture Transforms Our Homes",
    image:
      "https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?t=st=1737318524~exp=1737322124~hmac=944c753c69c429f54d0f9c0d921f57b77ec7202574b0edc3a29e39dbc3f7ba74&w=740",
    description:
      "Explore how modern furniture can change the look and feel of your home.",
    blog: "Explore how modern furniture can change the look and feel of your home, making it more functional and aesthetically pleasing. Modern furniture is all about clean lines, minimalism, and functionality. This blog dives into how you can blend modern pieces with your existing decor and why quality over quantity is a key principle in modern design. From smart furniture with integrated technology to ergonomic designs that improve comfort and health, discover how modern furniture is reshaping interiors. Real-life examples and tips for finding affordable options are included.",
    author: "Emily Johnson",
  },
  {
    id: 4,
    title: "Check Out These Beautiful Beds For Your Bedroom!",
    image:
      "https://img.freepik.com/free-photo/double-bed-with-pillows_1203-21.jpg?t=st=1737318809~exp=1737322409~hmac=0edbc28652e865a8d15daf480c35acb64c3296876c80b0da232a169c09fb9331&w=740",
    description:
      "Find the perfect bed for your bedroom with our curated selection.",
    blog: "Find the perfect bed for your bedroom with our curated selection of beautiful and comfortable beds. This guide includes options for every taste, from traditional wooden frames to luxurious upholstered beds and modern minimalist designs. You'll also find insights into choosing the right mattress to complement your bed, as well as tips for maximizing bedroom space with storage beds. Explore trending styles like canopy beds and rustic chic designs, and get expert advice on matching your bed to your bedroom's color scheme and layout.",
    author: "Michael Brown",
  },
  {
    id: 5,
    title: "All That You Need to Know About Pakistan’s Furniture Exports",
    image:
      "https://img.freepik.com/premium-photo/overwhelming-furniture-shopping-experience-with-endless-choices-styles_1386465-11173.jpg?w=740",
    description: "Get insights into the furniture export industry in Pakistan.",
    blog: "Get insights into the furniture export industry in Pakistan and how it impacts the global market. Learn about the rich craftsmanship, unique designs, and traditional techniques that make Pakistani furniture stand out. The blog highlights key markets for exports, popular furniture types, and how local artisans are adapting to international trends. Challenges such as competition, logistics, and quality standards are discussed, as well as opportunities for growth through e-commerce and global trade fairs. A must-read for anyone interested in the furniture industry or import/export business.",
    author: "Sarah Wilson",
  },
  {
    id: 6,
    title: "How to Polish Wooden Furniture at Home – Exclusive Tips",
    image:
      "https://images.prismic.io/boskyfurniture/70a95453-9737-4454-86a7-8fe94a02fb8e_maharaja.jpg?auto=compress,format&rect=0,46,600,307&w=1024&h=524",
    description:
      "Discover exclusive tips on how to polish wooden furniture at home.",
    blog: "Discover exclusive tips on how to polish wooden furniture at home without spending much money. Learn about the best natural and chemical-based polishes, DIY methods, and tools for achieving a mirror-like finish. This guide also includes advice on repairing scratches, filling cracks, and protecting the wood from future damage. Get step-by-step instructions for polishing everything from antique furniture to modern pieces, ensuring that your wooden furniture stays beautiful and functional for years to come.",
    author: "David Lee",
  },
  {
    id: 7,
    title: "Which Factors Should You Consider When Buying Wooden Beds?",
    image:
      "https://img.freepik.com/premium-photo/interior-design-decor-furnishing-luxury-show-home-holiday-villa-bedroom-with-four-poster-bed-interior-design-tropical-villa-sea-island-zanzibar-tanzania-east-africa_185094-1445.jpg?w=740",
    description:
      "Learn about the key factors to consider when purchasing wooden beds.",
    blog: "Learn about the key factors to consider when purchasing wooden beds to ensure comfort and durability. This blog covers the types of wood (solid, engineered, or reclaimed), the importance of craftsmanship, and how to evaluate bed frame construction. Practical tips on mattress compatibility, size considerations, and matching the bed's design with your bedroom decor are included. Additionally, learn about the environmental impact of different types of wood and how to choose sustainable options.",
    author: "Linda Davis",
  },
  {
    id: 8,
    title: "Trending Bohemian Home Furniture Ideas for Interior Décor",
    image:
      "https://img.freepik.com/premium-photo/room-full-furniture-interior-bedroom_471440-3.jpg?w=740",
    description: "Explore the latest bohemian home furniture ideas.",
    blog: "Explore the latest bohemian home furniture ideas to create a vibrant and free-spirited interior. This blog explains how to layer textures, use natural materials like rattan and wicker, and incorporate bold colors and patterns. Learn how to strike the perfect balance between eclectic and cohesive decor. Ideas for must-have pieces, such as macramé hangings, low seating, and vintage-inspired furniture, are provided to help you embrace the bohemian vibe in your home.",
    author: "James Martinez",
  },
  {
    id: 9,
    title: "A Complete Recliners Buying Guide - 13 Things To Consider",
    image:
      "https://img.freepik.com/premium-photo/hotel-furniture-white-background_996135-44810.jpg?w=740",
    description: "Find out what to consider before buying a new recliner.",
    blog: "Find out what to consider before buying a new recliner for your home with our comprehensive guide. Learn about the different types of recliners, such as manual, electric, and zero-gravity options, and their features. Tips for measuring your space, choosing the right fabric or leather, and understanding warranties are provided. Whether you're looking for a recliner for relaxation, medical needs, or style, this guide will help you make an informed decision.",
    author: "Barbara Clark",
  },
  {
    id: 10,
    title: "Solid Wood vs Engineered Wood - Choosing The Right One For Home!",
    image:
      "https://img.freepik.com/free-photo/still-life-wood-engraving-workshop_23-2149185419.jpg?t=st=1737319243~exp=1737322843~hmac=14125573efb0ab3741d6d53bdc161b2b32a20d9c2453f310bb75586dc0fd01e0&w=740",
    description:
      "Learn the differences between solid wood and engineered wood.",
    blog: "Learn the differences between solid wood and engineered wood to make an informed decision for your home furniture. This blog explores the advantages of solid wood, such as its natural beauty, durability, and ability to be refinished. Engineered wood, on the other hand, is highlighted for its cost-effectiveness, resistance to warping, and versatility. Use cases for each material, including where to use solid wood (e.g., dining tables) versus engineered wood (e.g., cabinetry), are discussed to help you decide which option suits your needs.",
    author: "Christopher Garcia",
  },
];
export default blogs;
