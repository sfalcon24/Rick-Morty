import {useCallback, useState} from 'react';
import type {ApolloLink, NormalizedCacheObject} from '@apollo/client';
import {ApolloClient, HttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import setupCache from 'apollo/cache';
import {config} from 'config';
import {enableFlipperApolloDevtools} from 'react-native-flipper-apollo-devtools';
import {getToken} from 'storage';
import errorHandler from './errors';
import type {Headers} from './types';

const setupHeaders = () => {
  const token = getToken();

  const headers = {} as Headers;
  if (token) {
    headers.Authorization = token ? `JWT ${token}` : undefined;
  }

  return headers;
};

const enableFlipperDevTools = (client: ApolloClient<NormalizedCacheObject>) => {
  if (__DEV__) {
    enableFlipperApolloDevtools(client as any);
  }
};

export const setupApolloClient = () => {
  const cache = setupCache();
  const requestHeaders = setupHeaders();

  const httpLink = new HttpLink({
    uri: config.graphqlEndpoint,
    headers: requestHeaders,
  });

  const authLink = setContext(async (_, {headers = {}}) => ({
    headers: {
      ...headers,
      ...setupHeaders(),
    },
  }));

  const errorsLink = onError(({graphQLErrors}) => {
    errorHandler(cache, graphQLErrors);
  }) as unknown as ApolloLink;

  const link = authLink.concat(errorsLink).concat(httpLink);

  const client = new ApolloClient({
    link,
    cache,
    headers: requestHeaders,
  });
  enableFlipperDevTools(client);
  return client;
};

export const useApolloSetup = () => {
  const [apolloClient, setApolloClient] = useState<ApolloClient<any>>();

  const initApollo = useCallback(() => {
    const client = setupApolloClient();
    setApolloClient(client);
  }, []);

  return {
    initApollo,
    apolloClient,
  };
};
