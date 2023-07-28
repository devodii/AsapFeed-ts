import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HomeLayout } from "@/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = new QueryClient();
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
