const express = require('express')
const { Sequelize } = require('sequelize');
const userRouter = require('./routes/userRoutes')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)

const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(4000)