import { Paragraph, Title } from "@/Typography";
import { Grid, Card } from "@/UI";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";

export const categories: Record<string, any>[] = [
  {
    tier: "Free Plan",
    description:
      "Perfect for small teams or trial runs, access essential feedback tools and create up to 10 boards each month. \n Try!",
    price: `$0`,
    shortDescription: "Maximum of 10 boards",
    link: {
      to: "/signup?tier=free",
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
    price: `$49`,
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
    tier: "Business Plan",
    description:
      "Commit to a custom contract based on your team's specific needs. Enjoy unlimited boards and premium features.",
    price: "$99",
    shortDescription: "Custom Contract with Exclusive Benefits",
    link: {
      to: "/business",
      text: "Upgrade now",
    },
    benefits: [
      "Essential Feedback Tools",
      "Create Unlimited Boards",
      "Invite Unlimited Team Members",
    ],
  },
];
const Pricing = () => {
  return (
    <main
      className={`bg-[#f9f8f9] text-gray-900 flex flex-col min-h-screen container gap-4 md:gap-8 lg:gap-12 mx-auto px-4 md:px-12 lg:px-24 py-6 md:pt-4 lg:pt-12`}
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <Title size={"h2"} font={"fallback"}>
          Start for Free, Upgrade as You Grow!
        </Title>
        <Paragraph size={"base"} variant={"tertiary"} font={"large"}>
          {" "}
          Grow with Us - Start Free, Unlock More Features
        </Paragraph>
      </div>

      <Grid id={""} className={""} as={"section"}>
        {categories.map((category: any, index: number) => (
          <CategoryCard key={index} category={category} />
        ))}
      </Grid>
    </main>
  );
};

const CategoryCard = ({ category }: { category: Record<string, any> }) => {
  return (
    <Card className={""}>
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
        <div className="flex flex-col gap-2 md:gap-4">
          <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl text-primary-orange">
            {category.tier}
          </h3>
          <span className="text-sm font-medium">{category.description}</span>
        </div>

        <span className="border-b border-gray-400 "></span>

        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
          <div className="flex flex-col gap-2">
            <strong className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {category.price}
            </strong>
            <p className="text-gray-600 font-medium text-sm">
              {category.shortDescription}
            </p>
          </div>
          <Link
            href={category.link.to}
            className="bg-primary-orange transition-all duration-200  font-medium hover:bg-primary-orange-hover text-white lg:text-lg px-4 py-2 rounded-lg text-center block"
          >
            <span className="text-sm">{category.link.text}</span>
          </Link>
        </div>

        <span className="border-b border-gray-400 "></span>

        <div>
          <h6 className="uppercase text-primary-orange font-medium tracking-tight ">
            Usage & support
          </h6>
          <ul>
            {category.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex gap-2 items-center mt-1 lg:mt-2">
                <BsCheckLg className="text-primary-orange h-5 w-5 font-bold " />
                <span className="text-sm font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
export default Pricing;
