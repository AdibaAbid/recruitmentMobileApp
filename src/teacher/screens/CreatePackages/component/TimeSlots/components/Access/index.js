import React from 'react';
import { View } from 'react-native';

import { theme } from '../../../../../../theme';
import TextComponent from '../../../../../../components/text';
import { Size } from '../../../../../../globals';
import RadioButton from '../AddNewSlots/components/RadioButton';
import { FontFamilyEnum } from '../../../../../../constants/FontFamily';

import styles from '../../../../styles';

const Access = () => {
  return (
    <View style={styles.accessContainer}>
      <TextComponent
        title={'Access'}
        size={Size.DEFAULT}
        color={theme.bgTheme}
        family={FontFamilyEnum.REGULAR}
      />
      <View style={styles.privateView}>
        <TextComponent
          title={'Make course private?'}
          size={Size.S}
          color={theme.textNormal}
          family={FontFamilyEnum.REGULAR}
        />
        <View style={styles.radioBtn}>
          <RadioButton />
        </View>
      </View>
    </View>
  );
};

export default Access;
