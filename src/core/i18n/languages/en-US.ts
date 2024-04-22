import type {RootTabParamList} from 'core/navigation/Tabs/types';

const tabs: Record<keyof RootTabParamList, string> = {
  Character: 'Character',
  Zero: 'Zero',
  One: 'One',
  Two: 'Two',
  Three: 'Three',
};

const actions = {
  'action/apply': 'Apply',
  'action/back': 'Back',
  'action/clear': 'Clear',
  'action/filter': 'Filter',
};

const dictionary = {
  tabs,
  actions,
};

export default dictionary;
