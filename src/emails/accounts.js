const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mailofficialvortex@gmail.com',
        subject: 'Thanks for choosing us to be your Task Manager!',
        text: `Welcome to the app, ${name}. Let us know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mailofficialvortex@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Hope we can serve you in the future.`
    })
}

sgMail.send({
    to: 'bhattacharyasaptarshi2001@gmail.com',
    from: 'mailofficialvortex@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye,. Hope we can serve you in the future.`
})

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}