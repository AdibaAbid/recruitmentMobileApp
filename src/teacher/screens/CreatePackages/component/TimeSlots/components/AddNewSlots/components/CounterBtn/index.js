import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import MinusCountIcon from '@assets/icons/MinusCountIcon';
import PlusCountIcon from '@assets/icons/PlusCountIcon';
import { theme } from '../../../../../../../../theme';
import TextComponent from '../../../../../../../../components/text';
import sizes from '../../../../../../../../globals/sizes';
import { FontFamilyEnum } from '../../../../../../../../constants/FontFamily';
import { WP } from '../../../../../../../../constants';

const CounterBtn = () => {
  const [value, setValue] = useState(0);

  const decrementFunc = () => {
    if (value > 0) {
      setValue(prevCount => prevCount - 1);
    }
    return { value };
  };
  const incrementFunc = () => {
    setValue(prevCount => prevCount + 1);
  };
  return (
    <View>
      <View style={styles.parentView}>
        <View style={styles.innerView}>
          <TouchableOpacity onPress={decrementFunc} style={styles.TouchableBtn}>
            <MinusCountIcon size={12} />
          </TouchableOpacity>
          <TextComponent
            size={sizes.S}
            center
            family={FontFamilyEnum.REGULAR}
            color={theme.textDefault}
            title={value}
            customStyles={{
              paddingHorizontal: WP('5'),
            }}
          />
          <TouchableOpacity onPress={incrementFunc} style={styles.TouchableBtn}>
            <PlusCountIcon size={12} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CounterBtn;
