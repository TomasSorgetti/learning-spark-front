"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchPost } from "@/lib/features/post/postSlice";
type Props = {
  params: { postUrl: string };
};

export default function BlogDetail({ params }: Props) {
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector((state: any) => state.post);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data.url !== params.postUrl) {
      try {
        dispatch(fetchPost(params.postUrl));
      } catch (error) {}
    }
  }, [dispatch, params.postUrl]);

  return (
    <>
      <main>
        {status === "loading" ? (
          <div className={styles.loading}>
            <h1>Loading...</h1>
          </div>
        ) : (
          <>
            <div className={styles.banner}>
              <Image
                src={`http://localhost:8000/src/public/images/${data.image}`}
                alt={data.title}
                fill
              />
              <div className={styles.overlay}>
                <span className={styles.category}>{data.category.name}</span>
                <h1>{data.title}</h1>
                <span>{data.author}</span>
              </div>
            </div>
            <br />
            <br />
            <br />
            <p>{data.description}</p>
          </>
        )}
      </main>
    </>
  );
}
