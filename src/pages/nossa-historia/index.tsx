import styles from "./history.module.scss";
import GrancellPhoto from "../../components/molecules/GrancellPhoto";
import Title from "../../components/atoms/Title";
import Text from "../../components/atoms/Text";
import BannerTitle from '../../components/molecules/bannerTitle'

export default function History() {
  return (
    <div>
      <BannerTitle title="CONHEÇA NOSSA EMPRESA" />
      <div className={styles.aboutGrancell}>
        <GrancellPhoto />
        <div className={styles.textAboutGrancell}>
          <Title
            title=" COM O MELHOR ATENDIMENTO DO ABCD"
            color="black"
            size='large'
          />
          <Text
            size="large"
            text="A Grancell atua no segmento de assistência técnica em telefonia celular e informática, há mais de 13 anos atendendo toda a região do abcd."
          />
          <Text
            size="large"
            text="Temos serviço de coleta, consertamos no menor espaço de tempo possível, com a mais alta qualidade e profissionalismo."
          />

          <Text
            size="large"
            text="capacitados, frequentemente reciclados pelos próprios fabricantes, tal fator garante a conduta adequada para cada tipo de conserto."
          />
        </div>
      </div>
      <div className={styles.container} >
        <Text
          size="large"
          text="Somos credenciados vivo, prestamos assistência técnica especializada a todas as marcas no segmento de celulares. No segmento de informática atendemos notebooks, cpus, monitores e mais"
        />
      </div>
      <div className={styles.extended} >
        <Title
          color="black"
          title="GARANTIAS ESTENDIDAS"
        />
        <div className={styles.item}>
          <Title
            size="small"
            title="GARANTECH"
          />
          <Text
            size="large"
            text="(garantia CASA BAHIA, C&A e Pernambucanas)"
          />
        </div>
        <div className={styles.item}>
          <Title
            size="small"
            title="MAPFRE"
          />
          <Text
            size="large"
            text="(garantia  FAST SHOP)"
          />
        </div>
        <div className={styles.item}>
          <Title
            size="small"
            title="LUIZA SEG"
          />
          <Text
            size="large"
            text="(garantia MAGAZINE LUIZA)"
          />
        </div>
        <div className={styles.item}>
          <Title
            size="small"
            title="CHUBB DO BRASIL"
          />
          <Text
            size="large"
            text="(garantia COOP)"
          />
        </div>
        <div className={styles.item}>
          <Title
            size="small"
            title="CARDIF"
          />
          <Text
            size="large"
            text="(garantia Carrefour)"
          />
        </div>
        <div className={styles.item}>
          <Title
            size="small"
            title="TOKIO MARINE"
          />
        </div>
      </div>
    </div>
  );
}
