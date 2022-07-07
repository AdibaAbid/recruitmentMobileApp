import React from 'react';
import styles from './styles';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import { theme } from '../../../../theme';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { HP } from '../../../../constants';
import { FontFamilyEnum } from '../../../../constants/FontFamily';

const PersonalInformation = () => {
  const data = [
    {
      id: '0',
      title: 'Phone',
      value: '+92 333 3134 171',
    },
    {
      id: '2',
      title: 'Email',
      value: 'saima_amir@gmail.com',
    },
    {
      id: '3',
      title: 'Date of Birth',
      value: '14/7/1980',
    },
    {
      id: '4',
      title: 'Country',
      value: 'Pakistan',
    },
    {
      id: '5',
      title: 'City',
      value: 'Karachi',
    },
    {
      id: '6',
      title: 'Area',
      value: 'DHA Phase 6',
    },
    {
      id: '7',
      title: 'Address',
      value: '1, Dot & Line, Karachi, Pakistan 4230150481812',
    },
    {
      id: '8',
      title: 'National ID',
      value: '4230150481812',
    },
  ];
  return (
    <View style={styles.ProfContainer}>
      <View style={styles.ProfHeader}>
        <TextComponent
          title={'Personal Information'}
          size={Size.DEFAULT}
          family={FontFamilyEnum.REGULAR}
          color={theme.textDefault}
        />
        <TouchableOpacity>
          <TextComponent
            title={'Edit'}
            center
            size={Size.S}
            family={FontFamilyEnum.MEDIUM}
            color={theme.bgTheme}
            customStyles={{
              marginTop: HP('2'),
            }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.ProfHeader}>
              <TextComponent
                title={item.title}
                size={Size.S}
                family={FontFamilyEnum.LIGHT}
                color={theme.textDark}
                customStyles={styles.centerLeft}
              />
              <TextComponent
                title={item.value}
                size={Size.S}
                color={theme.textDark}
                family={FontFamilyEnum.LIGHT}
                customStyles={styles.center}
                numLines={2}
              />
            </View>
          );
        }}
      />
      <View style={styles.HR} />
    </View>
  );
};

export default PersonalInformation;
