import React, { useRef, useEffect } from 'react';
import { color } from '@styles/colorConstant';
import { StyleSheet, Animated } from 'react-native';
import { SvgXml } from 'react-native-svg';
import splashLogo from '@assets/svgs/splashLogo';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={styles.container(fadeAnim)}>
      <SvgXml xml={splashLogo} />
    </Animated.View>
  );
};

SplashScreen.navigationOptions = () => ({ header: null });

export default SplashScreen;

const styles = StyleSheet.create({
  container: function (fade) {
    return {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color.themeColorShockingPink,
      opacity: fade,
    };
  },
});
