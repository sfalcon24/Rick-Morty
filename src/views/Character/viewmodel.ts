import {useQuery} from '@apollo/client';
import {CharactersList} from '../../features/characters/getAll/data/query.gql';
import type {Lesson} from './model';

const useViewModel = () => {
  const {data} = useQuery(CharactersList);

  const apiData = data?.items as Lesson[];

  return {
    apiData,
  };
};

export default useViewModel;
