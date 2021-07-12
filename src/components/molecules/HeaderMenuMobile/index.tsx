import styles from "./headerMenuMobile.module.scss";
import MenuItem from "../../atoms/MenuItem";
import Icon from "../../atoms/Icon"
import { useContext } from "react";
import { MenuContext } from "../../../Contexts/MenuContext";
import { useState } from 'react'

export default function HeaderMenuMobile() {
  const Menu = useContext(MenuContext);
  const { activeItem, changeActiveItem } = Menu;
  const [isActive, setIsActive] = useState(false)

  const redirectClose = (url) => {
    changeActiveItem(url);
    setIsActive(!isActive);
  }
  return (
    <>
      {isActive ?
        <div className={styles.menuMobileContainer}>
          <Icon iconName="x" color="white" onClick={() => setIsActive(!isActive)} />
          <ul className={styles.headerMenuMobile}>
            <MenuItem
              item="Inicio"
              url="/"
              activeItem={activeItem}
              color='white'
              onClick={() => redirectClose("Inicio")}
            />
            <MenuItem
              item="Nossa história"
              url="/nossa-historia"
              activeItem={activeItem}
              color='white'
              onClick={() => redirectClose("Nossa história")}
            />
            <MenuItem
              item="Serviços"
              url="/servicos"
              activeItem={activeItem}
              color='white'
              onClick={() => redirectClose("Serviços")}
            />
            <MenuItem
              item="Pré orçamento"
              url="/pre-orcamento"
              activeItem={activeItem}
              color='white'
              onClick={() => redirectClose("Pré orçamento")}
            />
            <MenuItem
              item="Contato"
              url="/contato"
              activeItem={activeItem}
              color='white'
              onClick={() => redirectClose("Contato")}
            />
          </ul>
        </div>
        : <Icon iconName="menu" onClick={() => setIsActive(!isActive)} />}
    </>

  );
}
