import type {ApolloCache, NormalizedCacheObject} from '@apollo/client';
import type {GraphQLError} from 'graphql';

export const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cache: ApolloCache<NormalizedCacheObject>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  errors?: readonly GraphQLError[],
) => {
  // TODO Handle any errors
};
