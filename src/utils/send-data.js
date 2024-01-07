async function sendData(queueName, data) {
  // send data to queue
  await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));

  // close the channel and connection
  await channel.close();
  await connection.close();
}

module.exports = sendData;
