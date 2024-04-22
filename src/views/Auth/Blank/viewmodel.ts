import {useCallback} from 'react';

const useViewModel = () => {
  const handleFakeLogin = useCallback(() => {
    // TODO This is incorrect but just for testing
  }, []);

  return {handleFakeLogin};
};

export default useViewModel;
