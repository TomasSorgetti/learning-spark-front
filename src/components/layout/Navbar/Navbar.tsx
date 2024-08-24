"use client";

import { useTranslations } from "next-intl";
import ChangeLang from "../../features/changeLang/ChangeLang";
import { useLocale } from "next-intl";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { Link } from "@/navigation";
import ProfileDropdown from "../../features/profile_dropdown/ProfileDropdown";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { logoutState } from "@/lib/features/auth/authSlice";
import { useEffect } from "react";
import LoadingBar from "@/components/ui/loading_bar/LoadingBar";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isAdmin } = useAppSelector(
    (state: any) => state.auth
  );

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(logoutState());
  };

  return (
    <header className={styles.header}>
      {/* {
        isAdmin && <div className={styles.admin_menu}>
          <Link href="/admin" >Dashboard</Link>
        </div>
      } */}
      <LoadingBar />
      <nav className={styles.nav}>
        <Link href={`/`}>
          <Image
            src="/images/nav_logo.png"
            alt="logo"
            width={132}
            height={41}
            priority
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
            <ProfileDropdown
              isAdmin={isAdmin}
              isAuthenticated={isAuthenticated}
            />
          </li>
          <li>
            {isAuthenticated ? (
              <span onClick={handleLogout} className={styles.login}>
                Sign out
              </span>
            ) : (
              <Link className={styles.login} href={`/login`}>
                {t("login")}
              </Link>
            )}
          </li>
          <li>
            <ChangeLang />
          </li>
        </ul>
      </nav>
    </header>
  );
}
