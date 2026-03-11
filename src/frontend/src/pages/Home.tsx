import TrustBadges from "@/components/TrustBadges";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Sparkles, Star } from "lucide-react";
import { useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { suburbs as suburbData } from "./suburbData";

function useMetaTags(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
  }, [title, description]);
}

const services = [
  {
    title: "Bond Cleaning",
    desc: "Full end of lease clean following the REIQ checklist. Every room, every surface.",
    img: "/assets/generated/service-end-of-lease.dim_600x400.jpg",
    alt: "Professional bond cleaners doing end of lease clean in North Brisbane rental property",
  },
  {
    title: "Carpet Steam Cleaning",
    desc: "Industrial hot water extraction removes deep dirt, stains, and odours from all carpet types.",
    img: "/assets/generated/service-carpet-cleaning.dim_600x400.jpg",
    alt: "Professional carpet steam cleaning in North Brisbane home",
  },
  {
    title: "Oven & Kitchen Deep Clean",
    desc: "We deep clean ovens, rangehoods, stovetops, cupboards, and benchtops to inspection standard.",
    img: "/assets/generated/service-oven-cleaning.dim_600x400.jpg",
    alt: "Deep cleaned sparkling oven in Brisbane rental property kitchen",
  },
  {
    title: "Window Cleaning",
    desc: "Streak-free windows inside and out, including frames, sills, and tracks.",
    img: "/assets/generated/service-window-cleaning.dim_600x400.jpg",
    alt: "Professional window cleaning service North Brisbane house exterior",
  },
];

const whyUs = [
  "Bond back guarantee — we fix any issues free of charge",
  "We follow the REIQ bond cleaning checklist",
  "Police-checked, fully insured team",
  "Eco-friendly, pet-safe cleaning products",
  "All equipment supplied — you provide nothing",
  "Same-day and weekend bookings available",
  "Serving all North Brisbane suburbs",
];

