import styled from 'styled-components/native';
import {WIDTH} from './constants';
import type {ContainerProps} from './types';

export const Container = styled.View<ContainerProps>`
  height: 1px;
  width: ${({variant}) => WIDTH[variant]}px;
  background-color: ${({theme}) => theme.colors.gray4};
  align-self: flex-end;
`;
