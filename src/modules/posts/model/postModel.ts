import { DataTypes, Model, Optional } from "sequelize";
import { Sequelize } from "sequelize/types";
import { UserModel } from "../../user/model/userModel";
import { PostAttributes } from "../interfaces";

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}
export class PostModel
  extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes
{
  public id!: string;

  public userId!: string;

  public title!: string;

  public content!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  static setup(sequelizeInstance: Sequelize) {
    PostModel.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userId: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: "Post",
      }
    );

    return PostModel;
  }

  static setupAssociations(userModel: typeof UserModel) {
    userModel.hasMany(PostModel, {
      foreignKey: "userId",
      constraints: false,
    });
    PostModel.belongsTo(userModel, {
      foreignKey: "userId",
      constraints: false,
    });
  }
}
