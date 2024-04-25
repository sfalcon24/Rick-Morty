import {useState} from 'react';
import {action} from '@storybook/addon-actions';
import FilterSelection from 'common/ui/components/FilterSelectors/FilterSelection';
import type {Option} from 'common/ui/components/FilterSelectors/FilterSelection/types';
import FilterSimple from 'common/ui/components/FilterSelectors/FilterSimple';
import Header from 'common/ui/components/Header';
import StatusBar from 'common/ui/components/StatusBar';
import theme from 'common/ui/theme';
import {t} from 'i18next';
import {ScrollView} from 'react-native-gesture-handler';
import {STATUS_OPTIONS, GENDER_OPTIONS} from './constants';
import {Container, SelectorsContainer} from './styles';
import type {Props} from './types';

export const CharacterFilter: Props = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [isNameActive, setIsNameActive] = useState(false);
  const [isSpeciesActive, setIsSpeciesActive] = useState(false);
  const [statusOptions, setStatusOptions] = useState<Option[]>(STATUS_OPTIONS);
  const [genderOptions, setGenderOptions] = useState<Option[]>(GENDER_OPTIONS);

  const handleNamePress = () => {
    setIsNameActive(!isNameActive);
    setShowClearButton(true);
  };

  const handleSpeciesPress = () => {
    setIsSpeciesActive(!isSpeciesActive);
    setShowClearButton(true);
  };

  const handleStatusOptionPress = (value: string) => {
    const updatedOptions = statusOptions.map(option => ({
      ...option,
      isSelected: option.value === value,
    }));
    setStatusOptions(updatedOptions);
    setShowClearButton(true);
  };

  const handleGenderOptionPress = (value: string) => {
    const updatedOptions = genderOptions.map(option => ({
      ...option,
      isSelected: option.value === value,
    }));
    setGenderOptions(updatedOptions);
    setShowClearButton(true);
  };

  const handleClearFilter = () => {
    setShowClearButton(false);
    setIsNameActive(false);
    setIsSpeciesActive(false);
    setStatusOptions(
      STATUS_OPTIONS.map(option => ({...option, isSelected: false})),
    );
    setGenderOptions(
      GENDER_OPTIONS.map(option => ({...option, isSelected: false})),
    );

    console.log('Filter cleared');
  };

  return (
    <ScrollView>
      <Container>
        <StatusBar />
        <Header
          variant="default"
          backgroundColor={theme.colors.white}
          title={t('actions.action/filter') ?? ''}
          onPressRight={action('onPressRight')}
          rightButton={t('actions.action/apply') ?? ''}
          rightIcon={false}
          leftTextButton={showClearButton ? 'Clear' : undefined}
          onPressLeft={handleClearFilter}
        />
        <SelectorsContainer>
          <FilterSimple
            title={t('common.name')}
            onPress={handleNamePress}
            isChecked={isNameActive}
          />
          <FilterSimple
            title={t('common.species')}
            onPress={handleSpeciesPress}
            isChecked={isSpeciesActive}
          />
          <FilterSelection
            title={t('common.status')}
            options={statusOptions}
            onPress={handleStatusOptionPress}
          />
          <FilterSelection
            title={t('common.gender')}
            options={genderOptions}
            onPress={handleGenderOptionPress}
          />
        </SelectorsContainer>
      </Container>
    </ScrollView>
  );
};
