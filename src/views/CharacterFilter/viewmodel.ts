import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import type {Option} from 'common/ui/components/FilterSelectors/FilterSelection/types';
import {STATUS_OPTIONS, GENDER_OPTIONS} from './constants';

const useCharacterFilterViewModel = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [isNameActive, setIsNameActive] = useState(false);
  const [isSpeciesActive, setIsSpeciesActive] = useState(false);
  const [statusOptions, setStatusOptions] = useState<Option[]>(STATUS_OPTIONS);
  const [genderOptions, setGenderOptions] = useState<Option[]>(GENDER_OPTIONS);
  const navigation = useNavigation();

  const handleNamePress = () => {
    setIsNameActive(!isNameActive);
    setShowClearButton(true);
    navigation.navigate('SearchFilter', {title: 'Search'});
  };

  const handleSpeciesPress = () => {
    setIsSpeciesActive(!isSpeciesActive);
    setShowClearButton(true);
    navigation.navigate('SearchFilter', {title: 'Search'});
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
  };

  return {
    showClearButton,
    isNameActive,
    isSpeciesActive,
    statusOptions,
    genderOptions,
    handleNamePress,
    handleSpeciesPress,
    handleStatusOptionPress,
    handleGenderOptionPress,
    handleClearFilter,
  };
};

export default useCharacterFilterViewModel;
