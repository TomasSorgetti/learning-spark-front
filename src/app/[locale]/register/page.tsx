"use client";

//* Imports
import styles from "./page.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputForm from "../../../components/ui/input/InputForm";
import GoogleButton from "@/components/ui/google_button/GoogleButton";
import { Link } from "@/navigation";
import Image from "next/image";
import AuthButton from "@/components/ui/auth_button/AuthButton";

//* Component Login
export default function LoginPage() {
  //* States
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
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
    } catch (error) {
      setIsLoading(false);
    }
  };

  //* Handler Google
  const handleGoogleLogin = async () => {
    // try {
    //   const response = await (
    //     await fetch("http://localhost:8000/api/auth/google")
    //   ).json();
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  //* Render
  return (
    <main className={styles.login_cont}>
      <div className={styles.wrapper}>
        <div className={styles.logo_cont}>
          <Image
            src="/images/white_logo.svg"
            alt="logo"
            width={480}
            height={151}
          />
          <h1>Sign in or create an account</h1>
        </div>
        <div className={styles.form_container}>
          <div className={styles.decoration}>
            <Image
              src="/images/auth_decoration.png"
              alt="decoration form"
              width={698.67}
              height={803}
            />
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Register</h2>
            <GoogleButton handleGoogleLogin={handleGoogleLogin} />
            <InputForm
              label="Username:"
              id="username"
              type="text"
              placeholder="John Doe"
              handleChange={handleChange}
              value={data.username}
              required={false}
            />
            <InputForm
              label="Email:"
              id="email"
              type="email"
              placeholder="johndoe123@mail.com"
              handleChange={handleChange}
              value={data.email}
              required={false}
            />
            <InputForm
              label="Password:"
              id="password"
              type="password"
              placeholder="********"
              handleChange={handleChange}
              value={data.password}
              required={false}
            />
            <InputForm
              label="Confirm password:"
              id="confirm"
              type="password"
              placeholder="********"
              handleChange={handleChange}
              value={data.confirm}
              required={false}
            />
            <AuthButton isLoading={isLoading} label= "Create account"/>
            <p className={styles.link}>
              Allready have an account? <Link href={"/login"}>Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
