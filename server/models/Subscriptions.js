const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

const subscription = sequelize.define(
    "Subscriptions", 
    {
        Customer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        StoreName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

module.exports = subscription;