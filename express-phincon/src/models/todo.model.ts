import { DataTypes, Model, Optional } from 'sequelize';
import { todoSequelize } from '../config/database';

interface TodoAttributes {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface TodoCreationAttributes extends Optional<TodoAttributes, 'id' | 'completed'> {}

class Todo extends Model<TodoAttributes, TodoCreationAttributes> implements TodoAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public completed!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: todoSequelize,
    tableName: 'todos',
    timestamps: true,
  }
);

export default Todo;