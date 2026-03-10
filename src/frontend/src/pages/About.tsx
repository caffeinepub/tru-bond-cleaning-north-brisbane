import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, CheckCircle2, Heart, MapPin, Users } from "lucide-react";
import { useEffect } from "react";

function useMetaTags(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
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

export default function About() {
  useMetaTags(
    "About Tru Bond Cleaning North Brisbane | Local Bond Clean Specialists",
    "Learn about Tru Bond Cleaning — North Brisbane's trusted bond cleaning specialists. Locally owned, REIQ checklist trained, fully insured with a bond back guarantee.",
  );

  return (
    <>
      {/* Header */}
      <section
        className="bg-primary text-primary-foreground py-16"
        data-ocid="about.section"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            About Tru Bond Cleaning
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            North Brisbane's locally owned bond cleaning specialists. We care
            about your bond as much as you do.
          </p>
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
                We Started Because Moving Out Shouldn't Be This Hard
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tru Bond Cleaning was started by a team of North Brisbane
                  locals who knew exactly how stressful moving out could be.
                  We'd been renters ourselves. We knew the panic of trying to
                  clean a whole property in the last few days of a tenancy —
                  exhausted, time-poor, and worried about losing bond money.
                </p>
                <p>
                  So we built a service we'd want to use ourselves. A service
                  that shows up on time, does the job properly, and backs it
                  with a guarantee. No nasty surprises. No cutting corners. Just
                  a clean property and your bond back in your pocket.
                </p>
                <p>
                  Today, Tru Bond Cleaning is one of North Brisbane's most
                  trusted bond cleaning companies. We service suburbs across
                  Chermside, Aspley, Bridgeman Downs, Everton Park, Kedron,
                  Stafford, Nundah, and every suburb in between.
                </p>
                <p>
                  Every job we do is treated the same way — as if it's our own
                  bond on the line. We follow the REIQ checklist to the letter,
                  use eco-friendly products, and make sure every single item is
                  ticked off before we leave.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-hero">
              <img
                src="/assets/generated/hero-bond-cleaning.dim_1200x600.jpg"
                alt="Tru Bond Cleaning team ready to serve North Brisbane customers"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
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
