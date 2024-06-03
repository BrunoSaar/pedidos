const amqp = require('amqplib');

const connectRabbitMQ = async () => {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue('orders', { durable: true });
        return channel;
    } catch (error) {
        console.error('Failed to connect to RabbitMQ:', error);
        process.exit(1);
    }
};

module.exports = connectRabbitMQ;