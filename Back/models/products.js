const { DataTypes, Model, STRING } = require("sequelize");
const { sequelize } = require("../db/database");

class Products extends Model {}

Products.init(
  {
    nombre: DataTypes.STRING,
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    descripcion: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "products",
  }
);
module.exports = Products;
