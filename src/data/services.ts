export type Service = {
  type: "MONTHLY" | "ONE_TIME";
  name: string;
  description: string;
  price: number | string;
  isMore?: boolean;
  isPopular?: boolean;
  availableServices: {
    label: string;
  }[];
  unavailableServices: {
    label: string;
  }[];
};

export const SERVICES: Service[] = [
  {
    type: "ONE_TIME",
    name: "Basic Package",
    description:
      "This package is ideal for simple websites like portfolios or a basic company showcase with 1 to 2 pages. It's perfect for businesses or individuals who need a quick and professional online presence.",
    price: 120,
    availableServices: [
      {
        label: "Website Hosting",
      },
      {
        label: "Domain Assignment (Yearly Cost)",
      },
      {
        label: "Basic SEO",
      },
      {
        label: "Mobile-Responsive Design",
      },
      {
        label: "1-2 Page Structure",
      },
    ],
    unavailableServices: [
      {
        label: "Contact Us Page (Free with Gmail)",
      },
      {
        label: "About Us Page",
      },
      {
        label: "Customized Header and Footer",
      },
    ],
  },
  {
    type: "ONE_TIME",
    name: "Business Essentials",
    description:
      "This service is tailored for companies aiming to showcase their profile in a professional and impactful manner. Ideal for businesses that want to establish a comprehensive online presence.",
    price: 250,
    isPopular: true,
    availableServices: [
      {
        label: "Website Hosting",
      },
      {
        label: "Domain Assignment (Yearly Cost)",
      },
      {
        label: "Basic SEO",
      },
      {
        label: "Mobile-Responsive Design",
      },
      {
        label: "1-2 Page Structure",
      },
      {
        label: "Contact Us Page (Free with Gmail)",
      },
      {
        label: "About Us Page",
      },
      {
        label: "Customized Header and Footer",
      },
      {
        label: "Partners/Co-op Companies Section",
      },
      {
        label: "Customers Section",
      },
    ],
    unavailableServices: [
      {
        label: "Basic Admin Product Management with Authentication",
      },
      {
        label: "Product/Service Showcase",
      },
    ],
  },
  {
    type: "ONE_TIME",
    name: "High Package",
    description:
      "This package is ideal for companies seeking a high-quality profile with a detailed showcase of products or services, allowing customers to explore offerings in depth.",
    price: 500,
    isMore: true,
    availableServices: [
      {
        label: "Website Hosting",
      },
      {
        label: "Domain Assignment (Yearly Cost)",
      },
      {
        label: "Basic SEO",
      },
      {
        label: "Mobile-Responsive Design",
      },
      {
        label: "1-2 Page Structure",
      },
      {
        label: "Contact Us Page (Free with Gmail)",
      },
      {
        label: "About Us Page",
      },
      {
        label: "Customized Header and Footer",
      },
      {
        label: "Partners/Co-op Companies Section",
      },
      {
        label: "Customers Section",
      },
      {
        label: "Basic Admin Product Management with Authentication",
      },
      {
        label: "Product/Service Showcase",
      },
    ],
    unavailableServices: [],
  },
  {
    type: "ONE_TIME",
    name: "System Integration",
    description:
      "Build a custom system that fits your specific business needs. Contact us to discuss your requirements. Below are some key features we can include:",
    price: "Custom",
    availableServices: [
      {
        label: "Website Hosting",
      },
      {
        label: "Domain Assignment (Yearly Cost)",
      },
      {
        label: "User Authentication and Authorization",
      },
      {
        label: "User Login Management",
      },
      {
        label: "Inventory Management System",
      },
      {
        label: "Sales Management System",
      },
      {
        label: "Accounting System",
      },
      {
        label: "Invoice Generation",
      },
      {
        label: "Export Data to Excel",
      },
    ],
    unavailableServices: [],
  },
];
