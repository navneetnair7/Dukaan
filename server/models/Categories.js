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

const category = sequelize.define(
    "Category",{
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        NumberOfItems: {
            type: DataTypes.INTEGER
        }
    }
)

module.exports = category;