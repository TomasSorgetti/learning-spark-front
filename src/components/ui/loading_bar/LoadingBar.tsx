"use client";

import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const auth = useAppSelector((state: any) => state.auth);
  const blog = useAppSelector((state: any) => state.blog);

  useEffect(() => {
    if (auth.status === "loading" || blog.status === "loading") {
      setProgress(30);
    }
    if (auth.status === "idle") {
      setProgress(0);
    }
  }, [auth.status, blog.status]);

  return (
    <div style={{ width: "100%", height: "4px", backgroundColor: "white" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#211842",
          transition: "width 0.2s ease-in-out",
        }}
      ></div>
    </div>
  );
}
