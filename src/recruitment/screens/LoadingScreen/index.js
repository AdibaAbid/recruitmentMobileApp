import React from 'react';
import { getWindowWidth } from '@utils/platformUtils';
import SkeletonLoaderForHomeScreen from '@components/SkeletonLoader/SkeletonLoaderForHomeScreen';

const LoadingScreen = ({ navigation }) => {
  return (
    <SkeletonLoaderForHomeScreen
      width={getWindowWidth() / 1.12}
      numberOfRender={8}
    />
  );
};

export default LoadingScreen;
