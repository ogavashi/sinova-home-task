import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextTopLoader from "nextjs-toploader";
import { ReactElement, ReactNode, useMemo } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <NextTopLoader />
      {getLayout(<Component {...pageProps} key={router.asPath} />)}
    </>
  );
}
