import styled from 'styled-components/native';
import type {Props} from './types';

export const Container = styled.View<Props>`
  height: 1px;
  background-color: ${({theme, light}) =>
    light ? theme.colors.white : theme.colors.black};
`;
