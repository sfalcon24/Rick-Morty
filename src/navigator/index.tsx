import type {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BlankAuth, BlankMain, Tabs} from 'containers';
import useConnect from './connect';
import {
  //   modalStackScreenOptions,
  generalStackScreenOptions,
  //   transparentModal,
  rootStackScreenOptions,
} from './constants';
import type {Props} from './types';

const {Navigator, Group, Screen} = createNativeStackNavigator();

const AppNavigator: FC<Props> = () => {
  const {logged} = useConnect();

  return (
    <Navigator screenOptions={rootStackScreenOptions}>
      {logged ? (
        <Group screenOptions={generalStackScreenOptions}>
          <Screen name="Tabs" component={Tabs} />
          <Screen name="BlankMain" component={BlankMain} />
        </Group>
      ) : (
        <Group screenOptions={generalStackScreenOptions}>
          <Screen name="BlankAuth" component={BlankAuth} />
        </Group>
      )}
      {/* <Group screenOptions={transparentModal}>
        <Screen name="Modal" component={Modal} />
      </Group> */}
      {/* <Group screenOptions={modalStackScreenOptions}>
        <Screen name="Modal" component={Modal} />
      </Group> */}
    </Navigator>
  );
};

export default AppNavigator;
