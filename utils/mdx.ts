import fs from "fs";
import path from "path";

import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemoteSerializeResult} from "next-mdx-remote";

export async function parse(
  folder: string,
  file: string,
): Promise<{content: MDXRemoteSerializeResult; frontmatter: Record<string, any>}> {
  const postFilePath = path.join(path.join(process.cwd(), "content", folder), `${file}/index.mdx`);
  const source = fs.readFileSync(postFilePath);
  const {content, data} = matter(source);

  const mdxContent = await serialize(content, {scope: data});

  return {content: mdxContent, frontmatter: data};
}
