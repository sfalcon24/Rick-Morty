import {useMemo} from 'react';
import type {NetworkData} from 'common/domain/NetworkData';
import {useCharacterListQuery} from '../../../../common/data/apollo/generated/hooks';
import type {Character} from '../domain';

export const useCharacterList = () => {
  const {data, loading, error} = useCharacterListQuery({
    variables: {page: 1},
    notifyOnNetworkStatusChange: true,
  });

  const characters = useMemo<NetworkData<Character[]>>(() => {
    if (loading) {
      return {
        type: 'loading',
      };
    }
    if (error) {
      return {
        type: 'error',
        message: error.message,
      };
    }
    return {
      type: 'data',
      data: data?.characters?.results,
    };
  }, [error, loading, data]);

  return {
    characters,
  };
};
