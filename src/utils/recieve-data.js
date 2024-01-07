async function recieveData(queueName, data) {
  channel.consume(queueName, (data) => {
    console.log(`${Buffer.from(data.content)}`);
    channel.ack(data);
  });

  // close the channel and connection
  await channel.close();
  await connection.close();
}

module.exports = recieveData;
