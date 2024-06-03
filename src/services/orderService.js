const { Cliente, Pedido, ItemPedido } = require('../models');

const saveOrder = async (order) => {
    const { codigoCliente, itens } = order;
    let valorTotal = itens.reduce((acc, item) => acc + (item.quantidade * item.preco), 0);

    const pedido = await Pedido.create({ codigoCliente, valorTotal });

    for (const item of itens) {
        await ItemPedido.create({
            codigoPedido: pedido.codigoPedido,
            produto: item.produto,
            quantidade: item.quantidade,
            preco: item.preco
        });
    }
};

module.exports = { saveOrder };