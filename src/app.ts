import express from "express";
import { setUserRoutes } from "./routes/userRoutes";
import { swaggerUi, swaggerSpec } from "./swagger";

class App {
  public expressApp: express.Application;

  constructor() {
    this.expressApp = express();
    this.initializeMiddleware();
    this.initializeRoutes();
  }

  private initializeMiddleware() {
    this.expressApp.use(express.json());
  }

  private initializeRoutes() {
    setUserRoutes(this.expressApp);
    this.expressApp.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerSpec)
    );
  }

  public start(port: number) {
    this.expressApp.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

const app = new App();
const PORT = process.env.PORT ?? 3001;
app.start(+PORT);

export default app;
