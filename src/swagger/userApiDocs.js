const userData = {
  "/user/createWithArray": {
    post: {
      tags: ["user"],
      summary: "Creates list of users with given input array",
      description: "",
      operationId: "createUsersWithArrayInput",
      consumes: ["application/json"],
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          in: "body",
          name: "body",
          description: "List of user object",
          required: true,
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/User",
            },
          },
        },
      ],
      responses: {
        default: {
          description: "successful operation",
        },
      },
    },
  },
  "/user/createWithList": {
    post: {
      tags: ["user"],
      summary: "Creates list of users with given input array",
      description: "",
      operationId: "createUsersWithListInput",
      consumes: ["application/json"],
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          in: "body",
          name: "body",
          description: "List of user object",
          required: true,
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/User",
            },
          },
        },
      ],
      responses: {
        default: {
          description: "successful operation",
        },
      },
    },
  },
  "/user/{username}": {
    get: {
      tags: ["user"],
      summary: "Get user by user name",
      description: "",
      operationId: "getUserByName",
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          name: "username",
          in: "path",
          description:
            "The name that needs to be fetched. Use user1 for testing. ",
          required: true,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          schema: {
            $ref: "#/definitions/User",
          },
        },
        400: {
          description: "Invalid username supplied",
        },
        404: {
          description: "User not found",
        },
      },
    },
    put: {
      tags: ["user"],
      summary: "Updated user",
      description: "This can only be done by the logged in user.",
      operationId: "updateUser",
      consumes: ["application/json"],
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          name: "username",
          in: "path",
          description: "name that need to be updated",
          required: true,
          type: "string",
        },
        {
          in: "body",
          name: "body",
          description: "Updated user object",
          required: true,
          schema: {
            $ref: "#/definitions/User",
          },
        },
      ],
      responses: {
        400: {
          description: "Invalid user supplied",
        },
        404: {
          description: "User not found",
        },
      },
    },
    delete: {
      tags: ["user"],
      summary: "Delete user",
      description: "This can only be done by the logged in user.",
      operationId: "deleteUser",
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          name: "username",
          in: "path",
          description: "The name that needs to be deleted",
          required: true,
          type: "string",
        },
      ],
      responses: {
        400: {
          description: "Invalid username supplied",
        },
        404: {
          description: "User not found",
        },
      },
    },
  },
  "/user/login": {
    get: {
      tags: ["user"],
      summary: "Logs user into the system",
      description: "",
      operationId: "loginUser",
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          name: "username",
          in: "query",
          description: "The user name for login",
          required: true,
          type: "string",
        },
        {
          name: "password",
          in: "query",
          description: "The password for login in clear text",
          required: true,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          headers: {
            "X-Expires-After": {
              type: "string",
              format: "date-time",
              description: "date in UTC when token expires",
            },
            "X-Rate-Limit": {
              type: "integer",
              format: "int32",
              description: "calls per hour allowed by the user",
            },
          },
          schema: {
            type: "string",
          },
        },
        400: {
          description: "Invalid username/password supplied",
        },
      },
    },
  },
  "/user/logout": {
    get: {
      tags: ["user"],
      summary: "Logs out current logged in user session",
      description: "",
      operationId: "logoutUser",
      produces: ["application/json", "application/xml"],
      parameters: [],
      responses: {
        default: {
          description: "successful operation",
        },
      },
    },
  },
  "/user/login": {
    post: {
      tags: ["user"],
      summary: "Create user",
      description: "This can only be done by the logged in user.",
      operationId: "createUser",
      consumes: ["application/json"],
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          in: "body",
          name: "body",
          description: "Created user object",
          required: true,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
        },
      },
    },
  },
};

module.exports = { userData };
