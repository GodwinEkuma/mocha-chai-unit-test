const chai = require("chai");
const sinon = require("sinon");
const UserRepository = require("./user.repository");
const expect = chai.expect;
const faker = require("faker");
const UserService = require("./user.service");

describe("UserService", function() {
  describe("create", function() {
    it("should create a new user", async function() {
      const stubValue = {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      };

      const userRepo = new UserRepository();
      const stub = sinon.stub(userRepo, "create").returns(stubValue);

      const userService = new UserService(userRepo);
      const user = await userService.create(stubValue.name, stubValue.email);

      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.name).to.equal(stubValue.name);
      expect(user.email).to.equal(stubValue.email);
      expect(user.createdAt).to.equal(stubValue.createdAt);
      expect(user.updatedAt).to.equal(stubValue.updatedAt);
    });
  });

  describe("getUser", function() {
    it("should return a user that matches the provided id", async function() {
      const stubValue = {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      };

      const userRepo = new UserRepository();
      const stub = sinon.stub(userRepo, "getUser").returns(stubValue);

      const userService = new UserService(userRepo);
      const user = await userService.getUser(stubValue.id);

      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.name).to.equal(stubValue.name);
      expect(user.email).to.equal(stubValue.email);
      expect(user.createdAt).to.equal(stubValue.createdAt);
      expect(user.updatedAt).to.equal(stubValue.updatedAt);
    });
  });
});
