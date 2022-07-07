import React, { useEffect, useState } from 'react';

import { View, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import defaultConfig, { defaultStyles } from '../../../../globals/defaults';
import TextComponent from '../../../../components/text';
import { theme } from '../../../../theme/index';
import Button from '../../../../components/button';
import { SvgXml } from 'react-native-svg';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import RadioButtonComponent from '../../../../components/radioButton';
import close from '../../../../assets/svgs/close';
import sizes from '../../../../globals/sizes';
import * as actions from '../../../../store/actions';

import styles from './styles';

const data = [
  {
    id: '0',
    label: '5 Years',
    value: 5,
  },
  {
    id: '1',
    label: '6 Years',
    value: 6,
  },
  {
    id: '2',
    label: '7 Years',
    value: 7,
  },
  {
    id: '3',
    label: '8 Years',
    value: 8,
  },
  {
    id: '4',
    label: '9 Years',
    value: 9,
  },
  {
    id: '5',
    label: '10 Years',
    value: 10,
  },
  {
    id: '6',
    label: '11 Years',
    value: 11,
  },
  {
    id: '7',
    label: '12 Years',
    value: 12,
  },
];

const SelectAge = ({ onSelect }) => {
  const [maxAge, setMaxAge] = useState('');
  const [minAge, setMinAge] = useState('');
  const [resetAge, setResetAge] = useState(false);
  const findAge = value => data.find(item => item.value === value);

  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const handleSelect = (index, type) => {
    let age = data[index].value;
    type === 'minAge' ? setMinAge(age) : setMaxAge(age);
  };

  useEffect(() => {
    if (resetAge) {
      onSelect('');
      setMinAge('');
      setMaxAge('');
      setTimeout(() => {
        setResetAge(false);
      }, 500);
    }
  }, [onSelect, resetAge]);

  useEffect(() => {
    if (minAge && maxAge) {
      if (minAge < maxAge) {
        let minAgeLabel = findAge(minAge).label;
        let maxAgeLabel = findAge(maxAge).label;
        onSelect(`${minAgeLabel} - ${maxAgeLabel}`);
      } else {
        Alert.alert('Error', 'Minimum age must be less than maximum age.');
        setResetAge(true);
      }
    }
  }, [minAge, maxAge, onSelect]);

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
            title={'Select Age'}
          />
        </View>

        <View style={defaultStyles.modalCloseIcon} />
      </View>

      <View style={styles.content}>
        <View style={styles.ageSelect}>
          <TextComponent
            size={sizes.S}
            family={FontFamilyEnum.MEDIUM}
            color={theme.textDefault}
            title={'Minimum Age'}
          />

          <View style={styles.ageView}>
            <RadioButtonComponent
              data={data}
              reset={resetAge}
              onPress={(_, index) => handleSelect(index, 'minAge')}
            />
          </View>
        </View>

        <View style={styles.ageSelect}>
          <TextComponent
            size={sizes.S}
            family={FontFamilyEnum.MEDIUM}
            color={theme.textDefault}
            title={'Maximum Age'}
          />

          <View style={styles.ageView}>
            <RadioButtonComponent
              data={data}
              reset={resetAge}
              onPress={(_, index) => handleSelect(index, 'maxAge')}
            />
          </View>
        </View>
      </View>

      <View style={defaultStyles.footerBtn}>
        <Button
          title={'Done'}
          size={sizes.S}
          center
          color={theme.bgTheme}
          family={FontFamilyEnum.SEMIBOLD}
          handlePress={() => action.setModalToggle(false)}
          customStyles={defaultStyles.btnFilled}
        />
      </View>
    </View>
  );
};

export default SelectAge;
