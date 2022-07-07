import StatusBarComponent from '@components/StatusBarComponent';
import { theme } from '../../theme/';
import React, { useState } from 'react';
import HomeWithCompletedProfile from './components/HomeWithCompletedProfile';
import HomeWithThreeSteps from './components/HomeWithThreeSteps';

const Home = () => {
  const [iscompletedProfile] = useState(false);

  return (
    <>
      <StatusBarComponent statusBarColor={theme.bgWhite} isBarStyle={false} />
      {iscompletedProfile ? (
        <HomeWithCompletedProfile />
      ) : (
        <HomeWithThreeSteps />
      )}
    </>
  );
};

export default Home;
