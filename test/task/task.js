const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require("../../app");
const fs = require("fs");
chai.use(chaiHttp);

describe("Task List", () => {
  describe("/taks-list Test", () => {
    it("it should return successfull msg", (done) => {
      // Change details
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJsbGxsQGdtYWlsLmNvbSIsInBob25lIjoiNjU2NTY2IiwicGFzc3dvcmQiOiIkMmEkMDgkc044ck4yc2RRWHYxRTFpTm1jNWNhLmZ1WGdHeFFRLmJhb0ZLeWQ4dnNZOUpVZnljUDB5MUciLCJjcmVhdGVkX2F0IjoiMjAyMy0wNS0xOVQxOTo0MzoxNy4wMDBaIn1dLCJpYXQiOjE2ODQ1NzA0MTl9.zHUhsOuXfVz70DpJnfeP5xW-ENJeF-Pk0-3hMY7FWTQ";

      const data = {};
      chai
        .request(app)
        .get("/task/taks-list")
        .set("token", token)
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

  describe("/tasks-details/:id Test", () => {
    it("it should return successfull msg", (done) => {
      // Change details
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJsbGxsQGdtYWlsLmNvbSIsInBob25lIjoiNjU2NTY2IiwicGFzc3dvcmQiOiIkMmEkMDgkc044ck4yc2RRWHYxRTFpTm1jNWNhLmZ1WGdHeFFRLmJhb0ZLeWQ4dnNZOUpVZnljUDB5MUciLCJjcmVhdGVkX2F0IjoiMjAyMy0wNS0xOVQxOTo0MzoxNy4wMDBaIn1dLCJpYXQiOjE2ODQ1NzA0MTl9.zHUhsOuXfVz70DpJnfeP5xW-ENJeF-Pk0-3hMY7FWTQ";

      const data = {};
      chai
        .request(app)
        .get("/task/tasks-details/:id")
        .set("token", token)
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
  describe("/save-tasks Test", () => {
    it("it should return successfull msg", (done) => {
      // Change details
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJsbGxsQGdtYWlsLmNvbSIsInBob25lIjoiNjU2NTY2IiwicGFzc3dvcmQiOiIkMmEkMDgkc044ck4yc2RRWHYxRTFpTm1jNWNhLmZ1WGdHeFFRLmJhb0ZLeWQ4dnNZOUpVZnljUDB5MUciLCJjcmVhdGVkX2F0IjoiMjAyMy0wNS0xOVQxOTo0MzoxNy4wMDBaIn1dLCJpYXQiOjE2ODQ1NzA0MTl9.zHUhsOuXfVz70DpJnfeP5xW-ENJeF-Pk0-3hMY7FWTQ";

      const data = {
        title: "hokok",
        description: "hoko2222k",
        status: "pending",
      };
      chai
        .request(app)
        .post("/task/save-tasks")
        .set("token", token)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("status");

          done();
        });
    });
  });
  describe("/update-tasks/:id Test", () => {
    it("it should return successfull msg", (done) => {
      // Change details
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJsbGxsQGdtYWlsLmNvbSIsInBob25lIjoiNjU2NTY2IiwicGFzc3dvcmQiOiIkMmEkMDgkc044ck4yc2RRWHYxRTFpTm1jNWNhLmZ1WGdHeFFRLmJhb0ZLeWQ4dnNZOUpVZnljUDB5MUciLCJjcmVhdGVkX2F0IjoiMjAyMy0wNS0xOVQxOTo0MzoxNy4wMDBaIn1dLCJpYXQiOjE2ODQ1NzA0MTl9.zHUhsOuXfVz70DpJnfeP5xW-ENJeF-Pk0-3hMY7FWTQ";

      const data = {
        title: "lolol",
        description: "hoko2222k",
        status: "pending",
      };
      chai
        .request(app)
        .put("/task/update-tasks/:id")
        .set("token", token)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("status");

          done();
        });
    });
  });
  describe("/delete-tasks/:id Test", () => {
    it("it should return successfull msg", (done) => {
      // Change details
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJpZCI6MTUsIm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJsbGxsQGdtYWlsLmNvbSIsInBob25lIjoiNjU2NTY2IiwicGFzc3dvcmQiOiIkMmEkMDgkc044ck4yc2RRWHYxRTFpTm1jNWNhLmZ1WGdHeFFRLmJhb0ZLeWQ4dnNZOUpVZnljUDB5MUciLCJjcmVhdGVkX2F0IjoiMjAyMy0wNS0xOVQxOTo0MzoxNy4wMDBaIn1dLCJpYXQiOjE2ODQ1NzA0MTl9.zHUhsOuXfVz70DpJnfeP5xW-ENJeF-Pk0-3hMY7FWTQ";

      const data = {};
      chai
        .request(app)
        .delete("/task/delete-tasks/:id")
        .set("token", token)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("status");

          done();
        });
    });
  });
});
