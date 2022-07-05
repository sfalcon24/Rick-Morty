import {useCallback} from 'react';
import type {LogicParams} from './types';

const useLogic = ({jumpTo, routeName}: LogicParams) => {
  const onPress = useCallback(() => {
    jumpTo(routeName);
  }, [jumpTo, routeName]);

  // TODO: add title
  const title = routeName;

  return {title, onPress};
};

export default useLogic;
