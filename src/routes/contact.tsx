import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Layout, PageHero, Reveal } from "@/components/site/Layout";
import { WhatsAppButton } from "@/components/site/WhatsApp";
import { COMPANY } from "@/data/company";
import { CATEGORIES, PRODUCTS } from "@/data/products";

type ContactSearch = { product?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    product: typeof search.product === "string" ? search.product : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact Us | Dentex Industries Ltd" },
      { name: "description", content: "Talk to Dentex about your plastic packaging needs. Addis Ababa Road, Off Enterprise Road, Nairobi." },
      { property: "og:title", content: "Contact Dentex Industries Ltd" },
      { property: "og:description", content: "Get a quote or speak with our packaging specialists." },
    ],
  }),
  component: Contact,
});

const industries = ["Pharmaceutical", "Food & Beverage", "Cosmetics", "Industrial / Chemicals", "Other"];

function Contact() {
  const { product: productParam } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    product: productParam ?? "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function submit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", phone: "", company: "", industry: "", product: "", quantity: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    }
  }

  const field =
    "w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition";

  const waMessage = form.product
    ? `Hi, I'd like to enquire about Dentex packaging products, specifically ${form.product}.`
    : undefined;

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch. Let's Discuss Your Packaging Needs."
        subtitle="Whether you need a sample, a quote, or technical advice, our team is ready to help."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
          <Reveal>
            <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-primary">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">We typically respond within one business day.</p>

              <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-name" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Name *</label>
                  <input id="c-name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Email *</label>
                  <input id="c-email" type="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="c-phone" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Phone</label>
                  <input id="c-phone" className={field} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="c-company" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Company</label>
                  <input id="c-company" className={field} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="c-industry" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Industry</label>
                  <select id="c-industry" className={field} value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })}>
                    <option value="">Select an industry</option>
                    {industries.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-product" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Product or Category</label>
                  <select id="c-product" className={field} value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}>
                    <option value="">Select a product or category</option>
                    <optgroup label="Categories">
                      {CATEGORIES.map((c) => <option key={c.slug} value={c.title}>{c.title}</option>)}
                    </optgroup>
                    <optgroup label="Products">
                      {PRODUCTS.map((p) => <option key={p.slug} value={p.title}>{p.title}</option>)}
                    </optgroup>
                    {form.product && !PRODUCTS.some((p) => p.title === form.product) && !CATEGORIES.some((c) => c.title === form.product) && (
                      <option value={form.product}>{form.product}</option>
                    )}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-quantity" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Quantity / Estimated Order Size</label>
                  <input
                    id="c-quantity"
                    className={field}
                    placeholder="e.g. 10,000 units per month, an estimate is fine"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Message *</label>
                  <textarea id="c-message" rows={5} className={field} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row flex-wrap gap-3">
                  <button
                    type="submit"
                    className="mould-press inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-md"
                  >
                    Send Message
                  </button>
                  <WhatsAppButton message={waMessage} />
                </div>
              </form>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 flex items-center gap-3 p-4 rounded-md bg-accent/10 text-accent border border-accent/30"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    <p className="text-sm font-medium">Thank you, your message has been received. We'll be in touch shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2">
          <Reveal delay={0.15}>
            <div className="space-y-4">
              {[
                { icon: MapPin, t: "Address", v: COMPANY.address },
                { icon: Phone, t: "Phone", v: `${COMPANY.phonePrimary} · ${COMPANY.phoneSecondary}` },
                { icon: Mail, t: "Email", v: COMPANY.email },
                { icon: Clock, t: "Business Hours", v: COMPANY.hours },
              ].map((c) => (
                <div key={c.t} className="flex gap-4 p-6 bg-tech-grey border border-border/60 rounded-2xl">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">{c.t}</p>
                    <p className="mt-1 text-sm font-medium text-foreground leading-relaxed">{c.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-border/60 shadow-md aspect-[16/9] sm:aspect-[16/7] bg-secondary">
              <iframe
                title="Dentex location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&output=embed`}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
