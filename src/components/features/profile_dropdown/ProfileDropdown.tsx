"use client";

import { Link } from "@/navigation";
//* Imports
import styles from "./ProfileDropdown.module.scss";
import Image from "next/image";
import { useState } from "react";
//* Function
export default function ProfileDropdown({ isAdmin, isAuthenticated }: any) {
  const [dropdown, setDropdown] = useState(false);

  const handleChange = () => {
    setDropdown(!dropdown);
  };

  return (
    <button onClick={handleChange} className={styles.dropdown}>
      <Image
        src={"/images/icons/profile.svg"}
        alt="profile"
        width={40}
        height={40}
      />
      <ul className={`${styles.dropdown_menu} ${dropdown ? styles.show : ""}`}>
        {!isAuthenticated ? (
          <>
            <li>Sign in</li>
            <li>Sign up</li>
          </>
        ) : (
          <>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            {isAdmin && <li>Dashboard</li>}
            <li>Logout</li>
          </>
        )}
      </ul>
    </button>
  );
}
