import type {FC} from 'react';
import {memo, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {action} from '@storybook/addon-actions';
import FilterSelection from 'common/ui/components/FilterSelectors/FilterSelection';
import FilterSimple from 'common/ui/components/FilterSelectors/FilterSimple';
import Header from 'common/ui/components/Header';
import StatusBar from 'common/ui/components/StatusBar';
import theme from 'common/ui/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {selectorsGender, selectorsStatus} from './constants';
import {Container, SelectorsContainer} from './styles';
import type {Props} from './types';

export const CharacterFilter: FC<Props> = ({}) => {
  const navigation = useNavigation();

  const navigateToSearchFilter = (title: string) => {
    navigation.navigate('SearchFilter', {title});
  };

  const [anyCheckboxChecked, setAnyCheckboxChecked] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);
  // const [selectedStatus, setSelectedStatus] = useState(null);
  // const [selectedGender, setSelectedGender] = useState(null);

  const filterSelectionRefs = useRef([]);

  const clearAllCheckboxes = () => {
    filterSelectionRefs.current.forEach(ref => {
      ref && ref.clearCheckboxes && ref.clearCheckboxes();
    });
  };

  const handleClearFilter = () => {
    // Implementar la lógica para limpiar los filtros
    // Ejemplo:
    setAnyCheckboxChecked(false);
    setSelectedStatus(null);
    setSelectedGender(null);
    setShowClearButton(false); // Ocultar el botón "CLEAR"
    clearAllCheckboxes();
  };

  return (
    <ScrollView>
      <Container>
        <StatusBar />
        <Header
          variant="default"
          backgroundColor={theme.colors.white}
          title="Filter"
          onPressRight={action('onPressRight')}
          rightButton="APPLY"
          rightIcon={false}
          leftTextButton={showClearButton ? 'Clear' : undefined}
          onPressLeft={handleClearFilter}
        />
        <SelectorsContainer>
          <FilterSimple
            title="Name"
            subtitle="Give a name"
            onPressLeft={() => setShowClearButton(true)}
            onPressRight={() => navigateToSearchFilter('Name')}
          />
          <FilterSimple
            title="Species"
            subtitle="Select one"
            onPressRight={() => navigateToSearchFilter('Species')}
          />
          <FilterSelection
            title="Status"
            selector={selectorsStatus}
            anyCheckboxChecked={anyCheckboxChecked}
          />
          <FilterSelection
            title="Gender"
            selector={selectorsGender}
            anyCheckboxChecked={anyCheckboxChecked}
          />
        </SelectorsContainer>
      </Container>
    </ScrollView>
  );
};

export default memo(CharacterFilter);
