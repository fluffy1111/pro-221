const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    prot: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'maxwell.r.campbell@gmail.com',
        pass: 'aqsx mfdx lzld dhib',
    },
    secure: true,
});