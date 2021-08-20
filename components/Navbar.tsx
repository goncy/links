import React from "react";
import {Image, Text, Stack, Link, Box} from "@chakra-ui/react";
import NextLink from "next/link";

import screenNormal from "../public/assets/icons/screen-normal.svg";
import screenFull from "../public/assets/icons/screen-full.svg";
import apple from "../public/assets/icons/apple.svg";
import {Action} from "../types";

interface Props {
  app?: string;
  actions?: Action[];
}

const Navbar: React.FC<Props> = ({app, actions}) => {
  const hasFullScreenSupport: boolean = React.useMemo(
    () => (process.browser ? Boolean(document.documentElement.requestFullscreen) : false),
    [],
  );
  const [isFullScreen, toggleFullScreen] = React.useState<boolean>(false);

  function handleToggleFullScreen(isEnabled: boolean) {
    if (isEnabled) {
      return document.documentElement.requestFullscreen().then(() => toggleFullScreen(true));
    } else {
      return document.exitFullscreen().then(() => toggleFullScreen(false));
    }
  }

  return (
    <Box backgroundColor="rgba(0,0,0,0.75)" boxShadow="md" paddingX={4}>
      <Stack direction="row" justifyContent="space-between">
        <Stack
          alignItems="center"
          direction="row"
          height="28px"
          justifyContent="flex-start"
          overflowX="auto"
          spacing={6}
        >
          <Image alt="Apple logo" src={apple.src} />
          {app && (
            <>
              <Text fontSize="sm" fontWeight="bold" userSelect="none">
                {app}
              </Text>
              {actions?.map((action) => (
                <NextLink key={action.url} passHref href={action.url}>
                  <Link isExternal _hover={{textDecoration: "none"}} fontSize="sm" fontWeight="500">
                    {action.label}
                  </Link>
                </NextLink>
              ))}
            </>
          )}
        </Stack>
        {hasFullScreenSupport && (
          <>
            {isFullScreen ? (
              <Image
                alt="exit full screen"
                cursor="pointer"
                src={screenNormal.src}
                tabIndex={0}
                onClick={() => handleToggleFullScreen(false)}
              />
            ) : (
              <Image
                alt="enter full screen"
                cursor="pointer"
                src={screenFull.src}
                tabIndex={0}
                onClick={() => handleToggleFullScreen(true)}
              />
            )}
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
