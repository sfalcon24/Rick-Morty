import styled from 'styled-components/native';
import IconBase from 'common/ui/components/Icons';
import Text from 'common/ui/components/Text';

export const Container = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-color: ${({theme}) => theme.colors.gray4};
`;

export const Main = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const LeftAction = styled.View`
  align-items: flex-start;
  flex: 1;
  margin-left: 5px;
`;

export const Center = styled.View`
  flex: 6;
`;

export const RightAction = styled.View`
  align-items: flex-end;
  flex: 1;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})``;

export const Subtitle = styled(Text).attrs(({theme}) => ({
  variant: 'body15-semibold',
  color: theme.colors.gray4,
}))``;

export const Icon = styled(IconBase)``;
