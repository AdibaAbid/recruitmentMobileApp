import React, { useState } from 'react';
import { styles } from './style';
import Text from '@components/Text';
import DropDownIconSvg from '@assets/svgs/DropDownIcon';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import ModalView from './ModalView';
import { TouchableOpacity, View } from 'react-native';

const ActionSheetDropDownWithoutCountry = ({
  labelText,
  title,
  placeholder,
  onChangeText,
  error,
  modalLabel,
  data,
  searchBar,
  width,
  onChangeBlogger,
  isBlogger,
  changeOtherAboutUs,
  multiple,
  preSelected,
  addButtonText,
  errorShow,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [wasOnFocus, setWasOnFocus] = useState(false);

  return (
    <View style={styles().parentContainerStyle}>
      <Text
        color={color.blackBorderColor}
        size={SIZE.SMALLEST}
        numberOfLines={0}
        customStyle={styles().TextWrapper}
        fontFamily={FONT_FAMILY.SEMI_BOLD}>
        {labelText}
      </Text>
      <TouchableOpacity
        style={styles(width).container}
        onPress={() => {
          setModalVisible(true);
          setWasOnFocus(true);
        }}>
        <View style={styles().SVGView}>
          {typeof title === 'string' || typeof title === 'number' ? (
            <Text
              size={SIZE.XXSMALL}
              fontFamily={FONT_FAMILY.REGULAR}
              color={title === '' ? color.TextColor : color.black}
              customStyle={styles().TextWrapperTitle}>
              {title !== '' ? title : placeholder}
            </Text>
          ) : (
            <View style={styles().MultiSelectView}>
              {title &&
                title.length > 0 &&
                title.map(
                  (item, index) =>
                    index < 2 && (
                      <View style={styles().TextView}>
                        <Text
                          color={color.white}
                          size={SIZE.SMALLEST}
                          numberOfLines={0}
                          customStyle={styles().TextWrapper}
                          fontFamily={FONT_FAMILY.REGULAR}>
                          {item}
                        </Text>
                      </View>
                    ),
                )}

              {title && title?.length > 2 && (
                <View style={styles().TextView}>
                  <Text
                    color={color.white}
                    size={SIZE.SMALLEST}
                    numberOfLines={0}
                    customStyle={styles().TextWrapper}
                    fontFamily={FONT_FAMILY.MEDIUM}>
                    {`+ ${title.length - 2 || 0} more`}
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>

        <View style={styles().DropDownSvgView}>
          <DropDownIconSvg width={10} height={10} />
        </View>
      </TouchableOpacity>

      <View style={styles().ErrorView}>
        <Text
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.XSMALLEST}
          color={
            (error && wasOnFocus) || errorShow ? color.pinkRed : color.white
          }>
          {error}
        </Text>
      </View>

      {modalVisible && (
        <ModalView
          modalLabel={modalLabel}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          data={data}
          multiple={multiple}
          onChangeText={onChangeText}
          searchBarShow={searchBar}
          preSelected={preSelected}
          onChangeBlogger={onChangeBlogger}
          isBlogger={isBlogger}
          changeOtherAboutUs={changeOtherAboutUs}
          addButtonText={addButtonText}
        />
      )}
    </View>
  );
};

export default ActionSheetDropDownWithoutCountry;
