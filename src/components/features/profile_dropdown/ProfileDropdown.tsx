"use client";

//* Imports
import styles from "./ProfileDropdown.module.scss";
import Image from "next/image";
import { useState } from "react";
//* Function
export default function ProfileDropdown() {
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
        <li>Profile</li>
        <li>Dashboard</li>
        <li>Logout</li>
      </ul>
    </button>
  );
}
