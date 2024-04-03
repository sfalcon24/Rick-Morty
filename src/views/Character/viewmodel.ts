import {useQuery} from '@apollo/client';
import {Characters} from 'common/data/apollo/generated/nodes';
import type {Lesson} from './model';

const useViewModel = () => {
  const {loading, error, data} = useQuery(Characters);

  const apiData = data?.characters.results as Lesson[];

  return {
    apiData,
    loading,
    error,
  };
};

export default useViewModel;
