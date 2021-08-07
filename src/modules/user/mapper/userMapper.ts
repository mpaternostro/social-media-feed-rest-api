import { User } from "../entity/User";
import { UserModel } from "../model/userModel";

export function fromUserModelToEntity(userModel: UserModel) {
  return new User(userModel.id, userModel.name, userModel.username);
}
