const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    "project",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

const product = sequelize.define(
    "Product",
    {
        P_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

module.exports = product;