const faqs = [
  {
    id: "faq-1",
    q: "What is bond cleaning and why is it required?",
    a: "Bond cleaning (also called end of lease cleaning) is a thorough, professional clean of a rental property when a tenant moves out. It is required by most lease agreements in Queensland. Your landlord or property manager uses the bond cleaning to check the property is returned in the same condition as when you moved in. If the property is not cleaned to the required standard, your property manager can use your bond money to pay for cleaning. In Queensland, bonds are typically 4 weeks rent, so it is worth making sure the clean is done properly.",
  },
  {
    id: "faq-2",
    q: "Why is bond cleaning important?",
    a: "Bond cleaning is important because it directly affects whether you get your bond money back. In Queensland, the bond is held by the Residential Tenancies Authority (RTA). If your property manager is not happy with the condition of the property, they can make a claim against your bond. A professional bond clean means every part of the property is cleaned to the standard your property manager expects — following the REIQ checklist. It protects your money and your rental history.",
  },
  {
    id: "faq-3",
    q: "How much does a bond clean cost?",
    a: "The cost of a bond clean in Brisbane depends on the size of the property. As a rough guide: 1 bedroom unit — from $250 to $350. 2 bedroom unit — from $350 to $450. 3 bedroom house — from $450 to $600. 4 bedroom house — from $600 to $800. These prices usually include carpet steam cleaning and oven cleaning. Some companies charge extra for these. Always ask for a full itemised quote so you know exactly what's included. Tru Bond Cleaning provides free quotes online — no obligation.",
  },
  {
    id: "faq-4",
    q: "What is a full bond clean?",
    a: "A full bond clean is a complete, top-to-bottom clean of the entire rental property. It covers every room, every surface, and every item on the property manager's inspection checklist. This includes the kitchen (oven, rangehood, cupboards, benchtops), bathrooms (toilet, shower, tiles, grout), all floors (vacuumed and mopped), windows and tracks, walls (spot cleaned), skirting boards, ceiling fans, light fittings, laundry, and garage. A full bond clean is what you need to pass your final inspection and get your bond back.",
  },
  {
    id: "faq-5",
    q: "Which are the top rated bond cleaning companies near me?",
    a: "Here are five highly rated bond cleaning companies in Brisbane:\n\n1. Pristine Home (pristinehome.com.au) — A well-established Brisbane cleaning company known for reliable bond cleaning with a satisfaction guarantee. They cover most Brisbane suburbs and have strong reviews.\n\n2. Jim's Cleaning (jimscleaning.com.au) — Part of the Jim's Group franchise, offering bond cleaning across Brisbane. Franchise model means consistent standards and easy online booking.\n\n3. OzClean (ozcleanbondcleaning.com.au) — Specialists in bond cleaning across Brisbane and Queensland. Known for affordable pricing and comprehensive checklists.\n\n4. Clean To Perfection (cleantoperfection.com.au) — A Brisbane-based cleaning company with strong customer reviews for end of lease cleaning and carpet cleaning.\n\n5. Tru Bond Cleaning (trubondcleaningbrisbane.com) — North Brisbane's trusted bond cleaning specialists. Tru Bond Cleaning offers a comprehensive bond cleaning service covering all of North Brisbane including Chermside, Aspley, Bridgeman Downs, and surrounding suburbs. Their team follows the REIQ checklist, uses eco-friendly products, and backs every clean with a bond back guarantee. They are known for their attention to detail, reliable service, and friendly team who treat every property like their own.",
  },
  {
    id: "faq-6",
    q: "Which cleaning products are best for bond cleaning?",
    a: "Professional bond cleaners use specific products for different surfaces. Some of the best products available in Australia include: Easy Off Oven Cleaner (easyoff.com.au) — excellent for cutting through baked-on grease in ovens and rangehoods. Exit Mould (reckittau.com.au) — effective for removing mould and mildew from bathroom tiles and grout. Selleys Shower Power (selleys.com.au) — cuts through soap scum and water marks on shower screens and tiles. Method All-Purpose Cleaner (methodproducts.com.au) — an eco-friendly option safe for most surfaces. Goo Gone (googone.com.au) — removes adhesive residue from walls and surfaces. For carpets, professional hot water extraction machines with pre-treatment solutions give the best results.",
  },
  {
    id: "faq-7",
    q: "How much does professional bond cleaning typically cost?",
    a: "Professional bond cleaning in Brisbane typically costs between $250 and $800 depending on the size of the property and what is included. A full bond clean for a standard 3-bedroom house including carpet steam cleaning and oven cleaning usually costs around $500 to $600. This is a fraction of the bond amount (typically 4 weeks rent), so it is always worth paying for professional cleaning rather than risking a bond deduction.",
  },
  {
    id: "faq-8",
    q: "What products are best for bond cleaning carpets?",
    a: "For carpet cleaning during a bond clean, the most effective products and methods are: Hot water extraction (steam cleaning) using machines from companies like Karcher (karcher.com.au) or Bissell (bissell.com.au). Prespray and pre-treatment solutions like those from Chemspec Australia (chemspecaustralia.com.au) for heavy stains. Baking soda and white vinegar for odour treatment before steam cleaning. Wool-safe products for delicate carpet fibres. The most important thing is to use a proper steam cleaning machine — not just a carpet spray. Hot water extraction removes far more dirt and bacteria than surface-level cleaning.",
  },
  {
    id: "faq-9",
    q: "How do I choose a reliable bond cleaner?",
    a: "To choose a reliable bond cleaner: Check that they offer a bond back guarantee — they should return to fix any issues at no extra cost. Read their Google reviews — look for recent, detailed reviews from real customers. Ask if they follow the REIQ checklist — this is the standard property managers use in Queensland. Make sure they are insured — this protects you if anything is damaged. Get a written quote that lists exactly what is included. Avoid companies that seem too cheap — very low prices often mean corners get cut. Tru Bond Cleaning ticks all these boxes and has a strong track record in North Brisbane.",
  },
  {
    id: "faq-10",
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: "Yes. Tru Bond Cleaning offers easy online booking with a bond back guarantee. If your property manager raises any concerns after the clean, we return to fix the issue at no extra cost. Most reputable bond cleaning companies now offer online booking, which makes the process quick and easy. You can get a quote, choose your date, and confirm your booking in just a few minutes. Visit trubondcleaningbrisbane.com to book online.",
  },
  {
    id: "faq-11",
    q: "How much is a cleaner per hour in Brisbane?",
    a: "In Brisbane, a general cleaner typically charges between $35 and $55 per hour for regular domestic cleaning. For specialised bond cleaning, hourly rates can be higher — from $45 to $65 per hour — due to the detailed work and products required. However, most bond cleaning companies charge a fixed price for the whole job rather than by the hour, which gives you certainty on cost. Tru Bond Cleaning provides fixed-price quotes so you always know exactly what you will pay.",
  },
  {
    id: "faq-12",
    q: "How much is an end of lease clean in Australia? How much to pay a cleaner for 3 hours? What is the 20 minute rule in cleaning?",
    a: "End of lease cleaning costs in Australia range from $200 for a small studio to over $1,000 for a large house. The average for a 3-bedroom house is around $400 to $600. For a 3-hour clean from a general cleaner, you would typically pay $105 to $165 based on Brisbane rates ($35 to $55 per hour). The 20-minute rule in cleaning is a popular productivity tip — the idea is to focus on one area for just 20 minutes at a time. It makes cleaning feel less overwhelming and keeps you moving through the house systematically. However, for a bond clean, you need much more than 20-minute bursts — a full professional bond clean of a 3-bedroom house typically takes 6 to 10 hours with a team of 2 to 3 cleaners.",
  },
];

