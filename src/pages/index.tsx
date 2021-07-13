import GenericButton from "../components/atoms/GenericButton";
import TransparentButton from "../components/atoms/TransparentButton";
import { useRouter } from 'next/router'
import styles from "./home.module.scss";
import Card from "../components/molecules/Card"
import GrancellPhoto from "../components/molecules/GrancellPhoto";
import Title from "../components/atoms/Title";
import Text from "../components/atoms/Text";


export default function Home() {
  const router = useRouter()

  const reouterPush = (url) => {
    router.push(url)
  }

  return (
    <div>
      <div className={styles.firstSection}>
        <div className={styles.title}>
          <h1>HÁ MAIS DE 20 ANOS ATENDENDO</h1>
          <h1>TODA A REGIÃO DO ABCD</h1>
        </div>
        <div>
          <h3>CONSERTAMOS NO MENOR ESPAÇO DE TEMPO POSSÍVEL,</h3>
          <h3>COM A MAIS ALTA QUALIDADE E PROFISSIONALISMO.</h3>
        </div>
        <div className={styles.buttonsContainer}>
          <GenericButton
            onClick={() =>
              reouterPush('https://api.whatsapp.com/send?phone=5511940386567')
            }
            text="Chamar no WhatsApp"
            whatsApp
          />
          <TransparentButton onClick={() => reouterPush('/nossa-historia')} text="Conheça a empresa" />
        </div>
      </div>
      <div className={styles.cardsSection}>
        <Card
          iconName="smartphone"
          overTitle="Assistência técnica em"
          title="Celulares"
          text="Mais de 20 anos de experiência em conserto de celulares, especialista Apple."
          onClick={() => reouterPush('/servicos#celulares')}
        />
        <Card
          iconName="monitor"
          overTitle="Assistência técnica"
          title="Computadores"
          text="Atendemos todas as marcas e modelos, técnicos especializados"
          onClick={() => reouterPush('/servicos#computadores')}
        />
        <Card
          iconName="award"
          overTitle="Assistência técnica"
          title="Garantia Estendida"
          text="Prestamos serviço de garantia estendida para várias empresas."
          onClick={() => reouterPush('/servicos#garantias-extendidas')}
        />
      </div>
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
          <br />
          <br />
          <br />
          <div className={styles.readMore}>
            <GenericButton
              onClick={() => reouterPush('/nossa-historia')}
              text="Conheça mais nossa empresa"
            />
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <Title
          title=" NÓS PODEMOS RESOLVER OS PROBLEMAS"
          color="white"
          size='large'
        />
        <Title
          title="DO SEU APARELHO!"
          color="white"
          size='large'
        />
        <br />
        <br />
        <br />
        <GenericButton
          onClick={() => reouterPush('/contato')}
          text="Entre em contato e faça um orçamento"
          color="blue"
        />
      </div>
    </div>
  );
}
