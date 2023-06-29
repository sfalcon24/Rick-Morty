import {getAuthToken} from 'features/auth/common/data/authToken';

export const getRequestHeaders = (): Record<string, string> => {
  const token = getAuthToken();

  let headers = {} as Record<string, string>;
  if (token) {
    headers.Authorization = `JWT ${token}`;
  }

  return headers;
};
