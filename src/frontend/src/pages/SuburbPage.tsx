import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "@tanstack/react-router";
import {
  Bath,
  Car,
  CheckCircle2,
  ChefHat,
  Flame,
  Home,
  Layers,
  MapPin,
  Shirt,
  Sparkles,
  Wind,
} from "lucide-react";
import { type ElementType, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { suburbBySlug, suburbs } from "./suburbData";

interface IncludedItem {
  icon: ElementType;
  label: string;
}

const included: IncludedItem[] = [
  { icon: ChefHat, label: "Kitchen (Full Clean)" },
  { icon: Bath, label: "Bathrooms & Toilets" },
  { icon: Layers, label: "Carpet Steam Clean" },
  { icon: Wind, label: "Windows & Tracks" },
  { icon: Flame, label: "Oven & Rangehood" },
  { icon: Home, label: "Walls & Skirting Boards" },
  { icon: Shirt, label: "Laundry" },
  { icon: Car, label: "Garage" },
];

export default function SuburbPage() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const suburb = suburbBySlug[slug];

  useEffect(() => {
    if (!suburb) {
      document.title = "Suburb Not Found | Tru Bond Cleaning North Brisbane";
      return;
    }
    document.title = suburb.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", suburb.metaDescription);
    // OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      (ogTitle as HTMLMetaElement).setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", suburb.metaTitle);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      (ogDesc as HTMLMetaElement).setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", suburb.metaDescription);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      (canonical as HTMLLinkElement).setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      `https://trubondcleaningbrisbane.com/suburbs/${suburb.slug}`,
    );
  }, [suburb]);

  if (!suburb) {
    return (
      <div
        className="min-h-[60vh] flex items-center justify-center"
        data-ocid="suburb.error_state"
      >
        <div className="text-center px-4">
          <h1 className="font-display text-3xl font-black text-foreground mb-4">
            Suburb Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            We could not find a page for that suburb. Please check the URL or
            view our service areas.
          </p>
          <Button asChild data-ocid="suburb.primary_button">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const nearbySuburbObjects = suburb.nearbySuburbs
    .map((name) => suburbs.find((s) => s.name === name))
    .filter(Boolean) as typeof suburbs;

  const sectionH2Class =
    "font-display text-2xl sm:text-3xl font-black text-foreground mb-4";

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[420px] sm:min-h-[500px] flex items-center"
        aria-label={`Bond cleaning in ${suburb.name} hero`}
        data-ocid="suburb.section"
      >
        <img
          src="/assets/generated/suburb-house-exterior.dim_800x500.jpg"
          alt={suburb.heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          width={800}
          height={500}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/20">
              <MapPin className="w-4 h-4" />
              North Brisbane Bond Cleaning
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-4 text-balance">
              {suburb.h1}
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
              Professional end of lease cleaning in {suburb.name} — following
              the REIQ checklist with a bond back guarantee.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 text-primary hover:bg-yellow-300 font-bold shadow-hero"
                data-ocid="suburb.primary_button"
              >
                <Link to="/contact">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get a Free Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold"
                data-ocid="suburb.secondary_button"
              >
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content column */}
            <article className="lg:col-span-2 prose-sm max-w-none">
              <h2 className={sectionH2Class}>
                What is Bond Cleaning in {suburb.name}?
              </h2>
              {suburb.content[0] && (
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {suburb.content[0]}
                </p>
              )}

              <h2 className={sectionH2Class}>
                Why Bond Cleaning Matters in {suburb.name}
              </h2>
              {suburb.content[1] && (
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {suburb.content[1]}
                </p>
              )}

              <h2 className={sectionH2Class}>
                What&apos;s Included in a Full Bond Clean
              </h2>
              {suburb.content[2] && (
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {suburb.content[2]}
                </p>
              )}

              {/* Interior image - branded with SEO alt text */}
              <div className="rounded-2xl overflow-hidden shadow-card my-8">
                <img
                  src="/assets/generated/suburb-apartment-interior.dim_800x500.jpg"
                  alt={suburb.secondAlt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={800}
                  height={500}
                />
              </div>

              <h2 className={sectionH2Class}>
                Why Choose Tru Bond Cleaning in {suburb.name}?
              </h2>
              {suburb.content[3] && (
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {suburb.content[3]}
                </p>
              )}

              <h2 className={sectionH2Class}>
                How to Book Your {suburb.name} Bond Clean
              </h2>
              {suburb.content[4] && (
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {suburb.content[4]}
                </p>
              )}

              {/* Team photo with branded alt text */}
              <div className="rounded-2xl overflow-hidden shadow-card my-8">
                <img
                  src="/assets/generated/about-team-photo.dim_800x500.jpg"
                  alt={`Tru Bond Cleaning professional team in ${suburb.name} North Brisbane, fully equipped and ready to deliver a thorough bond clean`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={500}
                />
              </div>

              {/* E-E-A-T trust section */}
              <div className="bg-secondary/30 rounded-2xl p-6 mt-6">
                <h2 className={sectionH2Class}>
                  Our Experience in {suburb.name} — Why You Can Trust Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tru Bond Cleaning has completed over 500 bond cleans across
                  North Brisbane, including many properties in {suburb.name}. We
                  know the standards that local property managers apply at final
                  inspection. We know what gets flagged and what gets missed.
                  And we use that knowledge on every job.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every member of our team is police-checked and fully insured.
                  We train to the REIQ bond cleaning standard — the same
                  checklist your property manager uses. We bring all our own
                  professional equipment and eco-friendly cleaning products.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our bond back guarantee means if your property manager raises
                  any concern after inspection, we return within 48 hours and
                  fix it at no charge to you. We've honoured this guarantee on
                  every job we've done in {suburb.name} and across North
                  Brisbane.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "500+ bond cleans completed across North Brisbane",
                    "98% bond return success rate",
                    "Police-checked and fully insured team",
                    "REIQ checklist followed on every job",
                    "Bond back guarantee — honoured every time",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Checklist */}
              <Card className="shadow-card" data-ocid="suburb.card">
                <CardContent className="p-6">
                  <h3 className="font-display font-black text-lg text-foreground mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {included.map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-sm text-foreground/80">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Trust badges */}
              <Card className="shadow-card bg-secondary">
                <CardContent className="p-6">
                  <h3 className="font-display font-black text-lg text-foreground mb-4">
                    Our Promise
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Bond back guarantee",
                      "REIQ checklist followed",
                      "Police-checked team",
                      "Eco-friendly products",
                      "Fully insured",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-xs text-foreground/80 font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quick contact */}
              <Card className="shadow-card bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-display font-black text-lg mb-3">
                    Get a Free Quote
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Fast response. Fixed price. No hidden fees.
                  </p>
                  <div className="space-y-2">
                    <Button
                      asChild
                      className="w-full bg-yellow-400 text-primary hover:bg-yellow-300 font-bold"
                      data-ocid="suburb.submit_button"
                    >
                      <Link to="/contact">Book Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-white/30 text-white hover:bg-white/10"
                      data-ocid="suburb.secondary_button"
                    >
                      <a
                        href="https://wa.me/61488841883"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiWhatsapp className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        className="py-14 section-gradient"
        aria-label={`Book bond cleaning in ${suburb.name}`}
        data-ocid="suburb.cta.section"
      >
        <div className="container mx-auto px-4">
          <Card className="shadow-hero max-w-3xl mx-auto overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-black text-foreground mb-3">
                Ready to Get Your Bond Back in {suburb.name}?
              </h2>
              <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto">
                Join hundreds of {suburb.name} renters who got their full bond
                back with Tru Bond Cleaning. Bond back guarantee included.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                  data-ocid="suburb.cta.primary_button"
                >
                  <Link to="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Book Now
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  data-ocid="suburb.cta.secondary_button"
                >
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* NEARBY SUBURBS */}
      <section className="py-12 bg-white" aria-labelledby="nearby-heading">
        <div className="container mx-auto px-4">
          <h2
            id="nearby-heading"
            className="font-display text-xl font-black text-foreground mb-6 text-center"
          >
            Also Serving Nearby Suburbs
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbySuburbObjects.map((s, i) => (
              <Link
                key={s.slug}
                to="/suburbs/$slug"
                params={{ slug: s.slug }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                data-ocid={`suburb.nearby.link.${i + 1}`}
              >
                <MapPin className="w-3.5 h-3.5" />
                Bond Cleaning {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
