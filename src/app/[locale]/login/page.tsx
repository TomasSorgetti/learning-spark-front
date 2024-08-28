"use client";

//* Imports
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { fetchLogin } from "../../../lib/features/auth/authSlice";
import InputForm from "../../../components/ui/input/InputForm";
import GoogleButton from "@/components/ui/google_button/GoogleButton";
import { Link } from "@/navigation";
import Image from "next/image";
import AuthButton from "@/components/ui/auth_button/AuthButton";

//* Component Login
export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  //* States
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setData({ ...data, email: email, remember: true });
    }
  }, []);
  useEffect(() => {
    if (data.remember && data.email.length > 0) {
      localStorage.setItem("email", data.email);
    } else {
      localStorage.removeItem("email");
    }
  }, [data.remember, data.email]);

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
          setData({ email: "", password: "", remember: false });
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
  const handleCheck = (event: any) => {
    setData({ ...data, remember: !data.remember });
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
            <h2>Sign in</h2>
            <div className={styles.error_cont}>{error && <p>{error}</p>}</div>
            <GoogleButton handleGoogleLogin={handleGoogleLogin} />
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
            <div className={styles.remember}>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                checked={data.remember}
                onChange={handleCheck}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <AuthButton isLoading={isLoading} label="Sign in" />
            <p className={styles.link}>
              Don’t have an account? <Link href={"/register"}>Register</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
