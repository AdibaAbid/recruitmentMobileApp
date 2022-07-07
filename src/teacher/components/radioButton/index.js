import React, { useEffect, useState } from 'react';

import { TouchableOpacity, View, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { defaultConfig } from '../../globals';
import { theme } from '../../theme';
import TextComponent from '../text';
import { getLineHeight, HP } from '../../constants';
import checkmark from '../../assets/svgs/checkmark';
import sizes from '../../globals/sizes';

import styles from './styles';

const RadioButtonComponent = ({ onPress, data, horizontal = false, reset }) => {
  const [radioValue, setRadioValue] = useState(undefined);

  useEffect(() => {
    if (reset) {
      console.log('chala');
      setRadioValue(undefined);
    }
  }, [reset]);

  const RadioBtn = ({ isSelected, label, handlePress }) => {
    const getIconSelectedStyle = () => {
      return {
        backgroundColor: isSelected ? theme.bgColorBtn : 'transparent',
        borderColor: isSelected ? theme.bgColorBtn : theme.checkBoxColor,
      };
    };

    return (
      <TouchableOpacity
        onPress={handlePress}
        style={styles.radioContainer}
        activeOpacity={defaultConfig.touchOpacity}>
        <View style={[styles.radioButton, getIconSelectedStyle()]}>
          {isSelected && <SvgXml xml={checkmark} />}
          {isSelected && <View style={styles.colored} />}
        </View>

        <TextComponent
          title={label}
          size={sizes.S}
          color={isSelected ? theme.textDefault : theme.textNormal}
          customStyles={getLineHeight(21)}
        />
      </TouchableOpacity>
    );
  };

  const SeperatorComponent = () => <View style={{ marginBottom: HP('2') }} />;

  const setValue = (label, index) => {
    setRadioValue(index);
    onPress(label, index);
  };

  return (
    <View style={styles.radioBtn}>
      <FlatList
        listKey={'1.1'}
        data={data}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={SeperatorComponent}
        numColumns={horizontal ? 2 : 1}
        scrollEnabled={false}
        renderItem={({ item, index }) => {
          const onPressRadio = () => setValue(item.label, index);

          return (
            <RadioBtn
              handlePress={onPressRadio}
              key={item.id.toString()}
              index={index}
              isSelected={radioValue === index}
              horizontal={horizontal}
              label={item.label}
            />
          );
        }}
      />
    </View>
  );
};

export default RadioButtonComponent;
