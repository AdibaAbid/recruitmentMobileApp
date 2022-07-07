import React from 'react';

import { View, TouchableOpacity } from 'react-native';

import { defaultConfig } from '../../globals/index';
import { getLineHeight } from '../../constants/index';
import TextComponent from '../text';
import { theme } from '../../theme/index';
import { SvgXml } from 'react-native-svg';
import { FontFamilyEnum } from '../../constants/FontFamily';
import chevronRight from '../assets/svgs/chevronRight';
import sizes from '../../globals/sizes';

import styles from './styles';

const SelectPicker = ({ handlePress, title, description, customStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.shadow}
      activeOpacity={defaultConfig.touchOpacity}>
      <View style={[styles.pickerContainer, customStyles]}>
        <View style={styles.selectText}>
          {title && (
            <TextComponent
              title={title}
              size={sizes.XS}
              customStyles={getLineHeight(18)}
              color={theme.textDark}
            />
          )}

          <TextComponent
            title={description}
            size={sizes.S}
            numLines={1}
            family={title ? FontFamilyEnum.MEDIUM : FontFamilyEnum.REGULAR}
            customStyles={getLineHeight(21)}
            color={theme.textDark}
          />
        </View>

        <View>
          <SvgXml xml={chevronRight} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SelectPicker;
