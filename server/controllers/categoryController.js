const { Sequelize } = require('sequelize')

const product = require('../models/Products')
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

const getProducts = async(req, res) => {
    try {
        product.findAll({
            attributes: ['Name', 'Price', 'Image'],
            where: {
                Category: req.params.name
            }
        }).then(result => {
            // console.log(result);
            res.send(result)
        })
    }
    catch(err) {
        console.log(err);
    }
}

const getAllCategories = async(req, res) => {
    try {
        category.findAll({
            attributes: ['Name']
        }).then(result => {
            res.send(result)
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.getProducts = getProducts;
exports.getAllCategories = getAllCategories;