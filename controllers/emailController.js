const nodemailer = require("nodemailer");
const welc = require("../emailtemplates/welcome");

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0ab20a3af199db",
        pass: "034a23a625c45f",
    },
});

const welcome = (toEmail) => ({
    from: "techstore@techstore.com",
    to: toEmail,
    subject: "Welcome to tech Store",
    html: welc,
});
const sendEmail = async (email) => {
    const info = await transport.sendMail(email);
    //console.log(info.messageId)
    return info;
};
const welcomeEmail = async (req, res) => {
    try {
        const email = await sendEmail(welcome);
        return res.send(email);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const forgotPasswordEmail = (toEmail, url) => ({
    from: "techstore@techstore.com",
    to: toEmail,
    subject: "Cambiar Contraseña",
    html: `
    <h1>Cambiar Contraseña</h1>
    <p>Para cambiar la contraseña presione el siguiente link <a href=${url}>${url}</a></p>
    `,
});

module.exports = { sendEmail, welcomeEmail, welcome, forgotPasswordEmail };
