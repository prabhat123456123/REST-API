const securityDefs = {
  securityDefinitions: {
    api_key: {
      type: "apiKey",
      name: "token",
      in: "header",
    },
    // petstore_auth: {
    //   type: "oauth2",
    //   authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
    //   flow: "implicit",
    //   scopes: {
    //     "read:pets": "read your pets",
    //     "write:pets": "modify pets in your account",
    //   },
    // },
  },
};

module.exports = { securityDefs };
