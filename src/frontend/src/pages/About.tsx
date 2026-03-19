import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Heart,
  MapPin,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { useEffect } from "react";

function useMetaTags(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
    // OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      (ogTitle as HTMLMetaElement).setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      (ogDesc as HTMLMetaElement).setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", description);
  }, [title, description]);
}

const values = [
  {
    icon: Award,
    title: "Bond Back Guarantee",
    desc: "We stand behind every clean. If your property manager isn't happy, we come back and fix it — free of charge. No questions asked.",
  },
  {
    icon: Users,
    title: "Trained & Trusted Team",
    desc: "Every cleaner on our team is police-checked, fully insured, and trained to the REIQ standard. We only hire people we'd trust in our own home.",
  },
  {
    icon: MapPin,
    title: "Local North Brisbane Specialists",
    desc: "We know North Brisbane. We know the suburbs, the property managers, and the standards expected in our area. Local knowledge matters.",
  },
  {
    icon: Heart,
    title: "Eco-Friendly Products",
    desc: "We use eco-friendly, pet-safe cleaning products throughout. Good for your family, good for the environment, and still tough on grime.",
  },
];

const stats = [
  { value: "500+", label: "Bond Cleans Completed" },
  { value: "98%", label: "Bond Back Success Rate" },
  { value: "15+", label: "North Brisbane Suburbs Served" },
  { value: "5★", label: "Average Customer Rating" },
];

