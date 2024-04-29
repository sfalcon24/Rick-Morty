import {useNavigation} from '@react-navigation/native';
import useCharacters from 'features/characters/characterList/data';

const useViewModel = () => {
  const navigation = useNavigation();
  const {characters, loading, error} = useCharacters();

  const navigateToCharacterFilter = () => {
    navigation.navigate('CharacterFilter');
  };

  return {
    characters,
    loading,
    error,
    navigateToCharacterFilter,
  };
};

export default useViewModel;
