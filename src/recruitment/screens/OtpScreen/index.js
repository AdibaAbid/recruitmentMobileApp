import React from 'react';
import PropTypes from 'prop-types';
import OtpScreenView from './OtpScreenView';
import { View } from 'react-native';

import StatusBarComponent from '@components/StatusBarComponent';
import { theme } from '../../../teacher/theme/';

import styles from './styles';

const OtpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBarComponent statusBarColor={theme.bgWhite} isBarStyle={false} />
      <OtpScreenView navigation={navigation} />
    </View>
  );
};

OtpScreen.navigationOptions = () => ({ header: null });

OtpScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OtpScreen;
