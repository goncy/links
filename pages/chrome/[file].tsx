import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {Box} from "@chakra-ui/react";

import {Action, PageProps} from "../../types";
import {parse} from "../../utils/mdx";
import {getContentFiles} from "../../utils/file";

interface Props extends PageProps {
  content: MDXRemoteSerializeResult;
  frontmatter: Record<string, any>;
}

const ChromePage: NextPage<Props> = ({content}) => {
  return (
    <Box padding={2}>
      <MDXRemote {...content} />
    </Box>
  );
};

export const getStaticProps: GetStaticProps<Props, any> = async ({params: {file}}) => {
  const {content, frontmatter} = await parse("chrome", `/${file}/index.mdx`);

  return {
    props: {
      app: "Chrome",
      title: `Chrome - ${frontmatter.title}`,
      actions: frontmatter.links.map(([label, url]: [string, string]): Action => ({label, url})),
      content,
      frontmatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getContentFiles("chrome");

  return {
    paths: files.map((file) => ({
      params: {
        file,
      },
    })),
    fallback: "blocking",
  };
};

export default ChromePage;
