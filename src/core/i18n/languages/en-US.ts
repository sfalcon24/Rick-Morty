import type {RootTabParamList} from 'core/navigation/Tabs/types';
import type {CharacterFiltersId} from 'features/characters/filters';

const tabs: Record<keyof RootTabParamList, string> = {
  Character: 'Character',
  Episode: 'Episode',
  Location: 'Location',
};

const actions = {
  'action/apply': 'Apply',
  'action/back': 'Back',
  'action/clear': 'Clear',
  'action/filter': 'Filter',
};

const common = {
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
