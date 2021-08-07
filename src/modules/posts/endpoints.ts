import { Router } from "express";
import { PostRequest } from "./interfaces";
import { fromPostModelToEntity } from "./mapper/postMapper";
import { PostModel } from "./model/postModel";

const router = Router();

router.get("/", async (req: PostRequest, res) => {
  const postInstances = await PostModel.findAll();
  const posts = postInstances.map((postInstance) =>
    fromPostModelToEntity(postInstance)
  );
  return res.status(200).json({
    posts,
  });
});

router.post("/add", async (req: PostRequest, res) => {
  const { title, userId, content } = req.body;
  if (!title || !userId || !content) {
    return res.status(422).json({
      message: "Could not create post. Required inputs not provided.",
    });
  }
  const postInstance = await PostModel.create({ title, userId, content });
  const post = fromPostModelToEntity(postInstance);
  return res.status(201).json({
    message: "New post created.",
    post,
  });
});

export { router as postEndpoints };
