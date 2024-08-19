"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
type Props = {
  params: { postUrl: string };
};

export default function BlogDetail({ params }: Props) {
  const [data, setData] = useState({
    title: "",
    url: "",
    author: "",
    description: "",
    image: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchData = async () => {
        // const response = await getPostByUrl(params.postUrl);
        await fetch(`http://localhost:8000/api/blog/${params.postUrl}`)
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              setData(data.data);
              setIsLoading(false);
            }
          });
      };

      fetchData();
    } catch (error) {
      setIsLoading(false);
    }

    return () => {
      setData({
        title: "",
        url: "",
        author: "",
        description: "",
        image: "",
        card_description: "",
        card_image: "",
        category: "",
      });
      setIsLoading(false);
    };
  }, [params]);

  return (
    <>
      <main>
        <div
          className={styles.banner}
          style={{
            backgroundImage: `url(http://localhost:8000/src/public/images/${data.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className={styles.overlay}>
            <h1>{data.title}</h1>
            <span>{data.author}</span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p>{data.description}</p>
      </main>
    </>
  );
}
