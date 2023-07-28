import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { Layout } from "./layout";
import { PublicOnboardPage, PrivateOnboardPage, Card } from "./components";
import { FaPeopleRoof } from "react-icons/fa6";
import { AiOutlineTeam } from "react-icons/ai";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  // const router = useRouter();
  // const queryParam = router.query.usage;

  // if (queryParam === "private") {
  //   return <PrivateOnboardPage />;
  // } else if (queryParam === "public") {
  //   return <PublicOnboardPage />;
  // }

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
          <Card
            href="user/create-board"
            className="mx-auto w-full gap-4 hover:outline hover:outline-1 hover:outline-gray-600"
          >
            <AiOutlineTeam className="text-2xl md:text-3xl font-bold self-center" />

            <div className="flex flex-col gap-1">
              <b className="font-medium text-center break-words">
                Public Feedback{" "}
              </b>
              <span className="text-gray-500 text-sm text-center break-words ">
                A space for customers to give feedback
              </span>
            </div>
          </Card>
          <Card
            href="user/create-board"
            className="mx-auto w-full gap-4 hover:outline hover:outline-1 hover:outline-gray-600"
          >
            <FaPeopleRoof className="text-2xl md:text-3xl font-bold self-center" />

            <div className="flex flex-col gap-1">
              <b className="font-medium text-center break-words ">
                Private Feedback{" "}
              </b>
              <span className="text-gray-500 text-sm text-center break-words ">
                A space for sales and other teams to share feedback.
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <div>{page}</div>
    </Layout>
  );
};

export default Page;
