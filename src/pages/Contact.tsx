import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
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
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-muted-foreground max-w-xl mx-auto"
          >
            We'd love to hear from you. Reach out for reservations, inquiries, or private events.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl text-foreground mb-8">
                Visit Us
              </h2>

              <div className="space-y-8">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Address</h3>
                    <p className="font-sans text-muted-foreground">
                      123 Culinary Avenue
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Phone</h3>
                    <p className="font-sans text-muted-foreground">
                      +1 (234) 567-890
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@aurum.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Email</h3>
                    <p className="font-sans text-muted-foreground">
                      hello@aurum.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Hours</h3>
                    <div className="font-sans text-sm text-muted-foreground space-y-1">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <div className="w-full h-64 bg-muted rounded-sm flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-sans text-sm text-muted-foreground">
                      Google Map Integration
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs text-primary underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl text-foreground mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-sans text-sm">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-card border-border"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-sans text-sm">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-card border-border"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-sans text-sm">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="bg-card border-border"
                    placeholder="Private Event Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-sans text-sm">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-card border-border min-h-[150px]"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button type="submit" variant="elegant" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
