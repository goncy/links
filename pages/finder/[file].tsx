import {Grid} from "@chakra-ui/react";
import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import React from "react";

import Icon from "../../components/Icon";
import {File, PageProps} from "../../types";
import {getContentFiles} from "../../utils/file";

interface Props extends PageProps {
  files: File[];
}

const FinderPage: NextPage<Props> = ({files}) => {
  return (
    <Grid gap={1} gridTemplateColumns="repeat(auto-fill, minmax(108px, 1fr))" padding={4}>
      {files.map((file) => (
        <Icon key={file.path} file={file} />
      ))}
    </Grid>
  );
};

export const getStaticProps: GetStaticProps<Props, any> = async ({params: {file}}) => {
  const files = await import(`../../content/finder/${file}`).then((res) => res.default);

  return {
    props: {
      app: "Finder",
      title: `Finder - ${file}`,
      actions: [],
      files,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getContentFiles("finder");

  return {
    paths: files.map((file) => ({
      params: {
        file,
      },
    })),
    fallback: "blocking",
  };
};

export default FinderPage;
