import type {FC} from 'react';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBarBottom} from './Components';
import {tabStackScreenOptions} from './constants';
import {BlankTab} from './Screens';

const {Navigator, Screen} = createBottomTabNavigator();

const tabBar = (props: BottomTabBarProps) => <TabBarBottom {...props} />;

export const Tabs: FC = () => (
  <Navigator
    tabBar={tabBar}
    initialRouteName="Zero"
    screenOptions={tabStackScreenOptions}>
    <Screen name="Zero" component={BlankTab} />
    <Screen name="One" component={BlankTab} />
    <Screen name="Two" component={BlankTab} />
    <Screen name="Three" component={BlankTab} />
  </Navigator>
);
