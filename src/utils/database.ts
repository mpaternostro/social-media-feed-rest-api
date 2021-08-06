import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import { UserModel } from "../modules/user/model/userModel";
import { PostModel } from "../modules/posts/model/postModel";

dotenv.config();

function setupModels(sequelizeInstance: Sequelize) {
  UserModel.setup(sequelizeInstance);
  PostModel.setup(sequelizeInstance);
}

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_PATH,
});

setupModels(sequelize);

export { sequelize };
