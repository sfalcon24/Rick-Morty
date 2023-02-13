import type {FC} from 'react';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamsList {}
  }
}

export type RootParamsList = {
  BlankMain: undefined;
  BlankAuth: undefined;
  Tabs: undefined;
};

export type RootTabParamList = {
  Zero: undefined;
  One: undefined;
  Two: undefined;
  Three: undefined;
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

export type Props = {};
