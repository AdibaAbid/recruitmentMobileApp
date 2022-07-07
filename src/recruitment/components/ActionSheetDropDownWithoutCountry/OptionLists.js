import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import CheckIcon from '@assets/icons/CheckIcon';

const OptionLists = ({
  options,
  setModalVisible,
  multiple = false,
  selected,
  setSelected,
  onChangeBlogger,
  isBlogger,
  changeOtherAboutUs,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          changeOtherAboutUs && changeOtherAboutUs('');
          changeOtherAboutUs && isBlogger && onChangeBlogger('');

          isBlogger && onChangeBlogger(options.label);
          setSelected(options);

          if (!multiple) {
            setModalVisible(false);
          }
        }}>
        <View style={styles().modalLabelView}>
          <View style={styles().TextViewWrapper}>
            <Text
              color={color.blackBorderColor}
              size={SIZE.XXSMALL}
              numberOfLines={0}
              fontFamily={selected ? FONT_FAMILY.BOLD : FONT_FAMILY.REGULAR}>
              {options.label}
            </Text>
            {selected && <CheckIcon />}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default OptionLists;
