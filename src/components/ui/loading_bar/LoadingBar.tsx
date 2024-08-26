"use client";

import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const auth = useAppSelector((state: any) => state.auth);

  useEffect(() => {
    const interval = setInterval(() => {
      if (auth.status === "loading") {
        setProgress((prevProgress) =>
          prevProgress >= 30 ? 0 : prevProgress + 10
        );
      } else if (auth.isAuthenticated) {
        setProgress((prevProgress) =>
          prevProgress === 100 ? 0 : prevProgress + 70
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [auth.status, auth.isAuthenticated]);


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
