var nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async(req, res) => {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });
    var mailOptions = {
        from: '"Example Team" <xoxxworld@gmail.com>',
        to: "oluwateezzy03@gmail.com, user2@example.com",
        subject: "Nice Nodemailer test",
        text: "Hey there, it’s our first message sent with Nodemailer ",
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
        //   attachments: [
        //     {
        //       filename: 'mailtrap.png',
        //       path: __dirname + '/mailtrap.png',
        //       cid: 'uniq-mailtrap.png'
        //     }
        //   ]
    };
    let info = transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        res.json({ info });
    });
};

module.exports = sendMail;