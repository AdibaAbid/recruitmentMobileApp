import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals/';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { theme } from '../../../../theme';
import { styles } from './styles';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const UploadingProgressBar = ({ progressPercent }) => {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);

  useInterval(() => {
    if (progress < 100) {
      setProgress(progressPercent);
    }
  }, 2000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });
  return (
    <View>
      <View style={styles.progressBar}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill],
            { backgroundColor: theme.bgColorBtn, width })
          }
        />
      </View>
      <View style={styles.progressPercentage}>
        <TextComponent
          title={`${progress}% complete`}
          center
          size={Size.XXS}
          family={FontFamilyEnum.MEDIUM}
          color={theme.textDefault}
        />
      </View>
    </View>
  );
};

export default UploadingProgressBar;
