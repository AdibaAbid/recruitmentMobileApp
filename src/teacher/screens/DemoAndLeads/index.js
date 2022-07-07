import StatusBarComponent from '@components/StatusBarComponent';
import { theme } from '../../theme';
import React from 'react';
import DemoTabView from './components/DemoTabView';

const DemoAndLeads = () => {
  return (
    <>
      <StatusBarComponent statusBarColor={theme.bgWhite} />
      <DemoTabView />
    </>
  );
};

export default DemoAndLeads;
