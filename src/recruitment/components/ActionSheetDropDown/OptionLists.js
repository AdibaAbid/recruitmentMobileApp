import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import CheckIcon from '@assets/icons/CheckIcon';
import Flag from 'react-native-flags';

const OptionLists = ({
  listItems,
  options,
  setModalVisible,
  onChangeText,
  onChangeCode,
  showFlag,
  setFlag,
  setFilteredData,
  setSelected,
  selected,
  ChangeCity,
  ChangeArea,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onChangeText(options.label);
        ChangeCity('');
        ChangeArea('');
        if (showFlag) {
          onChangeCode(options.value);
          setFlag(options.value);
        }
        setFilteredData(listItems);
        setModalVisible(false);
        setSelected(options.id);
      }}>
      <View style={styles.modalLabelView}>
        <View style={styles.TextViewWrapper}>
          {showFlag && (
            <View style={styles.ImageView}>
              <Flag code={options.value} size={32} type={'flat'} />
            </View>
          )}
          <Text
            color={color.blackBorderColor}
            size={SIZE.XXSMALL}
            fontFamily={
              options.id === selected ? FONT_FAMILY.BOLD : FONT_FAMILY.REGULAR
            }
            customStyle={styles.TextWrapper}>
            {options.label}
          </Text>
        </View>

        {options.id === selected && <CheckIcon />}
      </View>
    </TouchableOpacity>
  );
};

export default OptionLists;
