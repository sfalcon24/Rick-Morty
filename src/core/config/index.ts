import env from 'react-native-config';

const environment = env.ENVIRONMENT;
const graphqlEndpoint = env.GRAPHQL_ENDPOINT;

export const config = {
  environment,
  graphqlEndpoint,
};
