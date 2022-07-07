import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import TextComponent from '../../../../components/text';
import { theme } from '../../../../theme';
import styles from './styles';
import { Size } from '../../../../globals';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { HP } from '../../../../constants';

const ProfessionalInformation = () => {
  const data = [
    {
      id: '0',
      title: 'Experience',
      value: '5 Years',
    },
    {
      id: '2',
      title: 'Level',
      value: 'Masters',
    },
    {
      id: '3',
      title: 'Graduation',
      value: '1Marketing',
    },
    {
      id: '4',
      title: 'Tag line',
      column: true,
      value:
        'A new new tagline yet again. More cool things I do. XYZ. ZYX. asdadasd',
    },
    {
      id: '5',
      title: 'Bio',
      column: true,
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <View style={styles.ProfContainer}>
      <View style={styles.ProfHeader}>
        <TextComponent
          title={'Professional Information'}
          size={Size.DEFAULT}
          family={FontFamilyEnum.REGULAR}
          color={theme.textDefault}
        />
        <TouchableOpacity
          style={{
            marginTop: HP('2'),
          }}>
          <TextComponent
            title={'Edit'}
            center
            size={Size.S}
            family={FontFamilyEnum.MEDIUM}
            color={theme.bgTheme}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={item.column ? styles.ProfHeaderColumn : styles.ProfHeader}>
              <TextComponent
                title={item.title}
                size={Size.S}
                family={FontFamilyEnum.LIGHT}
                color={theme.textDark}
                customStyles={styles.textSpacing}
              />
              <TextComponent
                title={item.value}
                size={Size.S}
                family={FontFamilyEnum.LIGHT}
                color={item.column ? theme.textLight : theme.textDark}
                numLines={2}
                customStyles={styles.textSpacing}
              />
            </View>
          );
        }}
      />
      <View style={styles.HR} />
    </View>
  );
};

export default ProfessionalInformation;
