'use strict'

const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const app = express()
const emailData = require('../content/sitedata.json')

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 10000 }))

app.use(express.json())

const emailProviderDetails = {
  service: process.env.emailhost,
  username: process.env.emailusername,
  password: process.env.emailpassword
}

app.post('/', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = req.body.emailProvider
  const attachment = req.body.emailInfo.file
  sendGetEstimateMail(emailInfo, emailProvider, attachment)
  res.status(200).json({ 'message': 'Your mail was sent successfully' })
})

app.post('/contactUs', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = emailProviderDetails
  sendContactUsMail(emailInfo, emailProvider)
  res.status(200).json({ 'message': 'Your mail was sent successfully' })
})

app.post('/getEstimate', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = emailProviderDetails
  sendGetEstimateMail(emailInfo, emailProvider)
  res.status(200).json({ 'message': 'Your mail was sent successfully' })
})

module.exports = {
  path: '/api/nodemailer',
  handler: app
}

const sendContactUsMail = (emailInfo, emailProvider) => {
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
      cc: `${emailData.cc}`,
      to: `${emailData.email}`,
      subject: `${emailInfo.subject}`,
      html: `<h2>New Contact us form submission on CSTF</h2>
        <table style="border: 4px solid #555555; padding: 8px;">
          <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Enquiry from: </b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.name}</td></tr>
          <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Email:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.email}</td></tr>
          <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Phone:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.phone}</td></tr>
          <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Message:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.message}</td></tr>
        </table>`
    })
  }, 100)
}

const sendGetEstimateMail = (emailInfo, emailProvider) => {
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
    const attachments = []
    if (emailInfo.architecturalFile !== '') {
      const file1 = emailInfo.architecturalFile
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
    }

    transporter.sendMail({
      from: emailInfo.email,
      cc: `${emailData.cc}`,
      to: `${emailData.email}`,
      subject: 'New estimate request form from www.cstf.com.au',
      html: `<h2>The following request for an estimate has been received through www.cstf.com.au</h2>
      <table style="border: 4px solid #555555; padding: 8px;">
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Enquiry from: </b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.name}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Email:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.email}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Company:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.company}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Project Type:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.projectType}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Profession:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.profession}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Type:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.type}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Detail:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.detail}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Detail Other:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.detailOther}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>DA Approval:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.DAApproval}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Reason if no DA approval:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.noDAApproval}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Architectural plans:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.architecturalPlans}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Engineering plans:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.engineeringPlans}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Structural plans designed specifically for light gauge steel application:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.structuralPlans}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Quote for:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.quoteFor}</td></tr>
        <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px;"><b>Start of project:</b> </td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.startProject}</td></tr>
      </table>
        `,
      attachments: attachments
    })
  }, 100)
}
