import React from "react";
import {Text, Stack, Link, Box} from "@chakra-ui/react";
import NextLink from "next/link";

import Image from "../ui/display/FixedImage";
import screenNormal from "../public/assets/icons/screen-normal.png";
import screenFull from "../public/assets/icons/screen-full.png";
import apple from "../public/assets/icons/apple.png";
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
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Stack
          alignItems="center"
          direction="row"
          height="28px"
          justifyContent="flex-start"
          overflowX="auto"
          spacing={6}
        >
          <Image alt="Apple logo" height={20} layout="fixed" src={apple.src} width={20} />
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
                height={20}
                layout="fixed"
                src={screenNormal.src}
                tabIndex={0}
                width={20}
                onClick={() => handleToggleFullScreen(false)}
              />
            ) : (
              <Image
                alt="enter full screen"
                cursor="pointer"
                height={20}
                layout="fixed"
                src={screenFull.src}
                tabIndex={0}
                width={20}
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
