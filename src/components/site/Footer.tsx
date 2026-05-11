import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-gradient-forest overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 inline-flex items-center justify-center rounded-sm bg-gradient-gold text-primary-foreground font-display text-lg font-bold">
              B
            </span>
            <span className="font-display text-xl">Black Woodpecker Limited</span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Premium African hardwood timber export solutions delivered to global markets with reliability and integrity since 2009.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Product Catalogue</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-gold shrink-0" /><span>Tema Industrial Area, Accra, Ghana</span></li>
            <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5 text-gold shrink-0" /><span>+233 30 000 0000</span></li>
            <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 text-gold shrink-0" /><span>exports@blackwoodpeckerlimited.com</span></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Black Woodpecker Limited. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Sustainably sourced · Globally trusted</p>
        </div>
      </div>
    </footer>
  );
}
