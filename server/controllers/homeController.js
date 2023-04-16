const { Sequelize } = require('sequelize')
const category = require('../models/Categories')
const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

const getCategories = async (req, res) => {
    let categories;
    try{
        category.findAll()
            .then(result => {
                res.send(result)
                // console.log(result);
            })
    }
    catch(err){
        console.log(err);
    }
}

exports.getCategories = getCategories;