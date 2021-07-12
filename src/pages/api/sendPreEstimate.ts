import { NowRequest, NowResponse } from "@vercel/node"
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SEND_API_KEY)


export default (request: NowRequest, response: NowResponse) => {
   
   const {name,phone,email, device, model, description  } = request.body.email;


   const message = `
      PRÉ ORÇAMENTO\r\n
      \r\n
      ------------------------------------\r\n
      \r\n
      Name: ${name}\r\n
      Telefone: ${phone}\r\n
      Email: ${email}\r\n
      Device: ${device}\r\n
      Model: ${model}\r\n
      Menssagem: ${description}\r\n
      \r\n
      ------------------------------------\r\n
      \r\n
      Este email foi enviado via formulário de pré orçamento em Grancell http://grancell.com.br
   `

   const data = {
      to: 'grancell@grancell.com.br',
      from: 'gerencia@grancell.com.br',
      subject: `PRÉ ORÇAMENTO PARA ${name}`,
      text: message,
      html: message.replace(/\r\n/g, '<br>')
   }

   mail.send(data)
  response.status(200).json({status: 'ok'})
}