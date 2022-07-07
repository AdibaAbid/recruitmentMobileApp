import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import PersonalInformation from './components/PersonalInformation';
import ProfessionalInformation from './components/ProfessionalInformation';
import DemoVideo from './components/DemoVideo';
import RetensionContainer from './components/RetensionContainer';
import HeaderComponent from './components/HeaderComponent';
import { theme } from '../../theme';
import StatusBarComponent from '@components/StatusBarComponent';

const MyProfile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.profileView}>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      <HeaderComponent />
      <View style={styles.PersonalInfoContainer}>
        <RetensionContainer />
        <PersonalInformation />
        <ProfessionalInformation />
        <DemoVideo />
      </View>
    </ScrollView>
  );
};

export default MyProfile;
