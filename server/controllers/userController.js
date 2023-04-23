const { Sequelize } = require('sequelize')
const bcrypt = require('bcrypt')

const saltrounds = 10;

const user = require('../models/User')
const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

const getById = async (req, res) => {
    // console.log(req.body.aadhar);
    try {
        user.findAll({
            attributes: [ 'Email', 'Password'],
            where: {
                Email: req.body.email,
            }
        }).then(function(custInfo){
            if(custInfo != 0 && bcrypt.compareSync(req.body.password, custInfo[0].dataValues.Password)){
                // console.log(custInfo[0].dataValues.Password);
                return res.status(200).json({ custInfo, message: "found" })
                // res.send(custInfo.rows)
            }
            else {
                return res.status(200).json({})
            }
        })
    }
    catch(err) {
        console.log(err);
    }
    // if(getUser.length == 0) {
    //     return res.status(404).json({ message : "No users found" })
    // }
    // return res.status(200).json({ getUser })
}

const addUser = async (req, res) => {
    const salt = bcrypt.genSaltSync(saltrounds);
    const hash = bcrypt.hashSync(req.body.password, salt)
    await sequelize.sync()
    let newUser;
    try {
        newUser = user.create({
            Name: req.body.name,
            Email: req.body.email,
            Password: hash,
            Contact_No: req.body.contact,
            City: req.body.city
        }, { fields: ['Name', 'Email', 'Password', 'Contact_No', 'City']})
        // await newUser.save();
    }
    catch(err) {
        console.log(err);
    }
    if(!newUser){
        return res.status(500).json({ message: "Can't add that shit"})
    }
    else{
        return res.status(201).json({ newUser });
    }
}

const updateUser = async(req, res) => {
    let updatedUser;
    const id = req.params.id;
    try {
        updatedUser = await user.update({
            Name: req.body.name,
            Contact_No: req.body.contact,
            Age: req.body.age,
            City: req.body.city
        }, {
            where: {
                Aadhar_No: req.body.aadhar
            }
        })
        // await updatedUser.save();
    }
    catch(err) {
        console.log(err);
    }
    if(!updatedUser) {
        return res.status(404).json({ message: "Can't update that shit"})
    }
    else {
        return res.status(200).json({ updatedUser });
    }
}

const deleteUser = async(req, res) => {
    let deletedUser;
    try {
        deletedUser = await user.destroy({
            where: {
                Aadhar_No: req.body.aadhar
            }
        })
    }
    catch(err) {
        console.log(err);
    }
    if(!deletedUser) {
        return res.status(404).json({ message: "Unable to find that user" });
    }
    else {
        return res.status(200).json({ message: "Succesfully deleted" });
    }
}

exports.getById = getById;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;