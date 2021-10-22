// const CreateUserService = require('../services/CreateUserService');
const AWS = require('aws-sdk');
const { v4 } = require('uuid');
const { hash } = require('bcryptjs');

const db = new AWS.DynamoDB.DocumentClient();

const usersTable = process.env.USERS_TABLE;

module.exports = {
  Query: {
    async getUser(_, { username }) {
      const user = {
        id: '123',
        username: 'name',
        email: 'email',
        password: 'password',
      };
      return user;
    },
  },
  Mutation: {
    async createUser(_, { username, email, password }) {
      const hashedPassword = await hash(password, 8);

      const user = {
        id: v4(),
        username,
        email,
        password: hashedPassword,
      };

      await db
        .put({
          TableName: usersTable,
          Item: user,
        })
        .promise();

      return user;
    },
  },
};
