// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  schedule: [Schedule]
}

type Schedule {
  _id: ID
  scheduleText: String
  createdAt: String
  username: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  users: [User]
  user(username: String!): User
  schedules(username: String): [Schedule]
  schedule(_id: ID!): Schedule
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addSchedule(scheduleText: String!): Schedule
}
`;

// export the typeDefs
module.exports = typeDefs;
