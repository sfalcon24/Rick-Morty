import {useCallback} from 'react';
import {Text} from 'react-native';
import {action} from '@storybook/addon-actions';
import CharacterCard from 'common/ui/components/Cards/CharacterCard';
import Header from 'common/ui/components/Header';
import StatusBar from 'common/ui/components/StatusBar';
import theme from 'common/ui/theme';
import {Container, List} from './styles';
import type {RenderItemParams} from './types';
import useViewModelDefault from './viewmodel';

export const Character = ({useViewModel = useViewModelDefault}) => {
  const {loading, error, apiData} = useViewModel();

  const renderItem = useCallback(
    ({item}: RenderItemParams) => (
      <CharacterCard
        image={item.image}
        status={item.status}
        name={item.name}
        id={''}
      />
    ),
    [],
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  return (
    <Container>
      <StatusBar />
      <Header
        variant="large"
        backgroundColor={theme.colors.gray5}
        title="Character"
        onPressRight={action('onPressRight')}
        rightTextButton="Filter"
        rightIcon={true}
      />
      <List
        data={apiData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </Container>
  );
};
