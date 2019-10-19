const UserRepository = require("./user.repository");

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(name, email) {
    return this.userRepository.create(name, email);
  }

  getUser(id) {
    return this.userRepository.getUser(id);
  }
}

module.exports = UserService;
