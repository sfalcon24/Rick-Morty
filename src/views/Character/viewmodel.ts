import {useNavigation} from '@react-navigation/native';
import useCharacters from 'features/characters/characterList/data';

const useViewModel = () => {
  const {characters, loading, error} = useCharacters();
  const navigation = useNavigation();

  return {
    characters,
    navigation,
    loading,
    error,
  };
};

export default useViewModel;
