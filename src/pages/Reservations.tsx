import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, Utensils } from "lucide-react";
import { toast } from "sonner";

const Reservations = () => {
  const [reservationForm, setReservationForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    notes: "",
  });

  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would connect to a backend
    toast.success("Reservation request submitted! We'll confirm via email shortly.");
    setReservationForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      notes: "",
    });
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order request submitted! Check your email for confirmation.");
    setOrderForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      notes: "",
    });
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
            Join Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Reservations & Ordering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-muted-foreground max-w-xl mx-auto"
          >
            Reserve your table for an unforgettable evening or enjoy our cuisine at home
          </motion.p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Tabs defaultValue="reservation" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-muted">
              <TabsTrigger value="reservation" className="font-sans text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Reserve a Table
              </TabsTrigger>
              <TabsTrigger value="order" className="font-sans text-sm">
                <Utensils className="w-4 h-4 mr-2" />
                Order Online
              </TabsTrigger>
            </TabsList>

            {/* Reservation Form */}
            <TabsContent value="reservation">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <form onSubmit={handleReservationSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="res-name" className="font-sans text-sm">
                        Full Name *
                      </Label>
                      <Input
                        id="res-name"
                        required
                        value={reservationForm.name}
                        onChange={(e) =>
                          setReservationForm({ ...reservationForm, name: e.target.value })
                        }
                        className="bg-card border-border"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="res-email" className="font-sans text-sm">
                        Email Address *
                      </Label>
                      <Input
                        id="res-email"
                        type="email"
                        required
                        value={reservationForm.email}
                        onChange={(e) =>
                          setReservationForm({ ...reservationForm, email: e.target.value })
                        }
                        className="bg-card border-border"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="res-phone" className="font-sans text-sm">
                        Phone Number *
                      </Label>
                      <Input
                        id="res-phone"
                        type="tel"
                        required
                        value={reservationForm.phone}
                        onChange={(e) =>
                          setReservationForm({ ...reservationForm, phone: e.target.value })
                        }
                        className="bg-card border-border"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="res-guests" className="font-sans text-sm flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Number of Guests *
                      </Label>
                      <Select
                        value={reservationForm.guests}
                        onValueChange={(value) =>
                          setReservationForm({ ...reservationForm, guests: value })
                        }
                      >
                        <SelectTrigger className="bg-card border-border">
                          <SelectValue placeholder="Select party size" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                          <SelectItem value="9+">9+ (Private Event)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="res-date" className="font-sans text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Preferred Date *
                      </Label>
                      <Input
                        id="res-date"
                        type="date"
                        required
                        value={reservationForm.date}
                        onChange={(e) =>
                          setReservationForm({ ...reservationForm, date: e.target.value })
                        }
                        className="bg-card border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="res-time" className="font-sans text-sm flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Preferred Time *
                      </Label>
                      <Select
                        value={reservationForm.time}
                        onValueChange={(value) =>
                          setReservationForm({ ...reservationForm, time: value })
                        }
                      >
                        <SelectTrigger className="bg-card border-border">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"].map(
                            (time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="res-occasion" className="font-sans text-sm">
                      Special Occasion (Optional)
                    </Label>
                    <Select
                      value={reservationForm.occasion}
                      onValueChange={(value) =>
                        setReservationForm({ ...reservationForm, occasion: value })
                      }
                    >
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder="Celebrating something special?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="business">Business Dinner</SelectItem>
                        <SelectItem value="date">Date Night</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="res-notes" className="font-sans text-sm">
                      Additional Requests
                    </Label>
                    <Textarea
                      id="res-notes"
                      value={reservationForm.notes}
                      onChange={(e) =>
                        setReservationForm({ ...reservationForm, notes: e.target.value })
                      }
                      className="bg-card border-border min-h-[100px]"
                      placeholder="Dietary restrictions, seating preferences, or special requests..."
                    />
                  </div>

                  <Button type="submit" variant="elegant" size="lg" className="w-full">
                    Request Reservation
                  </Button>

                  <p className="text-center font-sans text-xs text-muted-foreground">
                    You will receive a confirmation email once your reservation is approved.
                    For parties of 9 or more, please call us directly.
                  </p>
                </form>
              </motion.div>
            </TabsContent>

            {/* Online Ordering Form */}
            <TabsContent value="order">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-center mb-8 p-6 bg-muted rounded-sm">
                  <p className="font-sans text-sm text-muted-foreground">
                    Browse our{" "}
                    <a href="/menu" className="text-primary underline">
                      full menu
                    </a>{" "}
                    and list your selections below. We'll confirm your order and provide pickup/delivery timing.
                  </p>
                </div>

                <form onSubmit={handleOrderSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="order-name" className="font-sans text-sm">
                        Full Name *
                      </Label>
                      <Input
                        id="order-name"
                        required
                        value={orderForm.name}
                        onChange={(e) =>
                          setOrderForm({ ...orderForm, name: e.target.value })
                        }
                        className="bg-card border-border"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="order-email" className="font-sans text-sm">
                        Email Address *
                      </Label>
                      <Input
                        id="order-email"
                        type="email"
                        required
                        value={orderForm.email}
                        onChange={(e) =>
                          setOrderForm({ ...orderForm, email: e.target.value })
                        }
                        className="bg-card border-border"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="order-phone" className="font-sans text-sm">
                        Phone Number *
                      </Label>
                      <Input
                        id="order-phone"
                        type="tel"
                        required
                        value={orderForm.phone}
                        onChange={(e) =>
                          setOrderForm({ ...orderForm, phone: e.target.value })
                        }
                        className="bg-card border-border"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="order-address" className="font-sans text-sm">
                        Delivery Address (or "Pickup")
                      </Label>
                      <Input
                        id="order-address"
                        value={orderForm.address}
                        onChange={(e) =>
                          setOrderForm({ ...orderForm, address: e.target.value })
                        }
                        className="bg-card border-border"
                        placeholder="123 Main St, or Pickup"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="order-notes" className="font-sans text-sm">
                      Your Order *
                    </Label>
                    <Textarea
                      id="order-notes"
                      required
                      value={orderForm.notes}
                      onChange={(e) =>
                        setOrderForm({ ...orderForm, notes: e.target.value })
                      }
                      className="bg-card border-border min-h-[150px]"
                      placeholder="Please list the items you'd like to order, including quantities..."
                    />
                  </div>

                  <Button type="submit" variant="elegant" size="lg" className="w-full">
                    Submit Order Request
                  </Button>

                  <p className="text-center font-sans text-xs text-muted-foreground">
                    We'll confirm your order via email with final pricing and timing.
                    Payment is collected upon pickup or delivery.
                  </p>
                </form>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Cancellation Policy
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Please notify us 24 hours in advance for cancellations or changes.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Large Parties
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                For groups of 9 or more, please call us at +1 (234) 567-890.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Dress Code
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Smart casual attire is requested. No athletic wear or flip-flops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservations;
