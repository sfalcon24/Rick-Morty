import {useMemo} from 'react';
import {useMeQuery} from 'common/data/apollo/generated/hooks';
import type {MeDataFragment} from 'common/data/apollo/generated/schema';
import {AppError} from 'common/domain/AppError';
import type {Me} from '../domain/Me';

const normalizeMe = (data: MeDataFragment): Me => ({
  email: data.email ?? null,
  id: data.id,
});

const useMe = () => {
  const {data} = useMeQuery({
    fetchPolicy: 'cache-only',
  });

  const userData = data?.me;
  const me = useMemo(
    () => (userData ? normalizeMe(userData) : undefined),
    [userData],
  );

  if (!me) {
    throw new AppError('useMe called when me is not loaded');
  }

  return {
    me,
  };
};

export default useMe;
