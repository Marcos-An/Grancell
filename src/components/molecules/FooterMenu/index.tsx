import styles from "./footerMenu.module.scss";
import MenuItem from "../../atoms/MenuItem";
import { useContext, useEffect } from "react";
import { MenuContext } from "../../../Contexts/MenuContext";
import { useRouter } from 'next/router'

export default function FooterMenu() {
  const Menu = useContext(MenuContext);
  const router = useRouter();
  const { activeItem, changeActiveItem } = Menu;


  useEffect(() => {
    if (router.asPath === '/') {
      changeActiveItem("Inicio")
    }
    if (router.asPath === '/nossa-historia') {
      changeActiveItem("Nossa história")
    }
    if (router.asPath === '/servicos') {
      changeActiveItem("Serviços")
    }
    if (router.asPath === '/pre-orcamento') {
      changeActiveItem("Pré orçamento")
    }
    if (router.asPath === '/contato') {
      changeActiveItem("Contato")
    }
  }, [router.asPath])


  return (
    <nav>
      <ul className={styles.footerMenu}>
        <MenuItem
          item="Inicio"
          url="/"
          activeItem={activeItem}
          color='white'
        />
        <MenuItem
          item="Nossa história"
          url="/nossa-historia"
          activeItem={activeItem}
          color='white'
        />
        <MenuItem
          item="Serviços"
          url="/servicos"
          activeItem={activeItem}
          color='white'
        />
        <MenuItem
          item="Pré orçamento"
          url="/pre-orcamento"
          activeItem={activeItem}
          color='white'
        />
        <MenuItem
          item="Contato"
          url="/contato"
          activeItem={activeItem}
          color='white'
        />
      </ul>
    </nav>
  );
}
