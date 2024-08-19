"use client";

import { useTranslations } from "next-intl";
import ChangeLang from "../changeLang/ChangeLang";
import { useLocale } from "next-intl";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { Link } from "@/navigation";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={`/`}>
          <Image
            src="/images/nav_logo.png"
            alt="logo"
            width={132}
            height={41}
          />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href={`/`}>{t("home")}</Link>
          </li>
          <li>
            <Link href={`/blog`}>{t("blog")}</Link>
          </li>
          <li>
            <Link href={`/login`}>{t("login")}</Link>
          </li>
          <li>
            <Link href={`/register`}>{t("register")}</Link>
          </li>
        </ul>
        <ChangeLang />
      </nav>
    </header>
  );
}
