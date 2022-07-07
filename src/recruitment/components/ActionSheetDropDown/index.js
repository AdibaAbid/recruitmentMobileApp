import React, { useState } from 'react';
import { styles } from './style';
import Text from '@components/Text';
import DropDownIconSvg from '@assets/svgs/DropDownIcon';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import ModalView from './ModalView';
import Flag from 'react-native-flags';
import { TouchableOpacity, View } from 'react-native';

const ActionSheetDropDown = ({
  labelText,
  title,
  placeholder,
  onChangeText,
  onChangeCode,
  ChangeCity,
  error,
  modalLabel,
  data,
  showFlag,
  searchBar,
  countryCode,
  ChangeArea,
  errorShow,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [wasOnFocus, setWasOnFocus] = useState(false);
  const [flag, setFlag] = useState();

  return (
    <View style={styles.parentContainerStyle}>
      <Text
        color={color.blackBorderColor}
        size={SIZE.SMALLEST}
        fontFamily={FONT_FAMILY.SEMI_BOLD}
        customStyle={styles.textWrapper}>
        {labelText}
      </Text>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setModalVisible(true);
          setWasOnFocus(true);
        }}>
        <View style={styles.SVGView}>
          {flag && showFlag ? (
            <Flag code={flag} size={24} type={'flat'} />
          ) : (
            !countryCode == '' && (
              <Flag code={countryCode} size={24} type={'flat'} />
            )
          )}

          <Text
            size={SIZE.XXSMALL}
            fontFamily={FONT_FAMILY.REGULAR}
            color={title === '' ? color.TextColor : color.black}
            customStyle={styles.TextWrapperPlaceholder}>
            {title !== '' ? title : placeholder}
          </Text>
        </View>

        <View style={styles.DropDownSvgView}>
          <DropDownIconSvg width={10} height={10} />
        </View>
      </TouchableOpacity>

      <View style={styles.ErrorView}>
        <Text
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.XSMALLEST}
          color={
            (error && wasOnFocus && countryCode === '') || errorShow
              ? color.pinkRed
              : color.white
          }>
          {error}
        </Text>
      </View>

      <ModalView
        modalLabel={modalLabel}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setText={countryCode}
        data={data}
        setFlag={setFlag}
        onChangeText={onChangeText}
        showFlag={showFlag}
        searchBarShow={searchBar}
        onChangeCode={onChangeCode}
        ChangeCity={ChangeCity}
        ChangeArea={ChangeArea}
      />
    </View>
  );
};

export default ActionSheetDropDown;
