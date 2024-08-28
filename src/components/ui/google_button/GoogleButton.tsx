import styles from "./GoogleButton.module.scss";
import Image from "next/image";

export default function GoogleButton({ handleGoogleLogin }: any) {
  return (
    <>
      <button
        className={styles.button}
        onClick={handleGoogleLogin}
        type="button"
      >
        <Image
          src={"/images/icons/google_icon.svg"}
          alt="google icon"
          width={42}
          height={42}
        />
        Continue with Google
      </button>
      <span className={styles.divider}></span>
    </>
  );
}
