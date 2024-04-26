import {action} from '@storybook/addon-actions';
import FilterSelection from 'common/ui/components/FilterSelectors/FilterSelection';
import FilterSimple from 'common/ui/components/FilterSelectors/FilterSimple';
import Header from 'common/ui/components/Header';
import StatusBar from 'common/ui/components/StatusBar';
import theme from 'common/ui/theme';
import {t} from 'i18next';
import {ScrollView} from 'react-native-gesture-handler';
import {Container, SelectorsContainer} from './styles';
import useCharacterFilterViewModel from './viewmodel';

export const CharacterFilter = () => {
  const {
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
  } = useCharacterFilterViewModel();

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
