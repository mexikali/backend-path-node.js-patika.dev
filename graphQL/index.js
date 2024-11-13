const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
// ! means not nullable
const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String
        score: Float
        isPublished: Boolean
    }

    type Query {
        books: [Book]
    }
`;

const resolvers = {

    Query: {
        books: () => [
            {id: "sdk646dsad3d4sa4d", title: 'Yabancı', author: 'Albert Camus', score: 6.9, isPublished: true}
        ],
    },
};

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({
            // options
        }),
    ],
});
server.listen().then( ({url}) => console.log(`Apollo Server is up at ${url}`));

