import {ApolloClient, HttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import {config} from 'core/config';
import {buildCache} from './cache';
import {contextSetter} from './context';
import {errorHandler} from './error';
import {setupFlipper} from './flipper';

const buildApolloClient = () => {
  const cache = buildCache();

  const httpLink = new HttpLink({
    uri: config.graphqlEndpoint,
  });

  const authLink = setContext(contextSetter);

  const errorsLink = onError(({graphQLErrors}) => {
    errorHandler(cache, graphQLErrors);
  });

  const link = authLink.concat(errorsLink).concat(httpLink);

  const client = new ApolloClient({
    link,
    cache,
  });

  if (__DEV__) {
    setupFlipper(client);
  }

  return client;
};

export const apolloClient = buildApolloClient();
