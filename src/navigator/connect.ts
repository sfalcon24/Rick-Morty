import {useMMKVString} from 'react-native-mmkv';
import {KEY_USER_TOKEN} from 'storage';

const useConnect = () => {
  const [userToken] = useMMKVString(KEY_USER_TOKEN);

  const logged = !!userToken;

  return {logged};
};

export default useConnect;
