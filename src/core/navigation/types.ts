import type {FC} from 'react';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {Character} from 'features/characters/common/domain/CharacterSummary';
import type {RootTabParamList} from './Tabs/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamsList {}
  }
}

export type RootParamsList = {
  Character: undefined;
  CharacterDetail: {
    character: Character;
  };
  Filter: undefined;
  BlankMain: undefined;
  BlankAuth: undefined;
  Tabs: undefined;
};

export type ScreensParamsList = RootParamsList & RootTabParamList;

export type ScreenName = keyof ScreensParamsList;

export type ScreenComponent<S extends ScreenName> = FC<
  NativeStackScreenProps<ScreensParamsList, S>
>;

export type MainStackScreenProps<Screen extends keyof RootParamsList> =
  NativeStackScreenProps<RootParamsList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootParamsList>
  >;
