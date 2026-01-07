import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroDish from "@/assets/hero-dish.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";
import scallopsImage from "@/assets/menu-scallops.jpg";
import steakImage from "@/assets/menu-steak.jpg";
import dessertImage from "@/assets/menu-dessert.jpg";
import salmonImage from "@/assets/menu-salmon.jpg";
import risottoImage from "@/assets/menu-risotto.jpg";
import cocktailImage from "@/assets/menu-cocktail.jpg";

const galleryImages = [
  { src: heroDish, alt: "Signature duck dish", category: "food" },
  { src: interiorImage, alt: "Restaurant interior", category: "ambiance" },
  { src: scallopsImage, alt: "Seared scallops", category: "food" },
  { src: steakImage, alt: "Wagyu tenderloin", category: "food" },
  { src: dessertImage, alt: "Chocolate sphere dessert", category: "food" },
  { src: salmonImage, alt: "Wild salmon", category: "food" },
  { src: risottoImage, alt: "Truffle risotto", category: "food" },
  { src: cocktailImage, alt: "Craft cocktail", category: "beverages" },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "food" | "ambiance" | "beverages">("all");

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

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
            Visual Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-muted-foreground max-w-xl mx-auto"
          >
            A glimpse into our world—artful dishes and inviting spaces
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-wide py-4">
          <nav className="flex justify-center gap-2 md:gap-6">
            {[
              { key: "all", label: "All" },
              { key: "food", label: "Dishes" },
              { key: "ambiance", label: "Ambiance" },
              { key: "beverages", label: "Beverages" },
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key as typeof filter)}
                className={`font-sans text-sm tracking-wide px-4 py-2 rounded-sm transition-all duration-300 ${
                  filter === category.key
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

      {/* Masonry Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="break-inside-avoid cursor-pointer group overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="font-sans text-sm text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wider uppercase">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-ivory/70 hover:text-ivory transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
              className="absolute left-4 md:left-8 text-ivory/70 hover:text-ivory transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
              className="absolute right-4 md:right-8 text-ivory/70 hover:text-ivory transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/70 font-sans text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
