import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from '@react-navigation/core';

import { theme } from '../../../../theme';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { HP } from '../../../../constants';
import * as actions from '../../../../store/actions';
import {
  DrawerScreenConstant,
  SCREENS,
} from '../../../../../recruitment/constants/strings';
import TimeSlotCard from '../TimeSlotCard';
import Access from './components/Access';

import styles from '../../styles';

const TimeSlots = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const [isTimeSlot] = useState(false);

  const navigation = useNavigation();

  const openModal = (height, modalComponenet) => {
    action.setModalToggle(true);
    action.setModalHeight(height);
    action.setModalComponent(modalComponenet);
  };

  return (
    <View style={styles.selectPickerTopStyle}>
      <View style={styles.timeSlotHeading}>
        <TextComponent
          title={'Time Slots'}
          size={Size.DEFAULT}
          color={theme.bgTheme}
          family={FontFamilyEnum.REGULAR}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(SCREENS.TEACHER_OTHERS, {
              screen: SCREENS.TEACHER_ADD_NEW_TIME_SLOTS,
              name: DrawerScreenConstant.AddNewTimeSlots,
            })
          }>
          <TextComponent
            title={'Add New Slot'}
            size={Size.S}
            color={theme.bgTheme}
            family={FontFamilyEnum.MEDIUM}
          />
        </TouchableOpacity>
      </View>
      {isTimeSlot ? (
        <TextComponent
          title={'No time slot added!'}
          size={Size.S}
          color={theme.textLight}
          family={FontFamilyEnum.REGULAR}
          customStyles={{ paddingVertical: HP('2'), paddingBottom: HP('7') }}
        />
      ) : (
        <TimeSlotCard />
      )}

      <Access />
    </View>
  );
};

export default TimeSlots;
