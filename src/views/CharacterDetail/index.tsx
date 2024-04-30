import {SafeAreaView} from 'react-native';
import SectionDetail from 'common/ui/components/Detail/SectionDetail';
import Header from 'common/ui/components/Header';
import StatusBar from 'common/ui/components/StatusBar';
import theme from 'common/ui/theme';
import {t} from 'i18next';
import {ScrollView} from 'react-native-gesture-handler';
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
  const informationOptions = [
    {
      title: 'Gender',
      subtitle: 'Male',
    },
    {
      title: 'Origin',
      subtitle: 'Earth',
    },
    {
      title: 'Type',
      subtitle: 'Unknown',
    },
    {
      title: 'Location',
      subtitle: 'Earth',
    },
  ];

  const episodesOptions = [
    {
      title: 'S01E01',
      subtitle: 'Pilot',
      date: 'DECEMBER 2, 2013',
    },
    {
      title: 'Origin',
      subtitle: 'Earth',
    },
    {
      title: 'Type',
      subtitle: 'Unknown',
    },
    {
      title: 'Location',
      subtitle: 'Earth',
    },
    {
      title: 'S01E02',
      subtitle: 'Pilot',
      date: 'DECEMBER 2, 2013',
    },
    {
      title: 'S01E03',
      subtitle: 'Pilot',
      date: 'DECEMBER 2, 2013',
    },
  ];

  return (
    <ScrollView>
      <SafeAreaView />
      <Container>
        <StatusBar />
        <Header
          variant="default"
          backgroundColor={theme.colors.gray6}
          title={t('screens.character') ?? ''}
          leftTextButton="Back"
          leftIcon={true}
        />
        <PerfilContainer>
          <Container>
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
          </Container>
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
  );
};
