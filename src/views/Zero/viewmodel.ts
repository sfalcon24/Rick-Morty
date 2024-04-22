import {useCallback} from 'react';

const useViewModel = () => {
  const handleFakeLogin = useCallback(() => {}, []);

  return {handleFakeLogin};
};

export default useViewModel;
