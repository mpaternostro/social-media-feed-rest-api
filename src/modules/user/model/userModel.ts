import { DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize/types";

export class UserModel extends Model {
  static setup(sequelizeInstance: Sequelize) {
    UserModel.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: "User",
      }
    );

    return UserModel;
  }
}
