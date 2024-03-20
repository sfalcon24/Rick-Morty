import {useQuery} from '@apollo/client';
import {query} from 'common/data/apollo/generated/nodes';
import type {Lesson} from './model';

const useViewModel = () => {
  const {data} = useQuery(query);

  const apiData = data?.items as Lesson[];

  return {
    apiData,
  };
};

export default useViewModel;
