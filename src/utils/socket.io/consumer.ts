// // Import necessary modules
// import amqp from 'amqplib';
// import { transport1, transport2, transport3 } from '../mailTransporters';

// // Function to process emails from the queue
// const consumer = async () => {
//   const connection = await amqp.connect('amqp://localhost');
//   const channel = await connection.createChannel();
//   const queue = 'email_queue';

//   await channel.assertQueue(queue, { durable: true });

//   channel.consume(queue, async (msg : any) => {
//     const emailData = JSON.parse(msg.content.toString());

//     transport3.sendMail(emailData, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//       } else {
//         console.log('Email sent:', info.response);
//       }
//     });

//     channel.ack(msg);
//   });
// }

// export default consumer;
