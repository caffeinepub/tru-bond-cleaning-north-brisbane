import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { useEffect } from "react";

function useMetaTags(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
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

const services = [
  {
    id: "bond-cleaning",
    title: "Bond Cleaning (End of Lease Cleaning)",
    subtitle: "The complete clean that gets your bond back",
    img: "/assets/generated/service-end-of-lease.dim_600x400.jpg",
    alt: "Professional bond cleaners completing end of lease clean in a North Brisbane rental property following the REIQ checklist",
    highlights: [
      "Full REIQ checklist clean",
      "Kitchen, bathrooms, bedrooms, living areas",
      "Floors vacuumed and mopped",
      "Bond back guarantee included",
    ],
    content: `Moving out is stressful. You're packing boxes, organising removalists, chasing utilities — and on top of all that, the property has to be spotless. That's where Tru Bond Cleaning steps in.

Our bond cleaning service covers every single item on the REIQ checklist — the official standard used by Queensland property managers at final inspection. We've completed over 500 bond cleans across North Brisbane, and we know exactly what gets flagged.

**What's included in every bond clean:**

• Kitchen — oven inside and out, rangehood and filters, stovetop, all cupboard interiors and fronts, benchtops, splashback, sink and taps
• Bathrooms — toilet (full disassembly), shower screen, bath, tiles, grout lines, vanity, mirrors, exhaust fans
• Bedrooms and living areas — ceiling fans, light fittings, wall spot cleaning, windowsills, blinds wipe-down
• Floors — vacuumed and mopped throughout, including under furniture
• Windows — glass cleaned inside and out, frames, sills, and tracks
• Laundry — trough, shelving, washing machine area
• Garage — swept, wiped, cobwebs removed

We bring every piece of equipment we need. You don't supply a thing. Our team is police-checked, fully insured, and trained specifically to the REIQ standard.

Our bond back guarantee means if your property manager raises any concerns after inspection, we return within 48 hours and fix it at zero additional cost. This guarantee has never been turned away — not once.

For most North Brisbane renters, a bond deposit is four weeks' rent — often $2,000 to $4,000. Protecting that money with a professional clean is one of the smartest decisions you can make when moving out. Book Tru Bond Cleaning today.`,
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Steam Cleaning",
    subtitle: "Deep clean that passes every inspection",
    img: "/assets/generated/service-carpet-steam.dim_600x400.jpg",
    alt: "Tru Bond Cleaning professional using industrial hot water extraction machine to steam clean carpet in a North Brisbane rental property",
    highlights: [
      "Industrial hot water extraction",
      "Pre-treatment for tough stains",
      "All carpet types including wool",
      "Dries in 2–4 hours",
    ],
    content: `Carpets hold on to everything — pet hair, dust, food odours, old stains, and deep-seated dirt that a standard vacuum never reaches. By the time you move out, your carpets have taken years of foot traffic. Property managers inspect them closely, and dirty or smelly carpets are one of the most common reasons bond money gets withheld.

Tru Bond Cleaning uses industrial-grade hot water extraction machines — the same professional standard used by commercial carpet cleaners. We push hot pressurised water deep into the fibres, break down the soil and bacteria, and extract it all out. The result is a carpet that looks, feels, and smells genuinely fresh.

**How we clean carpets:**

1. Pre-inspection — We check each carpet area and note any stains or high-traffic zones
2. Pre-treatment — We apply targeted pre-spray to break down stains before steaming
3. Hot water extraction — Our industrial machines deep clean the full carpet area
4. Post-inspection — We check everything has come up to standard

Most stains come out completely. Some older, set-in stains may lighten significantly but not disappear entirely. We'll always be honest with you about expectations before we start.

Carpet steam cleaning is included in our full bond clean package, or you can book it separately. We cover all carpet types including wool, nylon, polyester, and blended fibres. Typical drying time is 2 to 4 hours with ventilation.

Don't risk your bond on a rented machine from a supermarket — those machines use low pressure and rarely achieve the clean standard required for inspection. Our professional equipment does the job properly, the first time.`,
  },
  {
    id: "oven-kitchen",
    title: "Oven & Kitchen Deep Clean",
    subtitle: "Inspection-ready kitchen every time",
    img: "/assets/generated/service-kitchen-clean.dim_600x400.jpg",
    alt: "Spotless gleaming kitchen after professional oven and kitchen deep clean by Tru Bond Cleaning North Brisbane",
    highlights: [
      "Oven interior, racks, and glass door",
      "Rangehood filters and exhaust",
      "Cupboards inside and out",
      "Food-safe professional degreasers",
    ],
    content: `The oven is the single most-checked item on every property manager's inspection list. It's also the hardest thing to clean. Baked-on carbon, burnt food residue, and heavy grease don't come off with regular spray and wipe. You need the right degreasers, the right tools, and an experienced hand.

Our kitchen deep clean covers:

• Oven interior — cavity, racks (soaked separately), glass door inside and out, oven seals
• Rangehood — filters degreased, exterior wiped, light covers cleaned
• Stovetop — burners, grates, knobs, drip trays
• Benchtops and splashback — cleaned with surface-appropriate products
• Cupboards — all fronts wiped, all interiors cleaned including shelves and drawers
• Sink and taps — descaled and polished
• Dishwasher exterior — wiped and cleaned

We use food-safe, professional-grade degreasers that cut through the toughest build-up without damaging surfaces. We disassemble oven components where safe to do so — racks, burner grates, rangehood filters — and clean them properly, not just wipe them down.

A dirty kitchen is the number-one reason property managers flag issues at bond inspections. Don't lose hundreds of dollars from your bond because of a greasy oven. Let our experienced team handle it. This service is included in our full bond clean, or available as a standalone booking.`,
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    subtitle: "Crystal clear — inside and out",
    img: "/assets/generated/service-window-cleaning.dim_600x400.jpg",
    alt: "Professional window cleaning service by Tru Bond Cleaning leaving streak-free windows on a North Brisbane rental home",
    highlights: [
      "Inside and outside glass",
      "Frames, sills, and tracks",
      "Sliding door screens",
      "Streak-free finish guaranteed",
    ],
    content: `Clean windows change how a property looks — they let in light, make rooms feel bigger, and signal to property managers that the home has been well cared for. Dirty windows, streaks, and grimy tracks stand out immediately at inspection.

Tru Bond Cleaning cleans all windows as part of our standard bond clean. Here's what that includes:

• All window glass — cleaned inside and out with streak-free solution and microfibre cloths
• Window frames and architraves — wiped down completely
• Windowsills — cleaned and dried
• Window tracks — fully cleared of dust, debris, and dead insects
• Sliding door glass and frames — treated the same as windows
• Flyscreens — gently cleaned where accessible

Window tracks are often overlooked by tenants doing a DIY clean — they collect dust, debris, and insect remains that are immediately noticeable on inspection. Our team cleans them thoroughly using fine brushes and appropriate cleaners.

For exterior windows, we use squeegees and extension poles to reach higher panes safely. All safe work practices are followed. We don't cut corners on access.

Clean windows are a standard REIQ checklist item. They're not optional. Let Tru Bond Cleaning take care of them as part of your full bond clean, so you can focus on your move.`,
  },
  {
    id: "wall-cleaning",
    title: "Wall Spot Cleaning",
    subtitle: "Every mark removed — walls ready for inspection",
    img: "/assets/generated/service-end-of-lease.dim_600x400.jpg",
    alt: "Professional cleaner spot cleaning walls and skirting boards in a North Brisbane rental property for bond inspection clearance",
    highlights: [
      "Scuffs, marks, and fingerprints",
      "Pen, pencil, and crayon marks",
      "Adhesive residue removal",
      "Included in all bond cleans",
    ],
    content: `By the time you move out, your walls have a story to tell — scuffs from furniture moving, fingerprints around light switches, food splatter in the kitchen, crayon marks from little hands, adhesive residue from picture hooks and posters. Property managers check all of it.

The good news: most marks come off with the right product and technique. Wall spot cleaning is included in every bond clean we do.

What we remove:

• Scuffs and scratches from furniture
• Pen, pencil, and crayon marks
• Fingerprints and smudges around doors and switches
• Food splatter in kitchen and dining areas
• Adhesive residue from tape, posters, and removable hooks
• Crayon and marker (where paint type allows)

We also clean all door frames, architraves, and skirting boards as part of this process.

Different paint finishes require different approaches. Flat/matte paint is more delicate than semi-gloss — too much pressure and you'll remove the paint with the mark. Our team knows the difference and applies the right method for each surface. We always test in an inconspicuous area first.

If walls have significant damage beyond cleaning — deep gouges, holes, peeling paint — that's a repair job, not a cleaning job. We'll let you know honestly if we see something that needs a handyman. For everyday marks and general wear, we've got it completely covered.`,
  },
];

export default function Services() {
  useMetaTags(
    "Bond Cleaning Services North Brisbane | Tru Bond Cleaning",
    "Professional bond cleaning services in North Brisbane: end of lease cleaning, carpet steam cleaning, oven deep clean, window cleaning, wall spot cleaning. REIQ checklist. Bond back guarantee. 500+ happy customers.",
  );

  return (
    <>
      {/* Page Header */}
      <section
        className="bg-primary text-primary-foreground py-16"
        aria-label="Tru Bond Cleaning Services North Brisbane"
        data-ocid="services.section"
      >
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            What We Do
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            Bond Cleaning Services in North Brisbane
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Every service follows the REIQ standard — the same checklist your
            property manager uses. Nothing gets missed. Everything is backed by
            our bond back guarantee.
          </p>
          <TrustBadges />
        </div>
      </section>

      {/* Services checklist image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-foreground mb-4">
                Why the REIQ Checklist Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Real Estate Institute of Queensland (REIQ) publishes an
                official end of lease cleaning checklist. This is the document
                your property manager holds in their hand during your final
                inspection. Every item that isn't ticked off is a potential bond
                deduction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Tru Bond Cleaning, we've trained our entire team to this
                checklist. We don't use a generic cleaning guide — we use the
                actual REIQ standard, because that's what stands between you and
                losing part of your deposit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We've completed over 500 bond cleans in North Brisbane. That
                experience means we know which items get missed most often, and
                we make sure they never get missed on our jobs.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: ShieldCheck, label: "Fully Insured" },
                  { icon: CheckCircle2, label: "Bond Back Guarantee" },
                  { icon: Star, label: "REIQ Trained" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-secondary/30 rounded-xl px-4 py-3"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/assets/generated/services-checklist.dim_800x500.jpg"
                alt="Tru Bond Cleaning REIQ bond cleaning checklist with eco-friendly branded cleaning products ready for a North Brisbane rental property inspection"
                className="w-full h-72 object-cover"
                loading="lazy"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, i) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
                data-ocid={`services.item.${i + 1}`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-card">
                    <img
                      src={service.img}
                      alt={service.alt}
                      className="w-full h-72 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
                >
                  <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    Service {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-foreground mb-2">
                    {service.title}
                  </h2>
                  <p className="text-accent font-semibold mb-5">
                    {service.subtitle}
                  </p>
                  <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                    {service.content}
                  </div>
                  <Button
                    asChild
                    className="mt-6"
                    data-ocid={`services.primary_button.${i + 1}`}
                  >
                    <Link to="/contact">
                      Book This Service <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why our services stand out */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-6 text-center">
            What Separates a Professional Bond Clean from a DIY Attempt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Equipment That Actually Works",
                desc: "We use industrial-grade vacuum cleaners, commercial hot water extraction carpet machines, professional degreasing chemicals, and window squeegee systems. These tools achieve results that consumer-grade equipment physically cannot.",
              },
              {
                title: "Trained to the REIQ Standard",
                desc: "Our team is specifically trained to the REIQ bond cleaning checklist. This isn't a general clean. We know exactly which items property managers inspect and we clean them to inspection standard, not just a visual standard.",
              },
              {
                title: "Time and Efficiency",
                desc: "A proper bond clean on a 3-bedroom house takes a full day of work. Most tenants underestimate this significantly. Our experienced team completes jobs efficiently without cutting corners, because we've done it hundreds of times.",
              },
              {
                title: "Guaranteed Results",
                desc: "If your property manager finds a problem with our work, we fix it for free within 48 hours. No DIY clean comes with a guarantee. This alone makes professional cleaning the lower-risk choice for protecting your bond.",
              },
            ].map((item) => (
              <Card key={item.title} className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-black mb-4">
            Ready to Book Your Bond Clean?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Free quote in minutes. No hidden fees. Bond back guarantee on every
            job.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-primary hover:bg-yellow-300 font-bold"
              data-ocid="services.primary_button"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              data-ocid="services.secondary_button"
            >
              <Link to="/about">About Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
