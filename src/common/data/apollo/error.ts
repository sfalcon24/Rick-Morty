import {ApolloError} from '@apollo/client';
import {AppError} from 'common/domain/AppError';

export const normalizeApolloError = (error: unknown): AppError => {
  if (!(error instanceof ApolloError)) {
    return error as AppError;
  }

  if (error.networkError) {
    return new AppError(error.message);
  }

  const graphqlError = error.graphQLErrors?.[0] ?? undefined;
  if (!graphqlError || !graphqlError.extensions) {
    return new AppError(error.message);
  }

  return new AppError(graphqlError.message);
};
