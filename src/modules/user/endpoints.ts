import { Router } from "express";
import { UserRequest } from "./interfaces";
import { fromUserModelToEntity } from "./mapper/userMapper";
import { UserModel } from "./model/userModel";

const router = Router();

router.get("/", async (req: UserRequest, res) => {
  const userInstances = await UserModel.findAll();
  const users = userInstances.map((userInstance) =>
    fromUserModelToEntity(userInstance)
  );
  return res.status(200).json({
    users,
  });
});

router.post("/add", async (req: UserRequest, res) => {
  const { name, username } = req.body;
  if (!name || !username) {
    return res.status(422).json({
      message: "Could not create user. Required inputs not provided.",
    });
  }
  const userInstance = await UserModel.create({ name, username });
  const user = fromUserModelToEntity(userInstance);
  return res.status(201).json({
    message: "New user created.",
    user,
  });
});

export { router as userEndpoints };
