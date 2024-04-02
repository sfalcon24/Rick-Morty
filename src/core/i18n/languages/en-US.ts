import type {RootTabParamList} from 'core/navigation/Tabs/types';

const tabs: Record<keyof RootTabParamList, string> = {
  Character: 'Character',
  Zero: 'Zero',
  One: 'One',
  Two: 'Two',
  Three: 'Three',
};

const dictionary = {
  tabs,
};

export default dictionary;
