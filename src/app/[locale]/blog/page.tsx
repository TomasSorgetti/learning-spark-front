import styles from "./page.module.scss";
import PopularPosts from "@/components/popular_posts/PopularPosts";
import Posts from "@/components/posts/Posts";
import BlogSlider from "@/components/blog_slider/BlogSlider";
import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("BlogPage");

  return (
    <main className={styles.main}>
      <BlogSlider />
      <h1>Most viewed blog posts</h1>
      {/* <PopularPosts /> */}
      {/* <Posts /> */}
    </main>
  );
}
