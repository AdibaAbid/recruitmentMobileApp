import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/core';

import { theme } from '../../../../../../../../theme';
import Button from '@teacher/button';
import { Size } from '../../../../../../../../globals';
import TextComponent from '../../../../../../../../components/text';
import { FontFamilyEnum } from '../../../../../../../../constants/FontFamily';
import sizes from '../../../../../../../../globals/sizes';
import RadioButtonComponent from '../../../../../../../../components/radioButton';
import { HP, WP } from '../../../../../../../../constants/';
import { SCREENS } from '@constants/strings';

import styles from './styles';

const Step = ({ data, setCurrentPage, currentPage, totalLength }) => {
  const navigation = useNavigation();

  const submit = () => {
    if (currentPage >= 0 && currentPage < totalLength - 1) {
      setCurrentPage(prevCount => prevCount + 1);
    } else if (currentPage + 1 === totalLength) {
      navigation.navigate(SCREENS.TEACHER_QUIZ_REVIEW);
    }
  };

  const onPrev = () => {
    if (currentPage > 0 && currentPage < totalLength) {
      setCurrentPage(prevCount => prevCount - 1);
    } else if (currentPage === 0) {
      navigation.navigate(SCREENS.TEACHER_QUIZ_MODULE);
    }
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={submit}
      validateOnChange
      validationSchema={null}
      validateOnMount={true}
      validateOnBlur={true}
      enableReinitialize={true}>
      {({ handleSubmit, setFieldValue, handleChange, values }) => {
        return (
          <>
            <View style={styles.ParentView}>
              <View style={styles.ChildView}>
                <View
                  style={{
                    paddingHorizontal: WP('5'),
                  }}>
                  <TextComponent
                    title={data.number}
                    size={sizes.S}
                    color={theme.textDefault}
                    family={FontFamilyEnum.REGULAR}
                    customStyles={{ paddingVertical: HP('3') }}
                  />
                  <TextComponent
                    title={data.question}
                    size={sizes.S}
                    color={theme.textDefault}
                    family={FontFamilyEnum.REGULAR}
                  />
                  <View style={styles.checkbox}>
                    <RadioButtonComponent
                      data={data.answers}
                      onPress={(_, index) => console.log('***', index)}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.BtnView}>
                <Button
                  title={'Previous'}
                  size={sizes.S}
                  family={FontFamilyEnum.SEMIBOLD}
                  color={theme.bgTheme}
                  handlePress={onPrev}
                  customStyles={styles.customPrevBtnStyle}
                />
                <TextComponent
                  title={`${currentPage + 1} of ${totalLength}`}
                  size={sizes.S}
                  color={theme.textDefault}
                  family={FontFamilyEnum.REGULAR}
                />
                <Button
                  title={currentPage + 1 < totalLength ? 'Next' : 'Review'}
                  center
                  size={Size.DEFAULT}
                  family={FontFamilyEnum.MEDIUM}
                  color={theme.bgTheme}
                  handlePress={handleSubmit}
                  customStyles={styles.customNextBtnStyle}
                />
              </View>
            </View>
          </>
        );
      }}
    </Formik>
  );
};

export default Step;
