module.exports = {
  //   openapi: "3.0.0",
  //   info: {
  //     title: "Aggricultural Project API",
  //     version: "1.0.0",
  //     description: "Your API description",
  //   },
  //   servers: [
  //     {
  //       url: "http://localhost:7111", // Replace with your API's base URL
  //       description: "Development Server",
  //     },
  //   ],
  swagger: "2.0",
  info: {
    description:
      "This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
    version: "1.0.6",
    title: "Swagger Petstore",
    termsOfService: "http://swagger.io/terms/",
    contact: {
      email: "apiteam@swagger.io",
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    servers: [
      {
        url: "http://localhost:7111", // Replace with your API's base URL
        description: "Development Server",
      },
    ],
  },
};
