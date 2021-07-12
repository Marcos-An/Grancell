import styles from "./transparentButton.module.scss";

export default function TransparentButton({ onClick, text, whatsApp = null }) {
  return (
    <button className={styles.transparentButton} onClick={onClick}>
      <p style={{ paddingLeft: whatsApp ? 5 : 0 }}>{text}</p>
    </button>
  );
}
