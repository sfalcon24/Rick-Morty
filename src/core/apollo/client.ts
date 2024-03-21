import {ApolloClient, HttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import {getRequestHeaders} from 'features/auth/getRequestHeaders/data/getRequestHeaders';
import {buildCache} from './cache';
import {setupFlipper} from './flipper';

const buildApolloClient = () => {
  const cache = buildCache();

  const httpLink = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql', // TODO
  });

  const authLink = setContext(async () => ({
    headers: getRequestHeaders(),
  }));

  const errorsLink = onError(() => {
    // TODO Handle any errors
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
