import {useCallback} from 'react';
import type {DictionaryKey} from 'i18next';
import {useTranslation} from 'react-i18next';
import type {LogicParams} from './types';

const useLogic = ({jumpTo, routeName}: LogicParams) => {
  const onPress = useCallback(() => {
    jumpTo(routeName);
  }, [jumpTo, routeName]);

  const {t} = useTranslation();

  const title = t(`tabs.${routeName}` as DictionaryKey);

  return {title, onPress};
};

export default useLogic;
