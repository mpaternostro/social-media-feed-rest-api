import { DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize/types";
import { UserModel } from "../../user/model/userModel";

export class PostModel extends Model {
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
    userModel.hasMany(PostModel, { foreignKey: "userId", constraints: false });
    PostModel.belongsTo(userModel, {
      foreignKey: "userId",
      constraints: false,
    });
  }
}
