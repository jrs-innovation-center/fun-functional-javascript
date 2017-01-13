const nodemailer = require('nodemailer')
const username = process.env.GMAIL_USERNAME
const password = process.env.GMAIL_PASSWORD
const from = process.env.GMAIL_FROM
//module.exports =


// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(`smtps://${username}%40gmail.com:${password}@smtp.gmail.com`);

module.exports = (message) => {
  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: '"Tom Wilson" <twilson63@gmail.com>', // sender address
    to: 'tom@jackrussellsoftware.com', // list of receivers
    subject: 'RemindMe!', // Subject line
    text: message
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
}
