import styles from "./whatsAppButton.module.scss";

export default function WhatsAppButton() {
  return (
    <a href="https://api.whatsapp.com/send?phone=5511940386567" target="_blank">
      <div className={styles.whatsAppButton}>
        <img src="whatsApp-icon.png" alt="whats"/>
      </div>
    </a>
  );
}
