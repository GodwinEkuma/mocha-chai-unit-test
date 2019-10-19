const Sequelize = require("sequelize");
const Model = Sequelize.Model;
class UserModel extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING
        }
      },
      {
        sequelize,
        modelName: "user"
      }
    );
  }
}

module.exports = UserModel;
