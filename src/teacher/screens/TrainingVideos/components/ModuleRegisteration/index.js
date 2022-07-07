import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { theme } from '../../../../theme';
import { styles } from './styles';
import { HP } from '../../../../constants';
import { SvgXml } from 'react-native-svg';
import quizIcon from '../../assets/svgs/quizIcon';
import checkmark from 'src/teacher/assets/svgs/checkmark';

const ModuleRegisteration = ({ setIsVideoPlay }) => {
  const data = [
    {
      id: '0',
      heading: 'Module 1: Registration',
    },
    {
      id: '1',
      title: 'Training video title witll be display here',
      detail: 'Video - 2 mins',
    },
    {
      id: '2',
      title: 'Training video title witll be display here',
      detail: 'Video - 2 mins',
    },
    {
      id: '3',
      title: 'Training video title witll be display here',
      detail: 'Video - 2 mins',
    },
    {
      id: '4a',
      title: 'Training video title witll be display here',
      isQuiz: true,
      detail: 'Quiz - 2 mins',
    },
    {
      id: '5a',
      heading: 'Module 2: Create Package',
    },
    {
      id: '4',
      title: 'Training video title witll be display here',
      detail: 'Video - 2 mins',
    },
    {
      id: '5',
      title: 'Training video title witll be display here',
      detail: 'Video - 2 mins',
    },
    {
      id: '6',
      title: 'Training video title witll be display here',
      detail: 'Video - 2 mins',
    },
    {
      id: '9a',
      title: 'Training video title witll be display here',
      isQuiz: true,
      detail: 'Quiz - 2 mins',
    },
    {
      id: '10a',
      heading: 'Module 3: Create Package',
    },
    {
      id: '7',
      title: 'Training video title witll be display here',
      detail: 'Video - 2 mins',
    },
    {
      id: '8',
      title: 'Training video title witll be display here',
      detail: 'Video - 2 mins',
    },
    {
      id: '9',
      title: 'Training video title witll be display here',
      isQuiz: true,
      detail: 'Quiz - 2 mins',
    },
    {
      id: '11a',
      heading: 'Final Quiz',
    },
    {
      id: '12',
      title: 'Final Quiz',
      isQuiz: true,
      detail: 'Quiz - 3 mins',
    },
  ];

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.contentStyle}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <View style={styles.container}>
              {item.heading ? (
                <TextComponent
                  title={item.heading}
                  size={Size.S}
                  family={FontFamilyEnum.MEDIUM}
                  color={theme.bgTheme}
                  customStyles={{ paddingVertical: HP('1') }}
                />
              ) : null}
              {item.heading ? null : (
                <View style={styles.indexView}>
                  {item.isQuiz ? (
                    <SvgXml xml={quizIcon} />
                  ) : (
                    <TextComponent
                      title={item.id}
                      size={Size.S}
                      center
                      color={theme.textDark}
                    />
                  )}
                </View>
              )}

              <TouchableOpacity
                style={styles.secondContainer}
                onPress={() => {
                  setIsVideoPlay(true);
                }}>
                <TextComponent
                  title={item.title}
                  size={Size.S}
                  family={FontFamilyEnum.MEDIUM}
                  color={theme.textDark}
                />
                <TextComponent
                  title={item.detail}
                  size={Size.XXS}
                  family={FontFamilyEnum.REGULAR}
                  color={theme.textDark}
                  numLines={2}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.checkMarkView}>
              <SvgXml xml={checkmark} height={10} width={10} />
            </View>
          </View>
        );
      }}
    />
  );
};

export default ModuleRegisteration;
