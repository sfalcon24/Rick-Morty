import type {FC} from 'react';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {RootTabParamList} from 'navigator/types';
import {TabBarBottom} from './Components';
import {tabStackScreenOptions} from './constants';
import {ZeroTab, OneTab, ThreeTab, TwoTab} from './Screens';

const {Navigator, Screen} = createBottomTabNavigator<RootTabParamList>();

const tabBar = (props: BottomTabBarProps) => <TabBarBottom {...props} />;

export const Tabs: FC = () => (
  <Navigator
    tabBar={tabBar}
    initialRouteName="Zero"
    screenOptions={tabStackScreenOptions}>
    <Screen name="Zero" component={ZeroTab} />
    <Screen name="One" component={OneTab} />
    <Screen name="Two" component={TwoTab} />
    <Screen name="Three" component={ThreeTab} />
  </Navigator>
);
