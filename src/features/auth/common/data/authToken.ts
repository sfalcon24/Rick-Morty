import {storage} from 'common/data/storage';
export const KEY_USER_TOKEN = 'user-token';

export const setAuthToken = (data: string) => {
  storage.set(KEY_USER_TOKEN, data);
};

export const getAuthToken = () => storage.getString(KEY_USER_TOKEN);

export const clearAuthToken = () => {
  storage.delete(KEY_USER_TOKEN);
};
