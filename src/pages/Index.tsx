import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroDish from "@/assets/hero-dish.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";
import scallopsImage from "@/assets/menu-scallops.jpg";
import steakImage from "@/assets/menu-steak.jpg";
import dessertImage from "@/assets/menu-dessert.jpg";
import { Star, Clock, Award, Utensils } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroDish}
            alt="Signature dish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block text-gold-light font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Fine Dining Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-6"
          >
            Where Every Dish
            <br />
            <span className="text-gold-light">Tells a Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-champagne/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Experience culinary artistry in an atmosphere of refined elegance.
            Each plate is crafted with passion, precision, and the finest seasonal ingredients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-light to-transparent" />
        </motion.div>
      </section>

      {/* Features Strip */}
      <section className="bg-secondary py-8">
        <div className="container-wide flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: Award, text: "Award Winning Cuisine" },
            { icon: Utensils, text: "Seasonal Ingredients" },
            { icon: Clock, text: "Open Daily from 5PM" },
            { icon: Star, text: "Michelin Recognized" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-foreground/70"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-sans text-sm tracking-wide">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                A Tradition of
                <br />Excellence Since 2010
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                Aurum was born from a simple belief: that exceptional dining is about more
                than food. It's about creating moments that linger long after the last bite.
                Our kitchen celebrates classical techniques with modern sensibilities.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                Every ingredient is sourced with intention, every dish composed with care,
                and every guest welcomed like family.
              </p>
              <Button variant="elegantOutline" size="lg" asChild>
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={interiorImage}
                alt="Restaurant interior"
                className="w-full aspect-[4/5] object-cover shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 shadow-gold">
                <span className="font-serif text-4xl text-primary-foreground block">15+</span>
                <span className="font-sans text-xs text-primary-foreground/80 uppercase tracking-wider">
                  Years of Excellence
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4 block">
              Culinary Excellence
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Signature Creations
            </h2>
            <div className="divider-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: scallopsImage,
                title: "Seared Scallops",
                description: "Cauliflower purée, pancetta crisp, citrus beurre blanc",
                price: "$38",
              },
              {
                image: steakImage,
                title: "Wagyu Tenderloin",
                description: "Bordelaise reduction, truffle pomme purée",
                price: "$95",
              },
              {
                image: dessertImage,
                title: "Chocolate Sphere",
                description: "Valrhona ganache, raspberry coulis, gold leaf",
                price: "$24",
              },
            ].map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl text-foreground mb-2">{dish.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground mb-3 leading-relaxed">
                    {dish.description}
                  </p>
                  <span className="font-serif text-lg text-primary">{dish.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="elegantOutline" size="lg" asChild>
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">
              "An extraordinary dining experience. The attention to detail, from the
              ambiance to the final course, was nothing short of perfection."
            </blockquote>
            <cite className="font-sans text-sm text-muted-foreground not-italic">
              — James Mitchell, New York Times
            </cite>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <Button variant="elegantOutline" asChild>
              <Link to="/reviews">Read More Reviews</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={interiorImage}
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>

        <div className="relative z-10 container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-6">
              Begin Your Culinary Journey
            </h2>
            <p className="font-sans text-champagne/70 text-lg mb-10 max-w-xl mx-auto">
              Reserve your table and discover why discerning guests return to
              Aurum time and again.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/reservations">Make a Reservation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
