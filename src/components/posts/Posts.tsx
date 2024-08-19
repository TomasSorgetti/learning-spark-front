"use client";

import styles from "./Posts.module.scss";
import { fetchPosts } from "@/lib/features/blog/blogSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
import SkeletonPost from "../skeleton/skeletonPost/SkeletonPost";
import PostCard from "../post_card/PostCard";
import BasicPagination from "../pagination/Pagination";

// const DynamicPost = dynamic(() => import("../post_card/PostCard"), {
//   loading: () => <SkeletonPost />,
// });

export default function Posts() {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state: any) => state.blog);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (
      (status === "idle" && data.posts.length === 0) ||
      page !== data.currentPage
    ) {
      const limit = 6;
      const payload = { page, limit };
      dispatch(fetchPosts(payload));
    }
  }, []);
  const onPageChange = (payload: { page: number; limit: number }) => {
    setPage(payload.page);
    dispatch(fetchPosts(payload));
  };

  return (
    <div className={styles.posts}>
      {data.posts?.length === 0 && (
        <>
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
        </>
      )}
      {data.posts?.map((post: any) => (
        <PostCard key={post.id} {...post} />
      ))}
      <BasicPagination
        currentPage={data.currentPage}
        totalPages={data.totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
