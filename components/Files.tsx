import React from "react";
import {Grid, GridProps} from "@chakra-ui/react";

import {File} from "../types";

import Icon from "./Icon";

interface Props extends GridProps {
  files: File[];
}

const Files: React.FC<Props> = ({files, ...props}) => {
  return (
    <Grid as="header" gap={1} gridTemplateColumns="repeat(auto-fill, minmax(96px, 1fr))" {...props}>
      {files.map((file) => (
        <Icon key={file.path} file={file} />
      ))}
    </Grid>
  );
};

export default Files;
