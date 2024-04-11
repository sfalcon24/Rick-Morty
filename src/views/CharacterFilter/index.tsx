import {useState} from 'react';
import {action} from '@storybook/addon-actions';
import FilterSelection from 'common/ui/components/FilterSelectors/FilterSelection';
import FilterSimple from 'common/ui/components/FilterSelectors/FilterSimple';
import Selector from 'common/ui/components/FilterSelectors/Selector';
import Header from 'common/ui/components/Header';
import StatusBar from 'common/ui/components/StatusBar';
import theme from 'common/ui/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {selectorsGender} from './constants';
import {Container, SelectorsContainer} from './styles';
import type {Props} from './types';

export const CharacterFilter: Props = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  // const [isFilterSimpleChecked, setIsFilterSimpleChecked] = useState(false);

  const [isNameChecked, setIsNameChecked] = useState(false);
  const [isSpeciesChecked, setIsSpeciesChecked] = useState(false);
  const [isStatusChecked, setIsStatusChecked] = useState(false);
  const [isStatusChecked1, setIsStatusChecked1] = useState(false);
  const [isStatusChecked2, setIsStatusChecked2] = useState(false);

  const handleClearFilter = () => {
    setShowClearButton(false);
    setIsNameChecked(false);
    setIsSpeciesChecked(false);
    setIsStatusChecked(false);
    setIsStatusChecked1(false);
    setIsStatusChecked2(false);

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
          <Selector
            title="Status"
            options="asdas"
            // selector={selectorsStatus}
            onPressLeft={() => {
              setIsStatusChecked1(!isStatusChecked1);
              setShowClearButton(true);
            }}
            isChecked={isStatusChecked1}
            onCheckboxChange={setIsStatusChecked1}
          />
          <Selector
            options="asdas"
            // selector={selectorsStatus}
            onPressLeft={() => {
              setIsStatusChecked(!isStatusChecked);
              setShowClearButton(true);
            }}
            isChecked={isStatusChecked}
            onCheckboxChange={setIsStatusChecked}
          />
          <Selector
            options="asdas"
            // selector={selectorsStatus}
            onPressLeft={() => {
              setIsStatusChecked2(!isStatusChecked2);
              setShowClearButton(true);
            }}
            isChecked={isStatusChecked2}
            onCheckboxChange={setIsStatusChecked2}
          />
          {/* <FilterSelection
            title="Status"
            selector={selectorsStatus}
            onPressLeft={() => {
              setIsStatusChecked(!isStatusChecked);
              setShowClearButton(true);
            }}
            isChecked={isStatusChecked}
            onCheckboxChange={setIsStatusChecked}
          /> */}
          <FilterSelection
            title="Gender"
            selector={selectorsGender}
            onPressLeft={() => setShowClearButton(true)}
          />
        </SelectorsContainer>
      </Container>
    </ScrollView>
  );
};
