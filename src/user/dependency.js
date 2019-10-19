const UserRepository = require("./user.repository");
const UserService = require("./user.service");

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
module.exports = {
  userRepository,
  userService
};
