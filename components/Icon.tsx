import React from "react";
import {LinkBox, Stack, LinkOverlay, Text} from "@chakra-ui/react";
import Link from "next/link";

import {File} from "../types";
import FixedImage from "../ui/FixedImage";

interface Props {
  file: File;
}

function Icon({file}: Props): JSX.Element {
  return (
    <LinkBox key={file.name} className="container">
      <Stack
        alignItems="center"
        borderRadius="sm"
        cursor="pointer"
        padding={1}
        spacing={2}
        sx={{
          ":focus-within": {
            backgroundColor: "rgba(255,255,255,0.25)",
          },
        }}
        tabIndex={0}
        userSelect="none"
        width="100%"
      >
        <FixedImage
          alt={file.name}
          blurDataURL={file.icon.blurDataURL}
          height={64}
          margin="auto"
          maxWidth="64px"
          placeholder="blur"
          src={file.icon.src}
          width={64}
        />
        <Text
          borderRadius="sm"
          className="focuser"
          fontSize="sm"
          fontWeight="bold"
          overflow="hidden"
          paddingX={0.5}
          sx={{
            ":focus-within": {
              backgroundColor: "blue.500",
            },
          }}
          textAlign="center"
          textShadow="1px 1px 7px rgba(0,0,0,0.7)"
          width="100%"
        >
          <Link passHref href={file.path}>
            <LinkOverlay tabIndex={-1}>{file.name}</LinkOverlay>
          </Link>
        </Text>
      </Stack>
    </LinkBox>
  );
}

export default Icon;
