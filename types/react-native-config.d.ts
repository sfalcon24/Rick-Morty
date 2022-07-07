declare module 'react-native-config' {
  interface Env {
    ENVIRONMENT: string;
    ANDROID_STORE_PASSWORD: string;
    ANDROID_KEY_PASSWORD: string;
  }

  const BuildConfig: Env;

  export default BuildConfig;
}
