import {action} from '@storybook/addon-actions';
import CharacterCard from 'common/ui/components/Cards/CharacterCard';
import Header from 'common/ui/components/Header';
import StatusBar from 'common/ui/components/StatusBar';
// import type {Props} from './types';
import {Container, List} from './styles';
import useViewModelDefault from './viewmodel';

const Character = ({useViewModel = useViewModelDefault}) => {
  const {apiData} = useViewModel();
  console.log(apiData);
  return (
    <Container>
      <StatusBar />
      <Header
        variant="large"
        title="Title"
        onPressRight={action('onPressRight')}
        rightTextButton="textButton"
        rightIcon={false}
      />
      <List
        data={apiData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CharacterCard
            image={item.image}
            status="Alive"
            name={item.name}
            id={''}
          />
        )}
        numColumns={2}
      />
    </Container>
  );
};

export default Character;
