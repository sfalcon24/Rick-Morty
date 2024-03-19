import styled from 'styled-components/native';
import type {Props} from './types';

export const Container = styled.View<Props>`
  height: 1px;
  background-color: ${({theme}) => theme.colors.gray4};
  align-self: flex-end;
`;
