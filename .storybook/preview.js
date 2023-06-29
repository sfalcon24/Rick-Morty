import {ThemeProvider} from 'styled-components/native';
import theme from 'common/ui/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {};
