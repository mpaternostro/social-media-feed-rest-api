import { Post } from "../entity/Post";
import { PostModel } from "../model/postModel";

export function fromPostModelToEntity(postModel: PostModel) {
  return new Post(
    postModel.id,
    postModel.title,
    postModel.userId,
    postModel.content,
    postModel.createdAt
  );
}
