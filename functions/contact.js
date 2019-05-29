const nodemailer = require('nodemailer')
require('dotenv').config()

exports.handler = function (event, context, callback) {
  // server-side functionality
  const emailProviderDetails = {
    service: process.env.emailhost,
    username: process.env.emailusername,
    password: process.env.emailpassword
  }

  const body = JSON.parse(event.body)

  const emailInfo = body.emailInfo

  sendMail(emailInfo, emailProviderDetails)

  callback(null, {
    statusCode: 200,
    body: 'Message sent'
  })
}

const sendMail = (emailInfo, emailProvider) => {
  const transporter = nodemailer.createTransport({
    host: emailProvider.service,
    port: 465,
    auth: {
      user: emailProvider.username,
      pass: emailProvider.password
    },
    tls: {
      rejectUnauthorized: false
    }
  })
  setTimeout(() => {
    transporter.sendMail({
      from: emailInfo.email,
      // to: ''
      to: `${emailProvider.username}`,
      subject: `${emailInfo.subject}`,
      html: `<h2>The following message has been received through the Contact us form on www.cstf.com</h2>
      <p style="color:blue; margin-bottom: 10px;">Enquiry from: ${emailInfo.name}</p>
      <p style="margin-bottom: 10px;"><b>Email:</b> ${emailInfo.email}</p>
      <p style="margin-bottom: 10px;"><b>Phone:</b> ${emailInfo.phone}</p>
      <p style="margin-bottom: 10px;"><b>Message:</b> ${emailInfo.message}</p>`
    })
  }, 100)
}
