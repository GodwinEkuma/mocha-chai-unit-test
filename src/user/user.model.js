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
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
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
