import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import scallopsImage from "@/assets/menu-scallops.jpg";
import steakImage from "@/assets/menu-steak.jpg";
import dessertImage from "@/assets/menu-dessert.jpg";
import salmonImage from "@/assets/menu-salmon.jpg";
import risottoImage from "@/assets/menu-risotto.jpg";
import cocktailImage from "@/assets/menu-cocktail.jpg";
import saladImage from "@/assets/menu-salad.jpg";

type MenuCategory = "starters" | "mains" | "desserts" | "beverages";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  dietary?: string[];
}

const menuData: Record<MenuCategory, MenuItem[]> = {
  starters: [
    {
      id: "1",
      name: "Seared Scallops",
      description: "Hand-dived scallops, cauliflower purée, pancetta crisp, citrus beurre blanc",
      price: "$38",
      image: scallopsImage,
      dietary: ["GF"],
    },
    {
      id: "2",
      name: "Garden Salad",
      description: "Baby romaine, aged parmesan, house-made croutons, classic Caesar dressing",
      price: "$18",
      image: saladImage,
    },
    {
      id: "3",
      name: "Truffle Risotto",
      description: "Carnaroli rice, black truffle shavings, aged parmigiano, mascarpone",
      price: "$32",
      image: risottoImage,
      dietary: ["V", "GF"],
    },
  ],
  mains: [
    {
      id: "4",
      name: "Wagyu Tenderloin",
      description: "A5 Japanese wagyu, bordelaise reduction, truffle pomme purée, seasonal vegetables",
      price: "$95",
      image: steakImage,
      dietary: ["GF"],
    },
    {
      id: "5",
      name: "Wild Salmon",
      description: "Scottish salmon, grilled asparagus, lemon beurre blanc, edible flowers",
      price: "$48",
      image: salmonImage,
      dietary: ["GF"],
    },
  ],
  desserts: [
    {
      id: "6",
      name: "Chocolate Sphere",
      description: "Valrhona dark chocolate ganache, raspberry coulis, mint, 24k gold leaf",
      price: "$24",
      image: dessertImage,
      dietary: ["V", "GF"],
    },
  ],
  beverages: [
    {
      id: "7",
      name: "Old Fashioned",
      description: "Woodford Reserve bourbon, demerara, Angostura bitters, orange peel",
      price: "$18",
      image: cocktailImage,
    },
  ],
};

const categories: { key: MenuCategory; label: string }[] = [
  { key: "starters", label: "Starters" },
  { key: "mains", label: "Main Courses" },
  { key: "desserts", label: "Desserts" },
  { key: "beverages", label: "Beverages" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("starters");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary">
        <div className="container-narrow text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4 block"
          >
            Culinary Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-muted-foreground max-w-xl mx-auto"
          >
            Each dish is thoughtfully crafted using seasonal ingredients from local purveyors
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-wide py-4">
          <nav className="flex justify-center gap-2 md:gap-6 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`font-sans text-sm tracking-wide px-4 py-2 rounded-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-serif text-3xl text-center text-foreground mb-12">
                {categories.find((c) => c.key === activeCategory)?.label}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {menuData[activeCategory].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-serif text-xl text-foreground">
                          {item.name}
                        </h3>
                        <span className="font-serif text-lg text-primary flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-2">
                        {item.description}
                      </p>
                      {item.dietary && (
                        <div className="flex gap-2">
                          {item.dietary.map((tag) => (
                            <span
                              key={tag}
                              className="font-sans text-xs text-primary/70 border border-primary/30 px-2 py-0.5 rounded-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Legend */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-center gap-6 text-xs text-muted-foreground font-sans">
              <span>
                <strong className="text-foreground">V</strong> — Vegetarian
              </span>
              <span>
                <strong className="text-foreground">GF</strong> — Gluten Free
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
