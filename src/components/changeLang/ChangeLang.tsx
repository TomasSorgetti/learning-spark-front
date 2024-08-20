"use client";

import styles from "./ChangeLang.module.scss";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { ChangeEvent } from "react";
export default function ChangeLang() {
  const router = useRouter();
  const localActive = useLocale();
  const [isPending, startTransition] = useTransition();

  const [dropdown, setDropdown] = useState(false);

  const handleChange = (lang: string) => {
    setDropdown(false);
    localStorage.setItem("language", lang);
    const path = window.location.pathname.split("/")[2]
      ? window.location.pathname.split("/")[2]
      : "";
    startTransition(() => router.replace(`/${lang}/${path}`));
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_menu}>
        <button
          className={`${
            localActive === "en" ? styles.active : styles.unactive
          } ${styles.flag} ${
            dropdown && localActive !== "en" ? styles.show : ""
          }`}
          onClick={() => handleChange("en")}
        >
          <Image
            src={"/images/icons/en.svg"}
            alt="english flag"
            width={38}
            height={38}
          />
        </button>

        <button
          className={`${
            localActive === "es" ? styles.active : styles.unactive
          } ${styles.flag} ${
            dropdown && localActive !== "es" ? styles.show : ""
          }`}
          onClick={() => handleChange("es")}
        >
          <Image
            src={"/images/icons/es.svg"}
            alt="spanish flag"
            width={38}
            height={38}
          />
        </button>
      </div>

      <button className={styles.btn} onClick={() => setDropdown(!dropdown)}>
        {localActive}
        <Image
          src={"/images/icons/down_lang.svg"}
          alt="down"
          width={37}
          height={14}
        />
      </button>
    </div>
  );
}
