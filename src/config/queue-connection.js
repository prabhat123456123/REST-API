const amqp = require("amqplib");

var channel, connection; //global variables
async function connectQueue(queueName) {
  try {
    connection = await amqp.connect("amqp://localhost:5672");
    console.log("lol");
    channel = await connection.createChannel();

    await channel.assertQueue(queueName);
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectQueue;
