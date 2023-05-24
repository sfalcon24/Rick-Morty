import {KEY_USER_TOKEN} from 'features/auth/common/data/authToken';
import {useMMKVString} from 'react-native-mmkv';

const useIsLoggedIn = () => {
  const [userToken] = useMMKVString(KEY_USER_TOKEN);

  const logged = !!userToken;

  return {logged};
};

export default useIsLoggedIn;
