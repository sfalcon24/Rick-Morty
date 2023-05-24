import type {ContextSetter} from '@apollo/client/link/context';
import {getAuthToken} from 'features/auth/common/data/authToken';

type Headers = {
  Authorization?: string;
};

export const contextSetter: ContextSetter = async () => {
  const token = getAuthToken();

  const headers = {} as Headers;
  if (token) {
    headers.Authorization = token ? `JWT ${token}` : undefined;
  }

  return {
    headers,
  };
};
