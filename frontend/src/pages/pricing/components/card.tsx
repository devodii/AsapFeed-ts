import Link from "next/link";
import { memo } from "react";
import { BsCheckLg } from "react-icons/bs";

type Props = {
  categorie: Record<string, any>;
};

// eslint-disable-next-line react/display-name
export const Card = memo(({ categorie }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
        <div className="flex flex-col gap-2 md:gap-4">
          <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl text-primary-orange">
            {categorie.tier}
          </h3>
          <span className="text-sm font-medium">{categorie.description}</span>
        </div>

        <span className="border-b border-gray-400 "></span>

        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
          <div className="flex flex-col gap-2">
            <strong className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {categorie.price}
            </strong>
            <p className="text-gray-600 font-medium text-sm">
              {categorie.shortDescription}
            </p>
          </div>
          <Link
            href={categorie.link.to}
            className="bg-primary-orange transition-all duration-200  font-medium hover:bg-primary-orange-hover text-white lg:text-lg px-4 py-2 rounded-lg text-center block"
          >
            <span className="text-sm">{categorie.link.text}</span>
          </Link>
        </div>

        <span className="border-b border-gray-400 "></span>

        <div>
          <h6 className="uppercase text-primary-orange font-medium tracking-tight ">
            Usage & support
          </h6>
          <ul>
            {categorie.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex gap-2 items-center mt-1 lg:mt-2">
                <BsCheckLg className="text-primary-orange h-5 w-5 font-bold " />
                <span className="text-sm font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});
