import {useCallback} from 'react';
import {setToken} from 'storage';

const useConnect = () => {
  const handleFakeLogin = useCallback(() => {
    setToken('FakeToken');
  }, []);

  return {handleFakeLogin};
};

export default useConnect;
