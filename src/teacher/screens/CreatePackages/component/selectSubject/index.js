import React, { useState } from 'react';

import { View, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import defaultConfig, { defaultStyles } from '../../../../globals/defaults';
import TextComponent from '../../../../components/text';
import { theme } from '../../../../theme/index';
import Button from '../../../../components/button';
import InputComponent from '../../../../components/Input';
import CheckBox from '../../../../components/checkBox';
import { SvgXml } from 'react-native-svg';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import close from '../../../../assets/svgs/close';
import sizes from '../../../../globals/sizes';
import * as actions from '../../../../store/actions';

import styles from './styles';

const SelectSubject = ({ onSearch, onSelect, data = [] }) => {
  const [subjects, setSubjects] = useState([]);
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const handleCheckBox = label => {
    let cloneSubjects = [...subjects];

    let index = cloneSubjects.findIndex(el => el === label);
    if (index !== -1) {
      cloneSubjects.splice(index, 1);
    } else {
      cloneSubjects.push(label);
    }

    setSubjects(cloneSubjects);
  };

  const onDone = () => {
    let selectedSubjects = subjects.join(', ');
    onSelect(selectedSubjects);
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
            title={'Select Subject'}
          />
        </View>

        <View style={defaultStyles.modalCloseIcon} />
      </View>

      <View style={styles.content}>
        <InputComponent
          placeHolder={'Search'}
          submitEditingHandle={() => {}}
          handleChange={onSearch}
          keyboardType={'default'}
          customStyle={styles.inputStyle}
        />

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <>
              <TextComponent
                title={item.category}
                size={sizes.XS}
                family={FontFamilyEnum.MEDIUM}
                color={theme.textLight}
              />

              <View style={styles.checkbox}>
                <CheckBox
                  data={item.content}
                  width={'100%'}
                  numOfColumn={1}
                  checkedItems={subjects}
                  handleCheckBox={handleCheckBox}
                />
              </View>
            </>
          )}
        />
      </View>

      <View style={defaultStyles.footerBtn}>
        <Button
          title={'Done'}
          size={sizes.S}
          center
          color={theme.bgTheme}
          family={FontFamilyEnum.SEMIBOLD}
          handlePress={onDone}
          customStyles={defaultStyles.btnFilled}
        />
      </View>
    </View>
  );
};

export default SelectSubject;
