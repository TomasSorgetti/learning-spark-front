import styles from "./page.module.scss";
import PopularPosts from "@/components/features/popular_posts/PopularPosts";
import Posts from "@/components/features/posts/Posts";
import BlogSlider from "@/components/features/blog_slider/BlogSlider";
import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("BlogPage");

  return (
    <main className={styles.main}>
      <BlogSlider />
      <h1>Most viewed blog posts</h1>
      <PopularPosts />
      <h2>Search for a post</h2>
      <Posts />
    </main>
  );
}
