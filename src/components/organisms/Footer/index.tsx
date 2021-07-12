import styles from "./footer.module.scss";
import Icon from "../../atoms/Icon"
import Text from "../../atoms/Text"
import FooterMenu from "../../molecules/FooterMenu";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contactContainer}>
        <img src="/logo.png" alt="logo" />
        <div className={styles.contactBox}>
          <Icon iconName="phone" color="#FC4F08" />
          <Text text="(11) 4994-0860" color="white" />
        </div>
        <div className={styles.contactBox}>
          <Icon iconName="mail" color="#FC4F08" />
          <Text text="grancell@grancell.com.br" color="white" />
        </div>
      </div>
      <div className={styles.menuContainer}>
        <h2>Menu</h2>
        <FooterMenu />
      </div>

      <div className={styles.address}>
        <h2>Endereço</h2>
        <Text
          text="Rua Coronel Fernando Prestes, 957
                C.E.P. 09020-110 Santo André-S.P"
          color="white" />
      </div>
    </div>
  );
}
