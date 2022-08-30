import {useMemo} from 'react';
import {useQuery} from '@apollo/client';
import {MeDocument} from 'apollo/generated/schema';
import {normalizeMe} from 'models/Me';

export const useMe = () => {
  const {data, refetch, ...rest} = useQuery(MeDocument, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  const userData = data?.me;
  const me = useMemo(
    () => (userData ? normalizeMe(userData) : undefined),
    [userData],
  );

  return {
    me,
    refetch,
    ...rest,
  };
};
