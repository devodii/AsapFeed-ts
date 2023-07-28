import Link from "next/link";
import { Card } from "./card";
import useRender from "./useRender";

export const PrivateOnboardPage = () => {
  return (
    <section className="container flex flex-col gap-12 lg:gap-16">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl break-words font-bold text-center block ">
          What will you use AsapFeed for?
        </h1>
        <span className="text-gray-500 font-medium  text-center">
          this will help us serve you better..
        </span>
      </div>
      <div className="flex flex-col gap-3 md:gap-5 lg:gap-8">
        <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 w-full max-w-2xl mx-auto">
          <Card href="business" className="mx-auto w-full">
            <b className="font-medium text-center ">Public Feedback </b>
            <span className="text-gray-500 text-sm text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </Card>
          <Card href="?type=business" className="mx-auto">
            <b className="font-medium text-center ">Private Feedback </b>
            <span className="text-gray-500 text-sm text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </Card>
        </div>
      </div>
    </section>
  );
};
