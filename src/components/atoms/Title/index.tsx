import styles from './title.module.scss';

export default function Icon({ title, size = "medium", color = 'white' }) {
  return <h1 className={styles[`title-${size}-${color}`]}>{title}</h1>
}
