import {ThemeProvider} from 'styled-components/native';
import theme from 'theme';

const wrapWithTheme = (children: JSX.Element) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default wrapWithTheme;
