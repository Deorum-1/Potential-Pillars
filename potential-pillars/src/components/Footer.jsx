import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { navLinks, siteConfig } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold text-white">{siteConfig.name}</h3>
          <p className="mt-2 text-sm">{siteConfig.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold-500">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact Us</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {siteConfig.address}</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> {siteConfig.phone}</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> {siteConfig.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
