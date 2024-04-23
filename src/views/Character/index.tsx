import {useCallback} from 'react';
import {Text} from 'react-native';
import {action} from '@storybook/addon-actions';
import CharacterCard from 'common/ui/components/Cards/CharacterCard';
import Header from 'common/ui/components/Header';
import StatusBar from 'common/ui/components/StatusBar';
import theme from 'common/ui/theme';
import {t} from 'i18next';
import {Container, List} from './styles';
import type {RenderItemParams} from './types';
import useViewModelDefault from './viewmodel';

export const Character = ({useViewModel = useViewModelDefault}) => {
  const {characters, loading, error} = useViewModel();

  const renderItem = useCallback(
    ({item}: RenderItemParams) => (
      <CharacterCard
        image={item.image}
        status={item.status}
        name={item.name}
        id={'item.id'}
      />
    ),
    [],
  );

  if (loading) {
    return <Text>{t('common:loading')}</Text>;
  }

  if (error) {
    return (
      <Text>
        {t('common:error')} {error.message}
      </Text>
    );
  }
  return (
    <Container>
      <StatusBar />
      <Header
        variant="large"
        backgroundColor={theme.colors.gray6}
        title="Character"
        onPressRight={action('onPressRight')}
        rightTextButton="Filter"
        rightIcon={false}
      />
      <List
        data={characters}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </Container>
  );
};
