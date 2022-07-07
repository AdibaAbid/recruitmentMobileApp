import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { theme } from '../../../../theme';
import package_icon from '../../assets/svg/package_icon';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import Button from '@teacher/button';
import { useNavigation } from '@react-navigation/core';
import { SCREENS } from '@constants/strings';

import styles from './styles';
import { FontFamilyEnum } from '../../../../constants/FontFamily';

const NotFoundPackage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SvgXml xml={package_icon} />

      <View style={styles.midContainer}>
        <TextComponent
          title={'No package found'}
          size={Size.S}
          family={FontFamilyEnum.REGULAR}
          center
          color={theme.bgTheme}
          customStyles={styles.textWrap}
        />

        <TextComponent
          title={
            'Creating a package is your first step towards success! It helps us match you to the right students, fast.\nHappy Teaching!'
          }
          center
          size={Size.S}
          color={theme.textLight}
        />
      </View>

      <Button
        title={'Create Package'}
        center
        size={Size.S}
        family={FontFamilyEnum.MEDIUM}
        color={theme.bgTheme}
        handlePress={() => navigation.navigate(SCREENS.TEACHER_CREATE_PACKAGE)}
        customStyles={styles.customBtnStyle}
      />
    </View>
  );
};

export default NotFoundPackage;
