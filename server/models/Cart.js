const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

const cart = sequelize.define(
    "Cart",{
        Customer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ItemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Price: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        Quantity: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true
    }
)

module.exports = cart;