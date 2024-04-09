import type {RootTabParamList} from 'core/navigation/Tabs/types';

const tabs: Record<keyof RootTabParamList, string> = {
  Character: 'Character',
  CharacterFilter: 'CharacterFilter',
  SearchFilter: 'SearchFilter',
};

const dictionary = {
  tabs,
};

export default dictionary;
