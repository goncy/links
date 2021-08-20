import React from "react";
import {Image, Text, Grid, Stack, LinkBox, LinkOverlay} from "@chakra-ui/react";
import Link from "next/link";

import {File} from "../types";

interface Props {
  files: File[];
}

const Desktop: React.FC<Props> = ({files}) => {
  return (
    <Grid gap={1} gridTemplateColumns="repeat(auto-fill, minmax(108px, 1fr))" padding={4}>
      {files.map((file) => (
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
            <Image alt={file.icon} margin="auto" maxWidth="64px" src={file.icon} />
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
      ))}
    </Grid>
  );
};

export default Desktop;
