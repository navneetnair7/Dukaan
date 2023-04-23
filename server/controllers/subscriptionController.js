const { Sequelize } = require('sequelize')
const subscription = require('../models/Subscriptions')
const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

const subscribe = async (req, res) => {
    await sequelize.sync()
    try {
        newSubscription = subscription.create({
            Customer: req.params.name,
            StoreName: req.body.store,
            Address: req.body.address
        }, { fields: ['Customer', 'StoreName', 'Address']} ) 
    }
    catch(err) {
        console.log(err);
    }
    if(!newSubscription){
        return res.status(500).json({ message: "Invalid" })
    }
    else{
        return res.status(201).json({ newSubscription })
    }
}

const shopData = async (req, res) => {
    await sequelize.sync()
    try {
        subscription.findAll({
            attributes: ['StoreName', 'Address'],
            where: {
                Customer: req.params.name
            }
        }).then(function(shopInfo){
            if(shopInfo != 0){
                return res.send(shopInfo)
            }
        })
    }
    catch(err) {
        console.log(err);
    }
}

exports.subscribe = subscribe;
exports.shopData = shopData;