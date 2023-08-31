const  {Sequelize}  = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "Hardcore9552", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {sequelize}
