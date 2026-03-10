import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

function useMetaTags(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
  }, [title, description]);
}

const services = [
  {
    id: "bond-cleaning",
    title: "Bond Cleaning (End of Lease Cleaning)",
    subtitle: "The complete clean that gets your bond back",
    img: "/assets/generated/service-end-of-lease.dim_600x400.jpg",
    alt: "Professional bond cleaners doing end of lease clean in North Brisbane rental property",
    highlights: [
      "Full REIQ checklist clean",
      "Kitchen, bathrooms, bedrooms, living areas",
      "Floors vacuumed and mopped",
      "Bond back guarantee included",
    ],
    content: `Moving out is stressful. You pack boxes, organise trucks, deal with utilities — and on top of all that, you need the property to be spotless. That's where Tru Bond Cleaning comes in. We take the cleaning stress off your plate completely.

Our bond cleaning service covers every single part of your rental property — from the kitchen benchtops to the bathroom grout, from the skirting boards to the light switches. We follow the Real Estate Institute of Queensland (REIQ) standard checklist, which is exactly what your property manager uses. That means nothing gets missed.

Here's what we clean:

• Kitchen — oven inside and out, rangehood, stovetop, cupboard fronts and insides, benchtops, splashback, sink and taps.
• Bathrooms — toilet, shower screen, bath, tiles, grout, vanity, mirrors, exhaust fans.
• Bedrooms and living areas — walls spot cleaned, light fittings, ceiling fans, windowsills, tracks, and frames.
• Floors — vacuumed and mopped throughout.
• Laundry — trough, cupboards, washing machine area.
• Garage — swept and wiped down.

We bring all our own equipment and eco-friendly cleaning products. You don't need to supply a thing. Our team works quickly and thoroughly — most jobs are done in a single day.

We also offer a bond back guarantee. If your property manager raises a concern, we come back and fix it at no extra cost. That's our promise to you.

We know how important your bond money is. For most renters in North Brisbane, that's thousands of dollars. We treat every job like it's our own home. Our cleaners are trained, police-checked, and fully insured.

Book online today and get your free quote in minutes. We service all suburbs in North Brisbane including Chermside, Aspley, Bridgeman Downs, Everton Park, Kedron, Stafford, and more.`,
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Steam Cleaning",
    subtitle: "Deep clean that passes every inspection",
    img: "/assets/generated/service-carpet-cleaning.dim_600x400.jpg",
    alt: "Professional carpet steam cleaning in North Brisbane home",
    highlights: [
      "Industrial hot water extraction",
      "Pre-treatment for tough stains",
      "All carpet types including wool",
      "Dries in 2–4 hours",
    ],
    content: `Carpets hold onto everything — dust, pet hair, food crumbs, and odours. By the time you're moving out, your carpets have seen a lot. A quick vacuum won't cut it. Property managers check carpets closely, and stained or smelly carpets are one of the most common reasons bond money is withheld.

Tru Bond Cleaning uses industrial-grade hot water extraction machines — the same type used by professional carpet cleaners. This method pushes hot steam deep into the carpet fibres, loosening dirt, killing bacteria, and pulling everything out. The result is a carpet that looks and smells fresh.

We treat stains before steaming — whether it's red wine, pet accidents, coffee, or mud. Our pre-treatment products break down the stain so the steam clean can lift it right out. Most stains come out completely. Some older, set-in stains may lighten but not disappear entirely — we'll always be honest with you about what to expect.

Our carpet cleaning is included as part of our full bond clean package, or you can book it separately. We carry our own machines and products, so you don't need to hire anything yourself.

After cleaning, we recommend keeping windows open to let the carpets dry quickly — usually within 2 to 4 hours.

We service all carpet types including wool, nylon, polyester, and blended fibres. Whether you have a single bedroom unit or a five-bedroom family home, we have the equipment and team size to handle it.

Carpets that pass property manager inspection means you're one step closer to getting your full bond back. Book Tru Bond Cleaning for carpet steam cleaning in North Brisbane today.`,
  },
  {
    id: "oven-kitchen",
    title: "Oven & Kitchen Deep Clean",
    subtitle: "Inspection-ready kitchen every time",
    img: "/assets/generated/service-oven-cleaning.dim_600x400.jpg",
    alt: "Deep cleaned sparkling oven in Brisbane rental property kitchen",
    highlights: [
      "Oven interior, racks, and glass door",
      "Rangehood filters and exhaust",
      "Cupboards inside and out",
      "Food-safe professional degreasers",
    ],
    content: `The oven is one of the hardest things to clean in any home — and it's one of the first things property managers check. Baked-on grease, burnt food, and carbon build-up don't come off with regular spray and wipe. You need the right products, the right tools, and the right technique.

Our kitchen deep clean includes:

• Oven interior (racks, glass door, cavity, seals)
• Rangehood (filters, exterior, light covers)
• Stovetop (all burners, grates, knobs)
• Benchtops and splashback
• Cupboard fronts (outside) and insides
• Sink and taps
• Dishwasher exterior

We use food-safe, professional-grade degreasers that cut through grease without damaging surfaces. Our team disassembles oven racks and soaks them separately to get them truly clean. We also clean the oven glass from both sides — inside the door cavity if accessible.

A clean oven and kitchen is non-negotiable for bond return. Property managers know what a properly cleaned kitchen looks like, and they will note any grease or residue in their inspection report. Don't risk your bond on a rushed clean.

Let Tru Bond Cleaning handle it. We've cleaned hundreds of kitchens across North Brisbane and we know exactly what standard is required.

This service is included in our full bond clean package or available as a standalone booking. It's a smart investment — the cost of a professional clean is always far less than the bond deduction you'd face otherwise. Book online today and let us make your kitchen inspection-ready.`,
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    subtitle: "Crystal clear — inside and out",
    img: "/assets/generated/service-window-cleaning.dim_600x400.jpg",
    alt: "Professional window cleaning service North Brisbane house exterior",
    highlights: [
      "Inside and outside glass",
      "Frames, sills, and tracks",
      "Sliding door screens",
      "Streak-free finish guaranteed",
    ],
    content: `Clean windows make a huge difference to how a property looks and feels. They let in more light, make rooms feel bigger, and show the property manager that the place has been well looked after. Dirty windows — with water marks, fingerprints, dust, and grime — are a clear sign that the property hasn't been cleaned thoroughly.

Tru Bond Cleaning cleans all windows inside and out as part of our full bond clean. We clean the glass panels, window frames, windowsills, and tracks. Tracks especially collect a lot of dust, dead insects, and debris — we remove all of it.

For interior windows, we use microfibre cloths and streak-free window cleaner to leave the glass crystal clear. For exterior windows, we use squeegees and extension tools to reach higher panes safely. We don't use ladders without proper safety equipment. We follow all safe work practices.

Window cleaning is often skipped by tenants doing their own clean — either because it's time-consuming or because they don't have the right tools. That's a mistake that often shows up in inspection reports.

Our team cleans every window systematically — we don't rush and we don't skip. We also clean sliding door tracks and screens where present.

Clean windows and tracks are a standard item on the REIQ bond cleaning checklist, so it's not optional. Let Tru Bond Cleaning take care of it. We're thorough, professional, and we back our work with our bond back guarantee. Book your window cleaning as part of a full bond clean or as a separate service.`,
  },
  {
    id: "wall-cleaning",
    title: "Wall Spot Cleaning",
    subtitle: "Every mark removed — walls ready for inspection",
    img: "/assets/generated/hero-bond-cleaning.dim_1200x600.jpg",
    alt: "Professional cleaner spot cleaning walls in North Brisbane rental property for bond inspection",
    highlights: [
      "Scuffs, marks, and fingerprints",
      "Pen, pencil, and crayon marks",
      "Adhesive residue removal",
      "Included in all bond cleans",
    ],
    content: `Moving out means your walls probably have some marks on them — scuffs from furniture, crayon from the kids, smudges near light switches, or food splatter in the kitchen. Property managers inspect walls during bond inspections, and any obvious marks or stains will be noted.

The good news is that most marks come off with the right products and technique. Tru Bond Cleaning includes wall spot cleaning in every bond clean.

We check every wall in every room and treat any marks we find. We use gentle but effective wall cleaners that remove marks without stripping paint. Different paint types need different approaches — flat paint is more delicate than semi-gloss, for example — and our team knows the difference. We don't just scrub blindly. We test a small area first and use the right pressure and product for the surface.

Common marks we remove:

• Scuffs and scratches
• Pen and pencil marks
• Food and grease splatters
• Crayon and marker (where possible)
• Adhesive residue from posters and hooks
• Fingerprints around door frames and light switches

We also clean door frames, architraves, and skirting boards as part of this process.

If a wall has significant damage — holes, deep gouges, or large paint chips — that's beyond cleaning and may require a handyman or painter. We'll let you know honestly if we see something that needs professional repair.

For everyday marks and smudges, we've got it covered. Wall spot cleaning is included in our full bond clean package at no extra charge.`,
  },
];

export default function Services() {
  useMetaTags(
    "Bond Cleaning Services North Brisbane | Tru Bond Cleaning",
    "Professional bond cleaning services in North Brisbane including end of lease cleaning, carpet steam cleaning, oven deep clean, window cleaning, and wall spot cleaning. Bond back guarantee.",
  );

  return (
    <>
      {/* Page Header */}
      <section
        className="bg-primary text-primary-foreground py-16"
        data-ocid="services.section"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            Our Bond Cleaning Services
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Every service is designed to meet the REIQ standard — the same
            checklist your property manager uses. Nothing gets missed.
          </p>
          <TrustBadges />
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
                      Book This Service <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 bg-primary text-primary-foreground"
        data-ocid="cta.section"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-black mb-4">
            Book Your Bond Clean Today
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Free quote. Fixed price. Bond back guarantee.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-400 text-primary hover:bg-yellow-300 font-bold"
            data-ocid="cta.primary_button"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
