import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SectionDetail from 'common/ui/components/Detail/SectionDetail';
import Header from 'common/ui/components/Header';
import theme from 'common/ui/theme';
import {t} from 'i18next';
import {ScrollView} from 'react-native-gesture-handler';
import {informationOptions, episodesOptions} from './mock';
import {
  BackgroundImage,
  Container,
  Image,
  ImagesProfile,
  Name,
  PerfilContainer,
  Species,
  Status,
  TextProfile,
} from './styles';

export const CharacterDetail = ({}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Header
            variant="default"
            backgroundColor={theme.colors.gray6}
            title={t('screens.character') ?? ''}
            leftTextButton="Back"
            leftIcon={true}
            onPressLeft={() => navigation.navigate('Character')}
          />
          <PerfilContainer>
            <ImagesProfile>
              <BackgroundImage
                source={require('../../assets/imgs/backgroundImage.png')}
              />
              <Image source={require('../../assets/imgs/imageRick.png')} />
            </ImagesProfile>
            <TextProfile>
              <Status>Alive</Status>
              <Name>Rick Sanchez</Name>
              <Species>HUMAN</Species>
            </TextProfile>
          </PerfilContainer>
          <SectionDetail
            title="Information"
            options={informationOptions}
            onPress={() => {}}
          />
          <SectionDetail
            title="Episodes"
            options={episodesOptions}
            onPress={() => {}}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};
