import {useCallback} from 'react';
import {useApolloClient} from '@apollo/client';
import {normalizeApolloError} from 'common/data/apollo/error';
import {clearAuthToken} from 'features/auth/common/data/authToken';

const useLogout = () => {
  const apolloClient = useApolloClient();

  const clearCache = useCallback(() => {
    clearAuthToken();
    apolloClient.cache.evict({});
    apolloClient.cache.gc();
  }, [apolloClient.cache]);

  const logout = useCallback(async () => {
    try {
      // TODO Call mutation

      clearCache();
    } catch (error) {
      throw normalizeApolloError(error);
    }
  }, [clearCache]);

  return {logout};
};

export default useLogout;
