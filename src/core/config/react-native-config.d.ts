declare module 'react-native-config' {
  interface Env {
    ENVIRONMENT: 'DEV' | 'STG' | 'PROD';
    GRAPHQL_ENDPOINT: string;
  }

  const BuildConfig: Env;

  export default BuildConfig;
}
