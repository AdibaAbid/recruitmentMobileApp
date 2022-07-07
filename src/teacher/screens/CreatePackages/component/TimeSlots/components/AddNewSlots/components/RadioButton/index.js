import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../../../../../../../theme';
import TextComponent from '../../../../../../../../components/text';
import { Size } from '../../../../../../../../globals';
import styles from './styles';
import { FontFamilyEnum } from '../../../../../../../../constants/FontFamily';
import * as actions from '../../../../../../../../store/actions';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const RadioButton = () => {
  const [showToggle, setShowToggle] = useState(false);
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  return (
    <View style={styles.toggleView}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            if (showToggle) {
              setShowToggle(false);
            } else {
              setShowToggle(true);
            }
          }}>
          {showToggle ? (
            <View style={styles.yesToggle}>
              <TextComponent
                title={'Yes'}
                size={Size.S}
                center
                color={theme.bgTheme}
                family={FontFamilyEnum.SEMIBOLD}
                customStyles={styles.textStyle}
              />
              <View style={styles.toggleCircle} />
            </View>
          ) : (
            <View style={styles.noToggle}>
              <View style={styles.toggleCircle} />
              <TextComponent
                title={'No'}
                size={Size.S}
                center
                color={theme.textDark}
                family={FontFamilyEnum.REGULAR}
                customStyles={styles.textStyle}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RadioButton;
