import {useCallback} from 'react';
import {clearAuthToken} from 'features/auth/common/data/authToken';

const useConnect = () => {
  const handleFakeLogin = useCallback(() => {
    clearAuthToken();
  }, []);

  return {handleFakeLogin};
};

export default useConnect;
