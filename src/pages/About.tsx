import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import interiorImage from "@/assets/restaurant-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div className="relative z-10 container-narrow text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            A Legacy of Flavor
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="divider-gold mx-auto"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={interiorImage}
                alt="Restaurant interior"
                className="w-full aspect-[4/5] object-cover shadow-elevated"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                The Beginning
              </h2>
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                <p>
                  Aurum opened its doors in 2010 with a singular vision: to create
                  a dining experience that honors tradition while embracing innovation.
                  What began as a small neighborhood gem has grown into one of the
                  city's most celebrated culinary destinations.
                </p>
                <p>
                  Our founders believed that great food should tell a story—of the
                  land where ingredients were grown, of the hands that prepared them,
                  and of the moments shared around the table. This philosophy
                  continues to guide everything we do.
                </p>
                <p>
                  The name "Aurum," Latin for gold, reflects our commitment to
                  alchemy in the kitchen—transforming the finest raw ingredients
                  into something precious and memorable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Our Philosophy
            </h2>
            <div className="divider-gold mx-auto mb-10" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Seasonal Excellence",
                description:
                  "We work closely with local farmers and artisans, allowing the rhythm of the seasons to inspire our ever-evolving menu.",
              },
              {
                title: "Artful Simplicity",
                description:
                  "Our dishes celebrate the inherent beauty of each ingredient, enhanced but never obscured by technique.",
              },
              {
                title: "Gracious Hospitality",
                description:
                  "We believe every guest deserves to feel welcomed, celebrated, and cared for throughout their experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              What Sets Us Apart
            </h2>
            <div className="divider-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                number: "01",
                title: "Farm-to-Table Partnerships",
                description:
                  "We maintain direct relationships with over 30 local farms and purveyors, ensuring ingredients arrive at their peak of freshness and flavor.",
              },
              {
                number: "02",
                title: "Time-Honored Techniques",
                description:
                  "Our kitchen respects classical methods—from slow braises to delicate sauces—while integrating modern approaches where they enhance the final dish.",
              },
              {
                number: "03",
                title: "Curated Wine Program",
                description:
                  "Our sommelier has assembled a collection of over 400 labels, from storied estates to emerging producers, each selected to complement our cuisine.",
              },
              {
                number: "04",
                title: "Attentive Service",
                description:
                  "Our team is trained to anticipate needs without intrusion, creating an atmosphere where you can focus entirely on your companions and your meal.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <span className="font-serif text-4xl text-primary/30">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for future sections */}
      {/* Chef bios, specialty spotlights, etc. can be added here */}

      <Footer />
    </div>
  );
};

export default About;
