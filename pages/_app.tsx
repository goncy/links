import type {AppProps} from "next/app";
import * as React from "react";
import {Box, ChakraProvider, Stack} from "@chakra-ui/react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Files from "../components/Files";
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
        <title>Gonzalo Pozzo | Links</title>
        <meta
          content="Links útiles de Gonzalo Pozzo, principalmente enfocado en React, frontend y otras tecnologías que me gustan"
          name="description"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Stack height="100%" spacing={0}>
          <Navbar actions={actions} app={app} />
          <Box ref={dragZone} height="100%">
            <Files files={DESKTOP_FILES} padding={4} position="absolute" width="100%" />
            {app && (
              <Window dragConstraints={dragZone} title={title}>
                <Component {...pageProps} />
              </Window>
            )}
          </Box>
        </Stack>
      </ChakraProvider>
    </>
  );
}
export default App;
