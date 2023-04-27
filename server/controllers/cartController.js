const { Sequelize } = require('sequelize')
const cart = require('../models/Cart')
const shopcart = require('../models/ShopCarts')
const subscription = require('../models/Subscriptions')
const { QueryTypes } = require('sequelize');

const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

const addItem = async (req, res) => {
    await sequelize.sync();
    // console.log(req.body.name);
    try {
        newItem = await cart.create({
            Customer: req.body.customer,
            ItemName: req.body.name,
            Price: req.body.price,
            Quantity: req.body.quantity
        }, {fields: ['Customer', 'ItemName', 'Price', 'Quantity']})
        
        const [results, metadata] = await sequelize.query("INSERT INTO shopcarts (cartid, shopsid) SELECT cart.id, subscriptions.sub_id FROM subscriptions JOIN cart ON cart.Customer = subscriptions.Customer");

        // let cartid = cart.findAll({
        //     attributes: ['id'],
        //     where: {
        //         Customer: req.bod.customer
        //     }
        // })
        // let shopid = subscription.findAll({
        //     attributes: ['id'],
        //     where: {
        //         Customer: req.body.customer
        //     }
        // })

    }
    catch(err) {
        console.log(err);
    }
    if(!newItem){
        return res.status(500).json({ message: "Invalid Item" })
    }
    else{
        return res.status(201).json({ newItem })
    }
}

const getShopQueue = async (req, res) => {
    const id = req.params.id
    try{
        const queue = await sequelize.query(`SELECT ItemName, Price, Quantity FROM Cart WHERE id IN (SELECT CartId FROM ShopCarts WHERE ShopsId = ${id})`, { type: QueryTypes.SELECT })
        res.send(queue)
    }
    catch(err){
        console.log(err);
    }
    //console.log(queue);
}

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

const placeOrder = async (req, res) => {
    try {
        cart.destroy({
            truncate: true,
            where: {
                Customer: req.params.name
            }
        })
    }
    catch(err) {
        console.log(err);
    }
}

exports.addItem = addItem;
exports.getItems = getItems;
exports.placeOrder = placeOrder;
exports.getShopQueue = getShopQueue;