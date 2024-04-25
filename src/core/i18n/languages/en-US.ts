import type {RootTabParamList} from 'core/navigation/Tabs/types';

const tabs: Record<keyof RootTabParamList, string> = {
  Character: 'Character',
  CharacterFilter: 'CharacterFilter',
  Episode: 'Episode',
  Location: 'Location',
};

const actions = {
  'action/apply': 'APPLY',
  'action/back': 'Back',
  'action/clear': 'Clear',
  'action/filter': 'Filter',
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

const dictionary = {
  common,
  screens,
  tabs,
  actions,
};

export default dictionary;
