import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import TextComponent from '../text';
import { defaultConfig } from '../../globals';
import checkmark from '../../assets/svgs/checkmark';
import { theme } from '../../theme';
import { getLineHeight, HP } from '../../constants';

import styles from './styles';

const SmallSelectButton = ({
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
            {description && (
              <TextComponent
                color={checked ? theme.textDark : theme.textLight}
                customStyles={[
                  getLineHeight(16),
                  {
                    paddingVertical: HP('0.5'),
                  },
                ]}
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
            <SvgXml xml={checkmark} width="60%" height="60%" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SmallSelectButton;
