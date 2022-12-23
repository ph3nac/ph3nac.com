import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Index.module.css";
export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const posts = files?.map((fileName) => {
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
      title: string;
      metaTitle: string;
      metaDesc: string;
      socialImage: string;
      date: string;
      tags: string[];
    };
  }[];
};

const Index = ({ posts }: Props) => (
  <div className={styles.wrapper}>
    {posts?.map(({ slug, frontmatter }) => {
      return (
        <div key={slug} className={styles.contents}>
          <div>
            <div className={styles.date}>{frontmatter.date}</div>
            <div className={styles.tags}>
              {frontmatter.tags?.map((tag) => (
                <Link href="/" key={tag} className={styles.tag}>
                  {tag}
                </Link>
              ))}
            </div>
            <Link href={`/posts/${slug}`}>
              <div className={styles.title}>{frontmatter.title}</div>
              <div className={styles.metaDesc}>{frontmatter.metaDesc}</div>
            </Link>
          </div>
        </div>
      );
    })}
  </div>
);

export default Index;
