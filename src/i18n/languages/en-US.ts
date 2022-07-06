import type {RootTabParamList} from 'navigator/types';

const tabs: Record<keyof RootTabParamList, string> = {
  Zero: 'Zero',
  One: 'One',
  Two: 'Two',
  Three: 'Three',
};

const dictionary = {
  tabs,
};

export default dictionary;
