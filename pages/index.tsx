import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
};

type Props = {
  posts: {
    slug: string;
    frontmatter: {
      [key: string]: any;
    };
  }[];
};

const Index = ({ posts }: Props) => (
  <div>
    {posts.map(({ slug, frontmatter }) => {
      return (
        <div key={slug}>
          <Link href={`/posts/${slug}`}>
            <Image
              width={630}
              height={340}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
            />
            <h1>{frontmatter.title}</h1>
          </Link>
        </div>
      );
    })}
  </div>
);

export default Index;
