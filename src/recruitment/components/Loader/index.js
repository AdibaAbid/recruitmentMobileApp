import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const ButtonLoader = ({ animating, bgColor = 'white' }) => {
  return (
    <View style={{ left: 5 }}>
      <ActivityIndicator size="small" color={bgColor} animating={animating} />
    </View>
  );
};

export default ButtonLoader;
