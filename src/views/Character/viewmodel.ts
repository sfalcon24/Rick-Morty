import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {Characters} from 'common/data/apollo/generated/nodes';
import type {Lesson} from './model';

const useViewModel = () => {
  const navigation = useNavigation();
  const {loading, error, data} = useQuery(Characters);

  const apiData = data?.characters.results as Lesson[];

  const navigateToCharacterFilter = () => {
    navigation.navigate('CharacterFilter');
  };

  return {
    apiData,
    loading,
    error,
    navigateToCharacterFilter,
  };
};

export default useViewModel;
