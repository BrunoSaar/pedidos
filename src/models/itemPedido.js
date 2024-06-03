const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const ItemPedido = sequelize.define('ItemPedido', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigoPedido: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Pedidos',
            key: 'codigoPedido'
        }
    },
    produto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.NUMERIC,
        allowNull: false
    }
});

module.exports = ItemPedido;