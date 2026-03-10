import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { to: "/" as const, label: "Home" },
    { to: "/services" as const, label: "Services" },
    { to: "/about" as const, label: "About" },
    { to: "/contact" as const, label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          data-ocid="nav.link"
          className="flex items-center gap-2 shrink-0"
        >
          <img
            src="/assets/generated/tru-bond-logo-transparent.dim_300x80.png"
            alt="Tru Bond Cleaning North Brisbane logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              link.to === "/"
                ? currentPath === "/"
                : currentPath.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className={`text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" data-ocid="nav.primary_button">
            <Link to="/contact">
              <Sparkles className="w-4 h-4 mr-1" />
              Get Free Quote
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          data-ocid="nav.toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4">
          <nav className="flex flex-col gap-2 pt-3">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="nav.link"
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild className="mt-2" data-ocid="nav.primary_button">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get Free Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
