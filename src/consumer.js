const amqp = require('amqplib/callback_api');
const { saveOrder } = require('./services/orderService');

amqp.connect('amqp://localhost', (error0, connection) => {
    if (error0) throw error0;
    connection.createChannel((error1, channel) => {
        if (error1) throw error1;
        const queue = 'orders';
        channel.assertQueue(queue, { durable: true });
        channel.consume(queue, async (msg) => {
            const order = JSON.parse(msg.content.toString());
            await saveOrder(order);
            channel.ack(msg);
        });
    });
});