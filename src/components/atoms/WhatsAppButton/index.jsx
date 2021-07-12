import styles from "./whatsAppButton.module.scss";

export default function WhatsAppButton() {
  return (
    <a href="https://www.convertte.com.br/gerador-link-whatsapp/" target="_blank">
      <div className={styles.whatsAppButton}>
        <img src="whatsApp-icon.png" alt="whats"/>
      </div>
    </a>
  );
}
