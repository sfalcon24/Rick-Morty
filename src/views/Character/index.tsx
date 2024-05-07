import {useCallback} from 'react';
import {action} from '@storybook/addon-actions';
import CharacterCard from 'common/ui/components/Cards/CharacterCard';
import Header from 'common/ui/components/Header';
import StatusBar from 'common/ui/components/StatusBar';
import theme from 'common/ui/theme';
import {t} from 'i18next';
import {Checking, Container, List} from './styles';
import type {RenderItemParams} from './types';
import useViewModelDefault from './viewmodel';

export const Character = ({useViewModel = useViewModelDefault}) => {
  const {characters, navigation, loading, error} = useViewModel();

  const renderItem = useCallback(
    ({item}: RenderItemParams) => (
      <CharacterCard
        image={item.image}
        status={item.status}
        name={item.name}
        id={item.id}
        onPress={() =>
          navigation.navigate('CharacterDetail', {character: item})
        }
      />
    ),
    [navigation],
  );

  if (loading) {
    return <Checking>{t('common.loading')}</Checking>;
  }

  if (error) {
    return (
      <Checking>
        {t('common.error')} {error.message}
      </Checking>
    );
  }
  return (
    <Container>
      <StatusBar />
      <Header
        variant="large"
        backgroundColor={theme.colors.gray6}
        title={t('screens.character') ?? ''}
        onPressRight={action('onPressRight')}
        rightTextButton={t('actions.action/filter') ?? ''}
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
