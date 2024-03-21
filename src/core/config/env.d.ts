declare module '@env' {
  export const APP_ENV: 'dev' | 'staging' | 'production';
  export const GRAPHQL_ENDPOINT: string;
  export const TEST: string;
}
