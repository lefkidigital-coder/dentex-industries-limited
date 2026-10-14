import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { COMPANY } from "@/data/company";

const sections = [
  {
    "heading": "About this website",
    "paragraphs": [
      "This website is operated by Dentex Industries Limited, Nairobi, Kenya. These terms apply to browsing the website and using its product information and enquiry features. Please read them alongside our Privacy Policy.",
      "By using the website, you agree to these terms. If you do not agree, please discontinue use."
    ]
  },
  {
    "heading": "Permitted use",
    "paragraphs": [
      "You may use the website to learn about Dentex and make genuine product or business enquiries. Provide accurate information and ensure you have authority to share any information supplied on behalf of a company or another person.",
      "Do not use the website unlawfully, send spam or harmful material, attempt unauthorised access, or interfere with the website or its security."
    ]
  },
  {
    "heading": "Product information and images",
    "paragraphs": [
      "Our catalogue provides general guidance on product ranges, colours, capacities, weights, closures and applications. Images illustrate products; colours may appear differently on different screens. Not every option is available for every product.",
      "Confirm the exact specification, material, closure compatibility, availability and suitability for your intended contents and use with Dentex before ordering. Where information is marked \"Available on request\", ask our team for confirmation. An industry label is a guide to an application, not a certification or a guarantee of suitability for every use."
    ]
  },
  {
    "heading": "Enquiries, quotations and orders",
    "paragraphs": [
      "This website is a product catalogue and enquiry service. It does not take online payments or complete purchases. Sending an enquiry, requesting a sample or asking for a quote does not place an order or create a supply contract.",
      "Prices, taxes, minimum order quantities, customisation, payment arrangements, delivery dates and any product warranties or returns arrangements must be confirmed in the applicable written quotation or separate agreement. Website information does not replace those agreed commercial terms.",
      "A response time shown on the website is an estimate, not a guaranteed service or delivery commitment."
    ]
  },
  {
    "heading": "Website content and ownership",
    "paragraphs": [
      "The Dentex name, logo and website materials are owned by Dentex Industries Limited or used with the relevant owner's permission. You may view and share links to the website for legitimate purposes. Reproduction, alteration or commercial reuse of protected materials requires the relevant owner's permission, except where permitted by law."
    ]
  },
  {
    "heading": "External services and privacy",
    "paragraphs": [
      "The website uses or links to external services, including Google Maps, Google Fonts and WhatsApp. Those providers control their own services and their terms and privacy policies apply. We do not control their availability or content.",
      "Our Privacy Policy explains how personal information associated with website use and business enquiries is handled."
    ]
  },
  {
    "heading": "Availability and responsibility",
    "paragraphs": [
      "We aim to keep the website useful and accurate, but access may be interrupted and content may contain errors or become outdated. Please obtain written confirmation of information that is important to a purchasing decision.",
      "To the extent permitted by law, we are not responsible for losses caused solely by reliance on general website content or an interruption to website access. Nothing in these terms excludes liability or limits a right that cannot lawfully be excluded or limited."
    ]
  },
  {
    "heading": "Applicable law and updates",
    "paragraphs": [
      "These website terms are governed by the laws of Kenya, subject to any mandatory rights that apply. Please contact us first if you have a concern so we can try to resolve it. This does not prevent you from seeking any remedy available under applicable law.",
      "We may update these terms by publishing a revised version with a new date. An update does not change the terms of an existing written order or agreement."
    ]
  }
];

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Dentex Industries Ltd" },
      { name: "description", content: "Terms for using the Dentex Industries Limited website, product catalogue and enquiry services." },
      { property: "og:title", content: "Terms of Service | Dentex Industries Ltd" },
      { property: "og:description", content: "Terms for using the Dentex Industries Limited website, product catalogue and enquiry services." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <LegalLayout title="Terms of Service" subtitle="The terms that apply when you use our website." updated="14 October 2026">
      {sections.map(({ heading, paragraphs }) => (
        <LegalSection key={heading} heading={heading}>
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </LegalSection>
      ))}
      <LegalSection heading="Contact us">
        <p>
          {COMPANY.name}<br />{COMPANY.address}<br />
          <a className="text-accent font-semibold" href={COMPANY.emailHref}>{COMPANY.email}</a><br />
          <a className="text-accent font-semibold" href={COMPANY.phonePrimaryHref}>{COMPANY.phonePrimary}</a>
          {" · "}<a className="text-accent font-semibold" href={COMPANY.phoneSecondaryHref}>{COMPANY.phoneSecondary}</a>
        </p>
        <p>Read our <Link className="text-accent font-semibold" to="/privacy-policy">Privacy Policy</Link>.</p>
      </LegalSection>
    </LegalLayout>
  );
}
