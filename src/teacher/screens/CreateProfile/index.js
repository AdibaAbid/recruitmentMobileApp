import React, { useState } from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { theme } from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepOne from './components/StepOne';
import StatusBarComponent from '@components/StatusBarComponent';

const indicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: theme.bgTheme,
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: theme.bgTheme,
  stepStrokeUnFinishedColor: theme.borderDark,
  separatorFinishedColor: theme.bgTheme,
  separatorUnFinishedColor: theme.borderDark,
  stepIndicatorFinishedColor: theme.bgTheme,
  stepIndicatorUnFinishedColor: theme.bgWhite,
  stepIndicatorCurrentColor: theme.bgWhite,
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 18,
  currentStepLabelColor: '#7eaec4',
};

const getStepIndicatorIconConfig = ({ stepStatus }) => {
  let iconConfig;
  stepStatus === 'finished'
    ? (iconConfig = {
        name: 'md-checkmark-sharp',
        color: theme.bgWhite,
        size: 15,
      })
    : '';
  return iconConfig;
};

const CreateProfile = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const onStepPress = position => {
    setCurrentPage(position);
  };
  const renderStepIndicator = params => (
    <Icon {...getStepIndicatorIconConfig(params)} />
  );

  const steps = [
    <StepOne setCurrentPage={setCurrentPage} currentPage={currentPage} />,
    <StepTwo setCurrentPage={setCurrentPage} currentPage={currentPage} />,
    <StepThree />,
  ];
  return (
    <>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={3}
            customStyles={indicatorStyles}
            renderStepIndicator={renderStepIndicator}
            currentPosition={currentPage}
            onPress={onStepPress}
          />
        </View>
      </View>

      <View style={styles.ParentView}>{steps[currentPage]}</View>
    </>
  );
};

export default CreateProfile;
