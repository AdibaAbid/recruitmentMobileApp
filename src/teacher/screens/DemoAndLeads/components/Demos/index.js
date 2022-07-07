import React from 'react';
import { FlatList } from 'react-native';
import HeaderComponent from './components/HeaderComponent';
import DemoCard from './components/DemoCard';

const Demos = () => {
  const demoData = [
    {
      id: '0',
      demoStatus: 'SCHEDULED',
    },
    {
      id: '1',
      demoStatus: 'ATTENDED',
    },
    {
      id: '2',
      demoStatus: 'REGISTERED',
    },
    {
      id: '3',
      demoStatus: 'ATTENDED',
    },
  ];

  return (
    <FlatList
      data={demoData}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <DemoCard demoStatus={item.demoStatus} />}
      ListHeaderComponent={<HeaderComponent />}
    />
  );
};

export default Demos;
