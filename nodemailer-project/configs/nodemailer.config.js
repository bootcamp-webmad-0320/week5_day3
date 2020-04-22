const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'tuemail@tuemail.com',
        pass: 'tucontraseña'
    }
})

module.exports = transporter