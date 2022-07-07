import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import TextComponent from '../text';
import { defaultConfig } from '../../globals';
import checkmark from '../../assets/svgs/checkmark';
import { theme } from '../../theme';
import { getLineHeight } from '../../constants';

import styles from './styles';

const SelectButton = ({
  title,
  width = '100%',
  handlePress,
  customStyles,
  lineHeight,
  color,
  size,
  family,
  center = false,
  checked,
  slotsChecked,
  description,
}) => {
  const buttonPress = () => handlePress();
  return (
    <TouchableOpacity
      activeOpacity={defaultConfig.touchOpacity}
      onPress={buttonPress}>
      <View style={[styles.buttonContainer, { width }, customStyles]}>
        {description ? (
          <View style={styles.iconContainer}>
            <TextComponent
              family={family}
              color={color}
              customStyles={lineHeight ? getLineHeight(lineHeight) : {}}
              size={size}
              title={title}
            />

            {description && (
              <TextComponent
                color={theme.textLight}
                customStyles={getLineHeight(19)}
                size={12}
                title={description}
              />
            )}
          </View>
        ) : (
          <TextComponent
            family={family}
            color={color}
            customStyles={lineHeight ? getLineHeight(lineHeight) : {}}
            center={center}
            size={size}
            title={title}
          />
        )}

        {checked && (
          <View style={styles.checkMark}>
            <SvgXml xml={checkmark} />
          </View>
        )}
        {slotsChecked && (
          <View style={styles.slotCheckMark}>
            <SvgXml xml={checkmark} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SelectButton;
