import styles from "./header.module.scss";
import HeaderMenu from "../../molecules/HeaderMenu";
import HeaderMenuMobile from "../../molecules/HeaderMenuMobile";
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div className={styles.header}>
      <Link href="/">
        <img src="/logo.png" alt="logo" />
      </Link>
      {width > 800 && <HeaderMenu />}
      {width <= 800 && <HeaderMenuMobile />}
    </div>
  );
}
