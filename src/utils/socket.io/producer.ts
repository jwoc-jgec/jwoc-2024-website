// import amqp from "amqplib";
// import { MailOptions } from "nodemailer/lib/sendmail-transport";

// const producer = async (emailData: MailOptions) => {
//     const connection = await amqp.connect('amqp://localhost');
//     const channel = await connection.createChannel();
//     const queue = 'email_queue';

//     await channel.assertQueue(queue, { durable: true });

//     // Add email data to the queue
//     channel.sendToQueue(queue, Buffer.from(JSON.stringify(emailData)));

//     await channel.close();
//     await connection.close();
// }

// export default producer;