import DropDownIconSvg from '@assets/svgs/DropDownIcon';
import Text from '@components/Text';
import { color } from '@styles/colorConstant';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import GoogleAPIModalView from './GoogleAPIModalView';
import { styles } from './styles';

const GooglePlacesAddressApi = ({
  error,
  labelText,
  title,
  placeholder,
  modalLabel,
  onChangeText,
  countryCode,
  value,
  errorShow,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [wasOnFocus, setWasOnFocus] = useState(false);

  return (
    <View>
      <Text
        color={color.blackBorderColor}
        size={SIZE.SMALLEST}
        fontFamily={FONT_FAMILY.SEMI_BOLD}
        customStyle={styles.TextWrapper}>
        {labelText}
      </Text>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setModalVisible(true);
          setWasOnFocus(true);
        }}>
        <View style={styles.titleTextStyle}>
          <Text
            size={SIZE.XXSMALL}
            fontFamily={FONT_FAMILY.REGULAR}
            color={title === '' ? color.TextColor : color.black}
            customStyle={styles.TextWrapper}>
            {title !== '' ? title : placeholder}
          </Text>
        </View>

        <View style={styles.dropDownIconStyle}>
          <DropDownIconSvg width={10} height={10} />
        </View>
      </TouchableOpacity>

      <View style={styles.TextWrapper}>
        <Text
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.XSMALLEST}
          color={
            (error && wasOnFocus) || errorShow ? color.pinkRed : color.white
          }>
          {error}
        </Text>
      </View>

      <GoogleAPIModalView
        modalLabel={modalLabel}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        onChangeText={onChangeText}
        countryCode={countryCode}
        value={value}
      />
    </View>
  );
};

export default GooglePlacesAddressApi;
