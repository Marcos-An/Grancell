import styles from "./bannerTitle.module.scss";
import Title from '../../atoms/Title'

export default function bannerTitle({ title }) {
  return (
    <div className={styles.bannerTitle}>
      <Title title={title} size="small" />
    </div>
  );
}
