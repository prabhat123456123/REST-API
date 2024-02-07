const { swaggerDefinition } = require("./swaggerDefinition");
const { securityDefs } = require("./securityDefinition");
const { metaData } = require("./metaData");
const { petData } = require("./petApiDocs");
const { storeData } = require("./storeApiDocs");
const { userData } = require("./userApiDocs");
module.exports = {
  ...swaggerDefinition,
  paths: {
    ...petData,
    ...storeData,
    ...userData,
  },

  ...securityDefs,
  ...metaData,

  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
};
