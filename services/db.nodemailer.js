var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
  auth: {
    api_user: 'ganeshweb63@gmail.com',
    api_key: 'ganesh'
  }
}

var client = nodemailer.createTransport(sgTransport(options));

var email = {
  from: 'ganeshweb63@gmail.com',
  to: 'ganeshgunstar49363@gmail.com',
  subject: 'Hello',
  text: 'Hello world',
  html: '<b>Hello world</b>'
};

client.sendMail(email, function(err, info){
    if (err ){
      console.log(error);
    }
    else {
      console.log('Message sent: ' + info.response);
    }
});
exports.connectToDB(client);