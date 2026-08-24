/** Single source of truth for verified Dentex company information. */
export const COMPANY = {
  name: "Dentex Industries Limited",
  shortName: "Dentex Industries Ltd",
  established: 1986,
  yearsLabel: "40",
  employeesLabel: "70+",
  qualityStatement:
    "Controlled production processes, material preparation and product inspection on every order.",
  address: "P.O Box 47770 - 00100, Addis Ababa Road, Off Enterprise Road, Nairobi",
  phonePrimary: "+254 717 614 454",
  phoneSecondary: "+254 753 614 454",
  phonePrimaryHref: "tel:+254717614454",
  phoneSecondaryHref: "tel:+254753614454",
  email: "info@dentex.co.ke",
  emailHref: "mailto:info@dentex.co.ke",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  mapQuery: "Addis Ababa Road, Off Enterprise Road, Nairobi",
} as const;

export const WHATSAPP_NUMBER = "254717614454";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi, I'd like to enquire about Dentex packaging products.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}