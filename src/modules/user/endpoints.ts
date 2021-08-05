import { Router } from "express";
import { UserModel } from "./model/userModel";

const router = Router();

router.get("/", async (req, res) => {
  const users = await UserModel.findAll();
  return res.status(200).json({
    users,
  });
});

router.post("/add", async (req, res) => {
  const { name, username } = req.body;
  const user = await UserModel.create({ name, username });
  return res.status(201).json({
    message: "New user created",
    user,
  });
});

export { router as userEndpoints };
