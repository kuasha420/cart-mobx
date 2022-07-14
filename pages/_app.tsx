import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { RootStoreProvider } from "../stores/RootStoreProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootStoreProvider>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </RootStoreProvider>
  );
}

export default MyApp;
