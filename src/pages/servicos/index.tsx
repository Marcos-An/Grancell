import styles from "./servicos.module.scss";
import Title from "../../components/atoms/Title";
import Text from "../../components/atoms/Text";
import BannerTitle from '../../components/molecules/bannerTitle'

export default function Servicos() {
  return (
    <div>
      <BannerTitle title="NOSSOS SERVIÇOS" />
      <a id="celulares" />
      <div className={styles.phones}>
        <div className={styles.image} />
        <div className={styles.container}>
          <Title title="Celulares" color="black" size="small" />

          <div className={styles.content}>
            <ul>
              <li>Consertos expressos efetuados em no máximo 1 hora</li>
              <li>Retrabalho de placa</li>
              <li>Desbloqueio</li>
              <li>Personalização de aparelho</li>
              <li>Venda de acessórios</li>
              <li>Bancadas protegidas contra eletricidade estática</li>
              <li>Técnico treinado nas fábricas</li>
              <li>Peças originais</li>
              <li>Loja física em Santo André- SP</li>
              <li>Motoboy</li>
              <li>Grande estoque de peças de todos os modelos</li>
            </ul>
            <ul>
              <li>Troca do conector de carga</li>
              <li>Troca da Lente</li>
              <li>Troca do Display</li>
              <li>Troca de Flex Cable</li>
              <li>Recuperação de aparelhos com infiltração de líquidos</li>
              <li>Troca da Carcaça completa</li>
              <li>Reparo na placa</li>
              <li>Troca de placa</li>
              <li>Atualização de software</li>
              <li>Troca do LCD</li>
              <li>Entre outros serviços</li>
            </ul>
          </div>
        </div>
      </div>
      <a id="computadores" />
      <div className={styles.computer}>
        <div className={styles.container}>
          <Title title="Cumputadores" color="black" size="small" />

          <div className={styles.content}>
            <ul>
              <li>Conheça alguns dos serviços prestados pela Grancell</li>
              <li>Conserto de placas danificadas</li>
              <li>Instalação e atualização do sistema operacional e drives</li>
              <li>Recuperação de dados</li>
              <li>Limpeza e lubrificação do cooler de refrigeração do notebook</li>
              <li>Reballing (troca), reflow (ressolda) de chip set de vídeo</li>
              <li>Reparo de flat-cables, fonte externa, dc-inverter, cooler, auto- falante teclado e dobradiça</li>
              <li>Reparo ou troca de conector de energia da placa mãe</li>
              <li>Upgrade de memória, disco rígido e processador</li>
              <li>Troca de tela-LCD,  LED e teclado</li>
              <li>Fonte e bateria</li>
            </ul>
          </div>
        </div>
        <div className={styles.image} />
      </div>
      <a id="garantias-extendidas" />
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
