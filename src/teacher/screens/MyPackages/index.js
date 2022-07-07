import StatusBarComponent from '@components/StatusBarComponent';
import { theme } from '../../theme';
import React, { useState } from 'react';
import { View } from 'react-native';
import MyPackages from './component/myPackages';
import NotFoundPackage from './component/notFoundPackage';

const Packages = ({ navigation, route }) => {
  const [isPackage] = useState(true);
  return (
    <View style={{ flex: 1 }}>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      {isPackage ? <MyPackages /> : <NotFoundPackage />}
    </View>
  );
};

export default Packages;
