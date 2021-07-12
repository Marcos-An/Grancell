import styles from './iconCard.module.scss';
import Icon from '../../atoms/Icon'

export default function IconCard({ iconName }) {
  return (
    <div className={styles.iconCard}>
      <Icon iconName={iconName} size="34" color="white" />
      <div className={styles.iconDetail} />
    </div>
  )
}
