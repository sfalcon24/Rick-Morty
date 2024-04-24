import {useMemo} from 'react';
import {useCharactersQuery} from 'common/data/apollo/generated/hooks';
import type {CharacterSummaryFragment} from 'common/data/apollo/generated/schema';
import notEmpty from 'common/domain/notEmpty';
import type {Character} from '../../common/domain/CharacterSummary';

export const normalizeCharacterSummary = (
  data: CharacterSummaryFragment,
): Character => ({
  id: data?.id ?? '',
  image: data?.image ?? '',
  status: data?.status ?? '',
  name: data?.name ?? '',
});

const useCharacters = () => {
  const {data, error, loading} = useCharactersQuery();

  const charactersData = data?.characters?.results;

  const characters = useMemo(
    () =>
      charactersData
        ? charactersData.filter(notEmpty).map(normalizeCharacterSummary)
        : [],
    [charactersData],
  );

  console.log('characters', characters.length);

  return {
    characters,
    error,
    loading,
  };
};

export default useCharacters;
