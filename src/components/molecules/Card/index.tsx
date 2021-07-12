import styles from "./card.module.scss";
import IconCard from "../IconCard";
import Text from '../../atoms/Text'
import Title from '../../atoms/Title'

export default function Card({ iconName, overTitle, title, text, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <IconCard iconName={iconName} />
      <Text text={overTitle} size="small" />
      <Title title={title} />
      <Text text={text} color="white" />
    </div>
  );
}
