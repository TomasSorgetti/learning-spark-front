"use client";

import { fetchPopularPosts } from "@/lib/features/popular/popularSlice";
import styles from "./LatestPosts.module.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

export default function PopularPosts() {
  const dispatch = useAppDispatch();
  const { posts, status } = useAppSelector((state: any) => state.popular);

  useEffect(() => {
    if (status === "idle") {
      const limit = 3;
      dispatch(fetchPopularPosts(limit));
    }
  }, []);
  return (
    <div>
      <div>
        <span>{posts[0]?.category.name}</span>
        <h2>{posts[0]?.title}</h2>
        <p>{posts[0]?.description}</p>
      </div>
    </div>
  );
}
