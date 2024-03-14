const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const Query = require('./src/resolvers/Query');
const Mutation = require('./src/resolvers/Mutation');
const { readAndConcatenateSchemas } = require('./src/utils/readAndConcatenateSchemas');
const { schemaFilePaths } = require('./schemaFilePaths');

const resolvers = { 
    Query,
    Mutation
};

const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: readAndConcatenateSchemas(schemaFilePaths),
    resolvers,
    context: { 
        prisma,
    }
})

server
    .listen()
    .then(({ url }) => console.log(`❄️  Server ready at: ${url}`))