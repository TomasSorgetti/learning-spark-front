"use client";

//* Imports
import styles from "./page.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { fetchLogin } from "../../../lib/features/auth/authSlice";

//* Component Login
export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  //* States
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //* Handlers
  const handleChange = (event: any) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(fetchLogin(data)).then((response: any) => {
        if (response.payload.status === 200) {
          localStorage.setItem(
            "accessToken",
            response.payload.payload.accessToken
          );
          setData({ email: "", password: "" });
          setIsLoading(false);
          router.push("/");
        } else if (response.payload.message) {
          setError(response.payload.message);
          setIsLoading(false);
        }
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  //* Handler Google
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

  //* Render
  return (
    <main className={styles.main}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
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
