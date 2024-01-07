const amqp = require("amqplib");
require("dotenv").config();

async function consumeMessages(queue) {
  try {
    // Create a connection
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();

    // Assert a queue
    await channel.assertQueue(queue, { durable: false });

    console.log(`Waiting for messages from ${queue}. To exit press CTRL+C`);

    // Consume messages from the queue
    channel.consume(
      queue,
      (message) => {
        if (message) {
          console.log(`Received message: ${message.content.toString()}`);

          // Acknowledge the message
          channel.ack(message);
        }
      },
      { noAck: false }
    ); // Set noAck to false for manual acknowledgment
  } catch (error) {
    console.error("Error consuming messages:", error);
    throw error; // Rethrow the error for further handling
  }
}

// Example: Consume messages from the "hello" queue
consumeMessages("hello");
