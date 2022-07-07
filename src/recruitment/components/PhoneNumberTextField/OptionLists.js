import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import styled from 'styled-components/native';
import CheckIcon from '@assets/icons/CheckIcon';
import Flag from 'react-native-flags';

const ImageView = styled.View`
  width: 25px;
  height: 25px;
  margin-horizontal: 15px;
`;

const TextViewWrapper = styled.View`
  flex-direction: row;
  width: 50%;
  align-items: center;
`;

const TextWrapper = styled(Text)`
  top: 4px;
`;

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
  setMasked,
  countrycode,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        // onChangeText(options.value);
        if (showFlag) {
          onChangeCode(options.value);
          setFlag(options.code);
          countrycode(options.code);
        }

        setMasked(options.mask);
        setFilteredData(listItems);
        setModalVisible(false);
        setSelected(options.title);
      }}>
      <View style={styles.modalLabelView}>
        <TextViewWrapper>
          {showFlag && (
            <ImageView>
              <Flag code={options.code} size={32} type={'flat'} />
            </ImageView>
          )}
          <TextWrapper
            color={color.blackBorderColor}
            numberOfLines={2}
            size={SIZE.XXSMALL}
            fontFamily={
              options.title === selected
                ? FONT_FAMILY.BOLD
                : FONT_FAMILY.REGULAR
            }>
            {`${options.title} (${options.value})`}
          </TextWrapper>
        </TextViewWrapper>

        {options.title === selected && <CheckIcon />}
      </View>
    </TouchableOpacity>
  );
};

export default OptionLists;
