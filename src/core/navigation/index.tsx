import type {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import useIsLoggedIn from 'features/auth/isLoggedIn/data/useIsLoggedIn';
import {BlankAuth} from 'views/Auth/Blank';
import {BlankMain} from 'views/Blank';
import {generalStackScreenOptions, rootStackScreenOptions} from './constants';
import {Tabs} from './Tabs';
import type {RootParamsList} from './types';

const {Navigator, Group, Screen} = createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => (
  // const {logged} = useIsLoggedIn();

  <Navigator screenOptions={rootStackScreenOptions}>
    {/* {logged ? ( */}
    <Group screenOptions={generalStackScreenOptions}>
      <Screen name="Tabs" component={Tabs} />
      <Screen name="BlankMain" component={BlankMain} />
    </Group>
    {/* ) : ( */}
    <Group screenOptions={generalStackScreenOptions}>
      <Screen name="BlankAuth" component={BlankAuth} />
    </Group>
    {/* )} */}
  </Navigator>
);
export default AppNavigator;
