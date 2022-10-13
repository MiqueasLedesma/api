const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0ab20a3af199db",
        pass: "034a23a625c45f"
    }
});

const welcome = (toEmail) => ({
    from: "techstore@techstore.com",
    to: toEmail,
    subject: "Welcome to tech Store",
    html: `
    <h1>Welcome</h1>
    <p>Welcome to tech Store ${toEmail}</p>
    `
});
const sendEmail = async (email) => {
    const info = await transport.sendMail(email)
    //console.log(info.messageId)
    return info
}
const welcomeEmail = async(req,res) => {
    try {
        const email = await sendEmail(welcome)
        return res.send(email)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = { sendEmail,welcomeEmail,welcome };