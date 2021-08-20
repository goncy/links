import type {AppProps} from "next/app";
import * as React from "react";
import {ChakraProvider, Stack} from "@chakra-ui/react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Desktop from "../components/Desktop";
import Window from "../components/Window";
import theme from "../theme";
import {DESKTOP_FILES} from "../constants";
import {PageProps} from "../types";

function App({Component, pageProps}: AppProps) {
  const {actions, title, app} = pageProps as PageProps;

  const dragZone = React.useRef(null);

  return (
    <>
      <Head>
        <title>Gonzalo Pozzo | Blog</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Stack height="100%" position="relative" spacing={0}>
          <Navbar actions={actions} app={app} />
          <Stack ref={dragZone} height="100%">
            <Desktop files={DESKTOP_FILES} />
            {app && (
              <Window dragConstraints={dragZone} title={title}>
                <Component {...pageProps} />
              </Window>
            )}
          </Stack>
        </Stack>
      </ChakraProvider>
    </>
  );
}
export default App;
