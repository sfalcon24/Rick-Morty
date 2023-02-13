import {useCallback} from 'react';
import {clearToken} from 'storage';

const useConnect = () => {
  const handleFakeLogin = useCallback(() => {
    clearToken();
  }, []);

  return {handleFakeLogin};
};

export default useConnect;
