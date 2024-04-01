import {useCallback} from 'react';
// import {setAuthToken} from 'features/auth/common/data/authToken';

const useViewModel = () => {
  const handleFakeLogin = useCallback(() => {
    // TODO This is incorrect but just for testing
    // setAuthToken('FakeToken');
  }, []);

  return {handleFakeLogin};
};

export default useViewModel;
