import {useCallback} from 'react';
import {useApolloClient, useMutation} from '@apollo/client';
import type {
  LoginInput,
  LoginMutation,
  LoginMutationVariables,
} from 'apollo/generated/schema';
import {LoginDocument} from 'apollo/generated/schema';
import {clearToken, setToken} from 'storage';

const useAuth = () => {
  const apolloClient = useApolloClient();

  const [loginMut, {loading: loginLoading}] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LoginDocument, {
    fetchPolicy: 'network-only',
  });
  //   const [logoutMut, {loading: logoutLoading}] = useMutation<
  //     LogoutMutation,
  //     LogoutMutationVariables
  //   >(LogoutDocument, {
  //     fetchPolicy: 'network-only',
  //   });

  const clearCache = useCallback(() => {
    clearToken();
    apolloClient.cache.evict({});
    apolloClient.cache.gc();
  }, [apolloClient.cache]);

  const authenticate = useCallback((token: string) => {
    setToken(token);
  }, []);

  const deauthenticate = useCallback(() => {
    try {
      clearCache();
    } catch (error) {
      throw error;
    }
  }, [clearCache]);

  const login = useCallback(
    async (input: LoginInput) => {
      try {
        const response = await loginMut({variables: {input}});
        const token = response.data?.loginMobile?.token ?? undefined;
        if (!token) {
          throw new Error('Login failed');
        }

        authenticate(token);
      } catch (error) {
        throw error;
      }
    },
    [authenticate, loginMut],
  );

  const logout = useCallback(async () => {
    try {
      //   const response = await logoutMut();
      //   const ok = response.data?.logout?.loggedOut ?? false;
      //   if (!ok) {
      //     throw new Error('Logout failed');
      //   }

      deauthenticate();
    } catch (error) {
      throw error;
    }
  }, [deauthenticate]);

  return {login, logout, loginLoading};
};

export default useAuth;
