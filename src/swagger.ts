import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Doc api v1",
      version: "1.0.0",
    },
  },
  apis: ["./src/controllers/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
export { swaggerUi };
