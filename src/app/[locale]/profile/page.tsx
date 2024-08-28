"use client";

import styles from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const { isAuthenticated, isAdmin, user } = useSelector(
    (state: any) => state.auth
  );
  return (
    <main className={styles.profile_container}>
      <h1>Profile Page</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please login</p>
      )}
    </main>
  );
}
