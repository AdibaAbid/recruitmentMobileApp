import React, { useEffect, useState } from 'react';
import { color } from '@styles/colorConstant';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import MinusCountIcon from '@assets/icons/MinusCountIcon';
import PlusCountIcon from '@assets/icons/PlusCountIcon';

const CounterButton = ({
  labelText,
  onChangeText,
  value,
  error,
  valueText,
  width,
}) => {
  const [years, setYears] = useState(Number(value));

  useEffect(() => {
    setYears(value);
  }, [value]);

  const decrementFunc = () => {
    if (years > 0) {
      setYears(prevCount => prevCount - 1);
      onChangeText((years - 1).toString());
    }
    return { years };
  };
  const incrementFunc = () => {
    setYears(prevCount => prevCount + 1);
    onChangeText((years + 1).toString());
  };
  return (
    <View>
      <Text
        color={color.blackBorderColor}
        size={SIZE.SMALLEST}
        numberOfLines={0}
        customStyle={styles().TextWrapper}
        fontFamily={FONT_FAMILY.SEMI_BOLD}>
        {labelText}
      </Text>
      <View style={styles(width).parentView}>
        <View style={styles().InnerView}>
          <TouchableOpacity
            onPress={decrementFunc}
            style={styles().TouchableBtn}>
            <MinusCountIcon />
          </TouchableOpacity>
          <Text
            fontFamily={FONT_FAMILY.REGULAR}
            size={SIZE.XXXSMALL}
            color={color.black}>
            {`${years} ${valueText}`}
          </Text>
          <TouchableOpacity
            onPress={incrementFunc}
            style={styles().TouchableBtn}>
            <PlusCountIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles().ErrorView}>
        <Text
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.XSMALLEST}
          color={error ? color.pinkRed : color.white}>
          {error}
        </Text>
      </View>
    </View>
  );
};

export default CounterButton;
