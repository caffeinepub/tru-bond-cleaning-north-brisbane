import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Clock, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

function useMetaTags(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
  }, [title, description]);
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  propertySize: string;
  preferredDate: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  propertySize: "",
  preferredDate: "",
  message: "",
};

export default function Contact() {
  useMetaTags(
    "Contact Tru Bond Cleaning North Brisbane | Free Quote",
    "Get a free bond cleaning quote from Tru Bond Cleaning North Brisbane. Contact us via our online form or WhatsApp 0488841883. Serving all North Brisbane suburbs.",
  );

  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Bond Cleaning Enquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Bond Cleaning Enquiry\n======================\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProperty Address: ${form.address}\nProperty Size: ${form.propertySize}\nPreferred Date: ${form.preferredDate}\n\nMessage:\n${form.message}\n\n---\nSent from trubondcleaningbrisbane.com`,
    );

    const recipient = ["humptydumptybondcleaning", "gmail.com"].join("@");
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section
        className="bg-primary text-primary-foreground py-16"
        data-ocid="contact.section"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Fill in the form below and we'll get back to you fast. Or jump
            straight on WhatsApp for a quick chat.
          </p>
          <TrustBadges />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <aside className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h2 className="font-display font-bold text-lg text-foreground mb-4">
                  Contact Details
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Phone / WhatsApp
                      </p>
                      <a
                        href="https://wa.me/61488841883"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        data-ocid="contact.link"
                      >
                        0488 841 883
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Service Area
                      </p>
                      <p className="text-sm text-muted-foreground">
                        All North Brisbane suburbs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Hours
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mon–Sat: 7am – 6pm
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sun: By appointment
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.primary_button"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl text-white font-bold text-lg shadow-hero hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#25D366" }}
              >
                <SiWhatsapp className="w-6 h-6" />
                Chat on WhatsApp
              </a>

              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-bold text-base text-foreground mb-3">
                  Why Book With Us?
                </h3>
                <ul className="space-y-2">
                  {[
                    "Bond back guarantee",
                    "Free re-clean if issues arise",
                    "Fixed price — no hidden fees",
                    "Police-checked cleaners",
                    "All equipment supplied",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="bg-white rounded-2xl p-10 shadow-card text-center"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h2 className="font-display text-2xl font-black text-foreground mb-3">
                    Your email client is opening!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Your enquiry details have been prepared. Please send the
                    email that has opened in your mail app. We'll get back to
                    you within a few hours.
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    Prefer to chat right now? Reach us on WhatsApp:
                  </p>
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold shadow-card hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#25D366" }}
                    data-ocid="contact.secondary_button"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    Open WhatsApp
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 shadow-card space-y-5"
                  data-ocid="contact.panel"
                >
                  <h2 className="font-display text-2xl font-black text-foreground">
                    Request a Free Quote
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Fill in your details and we'll send you a fixed-price quote.
                    No obligation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        data-ocid="contact.input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        required
                        type="tel"
                        placeholder="04xx xxx xxx"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Your Email Address *</Label>
                    <Input
                      id="email"
                      required
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      data-ocid="contact.input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="address">Property Address *</Label>
                    <Input
                      id="address"
                      required
                      placeholder="123 Example St, Chermside QLD 4032"
                      value={form.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      data-ocid="contact.input"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="property-size">Property Size *</Label>
                      <Select
                        required
                        value={form.propertySize}
                        onValueChange={(v) => handleChange("propertySize", v)}
                      >
                        <SelectTrigger
                          id="property-size"
                          data-ocid="contact.select"
                        >
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Studio">Studio</SelectItem>
                          <SelectItem value="1 Bedroom">1 Bedroom</SelectItem>
                          <SelectItem value="2 Bedroom">2 Bedroom</SelectItem>
                          <SelectItem value="3 Bedroom">3 Bedroom</SelectItem>
                          <SelectItem value="4 Bedroom">4 Bedroom</SelectItem>
                          <SelectItem value="5+ Bedroom">5+ Bedroom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="preferred-date">Preferred Date *</Label>
                      <Input
                        id="preferred-date"
                        required
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) =>
                          handleChange("preferredDate", e.target.value)
                        }
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Additional Notes</Label>
                    <Textarea
                      id="message"
                      placeholder="Any special requests, pet on premises, access instructions..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      data-ocid="contact.textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-bold text-base"
                    data-ocid="contact.submit_button"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Enquiry
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, your email client will open with
                    your enquiry ready to send. We respond within a few hours
                    during business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
