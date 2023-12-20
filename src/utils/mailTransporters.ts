import nodemailer from "nodemailer";

// Main Email ID
const transport1 = nodemailer.createTransport({
    host: process.env.BASE_URL,
    port: 587,
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.MAIL_PASSWORD
    }
});

// Contact Email ID
const transport2 = nodemailer.createTransport({
    host: process.env.BASE_URL,
    port: 587,
    service: "gmail",
    auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_MAIL_PASSWORD
    }
});

// Verify Email ID
const transport3 = nodemailer.createTransport({
    host: process.env.BASE_URL,
    port: 587,
    service: "gmail",
    auth: {
        user: process.env.VERIFY_EMAIL,
        pass: process.env.VERIFY_MAIL_PASSWORD
    }
});


export { transport1, transport2, transport3 };