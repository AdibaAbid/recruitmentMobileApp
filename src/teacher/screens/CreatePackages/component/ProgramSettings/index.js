import React from 'react';
import { View } from 'react-native';
import { theme } from '../../../../theme';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import styles from '../../styles';
import { useNavigation } from '@react-navigation/core';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import SelectPicker from '../../../../components/selectPicker';
import { WP, HP } from '../../../../constants';
import SelectProgram from '../selectProgram';
import * as actions from '../../../../store/actions';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enrolmentMode } from '../../assets/DataList';
import SelectAge from '../selectAge';
import { ProgramSettingsConstant } from '../../../../constants/TextConstant';

const ProgramSettings = ({ handleChange, values }) => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const navigation = useNavigation();

  const openModal = (height, modalComponenet) => {
    action.setModalToggle(true);
    action.setModalHeight(height);
    action.setModalComponent(modalComponenet);
  };
  return (
    <View style={styles.selectPickerBottomStyle}>
      <TextComponent
        title={ProgramSettingsConstant.programSettingTitle}
        size={Size.DEFAULT}
        color={theme.bgTheme}
        family={FontFamilyEnum.REGULAR}
      />
      <View>
        <View style={styles.selectPickerTopStyle}>
          <SelectPicker
            description={
              values.enrollmentMode
                ? values.enrollmentMode
                : ProgramSettingsConstant.selectEnrolment
            }
            title={
              values.enrollmentMode
                ? ProgramSettingsConstant.selectEnrolment
                : null
            }
            handlePress={() =>
              openModal(
                45,
                <SelectProgram
                  data={enrolmentMode}
                  programTitle={ProgramSettingsConstant.selectEnrolment}
                  onSelect={handleChange('enrollmentMode')}
                />,
              )
            }
            customStyles={{ paddingVertical: WP('5'), marginBottom: HP('2') }}
          />
        </View>

        <View style={styles.selectPickerBottomStyle}>
          <SelectPicker
            description={
              values.ageRange
                ? values.ageRange
                : ProgramSettingsConstant.selectAgeRange
            }
            handlePress={() =>
              openModal(70, <SelectAge onSelect={handleChange('ageRange')} />)
            }
            title={
              values.ageRange ? ProgramSettingsConstant.selectAgeRange : null
            }
            customStyles={{ paddingVertical: WP('5') }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProgramSettings;
