import type {FC} from 'react';
import {memo} from 'react';
import {action} from '@storybook/addon-actions';
import Header from 'common/ui/components/Header';
import SearchBar from 'common/ui/components/SearchBar';
import StatusBar from 'common/ui/components/StatusBar';
import theme from 'common/ui/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from './styles';
import type {Props} from './types';

export const SearchFilter: FC<Props> = ({}) => {
  const handleClearFilter = () => {};

  return (
    <ScrollView>
      <Container>
        <StatusBar />
        <Header
          variant="default"
          backgroundColor={theme.colors.white}
          title="Name"
          onPressRight={action('onPressRight')}
          leftTextButton="Back"
          leftIcon={true}
          onPressLeft={handleClearFilter}
        />
        <SearchBar />
      </Container>
    </ScrollView>
  );
};

export default memo(SearchFilter);
