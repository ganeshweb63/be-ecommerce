var sendgridMail=require('@sendgrid/mail');

// var MAIL_API_KEY="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";
exports.sendgridMail.setApiKey(process.env.MAIL_API_KEY);

var message={
    to:'ganeshgunstar49363@gmail.com',
    from:'ganeshweb63@gmail.com',
    subject:'Hello from SendGrid',
    text:'Hello from SendGrid',
    html:'<h1>Hello from SendGrid</h1>'
};

sendgridMail.send(message).then(
    (res)=>console.log("Email sent...").catch(
        (err)=>console.log(err.message)
    )
)