import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-gold-600 ${
      isActive ? "text-gold-600" : "text-navy-900"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-navy-900 text-xs text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-4 py-1.5">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1">
            <Phone size={12} /> {siteConfig.phone}
          </a>
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-xl font-bold text-navy-900">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            className="rounded bg-gold-500 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-gold-600"
          >
            Apply Now
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t px-4 py-4 md:hidden">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkClass}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            onClick={() => setOpen(false)}
            className="rounded bg-gold-500 px-4 py-2 text-center text-sm font-semibold text-navy-900"
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
