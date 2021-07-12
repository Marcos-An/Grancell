import styles from "./genericButton.module.scss";
import Image from "next/image";

export default function GenericButton({ onClick, text, whatsApp = null, color = "main", type = 'button' }) {
  return (
    <button className={styles[`genericButton-${color}`]} type={type} onClick={onClick}>
      {whatsApp && (
        <Image alt="whatsApp" src="/whatsApp-icon.png" width={35} height={35} />
      )}
      <p style={{ paddingLeft: whatsApp ? 5 : 0 }}>{text}</p>
    </button>
  );
}
