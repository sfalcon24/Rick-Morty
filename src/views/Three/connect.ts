import {useCallback} from 'react';
import {clearAuthToken} from 'features/auth/common/data/authToken';

const useConnect = () => {
  const handleFakeLogin = useCallback(() => {
    // This is incorrect but just for testing
    clearAuthToken();
  }, []);

  return {handleFakeLogin};
};

export default useConnect;
