import type {FC} from 'react';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarBottom from 'common/ui/components/TabBarBottom';
import Character from 'views/Character';
import {OneTab} from 'views/One';
import {ThreeTab} from 'views/Three';
import {TwoTab} from 'views/Two';
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
    <Screen name="One" component={OneTab} />
    <Screen name="Two" component={TwoTab} />
    <Screen name="Three" component={ThreeTab} />
  </Navigator>
);
