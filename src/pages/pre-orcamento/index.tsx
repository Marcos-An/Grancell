import styles from "./pre.module.scss";
import Input from "../../components/atoms/Input"
import TextArea from "../../components/atoms/TextArea"
import Text from "../../components/atoms/Text";
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
  device: string,
  brand: string,
  model: string,
  description: string
}

export default function Pre() {
  const [email, setEmail] = useState<emailBody>({
    name: '',
    phone: '',
    email: '',
    device: '',
    brand: '',
    model: '',
    description: ''
  })

  const entryValidate = () => {
    if (
      email.name === '' ||
      email.phone === '' ||
      email.email === '' ||
      email.device === '' ||
      email.model === '' ||
      email.description === '') {
      return false
    }
    return true
  }

  const sendEmail = async (event) => {
    event.preventDefault()
    if (entryValidate()) {
      axios.post('/api/sendPreEstimate', { email: email })
      toast.success("Pré orçamento enviado, logo será respondido!", {
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
      <BannerTitle title="PRÉ ORÇAMENTO" />
      <div className={styles.preWrapper}>
        <div className={styles.genericalText}>
          <Text
            text="Descreva aqui seu produto e o defeito que o mesmo apresenta, sendo possível identificar a causa, lhe efetuamos um pré-orçamento (o qual será comprovado após avaliação técnica do produto)."
          />
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
          <div className={styles.twoInputs}>
            <Input
              value={email.device}
              id="device"
              onChange={changeInput}
              label="Aparelho"
              name="Aparelho"
              required
            />
            <Input
              value={email.brand}
              id="brand"
              onChange={changeInput}
              label="Marca"
              name="Marca"
            />
          </div>
          <Input
            value={email.model}
            id="model"
            onChange={changeInput}
            label="Modelo"
            name="Modelo"
            required
          />
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
