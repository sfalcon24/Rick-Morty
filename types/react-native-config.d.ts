declare module 'react-native-config' {
  interface Env {
    ENVIRONMENT: string;
    ANDROID_KEY_PASSWORD: string;
    ANDROID_STORE_PASSWORD: string;
    GRAPHQL_ENDPOINT: string;
  }

  const BuildConfig: Env;

  export default BuildConfig;
}
