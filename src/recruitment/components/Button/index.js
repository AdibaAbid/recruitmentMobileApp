import React from 'react';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Button = ({
  onPress,
  label,
  isBackgroundColor,
  isBorderColor,
  textColor,
  disabled,
  borderRadius,
  height,
  isUppercase,
  width,
  isBeforeTextIcon,
  isAfterTextIcon,
  IconSvg,
  loader,
  loading,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress || null}
      style={[
        {
          backgroundColor: isBackgroundColor,
          borderColor: isBorderColor,
          borderRadius,
          height,
          width,
          disabled,
        },
        styles.BtnContainer,
        { ...rest },
      ]}>
      {isBeforeTextIcon && (
        <View style={styles.IconSvgView}>
          <IconSvg />
        </View>
      )}

      <Text
        customStyle={[
          {
            textTransform: isUppercase ? 'uppercase' : 'none',
          },
          styles.TextWrapper,
        ]}
        alignCenter
        size={rest.size ? rest.size : SIZE.XXXSMALL}
        fontFamily={FONT_FAMILY.MEDIUM}
        numberOfLines={2}
        color={textColor}>
        {label}
        {isAfterTextIcon && (
          <View style={styles.IconView}>
            <IconSvg />
          </View>
        )}
      </Text>
      {loading && <View style={styles.LoaderView}>{loader}</View>}
    </TouchableOpacity>
  );
};

export default Button;
