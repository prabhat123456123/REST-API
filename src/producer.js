const amqp = require("amqplib");
require("dotenv").config();

async function publishMessage(queue, message) {
  try {
    console.log(process.env.RABBITMQ_URL);
    // Create a connection
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();

    // Assert a queue
    await channel.assertQueue(queue, { durable: false });

    // Send a message to the queue
    channel.sendToQueue(queue, Buffer.from(message));

    console.log(`Message sent to ${queue}: ${message}`);

    // Close the connection
    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.error("Error publishing message:", error);
    throw error; // Rethrow the error for further handling
  }
}

// Example: Publish a message to the "hello" queue
publishMessage("hello", "Hello, RabbitMQ!");
