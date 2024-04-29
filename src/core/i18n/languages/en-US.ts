import type {RootTabParamList} from 'core/navigation/Tabs/types';
import type {CharacterFiltersId} from 'features/characters/filters';

const tabs: Record<keyof RootTabParamList, string> = {
  Character: 'Character',
  CharacterFilter: 'CharacterFilter',
  Episode: 'Episode',
  Location: 'Location',
  SearchFilter: 'SearchFilter',
};

const actions = {
  'action/apply': 'APPLY',
  'action/back': 'Back',
  'action/clear': 'Clear',
  'action/filter': 'Filter',
  'action/search': 'Search',
};

const common = {
  name: 'Name',
  species: 'Species',
  status: 'Status',
  gender: 'Gender',
  loading: 'Loading...',
  error: 'Error:',
};

const screens = {
  character: 'Character',
};

const filters: Record<CharacterFiltersId, string> = {
  name: 'Give a name',
  species: 'Select one',
};

const dictionary = {
  common,
  screens,
  tabs,
  actions,
  filters,
};

export default dictionary;
