import env from 'react-native-config';

const environment = env.ENVIRONMENT;

export const config = {
  environment,
};

export type Config = typeof config;
