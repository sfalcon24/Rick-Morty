import type {FC} from 'react';
import {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {action} from '@storybook/addon-actions';
import Header from 'common/ui/components/Header';
import SearchBar from 'common/ui/components/SearchBar';
import StatusBar from 'common/ui/components/StatusBar';
import theme from 'common/ui/theme';
import type {SearchFilterProps} from 'core/navigation/types';
import {t} from 'i18next';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from './styles';

export const SearchFilter: FC<SearchFilterProps> = ({}) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container>
        <StatusBar />
        <Header
          variant="default"
          backgroundColor={theme.colors.white}
          title={t('actions.action/search') ?? ''}
          onPressRight={action('onPressRight')}
          leftTextButton={t('actions.action/back') ?? ''}
          leftIcon={true}
          onPressLeft={() => navigation.navigate('CharacterFilter')}
        />
        <SearchBar />
      </Container>
    </ScrollView>
  );
};

export default memo(SearchFilter);
