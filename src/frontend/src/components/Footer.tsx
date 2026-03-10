import { Link } from "@tanstack/react-router";
import { ExternalLink, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/assets/generated/tru-bond-logo-transparent.dim_300x80.png"
              alt="Tru Bond Cleaning North Brisbane logo"
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/75 leading-relaxed">
              North Brisbane's most trusted bond cleaning specialists. We get
              your bond back — guaranteed.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {(
                [
                  { to: "/", label: "Home" },
                  { to: "/services", label: "Our Services" },
                  { to: "/about", label: "About Us" },
                  { to: "/contact", label: "Get a Quote" },
                ] as const
              ).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid="nav.link"
                    className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/75">
                <Phone className="w-4 h-4 shrink-0" />
                <a
                  href="https://wa.me/61488841883"
                  className="hover:text-primary-foreground transition-colors"
                  data-ocid="nav.link"
                >
                  0488 841 883 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/75">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>North Brisbane, QLD, Australia</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/75">
                <ExternalLink className="w-4 h-4 shrink-0" />
                <a
                  href="https://trubondcleaningbrisbane.com"
                  className="hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="nav.link"
                >
                  trubondcleaningbrisbane.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {year} Tru Bond Cleaning North Brisbane. Built with love
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              className="underline hover:text-primary-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