export default function About() {
  useMetaTags(
    "About Tru Bond Cleaning North Brisbane | Local Bond Clean Specialists",
    "Learn about Tru Bond Cleaning — North Brisbane's trusted bond cleaning specialists. Locally owned, REIQ checklist trained, fully insured with a bond back guarantee. 500+ happy customers.",
  );

  return (
    <>
      {/* Header */}
      <section
        className="bg-primary text-primary-foreground py-16"
        aria-label="About Tru Bond Cleaning North Brisbane"
        data-ocid="about.section"
      >
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            About Us
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            North Brisbane's Most Trusted Bond Cleaning Specialists
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Locally owned, police-checked, fully insured — and obsessed with
            getting your bond back. That's the Tru Bond Cleaning difference.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-black text-primary">
                  {s.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-6">
                We Built This Business Because Moving Out Shouldn't Cost You
                Your Bond
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tru Bond Cleaning was started right here in North Brisbane —
                  by people who had been renters themselves. We knew the stress
                  of moving out. The long checklist. The arguments over bond
                  money. The panic of trying to clean an entire house in the
                  final days of a tenancy, while juggling packing, truck hire,
                  and a new address.
                </p>
                <p>
                  So we built a service we'd actually want to use. One that
                  shows up on time, does the job properly, and backs everything
                  with a real guarantee. No vague promises. No cutting corners.
                  No surprise bills.
                </p>
                <p>
                  Since we opened, we've completed over 500 bond cleans across
                  North Brisbane — from small Nundah apartments to large
                  Bridgeman Downs family homes. Every single job is treated the
                  same way: with the care and attention we'd give our own
                  property.
                </p>
                <p>
                  We follow the REIQ bond cleaning checklist to the letter. We
                  use eco-friendly products that are safe for kids and pets. We
                  bring every piece of equipment we need. And if your property
                  manager raises anything after inspection, we come back and fix
                  it for free. That's our bond back guarantee — and we've never
                  walked away from it.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-hero">
              <img
                src="/assets/generated/about-team-photo.dim_800x500.jpg"
                alt="Tru Bond Cleaning professional team in navy blue uniforms ready to clean a North Brisbane rental property"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-hero order-2 lg:order-1">
              <img
                src="/assets/generated/about-cleaning-expertise.dim_800x500.jpg"
                alt="Expert Tru Bond Cleaning technician deep cleaning a rental kitchen to REIQ bond cleaning checklist standard in North Brisbane"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={500}
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Our Expertise
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-6">
                Over 500 Bond Cleans. We Know What Property Managers Expect.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  There's a big difference between a general clean and a bond
                  clean. A general clean tidies the surface. A bond clean gets
                  into the oven seals, the sliding door tracks, the grout lines,
                  the exhaust fan covers — all the places your property manager
                  will look.
                </p>
                <p>
                  Our team trains specifically to the REIQ bond cleaning
                  standard — the checklist used by real estate agents and
                  property managers across Queensland. We know what gets flagged
                  at inspections, because we've seen it hundreds of times. Dusty
                  ceiling fans. Greasy rangehoods. Soap scum on shower screens.
                  Carpet stains that a vacuum won't touch. We don't miss these
                  things, because we know to look for them.
                </p>
                <p>
                  We also use professional-grade equipment that simply
                  outperforms anything you'd hire from a supermarket. Our
                  industrial hot water extraction machines remove deep carpet
                  stains and odours that domestic steamers can't reach. Our
                  degreasers cut through oven grease in minutes. Our streak-free
                  window system leaves glass sparkling without leaving residue.
                </p>
                <p>
                  Experience builds knowledge. And knowledge means your bond is
                  safer with us than with anyone else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-4">
              Why North Brisbane Renters Trust Tru Bond Cleaning
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We don't just clean houses. We protect your bond, your time, and
              your peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Police-Checked & Fully Insured",
                  desc: "Every team member passes a national police check before they ever step inside a client's property. We carry full public liability insurance, so you're protected.",
                },
                {
                  icon: Award,
                  title: "Bond Back Guarantee",
                  desc: "If your property manager flags anything we've cleaned, we return within 48 hours and fix it at absolutely no charge to you. We've honoured this guarantee every single time.",
                },
                {
                  icon: Star,
                  title: "REIQ Checklist Trained",
                  desc: "We train our team to the same standard property managers use for inspections. Nothing is left off the list. Nothing is half-done.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              {[
                {
                  icon: Heart,
                  title: "Eco-Friendly, Pet-Safe Products",
                  desc: "We only use biodegradable, non-toxic cleaning products. Safe for your children, safe for your pets, safe for the environment — and still powerful enough to pass inspection.",
                },
                {
                  icon: MapPin,
                  title: "Local North Brisbane Experts",
                  desc: "We're based right here in North Brisbane. We know the suburbs, the property managers, and the standards expected locally. This is our community and we take pride in looking after it.",
                },
                {
                  icon: Users,
                  title: "All Equipment Supplied",
                  desc: "We bring everything — commercial vacuum cleaners, industrial steam machines, mops, microfibre cloths, cleaning chemicals. You don't need to supply a single thing.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four things that drive everything we do at Tru Bond Cleaning.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-card"
                data-ocid={`about.item.${i + 1}`}
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* What Makes a Good Bond Cleaner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-6 text-center">
            What Makes a Bond Cleaner You Can Actually Trust?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
            <p>
              There are a lot of cleaning companies out there. Some are good.
              Some aren't. And when your bond money is on the line, the
              difference matters.
            </p>
            <p>
              A trustworthy bond cleaner does four things consistently: they
              follow the REIQ checklist, they show up with professional
              equipment, they're insured, and they back their work with a
              guarantee. Anything less is a risk.
            </p>
            <p>
              At Tru Bond Cleaning, we meet every one of these standards — and
              we've been doing it consistently across hundreds of North Brisbane
              properties. Here's what that looks like in practice:
            </p>
            <ul className="space-y-3">
              {[
                "We use the REIQ bond cleaning checklist — the official standard for rental properties in Queensland. We don't create our own version.",
                "We send trained, police-checked cleaners — not casual workers found on a job board the morning of your booking.",
                "We carry full public liability insurance — if something is accidentally damaged, you and we are both protected.",
                "We supply all equipment — industrial vacuums, commercial steam cleaners, microfibre systems, eco-friendly chemicals.",
                "We stand behind our work with a written bond back guarantee — not a vague promise, a real commitment.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              We're not the cheapest option in Brisbane. We're the best value
              option — because we do the job right the first time, and we fix it
              for free if anything is missed. That's a better deal than paying
              less and losing part of your bond.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-black text-foreground mb-4">
              Our Service Area
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We cover all of North Brisbane. If you're not sure whether we
              service your suburb, just send us a WhatsApp message and we'll
              confirm straight away.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Chermside",
              "Aspley",
              "Bridgeman Downs",
              "Everton Park",
              "Kedron",
              "Stafford",
              "Nundah",
              "Geebung",
              "Zillmere",
              "Boondall",
              "Bracken Ridge",
              "Carseldine",
              "Fitzgibbon",
              "Mango Hill",
              "North Lakes",
              "Petrie",
              "Strathpine",
              "Albany Creek",
              "Eatons Hill",
              "Warner",
            ].map((suburb) => (
              <span
                key={suburb}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-secondary-foreground text-sm font-medium rounded-full shadow-xs border border-border"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-black mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Get your free quote today. No obligation. No hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-primary hover:bg-yellow-300 font-bold"
              data-ocid="about.primary_button"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              data-ocid="about.secondary_button"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
