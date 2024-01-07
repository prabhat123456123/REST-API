const dotenv = require("dotenv");
dotenv.config();

const CONSTANTS = {
  host: "localhost",
  user:
    process.env.NODE_ENV === "DEV"
      ? "root"
      : process.env.NODE_ENV === "TEST"
      ? "test@123"
      : "prod@123",
  password:
    process.env.NODE_ENV === "DEV"
      ? ""
      : process.env.NODE_ENV === "TEST"
      ? "@3#45"
      : "prod@123",
  database:
    process.env.NODE_ENV === "DEV" || process.env.NODE_ENV === "TEST"
      ? "rest_api"
      : "rest_api",
 
  APPPORT:
    process.env.NODE_ENV === "DEV" || process.env.NODE_ENV === "TEST"
      ? 7111
      : 7111,
 
  SECRET: process.env.SECRET,
  AUTHKEY: process.env.AUTHKEY,
  BASEURL:
    process.env.NODE_ENV === "DEV"
      ? "http://localhost:7111"
      : "http://test.rest_api.com",

  
};

module.exports = CONSTANTS;
