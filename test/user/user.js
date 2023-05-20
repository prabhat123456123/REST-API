const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require("../../app");
const fs = require("fs");
chai.use(chaiHttp);

describe("user", () => {
  describe("/save-user Test", () => {
    it("it should return successfull msg", (done) => {
      // Change details

      const data = {
        name: "test",
        email: "llll@gmail.com",
        phone: "656566",
        password: "123",
      };
      chai
        .request(app)
        .post("/user/save-user")

        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("status");

          done();
        });
    });
  });

  describe("/login Test", () => {
    it("it should return successfull msg", (done) => {
      // Change details

      const data = {
        email: "llll@gmail.com",
        password: "123",
      };
      chai
        .request(app)
        .post("/user/login")

        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("status");
          res.body.should.have.property("data").which.is.an("array");

          done();
        });
    });
  });
});
