import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import TextComponent from '../../../../../../teacher/components/text';
import { FontFamilyEnum } from '../../../../../../teacher/constants/FontFamily';
import { Size } from '../../../../../../teacher/globals';
import { theme } from '../../../../../../teacher/theme';

import styles from '../../styles';

const SliderContent = ({ title, description, icon }) => {
  return (
    <View style={styles.sliderContainer}>
      <View style={styles.titleHeading}>
        <TextComponent
          size={Size.XL}
          color={theme.bgTheme}
          center
          family={FontFamilyEnum.SEMIBOLD}
          title={title}
        />
      </View>

      <View style={styles.desc}>
        <TextComponent
          size={Size.DEFAULT}
          family={FontFamilyEnum.REGULAR}
          color={theme.textLight}
          center
          title={description}
        />
      </View>

      <View style={styles.animationContainer}>
        <LottieView
          source={icon}
          style={{ width: '90%', aspectRatio: 1 }}
          loop
          autoPlay
        />
      </View>
    </View>
  );
};

export default SliderContent;
