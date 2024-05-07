import type {FC} from 'react';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarBottom from 'common/ui/components/TabBarBottom';
import {Character} from 'views/Character';
import {tabStackScreenOptions} from '../constants';
import type {RootTabParamList} from './types';

const {Navigator, Screen} = createBottomTabNavigator<RootTabParamList>();

const tabBar = (props: BottomTabBarProps) => <TabBarBottom {...props} />;

export const Tabs: FC = () => (
  <Navigator
    tabBar={tabBar}
    initialRouteName="Character"
    screenOptions={tabStackScreenOptions}>
    <Screen name="Character" component={Character} />
  </Navigator>
);
