import Link from "next/link";
import { Title } from "../typography";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-3">
      <div className="py-4 max-w-md">
        <Title size={"h1"} font={"default"}>
          Customer feedback made easy
        </Title>
      </div>
      <p className="text-gray-600 text-lg max-w-lg">
        AsapFeed - Your ultimate platform for effortless feedback gathering. No
        more email exchanges. Just valuable insights and more.
      </p>
      <Link
        href={"/"}
        className="md:text-lg bg-primary-blue md:max-w-max max-w-xs w-full text-center px-4 py-2 mx-auto md:mx-0 rounded-md text-white"
      >
        Start listening to customers
      </Link>
      <span className="-mt-1 text-gray-600 font-medium text-sm lg:text-base text-center md:self-start">
        Join for free &#183; Upgrade anytime!
      </span>
    </section>
  );
};
