import { AuthHeader } from "@/components/header";
import Head from "next/head";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const Layout = ({ children }: Props) => {
  return (
    <div className="">
      <Head>
        <title>Onboarding | AsapFeed</title>
      </Head>
      <AuthHeader />
      <main className="text-gray-900 min-h-screen container gap-4 md:gap-8 lg:gap-12 mx-auto px-4 md:px-12 lg:px-24 py-6">
        {children}
      </main>
    </div>
  );
};
