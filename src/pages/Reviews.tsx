import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const reviews = [
  {
    id: 1,
    name: "James Mitchell",
    source: "New York Times",
    rating: 5,
    text: "An extraordinary dining experience. The attention to detail, from the ambiance to the final course, was nothing short of perfection. Aurum sets the gold standard for fine dining in the city.",
    date: "December 2025",
  },
  {
    id: 2,
    name: "Sarah Chen",
    source: "Food & Wine",
    rating: 5,
    text: "The Wagyu tenderloin is simply transcendent. Chef's mastery of technique is evident in every bite. This is destination dining at its finest.",
    date: "November 2025",
  },
  {
    id: 3,
    name: "Michael & Lauren R.",
    source: "OpenTable Verified",
    rating: 5,
    text: "We celebrated our anniversary here and couldn't have asked for a more perfect evening. The staff made us feel like royalty, and the tasting menu was a culinary journey we won't forget.",
    date: "November 2025",
  },
  {
    id: 4,
    name: "David Thompson",
    source: "Google Review",
    rating: 5,
    text: "Third visit, and it just keeps getting better. The seared scallops are a must-order. Impeccable wine pairings and flawless service.",
    date: "October 2025",
  },
  {
    id: 5,
    name: "Emily Nakamura",
    source: "Yelp Elite",
    rating: 5,
    text: "The chocolate sphere dessert is pure theater—and it tastes even better than it looks. Every dish tells a story, and the sommelier's recommendations were spot-on.",
    date: "October 2025",
  },
  {
    id: 6,
    name: "Robert & Marie Foster",
    source: "TripAdvisor",
    rating: 4,
    text: "Beautiful ambiance and outstanding food. The only reason for 4 stars instead of 5 is the wait time on a busy Saturday—but honestly, it was worth it.",
    date: "September 2025",
  },
];

const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

const Reviews = () => {
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
            Guest Experiences
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Reviews
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-serif text-2xl text-foreground">{averageRating}</span>
            <span className="font-sans text-sm text-muted-foreground">
              ({reviews.length} reviews)
            </span>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-muted" />
                    ))}
                  </div>
                </div>

                <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-serif text-foreground">{review.name}</p>
                  <p className="font-sans text-xs text-muted-foreground">
                    {review.source} • {review.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl text-foreground mb-4">
              Ready to Experience Aurum?
            </h2>
            <p className="font-sans text-muted-foreground mb-8">
              Join the guests who've made unforgettable memories at our table.
            </p>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/reservations">Make a Reservation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
