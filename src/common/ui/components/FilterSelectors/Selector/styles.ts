import styled from 'styled-components/native';
import IconBase from 'common/ui/components/Icons';
import TextBase from 'common/ui/components/Text';

export const Container = styled.View`
  flex-direction: row;
  height: 44px;
  padding: 0 16px;
  align-items: center;
`;

export const Icon = styled(IconBase)``;

export const Text = styled(TextBase).attrs({
  variant: 'body17',
})`
  margin-left: 16px;
`;
