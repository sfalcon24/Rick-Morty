import {useCallback} from 'react';
import {normalizeApolloError} from 'common/data/apollo/error';
import type {LoginInput} from 'common/data/apollo/generated/hooks';
import {useLoginMutation} from 'common/data/apollo/generated/hooks';
import {setAuthToken} from 'features/auth/common/data/authToken';
import type {Input} from '../domain/Input';

const normalizeInputForBackend = (input: Input): LoginInput => ({
  email: input.email,
  password: input.password,
});

const useLogin = () => {
  const [loginMutation] = useLoginMutation();

  const login = useCallback(
    async (input: LoginInput) => {
      try {
        const response = await loginMutation({
          variables: {input: normalizeInputForBackend(input)},
        });
        const token = response.data?.loginMobile?.token ?? undefined;
        if (!token) {
          return;
        }

        setAuthToken(token);
      } catch (error) {
        throw normalizeApolloError(error);
      }
    },
    [loginMutation],
  );

  return {
    login,
  };
};

export default useLogin;
