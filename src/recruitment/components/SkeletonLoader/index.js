import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Easing } from 'react-native-reanimated';

const Skeleton = ({ width, height, numberOfRender }) => {
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

  return [...Array(numberOfRender)].map((i, index) => (
    <Animated.View
      key={index}
      style={[
        {
          opacity: opacity.current,
          height,
          width,
        },
        styles.skeletonContainer,
      ]}>
      <View style={styles.innerParentView}>
        <View style={styles.leftViewStyle} />
        <View style={styles.headingStyle} />
      </View>
      <View>
        <View style={styles.circleView} />
      </View>
    </Animated.View>
  ));
};

export default Skeleton;

const styles = StyleSheet.create({
  skeletonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e1e4e6',
    marginHorizontal: 20,
    borderRadius: 15,
    marginVertical: 8,
  },
  innerParentView: { marginLeft: 20, paddingVertical: 20 },
  leftViewStyle: {
    width: 80,
    height: 10,
    borderRadius: 4,
    backgroundColor: '#edf6fc',
  },
  headingStyle: {
    width: 120,
    height: 10,
    borderRadius: 50,
    marginTop: 6,
    backgroundColor: '#edf6fc',
  },
  circleView: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 6,
    marginHorizontal: 20,
    backgroundColor: '#edf6fc',
  },
});
