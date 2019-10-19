const { UserModel } = require("../database");

class UserRepository {
  constructor() {
    this.user = UserModel;
    this.user.sync({ force: true });
  }

  async create(name, email) {
    return this.user.create({
      name,
      email
    });
  }

  async getUser(id) {
    return this.user.findOne({ id });
  }
}

module.exports = UserRepository;
