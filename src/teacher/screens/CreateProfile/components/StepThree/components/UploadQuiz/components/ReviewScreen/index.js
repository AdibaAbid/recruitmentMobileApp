import React from 'react';
import { FlatList, View } from 'react-native';

import { theme } from '../../../../../../../../theme';
import Button from '@teacher/button';
import { Size } from '../../../../../../../../globals';
import TextComponent from '../../../../../../../../components/text';
import { FontFamilyEnum } from '../../../../../../../../constants/FontFamily';
import sizes from '../../../../../../../../globals/sizes';
import { HP } from '../../../../../../../../constants/';
import { useNavigation } from '@react-navigation/core';
import { SCREENS } from '@constants/strings';
import { SvgXml } from 'react-native-svg';
import checkWithBg from '../../assets/svgs/checkWithBg';
import crossWithBg from '../../assets/svgs/crossWithBg';

import styles from './styles';

const steps = [
  {
    id: '0',
    number: 'Question 1',
    question:
      'The graphical user interface used in most computers uses a destop, witth items such as wate basket, folers and a desktop?',
    isCorrect: true,
  },
  {
    id: '1',
    number: 'Question 2',
    question:
      'The graphical user interface used in most computers uses a destop, witth items such as wate basket, folers and a desktop?',
    isCorrect: false,
  },
  {
    id: '2',
    number: 'Question 3',
    question:
      'The graphical user interface used in most computers uses a destop, witth items such as wate basket, folers and a desktop?',
    isCorrect: true,
  },
];

const ReviewScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate(SCREENS.TEACHER_QUIZ_MODULE);
  };

  return (
    <View style={styles.ParentView}>
      <View style={styles.ChildView}>
        <TextComponent
          title={'Review of Module 2: How to Upload a Video'}
          size={sizes.DEFAULT}
          color={theme.bgTheme}
          family={FontFamilyEnum.MEDIUM}
          customStyles={{ paddingTop: HP('2') }}
        />
        <TextComponent
          title={'You got 2 out of 3 correct'}
          size={sizes.S}
          color={theme.textDefault}
          family={FontFamilyEnum.REGULAR}
        />
        <FlatList
          data={steps}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.txtView}>
                <View>
                  <TextComponent
                    title={item.number}
                    size={sizes.S}
                    color={theme.textDefault}
                    family={FontFamilyEnum.REGULAR}
                    customStyles={{ paddingVertical: HP('1') }}
                  />
                  <TextComponent
                    title={item.question}
                    size={sizes.S}
                    numLines={1}
                    color={theme.textDefault}
                    family={FontFamilyEnum.REGULAR}
                  />
                </View>

                <SvgXml xml={item.isCorrect ? checkWithBg : crossWithBg} />
              </View>
            );
          }}
        />
      </View>

      <View style={styles.BtnView}>
        <Button
          title={'Retry'}
          center
          size={Size.DEFAULT}
          family={FontFamilyEnum.MEDIUM}
          color={theme.bgTheme}
          handlePress={handleSubmit}
          customStyles={styles.customBtnStyle}
        />
      </View>
    </View>
  );
};

export default ReviewScreen;
