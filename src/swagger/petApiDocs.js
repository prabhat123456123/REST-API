const petData = {
  "/pet/{petId}/uploadImage": {
    post: {
      tags: ["pet"],
      summary: "uploads an image",
      description: "",
      operationId: "uploadFile",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      parameters: [
        {
          name: "petId",
          in: "path",
          description: "ID of pet to update",
          required: true,
          type: "integer",
          format: "int64",
        },
        {
          name: "additionalMetadata",
          in: "formData",
          description: "Additional data to pass to server",
          required: false,
          type: "string",
        },
        {
          name: "file",
          in: "formData",
          description: "file to upload",
          required: false,
          type: "file",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          schema: {
            $ref: "#/definitions/ApiResponse",
          },
        },
      },
      security: [
        {
          petstore_auth: ["write:pets", "read:pets"],
        },
      ],
    },
  },
  "/pet": {
    post: {
      tags: ["pet"],
      summary: "Add a new pet to the store",
      description: "",
      operationId: "addPet",
      consumes: ["application/json", "application/xml"],
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          in: "body",
          name: "body",
          description: "Pet object that needs to be added to the store",
          required: true,
          schema: {
            $ref: "#/definitions/Pet",
          },
        },
      ],
      responses: {
        405: {
          description: "Invalid input",
        },
      },
      security: [
        {
          petstore_auth: ["write:pets", "read:pets"],
        },
      ],
    },
    put: {
      tags: ["pet"],
      summary: "Update an existing pet",
      description: "",
      operationId: "updatePet",
      consumes: ["application/json", "application/xml"],
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          in: "body",
          name: "body",
          description: "Pet object that needs to be added to the store",
          required: true,
          schema: {
            $ref: "#/definitions/Pet",
          },
        },
      ],
      responses: {
        400: {
          description: "Invalid ID supplied",
        },
        404: {
          description: "Pet not found",
        },
        405: {
          description: "Validation exception",
        },
      },
      security: [
        {
          petstore_auth: ["write:pets", "read:pets"],
        },
      ],
    },
  },
  "/pet/findByStatus": {
    get: {
      tags: ["pet"],
      summary: "Finds Pets by status",
      description:
        "Multiple status values can be provided with comma separated strings",
      operationId: "findPetsByStatus",
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          name: "status",
          in: "query",
          description: "Status values that need to be considered for filter",
          required: true,
          type: "array",
          items: {
            type: "string",
            enum: ["available", "pending", "sold"],
            default: "available",
          },
          collectionFormat: "multi",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/Pet",
            },
          },
        },
        400: {
          description: "Invalid status value",
        },
      },
      security: [
        {
          petstore_auth: ["write:pets", "read:pets"],
        },
      ],
    },
  },
  "/pet/findByTags": {
    get: {
      tags: ["pet"],
      summary: "Finds Pets by tags",
      description:
        "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
      operationId: "findPetsByTags",
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          name: "tags",
          in: "query",
          description: "Tags to filter by",
          required: true,
          type: "array",
          items: {
            type: "string",
          },
          collectionFormat: "multi",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          schema: {
            type: "array",
            items: {
              $ref: "#/definitions/Pet",
            },
          },
        },
        400: {
          description: "Invalid tag value",
        },
      },
      security: [
        {
          petstore_auth: ["write:pets", "read:pets"],
        },
      ],
      deprecated: true,
    },
  },
  "/pet/{petId}": {
    get: {
      tags: ["pet"],
      summary: "Find pet by ID",
      description: "Returns a single pet",
      operationId: "getPetById",
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          name: "petId",
          in: "path",
          description: "ID of pet to return",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          schema: {
            $ref: "#/definitions/Pet",
          },
        },
        400: {
          description: "Invalid ID supplied",
        },
        404: {
          description: "Pet not found",
        },
      },
      security: [
        {
          api_key: [],
        },
      ],
    },
    post: {
      tags: ["pet"],
      summary: "Updates a pet in the store with form data",
      description: "",
      operationId: "updatePetWithForm",
      consumes: ["application/x-www-form-urlencoded"],
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          name: "petId",
          in: "path",
          description: "ID of pet that needs to be updated",
          required: true,
          type: "integer",
          format: "int64",
        },
        {
          name: "name",
          in: "formData",
          description: "Updated name of the pet",
          required: false,
          type: "string",
        },
        {
          name: "status",
          in: "formData",
          description: "Updated status of the pet",
          required: false,
          type: "string",
        },
      ],
      responses: {
        405: {
          description: "Invalid input",
        },
      },
      security: [
        {
          petstore_auth: ["write:pets", "read:pets"],
        },
      ],
    },
    delete: {
      tags: ["pet"],
      summary: "Deletes a pet",
      description: "",
      operationId: "deletePet",
      produces: ["application/json", "application/xml"],
      parameters: [
        {
          name: "api_key",
          in: "header",
          required: false,
          type: "string",
        },
        {
          name: "petId",
          in: "path",
          description: "Pet id to delete",
          required: true,
          type: "integer",
          format: "int64",
        },
      ],
      responses: {
        400: {
          description: "Invalid ID supplied",
        },
        404: {
          description: "Pet not found",
        },
      },
      security: [
        {
          petstore_auth: ["write:pets", "read:pets"],
        },
      ],
    },
  },
};

module.exports = { petData };
