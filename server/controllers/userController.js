const { Sequelize } = require('sequelize')

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
    let getUser;
    // console.log(req.body.aadhar);
    try {
        getUser = user.findAll({
            where: {
                Aadhar_No: req.body.aadhar,
                Name: req.body.name
            }
        })
    }
    catch(err) {
        console.log(err);
    }
    if(!getUser) {
        return res.status(404).json({ message : "No products found" })
    }
    return res.status(200).json({ getUser })
}

const addUser = async (req, res) => {
    await sequelize.sync()
    let newUser;
    try {
        newUser = user.create({
            Aadhar_No: req.body.aadhar,
            Name: req.body.name,
            Contact_No: req.body.contact,
            Age: req.body.age,
            City: req.body.city
        })
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