import type {RootTabParamList} from 'core/navigation/Tabs/types';

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

const dictionary = {
  common,
  screens,
  tabs,
  actions,
};

export default dictionary;
