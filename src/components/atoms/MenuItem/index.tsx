import styles from "./menuItem.module.scss";
import Link from 'next/link'

export default function MenuItem({ item, url, activeItem, color = 'black' }) {
  const styleClass = () => {
    if (item === activeItem && color === 'black') {
      return styles.menuItemActiveHeader
    }
    if (item === activeItem && color === 'white') {
      return styles.menuItemActiveFooter
    }
    if (color === 'black') {
      return styles.menuItemHeader
    }
    if (color === 'white') {
      return styles.menuItemFooter
    }
  }

  return (
    <Link href={url}>
      <li
        className={styleClass()}
      >
        {item}
      </li>
    </Link>
  );
}
