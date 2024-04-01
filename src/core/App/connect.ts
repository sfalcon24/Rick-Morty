import {useCallback, useEffect, useState} from 'react';
import {buildApolloClient} from 'core/apollo/client';
import {noop} from 'lodash';
// import RNBootSplash from 'react-native-bootsplash';

const useConnect = () => {
  const [ready, setReady] = useState(false);

  const handleInit = useCallback(async () => {
    try {
      buildApolloClient();
      // TODO Setup code
    } catch {
      noop();
    } finally {
      // const status = await RNBootSplash.getVisibilityStatus();
      // if (status !== 'hidden') RNBootSplash.hide({fade: true});
      setReady(true);
    }
  }, []);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  return {ready};
};

export default useConnect;
