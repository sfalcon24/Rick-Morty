import {useCallback, useEffect, useState} from 'react';
import {useApolloSetup} from 'apollo/client';
import {noop} from 'lodash';
// import RNBootSplash from 'react-native-bootsplash';

const useConnect = () => {
  const [ready, setReady] = useState(false);
  const {apolloClient, initApollo} = useApolloSetup();

  const handleInit = useCallback(async () => {
    try {
      initApollo();
    } catch {
      noop();
    } finally {
      // const status = await RNBootSplash.getVisibilityStatus();
      // if (status !== 'hidden') RNBootSplash.hide({fade: true});
      setReady(true);
    }
  }, [initApollo]);

  const handleOnReady = useCallback(async () => {
    if (ready) {
      // await RNBootSplash.hide({fade: true});
    }
  }, [ready]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  return {apolloClient, ready, handleOnReady};
};

export default useConnect;
