import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'core/i18n';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.useFakeTimers().setSystemTime(new Date(2023, 1, 1));

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('react-native-mmkv-flipper-plugin', () => ({
  initializeMMKVFlipper: jest.fn(),
}));

jest.mock('global', () => ({
  ...global,
  WebSocket: function WebSocket() {},
}));
