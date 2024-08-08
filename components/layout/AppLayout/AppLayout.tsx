import Head from "next/head";
import { Header } from "./Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface AppLayoutProps {}

export const AppLayout: React.FC<React.PropsWithChildren<AppLayoutProps>> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>sinova-test</title>
      </Head>
      <Header />
      <div className={`${inter.className} p-5`}>{children}</div>
    </>
  );
};
