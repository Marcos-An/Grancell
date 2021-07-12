import styles from "./headerMenu.module.scss";
import MenuItem from "../../atoms/MenuItem";
import { useContext, useEffect } from "react";
import { MenuContext } from "../../../Contexts/MenuContext";
import { useRouter } from 'next/router'


export default function HeaderMenu() {
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
      <ul className={styles.headerMenu}>
        <MenuItem
          item="Inicio"
          url="/"
          activeItem={activeItem}
        />
        <MenuItem
          item="Nossa história"
          url="/nossa-historia"
          activeItem={activeItem}
        />
        <MenuItem
          item="Serviços"
          url="/servicos"
          activeItem={activeItem}
        />
        <MenuItem
          item="Pré orçamento"
          url="/pre-orcamento"
          activeItem={activeItem}
        />
        <MenuItem
          item="Contato"
          url="/contato"
          activeItem={activeItem}
        />
      </ul>
    </nav>
  );
}
