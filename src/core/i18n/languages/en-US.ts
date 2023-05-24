import type {RootTabParamList} from 'core/navigation/types';

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
