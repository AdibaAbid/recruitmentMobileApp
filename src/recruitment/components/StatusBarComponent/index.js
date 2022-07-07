import StatusBarr from '@components/StatusBar';
import React from 'react';

const StatusBarComponent = ({ statusBarColor, isTranslucent, isBarStyle }) => {
  return (
    <StatusBarr
      backgroundColor={statusBarColor}
      isTranslucent={isTranslucent}
      barStyle={isBarStyle ? 'light-content' : 'dark-content'}
    />
  );
};

export default StatusBarComponent;
