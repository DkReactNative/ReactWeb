const mailgun = require('mailgun-js')({
  apiKey: '8fd676bd5341ede05545a8ecc7762c9b-2dfb0afe-80b482d5',
  domain: 'https://api.mailgun.net/v3/sandboxc698f27a4ea846ff96a187fe5cfa9db8.mailgun.org'
});

const sender = process.env.MAILGUN_EMAIL_SENDER;

exports.sendEmail = (recipient, message) => {
  const data = {
    from: `Mo Store!! <${sender}>`,
    to: recipient,
    subject: message.subject,
    text: message.text
  };

  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
};
