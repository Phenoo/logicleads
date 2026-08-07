import {
  BUSINESS_LOCATION,
  BUSINESS_SERVICE_AREA,
  PHONE_LINK,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
  WHATSAPP_NUMBER_DISPLAY,
} from "../../lib/site";

export default function SiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: SUPPORT_EMAIL,
        telephone: WHATSAPP_NUMBER_DISPLAY,
        sameAs: [
          "https://www.facebook.com/profile.php?id=100068749546786&mibextid=LQQJ4d",
          "https://www.instagram.com/logicleads?igsh=NzhnOGlleWhwNjQ3&utm_source=qr",
          "https://www.linkedin.com/company/logicleads/",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        areaServed: BUSINESS_SERVICE_AREA,
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
          addressLocality: BUSINESS_LOCATION,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: SUPPORT_EMAIL,
          telephone: WHATSAPP_NUMBER_DISPLAY,
          areaServed: "GB",
          availableLanguage: ["en-GB", "en"],
          url: PHONE_LINK,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
