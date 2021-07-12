import styles from './text.module.scss';

export default function Icon({ text, size = "medium", color = "black" }) {
  return <p className={styles[`text-${size}-${color}`]}>{text}</p>
}
