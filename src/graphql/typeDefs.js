const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type User {
    id: String!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUser(username: String): User!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
  }
`;