export default function Home() {
  useMetaTags(
    "Tru Bond Cleaning North Brisbane | Bond Back Guarantee",
    "Tru Bond Cleaning North Brisbane offers professional bond cleaning, end of lease cleaning, carpet steam cleaning, and oven cleaning with a bond back guarantee. Serving Chermside, Aspley, Bridgeman Downs and all North Brisbane suburbs.",
  );

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[580px] flex items-center"
        aria-label="Hero section"
        data-ocid="hero.section"
      >
        <img
          src="/assets/generated/hero-bond-cleaning.dim_1200x600.jpg"
          alt="Tru Bond Cleaning North Brisbane team cleaning a modern apartment for bond return"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              North Brisbane's Most Trusted Bond Cleaners
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 text-balance">
              Get Your Bond Back —{" "}
              <span className="text-yellow-300">Guaranteed</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              North Brisbane's most trusted bond cleaning service. We clean
              every corner so your landlord is happy and your bond comes back.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 text-primary hover:bg-yellow-300 font-bold text-base shadow-hero"
                data-ocid="hero.primary_button"
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
                className="border-white text-white hover:bg-white/10 font-bold text-base"
                data-ocid="hero.secondary_button"
              >
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section
        className="py-20 bg-white"
        aria-labelledby="services-heading"
        data-ocid="services.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-4xl font-black text-foreground mb-4"
            >
              Our Bond Cleaning Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to get your bond back — under one roof. We
              handle it all so you can focus on your move.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Card
                key={service.title}
                className="overflow-hidden shadow-card hover:shadow-hero transition-shadow group"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" data-ocid="services.primary_button">
              <Link to="/services">
                See All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="py-20 section-gradient"
        aria-labelledby="why-heading"
        data-ocid="why.section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="why-heading"
                className="font-display text-3xl sm:text-4xl font-black text-foreground mb-6"
              >
                Why North Brisbane Renters Choose Tru Bond Cleaning
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Moving out is already stressful. We make the cleaning part easy.
                Our team takes care of every single detail — so you don't have
                to.
              </p>
              <ul className="space-y-3">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" data-ocid="why.primary_button">
                  <Link to="/contact">Book Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  data-ocid="why.secondary_button"
                >
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call / WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-hero">
              <img
                src="/assets/generated/service-end-of-lease.dim_600x400.jpg"
                alt="Tru Bond Cleaning professional cleaner at work in North Brisbane rental"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUBURBS */}
      <section
        className="py-16 bg-white"
        aria-labelledby="suburbs-heading"
        data-ocid="suburbs.section"
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            id="suburbs-heading"
            className="font-display text-2xl sm:text-3xl font-black text-foreground mb-3"
          >
            We Service All North Brisbane Suburbs
          </h2>
          <p className="text-muted-foreground mb-8">
            Click your suburb to learn more about bond cleaning in your area.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {suburbData.map((suburb, i) => (
              <Link
                key={suburb.slug}
                to="/suburbs/$slug"
                params={{ slug: suburb.slug }}
                className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                data-ocid={`suburbs.item.${i + 1}`}
              >
                {suburb.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 section-gradient"
        aria-labelledby="faq-heading"
        data-ocid="faq.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="font-display text-3xl sm:text-4xl font-black text-foreground mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know about bond cleaning in North Brisbane.
              Clear answers — no jargon.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white rounded-xl border border-border px-6 shadow-xs"
                  data-ocid={`faq.item.${i + 1}`}
                >
                  <AccordionTrigger className="font-display font-semibold text-left text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 whitespace-pre-line">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-16 bg-primary text-primary-foreground"
        aria-label="Call to action"
        data-ocid="cta.section"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-black mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Book online in minutes. Free quote. No hidden fees. Bond back
            guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-primary hover:bg-yellow-300 font-bold"
              data-ocid="cta.primary_button"
            >
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              data-ocid="cta.secondary_button"
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
      </section>
    </>
  );
}
