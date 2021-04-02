const { NYT_LIST_BASE_URL, NYT_COMBINED_NONFICTION_URL, NYT_COMBINED_FICTION_URL } = process.env;
const BestSellersAPI = require('../app/modules/graphql/datasource/datasource');
const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('../app/modules/graphql/schema/schema');
const getResolver = require('../app/modules/graphql/resolvers/resolvers');
const resolvers = getResolver(NYT_COMBINED_FICTION_URL, NYT_COMBINED_NONFICTION_URL);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    bestsellersAPI: new BestSellersAPI(NYT_LIST_BASE_URL)
  })
});


exports.handler = server.createHandler();