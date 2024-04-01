import type {NormalizedCacheObject} from '@apollo/client';
import {ApolloClient, HttpLink} from '@apollo/client';
import {buildCache} from './cache';
import {setupFlipper} from './flipper';

export let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

export const buildApolloClient = () => {
  const cache = buildCache();

  const httpLink = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  });

  const client = new ApolloClient({
    link: httpLink,
    cache,
  });

  if (__DEV__) {
    setupFlipper(apolloClient);
  }

  return client;
};
