import React from 'react';
import { View } from 'react-native';
import { theme } from '../../../../../../theme/index';
import StatusBarComponent from '@components/StatusBarComponent';
import TextComponent from '../../../../../../components/text';
import sizes from '../../../../../../globals/sizes';
import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import Button from '../../../../../../components/button';
import { defaultStyles } from '../../../../../../globals/defaults';

import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { SCREENS } from '@constants/strings';

const QuizModule = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      <View style={styles.container}>
        <TextComponent
          size={sizes.L}
          family={FontFamilyEnum.REGULAR}
          color={theme.textDefault}
          title={'How to Upload a Video'}
          customStyles={styles.uploadTxt}
        />
        <View style={styles.innerTxt}>
          <TextComponent
            size={sizes.XS}
            center
            family={FontFamilyEnum.REGULAR}
            color={theme.textDark}
            title={'Quiz 1'}
          />
          <TextComponent
            size={sizes.XS}
            center
            family={FontFamilyEnum.REGULAR}
            color={theme.textDark}
            title={'3 Questions'}
            customStyles={styles.innerleftTxt}
          />
        </View>
        <View style={styles.btnView}>
          <Button
            title={'Start Quiz'}
            size={sizes.S}
            family={FontFamilyEnum.SEMIBOLD}
            color={theme.bgTheme}
            handlePress={() => {
              navigation.navigate(SCREENS.TEACHER_UPLOAD_QUIZ);
            }}
            customStyles={[defaultStyles.btnFilled]}
          />
        </View>
      </View>
    </>
  );
};

export default QuizModule;
