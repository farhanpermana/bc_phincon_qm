// src/models/Product.ts
import { DataTypes } from 'sequelize';
import { productSequelize } from '../config/database';

export const Product = productSequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'products', // must match your MySQL table name
  timestamps: false, // unless you want createdAt, updatedAt
});