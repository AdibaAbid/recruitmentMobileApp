import React from 'react';
import { StatusBar, View } from 'react-native';

// import  styles from './styles';

const StatusBarr = ({ backgroundColor, barStyle, isTranslucent = false }) => {
  return (
    <View style={[{ backgroundColor }]}>
      <StatusBar
        backgroundColor={backgroundColor}
        translucent={isTranslucent}
        barStyle={barStyle}
      />
    </View>
  );
};

export default StatusBarr;
