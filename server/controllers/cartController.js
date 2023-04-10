const { Sequelize } = require('sequelize')
const cart = require('../models/Cart')
const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

const getItems = async (req, res) => {
    let items;
    try{
        cart.findAll({
            attributes: ['Customer', 'ItemName', 'Price', 'Quantity'],
            where: {
                Customer: req.params.name
            }
        }).then(result => {
            res.send(result)
            // console.log('Result from server:', result.rows)
            // console.log(cartInfo);
            // if(cartInfo != 0){
            //     return res.status(200).json({ cartInfo, message: "Not empty" })
            // }
            // else{
            //     return res.status(200).json({ message: "Empty" })
            // }
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.getItems = getItems;