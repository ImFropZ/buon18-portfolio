export type Service = {
  type: "MONTHLY" | "ONE_TIME";
  name: string;
  description: string;
  price: number;
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
    name: "Basic",
    description: "Basic Website",
    price: 70,
    availableServices: [
      {
        label: "Functional Website",
      },
      {
        label: "1 - 2 Pages",
      },
      {
        label: "Responsive Design",
      },
      {
        label: "SEO Friendly",
      },
      {
        label: "Hosting",
      },
    ],
    unavailableServices: [
      {
        label: "E-commerce",
      },
      {
        label: "Blog",
      },
      {
        label: "Custom Design",
      },
    ],
  },
];
