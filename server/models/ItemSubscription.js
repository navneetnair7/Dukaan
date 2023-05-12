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

const itemSubscribe = sequelize.define(
    "ItemSubscription",
    {
        ItemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Subscription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Customer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Store: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        Image: {
            type: DataTypes.STRING,
            // allowNull: true
        }
    }, {
        timestamps: false,
        freezeTableName: true
    }
)

module.exports = itemSubscribe