import React from 'react';

import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import { color } from '@styles/colorConstant';
import { View } from 'react-native';
import styles from './styles';

const TextWithHeading = ({
  title,
  values,
  numberOfLines,
  width,
  isBeforeTextIcon,
  IconSvg,
  ...rest
}) => {
  return (
    <View style={[styles.InputContainer, { width: width }]}>
      <Text
        fontFamily={FONT_FAMILY.MEDIUM}
        numberOfLines={numberOfLines}
        color={color.blackBorderColor}>
        {title}
      </Text>

      <View style={styles.TextBoxContainer}>
        {isBeforeTextIcon && (
          <View style={styles.IconSvgView}>
            <IconSvg />
          </View>
        )}
        <Text
          fontFamily={FONT_FAMILY.REGULAR}
          size={SIZE.XXXXSMALL}
          numberOfLines={numberOfLines}
          color={color.black}>
          {values}
        </Text>
      </View>
    </View>
  );
};

export default TextWithHeading;
