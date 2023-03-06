const { Sequelize, DataTypes } = requie('sequelize');

const sequelize = new Sequelize(
    'database', 'username', 'password', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const user = sequelize.define(
    "Customer",
    {
        Aadhaar_No: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        Name: DataTypes.STRING,
        Contact_No: DataTypes.INTEGER,
        Occupation: DataTypes.STRING,
        Age: DataTypes.INTEGER
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)