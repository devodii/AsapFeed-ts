

export const Categories: Record<string, any>[] = [
  {
    tier: "Free Plan",
    description:
      "Perfect for small teams or trial runs, access essential feedback tools and create up to 10 boards each month. \n Try!",
    price: `$0`,
    shortDescription: "Maximum of 10 boards",
    link: {
      to: "/free",
      text: "Get started",
    },
    benefits: [
      "Essential Feedback Tools",
      "Create Up to 10 Boards Monthly",
      "Invite Up to 4 Team Members",
      "Ideal for Small Teams & Trials",
    ],
  },
  {
    tier: "Growth Plan",
    description:
      "Unlock more features for expanding teams, perfect for growing businesses looking to scale their feedback process.",
    price: `$50`,
    shortDescription: "Billed month-to-month",
    link: {
      to: "/growth",
      text: "Upgrade now",
    },
    benefits: [
      "Essential Feedback Tools",
      "CreateUp to 25 boards Monthly",
      "Invite Up to 10 Team Members",
    ],
  },
  {
    tier: "Contract Plan",
    description:
      "Commit to a custom contract based on your team's specific needs. Enjoy unlimited boards and premium features.",
    price: "Custom", // Replace with your pricing model or contract details
    shortDescription: "Custom Contract with Exclusive Benefits",
    link: {
      to: "/contract",
      text: "Contact us",
    },
    benefits: [
      "Essential Feedback Tools",
      "Create Unlimited Boards",
      "Invite Unlimited Team Members",
      // Add more benefits specific to your Contract Plan
    ],
  },
];

export const AddOnFeature: string[] = [
  "Trend Identification",
  "Actionable Recommendations:",
  "Customer Satisfaction Metrics",
];