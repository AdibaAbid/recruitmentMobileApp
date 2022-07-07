import { color } from '@styles/colorConstant';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Easing } from 'react-native-reanimated';

const SkeletonLoaderForHomeScreen = ({ numberOfRender }) => {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          easing: Easing.linear,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          easing: Easing.linear,
          useNativeDriver: true,
          duration: 800,
        }),
      ]),
    ).start();
  }, [opacity]);
  return (
    <Animated.View
      style={[
        {
          opacity: opacity.current,
        },
        styles.skeletonContainer,
      ]}>
      <View style={styles.headerView}>
        <View style={styles.innerParentView}>
          <View style={styles.leftheaderStyle} />
          <View style={styles.headerViewStyle} />
        </View>
        <View>
          <View style={styles.circleView} />
        </View>
      </View>
      <View
        style={[
          {
            // opacity: opacity.current,
          },
          styles.skeletonInnerContainer,
        ]}>
        {[...Array(numberOfRender)].map((_, index) => (
          <View key={index.toString()} style={styles.parentView}>
            <View style={styles.innerParentView}>
              <View style={styles.leftViewStyle} />
              <View style={styles.headingStyle} />
            </View>
          </View>
        ))}
      </View>
    </Animated.View>
  );
};

export default SkeletonLoaderForHomeScreen;

const styles = StyleSheet.create({
  skeletonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#e1e4e6',
    backgroundColor: color.silver,

    // borderRadius: 15,
    // marginVertical: 8,
    height: 130,
    width: '100%',
  },
  skeletonInnerContainer: {
    flexDirection: 'column',
    backgroundColor: color.white,
    top: -5,
    borderRadius: 15,
    // marginVertical: 8,
    height: 800,
    width: '100%',
  },
  parentView: {
    flexDirection: 'row',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 130,
    width: '100%',
  },
  headerViewStyle: {
    width: '200%',
    height: 10,
    borderRadius: 50,
    marginTop: 6,
    backgroundColor: '#edf6fc',
  },
  leftheaderStyle: {
    width: 90,
    height: 10,
    borderRadius: 4,
    backgroundColor: '#edf6fc',
  },
  innerParentView: {
    marginLeft: 20,
    paddingVertical: 20,
  },
  leftViewStyle: {
    width: 90,
    height: 10,
    borderRadius: 4,
    backgroundColor: '#e1e4e6',
  },
  headingStyle: {
    width: '300%',
    height: 10,
    borderRadius: 50,
    marginTop: 6,
    backgroundColor: '#e1e4e6',
  },
  circleView: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginTop: 26,
    marginHorizontal: 20,
    backgroundColor: '#edf6fc',
  },
});
