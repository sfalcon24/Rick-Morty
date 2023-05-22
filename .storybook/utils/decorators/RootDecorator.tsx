import type { ReactNode } from 'react';
import React from 'react';
import type { DecoratorFunction } from '@storybook/client-api/dist/ts3.9/types';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../src/theme';

const RootDecorator: DecoratorFunction<ReactNode> = (story) => {
  const storyComponent = story();

  return (
    <ThemeProvider theme={theme}>
      {storyComponent}
    </ThemeProvider>
  );
};

export default RootDecorator;
