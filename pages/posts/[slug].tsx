import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileName = fs.readFileSync(`posts/${params!.slug}.md`, "utf-8");
  // parse ~/posts/*.md
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};

type Props = {
  frontmatter: { [key: string]: any };
  content: string;
};

export default function Post({ frontmatter, content }: Props) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
