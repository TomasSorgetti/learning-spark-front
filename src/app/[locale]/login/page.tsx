"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
// import { loginUser } from "../../lib/features/user/userSlice";
// import type { AppDispatch } from "../../lib/store";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (event: any) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    // try {
    //   await dispatch(loginUser(data)).then((response: any) => {
    //     if (response.payload.accessToken) {
    //       setData({ email: "", password: "" });
    //       setIsLoading(false);
    //       router.push("/");
    //     } else {
    //       throw new Error("Login failed");
    //     }
    //   });
    // } catch (error) {
    //   setIsLoading(false);
    // }
  };
  // const handleGoogleLogin = async () => {
  //   try {
  //     const response = await (
  //       await fetch("http://localhost:8000/api/auth/google")
  //     ).json();
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <main className={styles.main}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="johndoe@mail.com"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="*******"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <button type="submit">{isLoading ? "Sending..." : "Sign in"}</button>
      </form>
      {/* <hr />
      <button onClick={handleGoogleLogin} type="button">
        Continue with Google
      </button> */}
    </main>
  );
}
