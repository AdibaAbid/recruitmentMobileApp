import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { color } from '@styles/colorConstant';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';

const LinkButton = ({ onPress, label, isUnderlined, ...rest }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        },
        { ...rest },
      ]}>
      <Text
        size={SIZE.SMALLEST}
        isUnderlined={isUnderlined}
        fontFamily={FONT_FAMILY.SEMI_BOLD}
        customStyle={{
          margintop: Platform.OS === 'ios' ? 5 : 0,
        }}
        color={color.blackBorderColor}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
