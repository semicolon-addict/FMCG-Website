import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { categories } from '@/data/products';

const Footer = () => {
  return (
    <footer className="bg-secondary/70 pt-16 pb-8 spice-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <img 
                src="/chitaleLogo.png" 
                alt="Chitale Sweet Home Logo" 
                className="h-11 w-50 transition-transform duration-200 group-hover:scale-110"
              />
              <span className="text-2xl font-bold gradient-text">CHITALE SWEET HOME</span>
            </Link>
            <p className="text-foreground/80 mb-6 text-sm">
              Bringing authentic flavors of traditional namkeens and sweets to your doorstep since 1954.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-primary mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-foreground/80 hover:text-primary transition-colors hover:underline">Home</Link></li>
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link to={`/products/${cat.slug}`} className="text-foreground/80 hover:text-primary transition-colors hover:underline">{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-primary mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-1" />
                <span className="text-foreground/80">
                  1306, Sadashiv Peth, Near Khunya Murlidhar Mandir, Khajina Vihir Rd,<br />Pune, MH 411030.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+912024472943" className="text-foreground/80 hover:text-primary transition-colors">020 2447 2943</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:chitalesweethome@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">chitalesweethome@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-primary mb-5">Business Hours</h4>
            <ul className="space-y-1 text-sm text-foreground/80">
              <li>
                <span className="font-medium">Mon - Sat:</span><br/>8:30 AM - 1:00 PM
              </li>
              <li>
                <span className="text-transparent"></span>1:00 PM – 4:00 PM Closed
              </li>
              <li>
                <span className="text-transparent"></span>4:00 PM – 9:00 PM
              </li>
              <li>
                <span className="font-medium">Sunday:</span> Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-10">
          <h4 className="font-semibold text-xl text-primary mb-4 text-center">Find Us On Map</h4>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Chitale Sweet Home Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.3040579241992!2d73.8480775750376!3d18.511383682580384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c074ffffffff%3A0x9c8037697b9b021d!2sChitale%20Sweet%20Home!5e0!3m2!1sen!2sin!4v1753213343345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-foreground/20 pt-8 mt-10 text-center text-foreground/70 text-sm">
          <p>&copy; {new Date().getFullYear()} CHITALE SWEET HOME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
