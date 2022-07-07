import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from '@react-navigation/core';

import { theme } from '../../../../../../theme';
import TextComponent from '../../../../../../components/text';
import { Size } from '../../../../../../globals';
import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import { HP } from '../../../../../../constants';
import * as actions from '../../../../../../store/actions';
import SelectPicker from '@teacher/selectPicker';
import SelectTimeSlots from '../../../SelectTimeSlots';
import SelectSubject from '../../../selectSubject';
import CountryPicker from './components/CountryPicker';
import RadioButton from './components/RadioButton';
import CounterBtn from './components/CounterBtn';
import { defaultStyles } from '../../../../../../globals/defaults';
import Button from '../../../../../../components/button';

import styles from './styles';

const AddNewTimeSlots = () => {
  const [countryName, setCountryName] = useState('');
  const [masking, setMasking] = useState('999 9999999');
  const dispatch = useDispatch();
  const [days, setDays] = useState([]);
  const [time, setTime] = useState([]);
  const action = bindActionCreators(actions, dispatch);
  const daysSlot = [
    {
      id: '0',
      title: 'Mon',
    },
    {
      id: '1',
      title: 'Tue',
    },
    {
      id: '2',
      title: 'Wed',
    },
    {
      id: '3',
      title: 'Thu',
    },
    {
      id: '4',
      title: 'Fri',
    },
    {
      id: '5',
      title: 'Sat',
    },
    {
      id: '6',
      title: 'Sun',
    },
  ];

  const timeSlot = [
    {
      id: '0',
      title: 'Morning',
    },
    {
      id: '1',
      title: 'Afternoon',
    },
    {
      id: '2',
      title: 'Evening',
    },
    {
      id: '3',
      title: 'Night',
    },
  ];
  const navigation = useNavigation();

  const openCountryPicker = modalVisible => {
    action.setModalToggle(modalVisible);
    action.setModalComponent(
      <CountryPicker setMasking={setMasking} setCountryName={setCountryName} />,
    );
  };

  const openModal = (height, modalComponenet) => {
    action.setModalToggle(true);
    action.setModalHeight(height);
    action.setModalComponent(modalComponenet);
  };

  const onSelect = item => {
    let cloneDay = [...days];
    let index = cloneDay.findIndex(id => id === item.id);

    if (index !== -1) {
      cloneDay.splice(index, 1);
    } else {
      cloneDay.push(item.id);
    }

    setDays(cloneDay);
  };

  return (
    <>
      <View style={styles.parentConatiner}>
        <View style={styles.daysContainer}>
          <TextComponent
            title={'Select Days'}
            size={Size.S}
            color={theme.textDark}
            family={FontFamilyEnum.REGULAR}
          />

          <SelectTimeSlots
            seletedItems={days}
            onSelect={onSelect}
            data={daysSlot}
          />
        </View>

        <View style={styles.timeContainer}>
          <TextComponent
            title={'Select Time Slots'}
            size={Size.S}
            color={theme.textDark}
            family={FontFamilyEnum.REGULAR}
          />

          <SelectTimeSlots
            seletedItems={time}
            onSelect={item => setTime([item.id])}
            data={timeSlot}
          />
        </View>

        <View>
          <SelectPicker
            description={'Select Time Duration'}
            handlePress={() =>
              openModal(
                '85',
                <SelectSubject
                  data={[]}
                  programTitle={'Select Time Duration'}
                  onSelect={() => {}}
                />,
              )
            }
            customStyles={{
              paddingVertical: HP('2.4'),
              marginVertical: HP('3'),
            }}
          />
          <View style={[styles.selectStyle, { width: '100%' }]}>
            <SelectPicker
              title={countryName ? 'Select Country' : null}
              description={countryName ? countryName : 'Select Country'}
              handlePress={() => openCountryPicker(true)}
              customStyles={{ paddingVertical: HP('2.4') }}
            />
          </View>

          <View style={styles.demoView}>
            <TextComponent
              title={'Open for Demo'}
              size={Size.S}
              center
              color={theme.textDark}
              family={FontFamilyEnum.REGULAR}
            />
            <RadioButton />
          </View>

          <View style={styles.demoView}>
            <TextComponent
              title={'Number of Seats'}
              size={Size.S}
              center
              color={theme.textDark}
              family={FontFamilyEnum.REGULAR}
            />
            <CounterBtn />
          </View>
        </View>
      </View>

      <View
        style={[
          defaultStyles.footerBtn,
          { borderTopWidth: 0.7, borderTopColor: theme.borderDark },
        ]}>
        <Button
          title={'Add'}
          size={Size.S}
          center
          color={theme.bgTheme}
          family={FontFamilyEnum.SEMIBOLD}
          handlePress={() => console.log('uploaded')}
          customStyles={defaultStyles.btnFilled}
        />
      </View>
    </>
  );
};

export default AddNewTimeSlots;
