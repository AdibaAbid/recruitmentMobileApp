import React, { useState } from 'react';

import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import defaultConfig, { defaultStyles } from '../../../../globals/defaults';
import TextComponent from '../../../../components/text';
import { theme } from '../../../../theme/index';
import Button from '../../../../components/button';
import CheckBox from '../../../../components/checkBox';
import { SvgXml } from 'react-native-svg';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import close from '../../../../assets/svgs/close';
import sizes from '../../../../globals/sizes';
import * as actions from '../../../../store/actions';
import styles from './styles';
import { filterDemo } from '../../assets/DataList';

const FilterDemos = ({ onSelect }) => {
  const [demo, setDemo] = useState([]);
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const handleCheckBox = label => {
    setDemo(label);
  };

  const handleDone = () => {
    // onSelect(demo);
    action.setModalToggle(false);
  };

  return (
    <View style={styles.container}>
      <View style={defaultStyles.modalHeader}>
        <TouchableOpacity
          onPress={() => {
            action.setModalToggle(false);
          }}
          activeOpacity={defaultConfig.touchOpacity}>
          <View style={defaultStyles.modalCloseIcon}>
            <SvgXml xml={close} />
          </View>
        </TouchableOpacity>

        <View style={styles.logo}>
          <TextComponent
            size={sizes.L}
            center
            family={FontFamilyEnum.REGULAR}
            color={theme.bgTheme}
            title={'Filters'}
          />
        </View>

        <View style={defaultStyles.modalCloseIcon}>
          <TextComponent
            size={sizes.S}
            center
            family={FontFamilyEnum.MEDIUM}
            color={theme.bgTheme}
            title={'Clear'}
          />
        </View>
      </View>

      <View style={styles.checkbox}>
        <CheckBox
          data={filterDemo}
          width={'100%'}
          numOfColumn={0}
          checkedItems={demo}
          handleCheckBox={handleCheckBox}
        />
      </View>

      <View style={defaultStyles.footerBtn}>
        <Button
          title={'Apply'}
          size={sizes.S}
          center
          color={theme.bgTheme}
          family={FontFamilyEnum.SEMIBOLD}
          handlePress={handleDone}
          customStyles={defaultStyles.btnFilled}
        />
      </View>
    </View>
  );
};

export default FilterDemos;
