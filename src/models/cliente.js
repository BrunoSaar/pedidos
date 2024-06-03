const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Cliente = sequelize.define('Cliente', {
    codigoCliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Cliente;