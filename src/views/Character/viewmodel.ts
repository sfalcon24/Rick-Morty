import {useQuery} from '@apollo/client';
import {CharacterSummary} from 'common/data/apollo/generated/nodes';
import type {Lesson} from './model';

const useViewModel = () => {
  const {data} = useQuery(CharacterSummary);

  const apiData = data?.characters.results as Lesson[];

  return {
    apiData,
  };
};

export default useViewModel;
