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
import { getGrades } from './../../../../utils';
import { gradeList } from '../../assets/DataList';

const SelectGrades = ({ data = [], onSelect }) => {
  const [grades, setGrades] = useState([]);
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const handleCheckBox = label => {
    let cloneGrades = [...grades];

    let index = cloneGrades.findIndex(el => el === label);
    if (index !== -1) {
      cloneGrades.splice(index, 1);
    } else {
      cloneGrades.push(label);
    }

    setGrades(cloneGrades);
  };

  const handleDone = () => {
    let sortedArr = gradeList.sort((a, b) => a.sortOrder - b.sortOrder);
    let filterArr = sortedArr
      .filter(item => grades.includes(item.title))
      .map(el => el.title);
    let finalSortedGrades = getGrades(filterArr);

    onSelect(finalSortedGrades);
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
            title={'Select Grades'}
          />
        </View>

        <View style={defaultStyles.modalCloseIcon} />
      </View>

      <View style={styles.checkbox}>
        <CheckBox
          data={data}
          width={'50%'}
          numOfColumn={2}
          checkedItems={grades}
          handleCheckBox={handleCheckBox}
        />
      </View>

      <View style={defaultStyles.footerBtn}>
        <Button
          title={'Done'}
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

export default SelectGrades;
