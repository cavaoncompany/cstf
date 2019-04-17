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
  const attachments = [body.emailInfo.architecturalFile, body.emailInfo.engineeringFile]

  sendMail(emailInfo, emailProviderDetails, attachments)

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
    const file1 = emailInfo.architecturalFile
    const attachments = []
    if (emailInfo.engineeringFile !== '') {
      const file2 = emailInfo.engineeringFile
      const buffer = Buffer.from(file1.split('base64,')[1], 'base64')
      attachments.push({ content: buffer, filename: emailInfo.architecturalPlan })
      const secondbuffer = Buffer.from(file2.split('base64')[1], 'base64')
      attachments.push({ content: secondbuffer, filename: emailInfo.engineeringPlan })
    } else {
      const buffer = Buffer.from(file1.split('base64,')[1], 'base64')
      attachments.push({ content: buffer, filename: emailInfo.architecturalPlan })
    }

    transporter.sendMail({
      from: emailInfo.email,
      // to: ''
      to: `${emailProvider.username}`,
      subject: 'New quote request form',
      html: `<h2>The following message has been received through the Contact us form on www.cavaon.com</h2>
      <p style="color:blue; margin-bottom: 10px;">Enquiry from: ${emailInfo.name}</p>
      <p style="margin-bottom: 10px;"><b>Email:</b> ${emailInfo.email}</p>
      <p style="margin-bottom: 10px;"><b>Company:</b> ${emailInfo.company}</p>
      <p style="margin-bottom: 10px;"><b>Project Type:</b> ${emailInfo.projectType}</p>
      <p style="margin-bottom: 10px;"><b>Profession:</b> ${emailInfo.profession}</p>
      <p style="margin-bottom: 10px;"><b>Type:</b> ${emailInfo.type}</p>
      <p style="margin-bottom: 10px;"><b>Detail:</b> ${emailInfo.detail}</p>
      <p style="margin-bottom: 10px;"><b>Detail Other:</b> ${emailInfo.detailOther}</p>
      <p style="margin-bottom: 10px;"><b>DA Approval:</b> ${emailInfo.DAApproval}</p>
      <p style="margin-bottom: 10px;"><b>Reason if no DA approval:</b> ${emailInfo.noDAApproval}</p>
      <p style="margin-bottom: 10px;"><b>Architectural plans:</b> ${emailInfo.architecturalPlans}</p>
      <p style="margin-bottom: 10px;"><b>Engineering plans:</b> ${emailInfo.engineeringPlans}</p>
      <p style="margin-bottom: 10px;"><b>Structural plans designed specifically for light gauge steel application:</b> ${emailInfo.structuralPlans}</p>
      <p style="margin-bottom: 10px;"><b>Quote for:</b> ${emailInfo.quoteFor}</p>
      <p style="margin-bottom: 10px;"><b>Start of project:</b> ${emailInfo.startProject}</p>
      `,
      attachments: attachments
    })
  }, 100)
}
