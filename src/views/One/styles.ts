import styled from 'styled-components/native';
import ButtonBase from 'common/ui/components/Button';
import Text from 'common/ui/components/Text';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
`;

export const TitleText1 = styled(Text).attrs({
  variant: 'headline1',
})`
  color: ${({theme}) => theme.colors.indigo};
`;

export const Button = styled(ButtonBase)`
  margin-top: 20px;
`;
