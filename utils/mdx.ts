import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemoteSerializeResult} from "next-mdx-remote";

import {readContentFile} from "./file";

export async function parse(
  folder: string,
  file: string,
): Promise<{content: MDXRemoteSerializeResult; frontmatter: Record<string, any>}> {
  const source = readContentFile(folder, file);
  const {content, data} = matter(source);

  const mdxContent = await serialize(content, {scope: data});

  return {content: mdxContent, frontmatter: data};
}
