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

const shopcart = sequelize.define(
    "ShopCarts",
    {
        CartId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ShopsId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

module.exports = shopcart;