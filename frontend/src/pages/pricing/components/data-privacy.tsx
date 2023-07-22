import Link from "next/link";
import { AddOnFeature } from "./meta";
import { BsCheckLg, BsLayoutTextSidebarReverse } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

export const DataPrivacy = () => {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-5 max-w-lg">
        <h6 className="text-primary-orange font-medium ">ADD-ON</h6>
        <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold">
          Sentiment Analysis
        </h2>
        <span className="text-sm font-semibold leading-6">
          Understand customer emotions, identify trends, and make data-driven
          decisions. Get comprehensive quality reports using Tableau to gain
          valuable insights, all seamlessly integrated into your dashboard.
        </span>

        <Link
          href={"/"}
          className="bg-primary-orange transition-all duration-200  font-medium hover:bg-primary-orange-hover  lg:text-lg px-4 py-2 rounded-lg text-center block max-w-sm"
        >
          <span className="text-sm text-white">Get started</span>
        </Link>
      </div>

      <div className="flex">
        <div className="border-[1.2px] rounded-md flex flex-col gap-3 max-w-xs p-6 border-gray-400">
          <BsLayoutTextSidebarReverse className="text-primary-orange h-10 w-10" />
          <h3 className="text-xl font-semibold ">Add-On Features</h3>
          <ul>
            {AddOnFeature.map((feature: string) => (
              <li key={feature} className="flex items-center gap-2 mt-2">
                <BsCheckLg className="text-primary-orange h-5 w-5 font-bold" />
                <span className="text-sm font-medium text-gray-600">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <Link href={"/add-on"} className="flex gap-1 items-center">
            <span className="travel">Learn more</span>
            <FiChevronRight className="text-lg mt-[2px]" />
          </Link>
          <span className="border-b border-gray-400 mt-1"></span>

          <p className="text-sm text-gray-600 font-medium break-words">
            Affordable Pricing from $20/month (Exclusive to Paid Plans)
          </p>
        </div>
      </div>
    </section>
  );
};
