"use client";

import Image from "next/image";
import styles from "./PostCard.module.scss";
import { Link } from "@/navigation";

export default function PostCard({ title, description, url, category }: any) {
  const newDescription = description.substring(0, 200);
  return (
    <div className={styles.card}>
      {/* <Image
        src={`http://localhost:8000/src/public/images/asdasd.png`}
        // src={`http://localhost:8000/src/public/images/${image}`}
        alt={title}
        width={313}
        height={212}
      /> */}
      <div
        className={styles.card_thumbnail}
        style={{
          backgroundImage: `url(http://localhost:8000/src/public/images/asdasd.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxHeight: "212px",
          height: "100%",
          width: "313px",
        }}
      ></div>
      <div className={styles.card_content}>
        <div>
          <span className={styles.category}>{category.name}</span>
          <h3>{title}</h3>
          <p>{newDescription}...</p>
        </div>
        <Link href={`/blog/${url}`}>Read post</Link>
      </div>
    </div>
  );
}
