"use client";

import { formatDate } from "@/helpers/format-date";
import styles from "./BlogSlider.module.scss";
import { fetchLatestPosts } from "@/lib/features/latest/latestSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Link } from "@/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cutDescription } from "@/helpers/cut-description";

export default function LatestPosts() {
  const dispatch = useAppDispatch();
  const { posts, status } = useAppSelector((state: any) => state.latest);

  const [cardIndex, setCardIndex] = useState(0);

  //* Search posts
  useEffect(() => {
    if (status === "idle") {
      const limit = 3;
      dispatch(fetchLatestPosts(limit));
    }
  }, []);

  //* Slider Interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextChange();
    }, 8000);
    return () => clearInterval(interval);
  }, [cardIndex, posts]);

  //* Handles change card
  const prevChange = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(posts.length - 1);
    }
  };
  const nextChange = () => {
    if (cardIndex < posts.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(0);
    }
  };

  return (
    <>
      <div className={styles.slider}>
        <button className={`${styles.btn} ${styles.prev}`} onClick={prevChange}>
          <Image
            src={"/images/icons/left.svg"}
            alt="down"
            width={16}
            height={28}
          />
        </button>

        <div className={styles.slider_cards}>
          {posts?.map(
            ({
              id,
              category,
              title,
              author,
              image,
              description,
              url,
              createdAt,
            }: any) => (
              <div
                className={styles.card}
                key={id}
                style={{
                  transform: `translateX(-${cardIndex * 100}%)`,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Image
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  src={`http://localhost:8000/src/public/images/${image}`}
                  alt={title}
                  width={1440}
                  height={480}
                />
                <div className={styles.card_content}>
                  <div className={styles.left}>
                    <span className={styles.new}>New Post!</span>
                    <div className={styles.category}>
                      <span className={styles.category_icon}></span>
                      <span>{category.name}</span>
                    </div>
                    <span className={styles.title}>{title}</span>
                    <Link className={styles.card_btn} href={`/blog/${url}`}>
                      Read post
                    </Link>
                  </div>

                  <div className={styles.rigth}>
                    <div className={styles.line}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p>{cutDescription(description)}...</p>
                    <p className={styles.author}>
                      <span>{author}</span>
                      {formatDate(createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <button className={`${styles.btn} ${styles.next}`} onClick={nextChange}>
          <Image
            src={"/images/icons/right.svg"}
            alt="down"
            width={16}
            height={28}
          />
        </button>
      </div>
      <div className={styles.dots}>
        {posts?.map((_: any, index: number) => (
          <button
            className={`${styles.dot} ${
              cardIndex === index ? styles.active_dot : ""
            }`}
            key={index}
            onClick={() => setCardIndex(index)}
          ></button>
        ))}
      </div>
    </>
  );
}
