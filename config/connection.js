require('dotenv').config();
// import Packages
const Sequelize = require('sequelize');

//Create connection to the database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
      port: 3306,
    });

    // Export the module
module.exports = sequelize;
