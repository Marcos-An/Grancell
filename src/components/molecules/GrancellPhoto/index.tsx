import styles from "./grancell.module.scss"

export default function GranellPhoto() {
  return (
    <div className={styles.grancell}>
      <div className={styles.grancellImage} />
      <div className={styles.backContainer} />
    </div>
  );
}
