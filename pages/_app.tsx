import type { AppProps } from "next/app";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import Layout from "../components/layout/index";
import Head from "next/head";

const theme: MantineThemeOverride = {
  colorScheme: "light",
  colors: {
    appGreen: [
      "#D4D9D6",
      "#BFC7C3",
      "#AAB8B1",
      "#97ABA1",
      "#83A193",
      "#709A86",
      "#5F937A",
      "#5A806E",
      "#556F63",
      "#4F6259",
    ],
    appPurple: [
      "#EBEBF0",
      "#D2D0DF",
      "#BAB6D2",
      "#A29CC9",
      "#8980C4",
      "#7A72B2",
      "#6E66A0",
      "#66608C",
      "#5F5A7A",
    ],
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
