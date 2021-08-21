import React from "react";
import {Grid} from "@chakra-ui/react";

import {File} from "../types";

import Icon from "./Icon";

interface Props {
  files: File[];
}

const Desktop: React.FC<Props> = ({files}) => {
  return (
    <Grid gap={1} gridTemplateColumns="repeat(auto-fill, minmax(108px, 1fr))" padding={4}>
      {files.map((file) => (
        <Icon key={file.path} file={file} />
      ))}
    </Grid>
  );
};

export default Desktop;
