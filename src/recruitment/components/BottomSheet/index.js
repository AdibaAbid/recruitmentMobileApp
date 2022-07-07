import React from 'react';

import {
  Animated,
  Easing,
  Pressable,
  useWindowDimensions,
  View,
} from 'react-native';

import styles from './styles';

const DEFAULT_HEIGHT = 300;

function useAnimatedBottom(show, height, number = DEFAULT_HEIGHT) {
  const animatedValue = React.useRef(new Animated.Value(0));

  const bottom = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, 0],
  });

  React.useEffect(() => {
    if (show) {
      Animated.timing(animatedValue.current, {
        toValue: 1,
        duration: 350,
        // Accelerate then decelerate - https://cubic-bezier.com/#.28,0,.63,1
        // easing: Easing.bezier(0.28, 0, 0.63, 1),
        useNativeDriver: false, // 'bottom' is not supported by native animated module
      }).start();
    } else {
      Animated.timing(animatedValue.current, {
        toValue: 0,
        duration: 250,
        // Accelerate - https://easings.net/#easeInCubic
        easing: Easing.cubic,
        useNativeDriver: false,
      }).start();
    }
  }, [show]);

  return bottom;
}

const BottomSheetModal = ({
  children,
  show,
  height = DEFAULT_HEIGHT,
  onOuterClick,
}) => {
  const { height: screenHeight } = useWindowDimensions();
  const bottom = useAnimatedBottom(show, height);

  return (
    <>
      {/* Outer semitransparent overlay - remove it if you don't want it */}
      {show && (
        <Pressable onPress={onOuterClick} style={[styles.outerOverlay]}>
          <View />
        </Pressable>
      )}
      <Animated.View style={[styles.bottomSheet, { height, bottom }]}>
        {children}
      </Animated.View>
    </>
  );
};

export default BottomSheetModal;
