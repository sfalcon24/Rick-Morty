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
  titleCharacter: 'Character',
};

const dictionary = {
  common,
  tabs,
  actions,
};

export default dictionary;
