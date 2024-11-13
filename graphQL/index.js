const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const author = {id:"1", name:"Albert", surname:"Camus", age:50, books:[{id:"1", title:"Test Title", score:9, isPublished:false}, {id:"2", title:"Deneme Title", score:5, isPublished:true}]};
const book = {id: "sdk646dsad3d4sa4d", title: 'Yabancı', author: author, score: 6.9, isPublished: true};

// ! means not nullable
const typeDefs = gql`
    type Author {
        id: ID!
        name: String!
        surname: String
        age: Int
        books: [Book!]
    }

    type Book {
        id: ID!
        title: String!
        author: Author!
        score: Float
        isPublished: Boolean
    }

    type Query {
        book: Book
        author: Author
    }
`;

const resolvers = {

    Query: {
        book: () => book,
        author: () => author,
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

