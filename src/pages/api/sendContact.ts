import { NowRequest, NowResponse } from "@vercel/node"
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SEND_API_KEY)




export default (request: NowRequest, response: NowResponse) => {
   response.setHeader('Access-Control-Allow-Credentials', 'true')
  response.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // response.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

   const {name,phone,email, description  } = request.body.email;


   const message = `
      SOLICITAÇÃO DE CONTATO\r\n
      \r\n
      ------------------------------------\r\n
      \r\n
      Name: ${name}\r\n
      Telefone: ${phone}\r\n
      Email: ${email}\r\n
      Menssagem: ${description}\r\n
      \r\n
      ------------------------------------\r\n
      \r\n
      Este email foi enviado via formulário de contato em Grancell http://grancell.com.br
   `

   const data = {
      to: 'grancell@grancell.com.br',
      from: 'gerencia@grancell.com.br',
      subject: `CONTATO DO(A) ${name}`,
      text: message,
      html: message.replace(/\r\n/g, '<br>')
   }

   mail.send(data)
  response.status(200).json({status: 'ok'})
}