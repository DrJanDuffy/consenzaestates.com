
const siteSettings = {
  // Site metadata
  site: {
    name: "Dr. Jan Duffy | Luxury Real Estate",
    description: "Premier luxury real estate specialist for Consenza Estates in Las Vegas",
    url: "https://consenzaestates.com",
    logo: "/assets/images/logo.png",
    favicon: "/favicon.png"
  },
  
  // SEO settings
  seo: {
    titleTemplate: "%s | Dr. Jan Duffy Luxury Real Estate",
    defaultTitle: "Dr. Jan Duffy | Premier Luxury Real Estate - Consenza Estates Las Vegas",
    defaultDescription: "Experience unparalleled luxury with Dr. Jan Duffy, your elite real estate specialist for prestigious Lennar homes in the exclusive Consenza Estates community of Las Vegas. Discover extraordinary properties with personalized concierge service and unmatched expertise for the most discerning clients.",
    openGraph: {
      type: 'website',
      locale: 'en_US',
      site_name: 'Dr. Jan Duffy Luxury Real Estate',
      images: [
        {
          url: '/social.png',
          width: 1200,
          height: 630,
          alt: 'Dr. Jan Duffy Luxury Real Estate',
        },
      ],
    },
    twitter: {
      handle: '@DrJanDuffy',
      site: '@ConsenzaEstates',
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'luxury real estate, Las Vegas luxury homes, Consenza Estates, Lennar homes, Las Vegas real estate, luxury property specialist, high-end homes, gated community'
      }
    ]
  },
  
  // Contact information
  contact: {
    email: "jan@drjanduffy.com",
    phone: "+1 (702) 555-8742",
    address: "Consenza Estates, Las Vegas, NV 89138"
  },
  
  // Social media links
  social: {
    instagram: "https://instagram.com/drjanduffy",
    facebook: "https://facebook.com/drjanduffyrealestate",
    twitter: "https://twitter.com/drjanduffy",
    linkedin: "https://linkedin.com/in/drjanduffy",
    youtube: "https://youtube.com/c/drjanduffy"
  },
  
  // Basic settings (from original)
  title: `Dr. Jan Duffy | Premier Luxury Real Estate - Consenza Estates Las Vegas`,
  description: `Experience unparalleled luxury with Dr. Jan Duffy, your elite real estate specialist for prestigious Lennar homes in the exclusive Consenza Estates community of Las Vegas. Discover extraordinary properties with personalized concierge service and unmatched expertise for the most discerning clients.`,
  url: `https://consenzaestates.com`, // No trailing slash!
  name: `Dr. Jan Duffy Luxury Real Estate`, // The short name of the business or brand name. Used for things like the copyright in the footer.
  enableThemeSwitcher: true,
  showPlug: false, // Disable this if you want to remove the plug from the footer. (╯°□°)╯
};

export default siteSettings;
