import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { COMPANY } from "@/data/company";

const sections = [
  {
    "heading": "Who we are",
    "paragraphs": [
      "Dentex Industries Limited is responsible for the personal information it uses to handle business enquiries and customer relationships. This policy covers this website and communications with us through the contact details published here.",
      "Our handling of personal information is subject to Kenya's Data Protection Act, 2019 and applicable data protection regulations."
    ]
  },
  {
    "heading": "Information you provide",
    "paragraphs": [
      "When you contact us, we may receive your name, email address, telephone number, company, industry, products of interest, estimated order quantities and the contents of your correspondence.",
      "Providing information is voluntary, but we need sufficient contact and enquiry details to respond or prepare a quotation. Please share only information relevant to your request."
    ]
  },
  {
    "heading": "Website and technical information",
    "paragraphs": [
      "Our hosting and technology providers may process your IP address, browser and device information, requested pages, request times and error information to deliver, secure and troubleshoot the website.",
      "This website uses Google Fonts and embeds Google Maps. Loading these services connects your browser to Google, which may receive technical information such as your IP address. The embedded map may also use cookies or similar technologies under Google's privacy policy. You can manage cookies through your browser settings; restricting them may affect embedded features.",
      "WhatsApp links open a separate service. If you choose to send a message, WhatsApp processes it under its own terms and privacy policy, and Dentex receives the information you send. Our email and telephone providers also process communications through their services."
    ]
  },
  {
    "heading": "Why we use information",
    "paragraphs": [
      "We use relevant information to answer questions, prepare quotations, discuss specifications and samples, manage customer communications, maintain necessary business records, protect the website and meet legal obligations.",
      "Depending on the purpose, the lawful basis may be steps you request before a contract, performance of a contract, a legal obligation, or a legitimate business interest balanced against your rights. Where consent is required, it must be obtained separately. An enquiry is not permission to add you to unrelated marketing campaigns."
    ]
  },
  {
    "heading": "Who may receive information",
    "paragraphs": [
      "Information relevant to an enquiry may be accessed by authorised Dentex team members and service providers supporting hosting, email, communications or IT. It may also be disclosed where required by law or necessary to establish, exercise or defend a legal claim. We do not sell your personal information.",
      "Some technology and communication providers operate outside Kenya. Any transfer of personal information outside Kenya must meet applicable Kenyan data protection requirements. Contact us if you need more information about the providers involved in handling your enquiry."
    ]
  },
  {
    "heading": "Retention and security",
    "paragraphs": [
      "Our policy is to keep personal information only for as long as needed for its purpose, including handling an enquiry, maintaining an ongoing customer relationship and meeting relevant legal or record-keeping duties. Information that is no longer needed should be securely deleted or anonymised. The period depends on the type of record and any applicable legal requirements.",
      "Access to enquiry information should be limited to people who need it for their work, with appropriate safeguards against loss, misuse and unauthorised access. No website or communication service can guarantee absolute security."
    ]
  },
  {
    "heading": "Your privacy rights",
    "paragraphs": [
      "Subject to applicable law, you can ask to access your personal information, correct inaccurate details, object to processing, or request restriction, deletion or transfer of your information where the relevant right applies. Where processing relies on consent, you can withdraw it without affecting earlier lawful processing.",
      "Send requests to our email address below. We may need proportionate identity checks before acting on a request. Some information may need to be retained to meet legal duties or deal with legal claims."
    ]
  },
  {
    "heading": "Updates to this policy",
    "paragraphs": [
      "We may update this policy as the website or our information practices change. The date above identifies the latest version."
    ]
  }
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Dentex Industries Ltd" },
      { name: "description", content: "How Dentex Industries Limited handles personal information, website services and privacy enquiries." },
      { property: "og:title", content: "Privacy Policy | Dentex Industries Ltd" },
      { property: "og:description", content: "How Dentex Industries Limited handles personal information, website services and privacy enquiries." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="How we handle your information and respect your privacy." updated="14 October 2026">
      {sections.map(({ heading, paragraphs }) => (
        <LegalSection key={heading} heading={heading}>
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </LegalSection>
      ))}
      <LegalSection heading="Privacy concerns">
        <p>You can also raise a concern with Kenya's <a className="text-accent font-semibold" href="https://www.odpc.go.ke/" target="_blank" rel="noopener noreferrer">Office of the Data Protection Commissioner</a>.</p>
      </LegalSection>
      <LegalSection heading="Contact us">
        <p>
          {COMPANY.name}<br />{COMPANY.address}<br />
          <a className="text-accent font-semibold" href={COMPANY.emailHref}>{COMPANY.email}</a><br />
          <a className="text-accent font-semibold" href={COMPANY.phonePrimaryHref}>{COMPANY.phonePrimary}</a>
          {" · "}<a className="text-accent font-semibold" href={COMPANY.phoneSecondaryHref}>{COMPANY.phoneSecondary}</a>
        </p>
        <p>Read our <Link className="text-accent font-semibold" to="/terms-of-service">Terms of Service</Link>.</p>
      </LegalSection>
    </LegalLayout>
  );
}
