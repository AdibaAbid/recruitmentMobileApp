import React from 'react';
import { View } from 'react-native';
import { theme } from '../../../../theme';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import styles from '../../styles';
import { useNavigation } from '@react-navigation/core';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import SelectPicker from '../../../../components/selectPicker';
import { HP, WP } from '../../../../constants';
import SelectProgram from '../selectProgram';
import * as actions from '../../../../store/actions';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectSubject from '../selectSubject';
import SelectGrades from '../selectGrades';
import {
  gradeList,
  programList,
  subjectList,
  teachingMode,
} from '../../assets/DataList';
import { ProgramDetailsConstant } from '../../../../constants/TextConstant';

const ProgramDetails = ({ handleChange, values }) => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const navigation = useNavigation();

  const openModal = (height, modalComponenet) => {
    action.setModalToggle(true);
    action.setModalHeight(height);
    action.setModalComponent(modalComponenet);
  };
  return (
    <View style={styles.paddingVertical}>
      <TextComponent
        title={ProgramDetailsConstant.programDetailTitle}
        size={Size.DEFAULT}
        color={theme.bgTheme}
        family={FontFamilyEnum.REGULAR}
      />
      <View>
        <View style={styles.paddingVertical}>
          <SelectPicker
            description={
              values.program
                ? values.program
                : ProgramDetailsConstant.selectProgram
            }
            title={values.program ? ProgramDetailsConstant.selectProgram : null}
            handlePress={() =>
              openModal(
                '65',
                <SelectProgram
                  data={programList}
                  selectedItem={values.program}
                  programTitle={ProgramDetailsConstant.selectProgram}
                  onSelect={handleChange('program')}
                />,
              )
            }
            customStyles={{ paddingVertical: WP('5') }}
          />
        </View>
        <View style={styles.selectPickerBottomStyle}>
          <SelectPicker
            title={values.grade ? ProgramDetailsConstant.selectGrade : null}
            description={
              values.grade ? values.grade : ProgramDetailsConstant.selectGrade
            }
            handlePress={() =>
              openModal(
                '58',
                <SelectGrades
                  data={gradeList}
                  programTitle={ProgramDetailsConstant.selectGrade}
                  onSelect={handleChange('grade')}
                />,
              )
            }
            customStyles={{ paddingVertical: WP('5') }}
          />
        </View>

        <View style={styles.selectPickerBottomStyle}>
          <SelectPicker
            title={
              values.subjects ? ProgramDetailsConstant.selectSubjects : null
            }
            description={
              values.subjects
                ? values.subjects
                : ProgramDetailsConstant.selectSubjects
            }
            handlePress={() =>
              openModal(
                '85',
                <SelectSubject
                  data={subjectList}
                  programTitle={ProgramDetailsConstant.selectSubjects}
                  onSelect={handleChange('subjects')}
                />,
              )
            }
            customStyles={{ paddingVertical: HP('2.4') }}
          />
        </View>
        <View style={styles.selectPickerBottomStyle}>
          <SelectPicker
            description={
              values.teachingMode
                ? values.teachingMode
                : ProgramDetailsConstant.selectTeachingMode
            }
            title={
              values.teachingMode
                ? ProgramDetailsConstant.selectTeachingMode
                : null
            }
            handlePress={() =>
              openModal(
                '50',
                <SelectProgram
                  data={teachingMode}
                  selectedItem={values.teachingMode}
                  programTitle={ProgramDetailsConstant.selectTeachingMode}
                  onSelect={handleChange('teachingMode')}
                />,
              )
            }
            customStyles={{ paddingVertical: WP('5') }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProgramDetails;
