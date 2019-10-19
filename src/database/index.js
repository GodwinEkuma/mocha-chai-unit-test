const Sequelize = require("sequelize");
require("dotenv").config();
const enviroment = process.env;
const UserModel = require("../user/user.model");

const sequelize = new Sequelize(
  enviroment.DB_NAME,
  enviroment.DB_USER,
  enviroment.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres"
  }
);

const models = {
  UserModel: UserModel.init(sequelize, Sequelize)
};

const db = {
  ...models,
  sequelize
};

module.exports = db;
