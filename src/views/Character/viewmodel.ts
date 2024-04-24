import useCharacters from 'features/characters/characterList/data';

const useViewModel = () => {
  const {characters, loading, error} = useCharacters();

  return {
    characters,
    loading,
    error,
  };
};

export default useViewModel;
