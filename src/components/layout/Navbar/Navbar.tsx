"use client";

import { useTranslations } from "next-intl";
import ChangeLang from "../../features/changeLang/ChangeLang";
import { useLocale } from "next-intl";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { Link } from "@/navigation";
import ProfileDropdown from "../../features/profile_dropdown/ProfileDropdown";

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
            <Link href={`/resourses`}>{t("resources")}</Link>
          </li>
          <li>
            <Link href={`/blog`}>{t("blog")}</Link>
          </li>
          <li>
            <Link href={`/about`}>{t("about")}</Link>
          </li>
          <li className={styles.profile}>
            <ProfileDropdown />
          </li>
          <li>
            <Link className={styles.login} href={`/login`}>
              {t("login")}
            </Link>
          </li>
          <li>
            <ChangeLang />
          </li>
        </ul>
      </nav>
    </header>
  );
}
