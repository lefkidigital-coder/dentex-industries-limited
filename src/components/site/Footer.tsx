import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <span className="inline-grid place-items-center rounded-md bg-white px-3 py-2">
              <Logo variant="horizontal" className="h-9 w-auto" />
            </span>
            <p className="mt-4 text-sm text-primary-foreground/90 leading-relaxed">
              Precision plastic packaging for East Africa's leading brands. Trusted since 1986.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/95">
              <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary-foreground">Our Products</Link></li>
              <li><Link to="/industries" className="hover:text-primary-foreground">Industries</Link></li>
              <li><Link to="/quality" className="hover:text-primary-foreground">Quality & Innovation</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary-foreground">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/95">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary-foreground" />{COMPANY.address}</li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-primary-foreground" />
                <span>
                  <a href={COMPANY.phonePrimaryHref} className="hover:text-primary-foreground">{COMPANY.phonePrimary}</a>
                  <br />
                  <a href={COMPANY.phoneSecondaryHref} className="hover:text-primary-foreground">{COMPANY.phoneSecondary}</a>
                </span>
              </li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-primary-foreground" /><a href={COMPANY.emailHref} className="hover:text-primary-foreground">{COMPANY.email}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground">Business Hours</h4>
            <p className="text-sm text-primary-foreground/95">Monday – Saturday<br />9:00 AM – 6:00 PM EAT</p>
            <p className="mt-4 text-xs text-primary-foreground/90">{COMPANY.certification}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/90">
          <p>© {new Date().getFullYear()} Dentex Industries Ltd. All rights reserved.</p>
          <p>Precision Plastic Packaging · Made in Kenya</p>
        </div>
      </div>
    </footer>
  );
}