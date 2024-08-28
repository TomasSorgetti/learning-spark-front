import styles from "./Input.module.scss";

export default function InputForm({ ...props }: any) {
  const { label, handleChange, id, type, placeholder, value, error, required } =
    props;
  return (
    <div className={styles.input_cont}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
