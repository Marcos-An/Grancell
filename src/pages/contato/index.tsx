import styles from "./contact.module.scss";
import Input from "../../components/atoms/Input"
import TextArea from "../../components/atoms/TextArea"
import Title from "../../components/atoms/Title";
import Text from "../../components/atoms/Text";
import Icon from "../../components/atoms/Icon"
import BannerTitle from '../../components/molecules/bannerTitle'
import GenericButton from "../../components/atoms/GenericButton"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


interface emailBody {
  name: string,
  phone: string,
  email: string,
  description: string
}

export default function Contact() {
  const [email, setEmail] = useState<emailBody>({
    name: '',
    phone: '',
    email: '',
    description: ''
  })

  const entryValidate = () => {
    if (
      email.name === '' ||
      email.phone === '' ||
      email.email === '' ||
      email.description === '') {
      return false
    }
    return true
  }

  const sendEmail = async (event) => {
    event.preventDefault()
    if (entryValidate()) {
      axios.post('https://grancell-2f63j9ipg-marcos-an.vercel.app/api/sendContact', { email: email })
      toast.success("Email enviado, logo será respondido!", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    } else {
      toast.error("Ocorreram erros de validação. Por favor confira os dados e envie novamente!", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    }
  }

  const changeInput = (event) => {
    const { value, id } = event.target

    setEmail({ ...email, [id]: value })
  }


  return (
    <div>
      <BannerTitle title="ENTRE EM CONTATO" />
      <div className={styles.preWrapper}>
        <div className={styles.genericalText}>
          <Title title="Informações de contato" color="black" />
          <div className={styles.contactBox}>
            <Icon iconName="mail" color="#FC4F08" size="20" />
            <Text text="Rua Coronel Fernando Prestes, 957 C.E.P. 09020-110 Santo André-S.P" />
          </div>
          <div className={styles.contactBox}>
            <Icon iconName="mail" color="#FC4F08" size="20" />
            <a href="mailto:grancell@grancell.com.br">
              <Text text="grancell@grancell.com.br" />
            </a>
          </div>
          <div className={styles.contactBox}>
            <Icon iconName="phone" color="#FC4F08" size="20" />
            <Text text="(11) 4992-5597" />
          </div>
        </div>
        <form onSubmit={sendEmail} className={styles.formWrapper}>
          <Input
            value={email.name}
            id="name"
            onChange={changeInput}
            label="Nome completo"
            name="Nome completo"
            required
          />
          <div className={styles.twoInputs}>
            <Input
              value={email.phone}
              id="phone"
              onChange={changeInput}
              label="Telefone"
              name="Telefone"
              required
            />
            <Input
              value={email.email}
              id="email"
              onChange={changeInput}
              label="Email"
              name="Email"
              type="email"
              required
            />
          </div>
          <TextArea
            value={email.description}
            id="description"
            onChange={changeInput}
            label="Descrição"
            name="Descricao"
            required
          />
          <GenericButton onClick={() => { }} type={'submit'} text="Enviar" color="green" />
        </form>
        <ToastContainer style={{ fontSize: 13 }} autoClose={10000} />
      </div>
    </div>
  );
}
