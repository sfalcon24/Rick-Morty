import {useState} from 'react';
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

export const CharacterFilter: Props = () => {
  const [showClearButton, setShowClearButton] = useState(false);

  const [isNameChecked, setIsNameChecked] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string | boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string | boolean>(false);
  const [isSpeciesChecked, setIsSpeciesChecked] = useState(false);

  const handleClearFilter = () => {
    setShowClearButton(false);
    setIsNameChecked(false);
    setIsSpeciesChecked(false);
    setSelectedGender(false);
    setSelectedStatus(false);

    console.log('Filter cleared');
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
            onPressLeft={() => {
              setIsNameChecked(!isNameChecked);
              setShowClearButton(true);
            }}
            isChecked={isNameChecked}
            onCheckboxChange={setIsNameChecked}
          />
          <FilterSimple
            title="Species"
            subtitle="Select one"
            onPressLeft={() => {
              setIsSpeciesChecked(!isSpeciesChecked);
              setShowClearButton(true);
            }}
            isChecked={isSpeciesChecked}
            onCheckboxChange={setIsSpeciesChecked}
          />
          <FilterSelection
            title="Status"
            selector={selectorsStatus}
            selectedValue={selectedStatus}
            onValueChange={value => {
              setSelectedStatus(value);
              setShowClearButton(true);
            }}
            onPressLeft={handleClearFilter}
          />
          <FilterSelection
            title="Gender"
            selector={selectorsGender}
            selectedValue={selectedGender}
            onValueChange={value => {
              setSelectedGender(value);
              setShowClearButton(true);
            }}
            onPressLeft={handleClearFilter}
          />
        </SelectorsContainer>
      </Container>
    </ScrollView>
  );
};
