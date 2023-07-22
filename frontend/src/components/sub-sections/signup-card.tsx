import Link from "next/link";
import React from "react";
import { BsCheckLg } from "react-icons/bs";

const benefits = [
  "Essential Feedback Tools",
  "Create Up to 10 Boards Monthly",
  "Invite Up to 4 Team Members",
  "Ideal for Small Teams & Trials",
];

export const SignUpCard = () => {
  return (
    <section className=" w-full mdw-4/5 bg-[#fd972f] mx-auto rounded-2xl px-4 md:px-8 lg:px-16 py-2 md:py-8 flex flex-col md:flex-row gap-8 select-none">
      <div className="flex flex-col gap-7 items-center md:items-start flex-[0.6]">
        <h1 className="font-semibold text-2xl md:text-3xl">
          Create your free account now
        </h1>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 justify-center md:justify-start">
            <Link
              href={"/signup"}
              className="text-sm font-medium rounded-md bg-white hover:bg-[#ffc2ad] w-full max-w-[220px] text-center py-3 "
            >
              Create my free account
            </Link>
            <Link
              href={"/pricing"}
              className="text-sm font-medium border border-white hover:bg-[#fff3] bg-[#fda346] hover:outline hover:outline-white hover:outline-1 rounded-md w-full max-w-[220px] text-center py-3 "
            >
              Explore all plans
            </Link>
          </div>
          <span className="text-gray-800 text-sm font-medium text-center md:text-left ">
            No credit card required
          </span>
        </div>
      </div>

      <div className="max-w-x pt-2 ">
        <p className="font-medium">Included in free tier</p>
        <ul className="flex flex-col gap-[2px] mt-3">
          {benefits.map((benefit: string, index: number) => (
            <li key={index} className="flex gap-2 items-center mt-1 lg:mt-2">
              <BsCheckLg className="h-5 w-5 font-bold " />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SignUpCard;
