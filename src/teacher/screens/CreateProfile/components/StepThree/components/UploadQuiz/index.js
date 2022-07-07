import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import StepIndicator from 'react-native-step-indicator';

import { theme } from '../../../../../../theme';
import StatusBarComponent from '@components/StatusBarComponent';
import Step from './components/Step';
import { SCREENS } from '@constants/strings';

import styles from './styles';

const data = [
  {
    id: '0',
    label: 'Option 1',
    value: 1,
  },
  {
    id: '1',
    label: 'Option 2',
    value: 2,
  },
  {
    id: '2',
    label: 'Option 3',
    value: 3,
  },
];

const indicatorStyles = {
  stepIndicatorSize: 5,
  currentStepIndicatorSize: 5,
  separatorStrokeWidth: 0,
  currentStepStrokeWidth: 0,
  stepStrokeCurrentColor: theme.bgWhite,
  stepStrokeWidth: 0,
  stepStrokeFinishedColor: theme.bgWhite,
  stepStrokeUnFinishedColor: theme.bgWhite,
  separatorFinishedColor: theme.bgWhite,
  separatorUnFinishedColor: theme.bgWhite,
  stepIndicatorFinishedColor: theme.bgWhite,
  stepIndicatorUnFinishedColor: theme.bgWhite,
  stepIndicatorCurrentColor: theme.bgWhite,
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 8,
  currentStepLabelColor: '#7eaec4',
};

const UploadQuiz = () => {
  const navigation = useNavigation();

  const [currentPage, setCurrentPage] = useState(0);

  const onStepPress = position => {
    if (position < currentPage) {
      setCurrentPage(position);
    } else if (position === 0) {
      navigation.navigate(SCREENS.TEACHER_QUIZ_MODULE);
    }
  };

  const steps = [
    {
      id: '0',
      number: 'Question 1',
      question:
        'The graphical user interface used in most computers uses a destop, witth items such as wate basket, folers and a desktop?',
      answers: data,
    },
    {
      id: '1',
      number: 'Question 2',
      question:
        'The graphical user interface used in most computers uses a destop, witth items such as wate basket, folers and a desktop?',
      answers: data,
    },
    {
      id: '2',
      number: 'Question 3',
      question:
        'The graphical user interface used in most computers uses a destop, witth items such as wate basket, folers and a desktop?',
      answers: data,
    },
  ];
  return (
    <>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      <View style={styles.container}>
        <StepIndicator
          stepCount={3}
          customStyles={indicatorStyles}
          currentPosition={currentPage}
          onPress={onStepPress}
        />
        <View style={styles.ParentView}>
          <Step
            data={steps[currentPage]}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalLength={steps.length}
          />
        </View>
      </View>
    </>
  );
};

export default UploadQuiz;
