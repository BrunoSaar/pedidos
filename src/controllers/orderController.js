const express = require('express');
const { Pedido, ItemPedido, Cliente } = require('../models');
const router = express.Router();

router.get('/pedido/:id/total', async (req, res) => {
    const pedido = await Pedido.findByPk(req.params.id);
    res.json({ valorTotal: pedido.valorTotal });
});

router.get('/cliente/:id/quantidade-pedidos', async (req, res) => {
    const pedidos = await Pedido.findAll({ where: { codigoCliente: req.params.id } });
    res.json({ quantidade: pedidos.length });
});

router.get('/cliente/:id/pedidos', async (req, res) => {
    const pedidos = await Pedido.findAll({ where: { codigoCliente: req.params.id } });
    res.json(pedidos);
});

module.exports = router;