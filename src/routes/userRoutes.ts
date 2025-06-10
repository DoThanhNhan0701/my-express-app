import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

export const setUserRoutes = (app: any) => {
  app.use("/api/users", router);

  router.post("/", userController.createUser.bind(userController));
  router.get("/:id", userController.getUser.bind(userController));

  app.get("/theloai", userController.getTheLoai.bind(userController));
};
