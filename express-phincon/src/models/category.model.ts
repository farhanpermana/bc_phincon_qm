import { DataTypes, Model, Optional } from 'sequelize';
import { productSequelize } from '../config/database';

interface CategoryAttributes {
  id: number;
  name: string;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

export class Category extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: productSequelize,
    tableName: 'categories',
    modelName: 'Category',
    timestamps: true,
  }
);
