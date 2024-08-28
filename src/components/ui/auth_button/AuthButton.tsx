import styles from "./AuthButton.module.scss";

export default function AuthButton({ isLoading, label }: any) {
  return (
    <button className={styles.btn} type="submit">
      {isLoading ? "Sending..." : label}
    </button>
  );
}
