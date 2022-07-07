import React from 'react';

import { FlatList, View } from 'react-native';
import CheckBox from 'react-native-check-box';

import TextComponent from '../../components/text';
import { theme } from '../../theme';
import sizes from '../../globals/sizes';
import { getLineHeight, WP } from '../../constants';

import styles from './styles';

const CheckBoxComponent = ({
  data,
  numOfColumn = 1,
  checkedItems = [],
  width,
  handleCheckBox,
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      numColumns={numOfColumn}
      renderItem={({ item, index }) => {
        const onPress = () => handleCheckBox(item.title, index);

        return (
          <View key={item.id} style={{ width: width ? width : WP('50') }}>
            <CheckBox
              style={styles.labelStyle}
              onClick={onPress}
              isChecked={checkedItems.includes(item.title)}
              checkBoxColor={theme.checkBoxColor}
              checkedCheckBoxColor={theme.bgColorBtn}
              rightTextView={
                <TextComponent
                  title={item.title}
                  size={sizes.S}
                  handlePress={onPress}
                  color={theme.textDefault}
                  customStyles={{ ...getLineHeight(21), marginLeft: 10 }}
                />
              }
            />
          </View>
        );
      }}
    />
  );
};

export default CheckBoxComponent;
