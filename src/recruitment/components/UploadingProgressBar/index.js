import Text from '@components/Text';
import { VideoAndPicture } from '@constants/strings';
import { color } from '@styles/colorConstant';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

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
    <View style={styles.container}>
      <Text
        fontFamily={FONT_FAMILY.REGULAR}
        size={SIZE.SMALLEST}
        color={color.themeColorShockingPink}>
        {VideoAndPicture.uploading}
      </Text>
      <View style={styles.progressBar}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill],
            { backgroundColor: '#1ABC085C', width, borderRadius: 10 })
          }>
          <Text
            fontFamily={FONT_FAMILY.BOLD}
            size={SIZE.XSMALLEST}
            color={color.white}
            style={styles.textWrapper}>{`${progress}%`}</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default UploadingProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: -10,
  },
  progressBar: {
    flexDirection: 'row',
    height: 15,
    width: '100%',
    backgroundColor: '#00000019',
    borderRadius: 10,
  },
  textWrapper: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 1,
  },
});
