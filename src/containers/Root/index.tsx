import type {FC} from 'react';
import {Platform, StyleSheet, UIManager} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'components';
import AppNavigator from 'navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from 'services';
import theme from 'theme';
import useConnect from './connect';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
});

export const Root: FC = () => {
  const {ready} = useConnect();

  if (!ready) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.gestureHandler}>
          <NavigationContainer ref={navigationRef}>
            <StatusBar />
            <AppNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
