import { MinimumCriteriaScreenConstant } from '@constants/strings';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const MinimumCriteriaScreen = () => {
  return (
    <View style={styles.parentView}>
      <View style={styles.cardView}>
        <Text style={styles.numberTextStyle}>{1}</Text>
        <Text style={styles.textPointStyle}>
          {MinimumCriteriaScreenConstant.pointNoOne}
        </Text>
      </View>

      <View style={styles.cardView}>
        <Text style={styles.numberTextStyle}>{2}</Text>
        <Text style={styles.textPointStyle}>
          {MinimumCriteriaScreenConstant.pointNoTwo}
        </Text>
      </View>

      <View style={styles.cardView}>
        <Text style={styles.numberTextStyle}>{3}</Text>
        <Text style={styles.textPointStyle}>
          {MinimumCriteriaScreenConstant.pointNoThree}
        </Text>
      </View>

      <View style={styles.cardView}>
        <Text style={styles.numberTextStyle}>{4}</Text>
        <Text style={styles.textPointStyle}>
          {MinimumCriteriaScreenConstant.pointNoFour}
        </Text>
      </View>
    </View>
  );
};

export default MinimumCriteriaScreen;
