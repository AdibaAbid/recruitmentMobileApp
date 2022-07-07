import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { headerProps } from './HeaderProps';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import ProgressStepsForm from '../MultiStepForm/ProgressStepsForm';

const TextWrap = styled(Text)`
  margin-top: -5px;
`;

const TextWrapSubtitle = styled(Text)`
  line-height: 13px;
`;

var HEADER_HEIGHT = 125;
const scrollY = new Animated.Value(0);

const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
const headerY = Animated.interpolateNode(diffClampScrollY, {
  inputRange: [0, HEADER_HEIGHT],
  outputRange: [0, -HEADER_HEIGHT],
});
const HEADER_OPACITY = Animated.interpolateNode(diffClampScrollY, {
  inputRange: [0, HEADER_HEIGHT],
  outputRange: [1, 0],
});

const TeacherInfoForm = ({ navigation }) => {
  let { stepNumber } = useContext(CredientialsContext);
  const [activeStepNumber, setActiveStepNumber] = useState(stepNumber);

  return (
    <>
      <View style={style.Container}>
        <View style={style.animatedView}>
          <View style={style.HeadingWrapper}>
            <TouchableOpacity
              style={style.hamburgerMenuStyle}
              onPress={() => navigation.openDrawer()}>
              <HamburgerMenuIcon colorIcon={color.white} />
            </TouchableOpacity>
            <View style={style.TextWraper}>
              <TextWrap
                fontFamily={FONT_FAMILY.MEDIUM}
                color={color.white}
                size={SIZE.HEADER_LARGE}>
                {headerProps[activeStepNumber]?.title}
              </TextWrap>
              <TextWrapSubtitle
                fontFamily={FONT_FAMILY.REGULAR}
                color={color.white}
                numberOfLines={2}
                lineHeight={13}>
                {headerProps[activeStepNumber]?.subTitle}
              </TextWrapSubtitle>
            </View>
            {headerProps[activeStepNumber]?.icon === 4 ? null : (
              <View style={style.headerPropsStyle}>
                {headerProps[activeStepNumber]?.icon}
              </View>
            )}
          </View>
        </View>

        <Animated.ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } },
          ])}>
          <View>
            <ProgressStepsForm
              navigation={navigation}
              setActiveStepNumber={setActiveStepNumber}
              activeStepNumber={activeStepNumber}
            />
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: color.themeColorShockingPink,
  },
  HeadingWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 24,
  },
  animatedView: {
    backgroundColor: color.themeColorShockingPink,
    position: 'absolute',
    zIndex: 1000,
    elevation: 1000,
    left: 0,
    right: 0,
    top: 0,
    height: HEADER_HEIGHT,
    // transform: [{ translateY: headerY }],
    // opacity: HEADER_OPACITY,
    paddingHorizontal: 20,
  },
  headerPropsStyle: {
    position: 'absolute',
    right: -60,
    top: '23%',
  },
  hamburgerMenuStyle: {
    top: Platform.OS === 'android' ? -15 : -25,
    left: -5,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  TextWraper: {
    width: '100%',
    top: 9,
  },
});

export default TeacherInfoForm;
