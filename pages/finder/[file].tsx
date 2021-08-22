import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import React from "react";

import Files from "../../components/Files";
import {File, PageProps} from "../../types";
import {getContentFiles} from "../../utils/file";

interface Props extends PageProps {
  files: File[];
}

const FinderPage: NextPage<Props> = ({files}) => {
  return <Files files={files} padding={4} />;
};

export const getStaticProps: GetStaticProps<Props, any> = async ({params: {file}}) => {
  const files = await import(`../../content/finder/${file}`).then((res) => res.default);

  return {
    props: {
      app: "Finder",
      title: `Finder - ${file}`,
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
