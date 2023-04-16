const { Sequelize } = require('sequelize')
const product = require('../models/Products')
const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

const getInfo = async (req, res) => {
    try {
        product.findAll({
            attributes: ['Name', 'Price', 'Description', 'Image'],
            where: {
                Name: req.params.name
            }
        }).then(result => {
            console.log(result);
            res.send(result)
        })
    }
    catch(err) {
        console.log(err);
    }
}

exports.getInfo = getInfo