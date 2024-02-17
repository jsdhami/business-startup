const typeDefs = `#graphql
type Book {
 title: String
 author: String
}

type Project {
    id: ID!
    v: Int
    title: String
    description: String
    link: String
    image: String

}

type Query {
 books: [Book]
 projects: [Project]
}

type Mutation {
    createProject(id:ID!, v: Int! title: String!, description: String!, link: String!, image: String!): Project
}
`;

export default typeDefs;


