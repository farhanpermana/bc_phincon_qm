import { DataTypes, Model, Optional } from 'sequelize';
import { productSequelize } from '../config/database';

interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url?: string;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id' | 'image_url'> {}

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public category!: string;
  public image_url?: string;
}

// INIT PRODUCT
Product.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  category: { type: DataTypes.STRING(255), allowNull: false },
  image_url: { type: DataTypes.STRING(255), allowNull: true },
}, {
  sequelize: productSequelize,
  tableName: 'products',
  timestamps: true,
});
