"use client";

import { fetchPopularPosts } from "@/lib/features/popular/popularSlice";
import styles from "./PopularPosts.module.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { cutDescription } from "@/helpers/cut-description";
import { formatDate } from "@/helpers/format-date";
import Image from "next/image";
import { Link } from "@/navigation";
import PostCard from "../post_card/PostCard";

export default function PopularPosts() {
  const dispatch = useAppDispatch();
  const { posts, status } = useAppSelector((state: any) => state.popular);
  useEffect(() => {
    if (status === "idle") {
      const limit = 5;
      dispatch(fetchPopularPosts(limit));
    }
  }, []);

  const [firstPost, ...restPosts] = posts;

  return (
    <section className={styles.popular_cards}>
      <article className={styles.best_card}>
        <div className={styles.best_card_img_cont}>
          <Image
            src={`http://localhost:8000/src/public/images/${firstPost?.image}`}
            alt={firstPost?.title}
            width={1400}
            height={480}
          />
        </div>

        <div className={styles.best_card_content}>
          <span className={styles.best_card_rank}>1st</span>

          <p className={styles.category}>
            <span className={styles.category_icon}></span>
            {firstPost?.category.name}
          </p>
          <h2>{firstPost?.title}</h2>
          <p className={styles.best_card_description}>
            {firstPost && cutDescription(firstPost?.description)}...
          </p>
          <div>
            <p className={styles.best_card_author}>{firstPost?.author}</p>
            <p className={styles.best_card_date}>
              {firstPost && formatDate(firstPost?.createdAt)}
            </p>
          </div>

          <div className={styles.best_card_link}>
            <span></span>
            <Link href={`/blog/${firstPost?.url}`}>Read post</Link>
          </div>
        </div>
      </article>

      <div className={styles.popular_posts}>
        {restPosts?.map((post: any) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
