import { DataTypes, Model, Optional } from "sequelize";
import { Sequelize } from "sequelize/types";
import { UserAttributes } from "../interfaces";

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}
export class UserModel
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: string;

  public name!: string;

  public username!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

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
