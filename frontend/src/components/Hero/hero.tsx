import Link from "next/link";
import { metaBenefits } from "./meta";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-3 lg:gap-">
      <div className="max-w-md py-4">
        <h1 className="text-2xl md:text-4xl font-semibold lg:text-6xl">
          Customer feedback made easy
        </h1>
      </div>

      <strong className="md:text-lg font-semibold">
        ...delighting customers every step of the way
      </strong>

      <ul className="flex flex-col gap-1 md:gap-2">
        {metaBenefits.map((benefit: string, index: number) => (
          <li
            key={index}
            className="md:text-lg marker:text-primary-orange list-disc ml-4 "
          >
            {benefit}
          </li>
        ))}
      </ul>
      <Link
        href={"/"}
        className="md:text-lg bg-primary-blue md:max-w-max max-w-xs w-full text-center px-4 py-2 mx-auto md:mx-0 rounded-md text-white"
      >
        Start listening to customers
      </Link>
      <span className="-mt-1 text-gray-600 font-medium">
        Join for free &#183; Upgrade anytime!
      </span>
    </section>
  );
};
