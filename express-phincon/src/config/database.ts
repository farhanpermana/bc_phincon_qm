import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const todoDbName = process.env.TODO_DB_NAME || (() => { throw new Error('DB is not defined'); })();
const todoDbUser = process.env.DB_USER || (() => { throw new Error('DB user is not defined'); })();
const todoDbPassword = process.env.DB_PASSWORD || '';
const todoDbHost = process.env.DB_HOST || 'localhost';
const todoDbPort = parseInt(process.env.DB_PORT || '3306');

const todoSequelize = new Sequelize(todoDbName, todoDbUser, todoDbPassword, {
  host: todoDbHost,
  port: todoDbPort,
  dialect: 'mysql',
  logging: false,
});

const productDbName = process.env.PRODUCT_DB_NAME || (() => { throw new Error('DB is not defined'); })();
const productDbUser = process.env.DB_USER || (() => { throw new Error('DB user is not defined'); })();
const productDbPassword = process.env.PRODUCT_DB_PASSWORD || '';
const productDbHost = process.env.PRODUCT_DB_HOST || 'localhost';
const productDbPort = parseInt(process.env.PRODUCT_DB_PORT || '3306');

const productSequelize = new Sequelize(productDbName, productDbUser, productDbPassword, {
  host: productDbHost,
  port: productDbPort,
  dialect: 'mysql',
  logging: false,
});

export const connectTodoDB = async () => {
  try {
    await todoSequelize.authenticate();
    console.log('Todo database connection established successfully.');
    await todoSequelize.sync();
    console.log('Todo database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the todo database:', error);
    process.exit(1);
  }
};

export const connectProductDB = async () => {
  try {
    await productSequelize.authenticate();
    console.log('Product database connection established successfully.');
    await productSequelize.sync();
    console.log('Product database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the product database:', error);
    process.exit(1);
  }
};

export { todoSequelize, productSequelize };