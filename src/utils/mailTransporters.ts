import nodemailer from "nodemailer";


export const transport = nodemailer.createTransport({
    host: process.env.BASE_URL,
    port: 587,
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.MAIL_PASSWORD
    }
});