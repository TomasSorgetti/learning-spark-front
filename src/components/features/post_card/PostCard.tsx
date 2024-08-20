"use client";

import Image from "next/image";
import styles from "./PostCard.module.scss";
import { Link } from "@/navigation";
import { formatDate } from "../../../helpers/format-date";

export default function PostCard({
  title,
  description,
  url,
  category,
  image,
  author,
  createdAt,
}: any) {
  const newDescription = description.substring(0, 200);
  const date = formatDate(createdAt);
  return (
    <div className={styles.card}>
      <div className={styles.card_thumbnail}>
        <Image
          src={`http://localhost:8000/src/public/images/${image}`}
          alt={title}
          width={1400}
          height={480}
          style={{
            objectFit: "cover",
            objectPosition: "right",
          }}
        />
        <div className={styles.overlay}>
          <span className={styles.author}>By {author}</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
      <div className={styles.card_content}>
        <div>
          <div className={styles.category}>
            <span className={styles.category_dot}></span>
            <p>{category.name}</p>
          </div>
          <h3>{title}</h3>
          <p>{newDescription}...</p>
        </div>
        <Link href={`/blog/${url}`}>Read post</Link>
      </div>
    </div>
  );
}
