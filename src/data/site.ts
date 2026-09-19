export const site = {
  name: "MEGUIS Import & Export",
  shortName: "MEGUIS",
  url: "https://www.meguis.net",
  phone: "+50496380889",
  phoneDisplay: "+504 9638-0889",
  whatsapp:
    "https://api.whatsapp.com/send?phone=50496380889&text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20despacho%20aduanero%20y%20log%C3%ADstica%20integral.",
  address: {
    street: "Plaza ENG#2, primera planta, último local a mano derecha",
    locality: "Puerto Cortés",
    region: "Cortés",
    country: "HN",
  },
} as const;

export const businessSchema = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${site.url}/#business`,
  name: site.name,
  url: `${site.url}/`,
  image: `${site.url}/og-image.webp`,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: { "@type": "Country", name: "Honduras" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
  ],
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
