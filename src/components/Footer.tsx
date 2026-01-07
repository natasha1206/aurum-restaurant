import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-champagne">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-semibold text-ivory tracking-wide">
                Aurum
              </span>
            </Link>
            <p className="text-champagne/70 font-sans text-sm leading-relaxed mb-6">
              Where culinary artistry meets timeless elegance. Experience dining
              as it was meant to be.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-6">Explore</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Our Story", path: "/about" },
                { name: "Menu", path: "/menu" },
                { name: "Gallery", path: "/gallery" },
                { name: "Reviews", path: "/reviews" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-champagne/70 hover:text-ivory font-sans text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-6">Hours</h4>
            <div className="space-y-3 font-sans text-sm">
              <div className="flex justify-between text-champagne/70">
                <span>Monday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between text-champagne/70">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between text-champagne/70">
                <span>Sunday</span>
                <span>4:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-champagne/70 hover:text-ivory transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm">
                  123 Culinary Avenue
                  <br />
                  New York, NY 10001
                </span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-champagne/70 hover:text-ivory transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-sm">+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:hello@aurum.com"
                className="flex items-center gap-3 text-champagne/70 hover:text-ivory transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="font-sans text-sm">hello@aurum.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-champagne/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-champagne/50 font-sans text-xs">
            © {new Date().getFullYear()} Aurum Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-champagne/50 hover:text-champagne font-sans text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-champagne/50 hover:text-champagne font-sans text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
