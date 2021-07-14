import styles from "./genericButton.module.scss";
export default function GenericButton({ onClick, text, whatsApp = null, color = "main", type = 'button' }) {
  return (
    <button className={styles[`genericButton-${color}`]} type={type} onClick={onClick}>
      {whatsApp && (
        <img alt="whatsApp" src="/whatsApp-icon.png" />
      )}
      <p style={{ paddingLeft: whatsApp ? 5 : 0 }}>{text}</p>
    </button>
  );
}
