const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Pedido = sequelize.define('Pedido', {
    codigoPedido: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigoCliente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Clientes',
            key: 'codigoCliente'
        }
    },
    valorTotal: {
        type: DataTypes.NUMERIC,
        allowNull: false
    }
});

module.exports = Pedido;