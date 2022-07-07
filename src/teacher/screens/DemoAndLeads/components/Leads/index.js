import React from 'react';
import { FlatList } from 'react-native';
import LeadCard from './components/LeadCard';
import HeaderComponent from './components/HeaderComponent';

const Leads = () => {
  const data = [
    {
      id: '0',
      date: '31,Mar,2022',
      name: 'Fazila Ahmed',
      package: 'PREMIUM',
      grade: 'PREMIUM',
      agent: 'Haseeb',
      location: 'Pakistan - Karachi - DHA',
      details:
        'Amrine Anas Ahmed: The mother wants a proper pre nursery set up on premises, like sand box, swings, proper art and craft set up...similar to a school set up but at home in dhA only.Student is 2 years old.',
    },
    {
      id: '1',
      date: '31,Mar,2022',
      name: 'Faiz Ahmed',
      package: 'PREMIUM',
      grade: 'PREMIUM',
      agent: 'Rabia',
      location: 'Pakistan - Karachi - DHA',
      details:
        'Amrine Anas Ahmed: The mother wants a proper pre nursery set up on premises, like sand box, swings, proper art and craft set up...similar to a school set up but at home in dhA only.Student is 2 years old.',
    },
    {
      id: '2',
      date: '31,Mar,2022',
      name: 'Aliya Ahmed',
      package: 'PREMIUM',
      grade: 'PREMIUM',
      agent: 'XYZ',
      location: 'Pakistan - Karachi - DHA',
      details:
        'Amrine Anas Ahmed: The mother wants a proper pre nursery set up on premises, like sand box, swings, proper art and craft set up...similar to a school set up but at home in dhA only.Student is 2 years old.',
    },
    {
      id: '3',
      date: '31,Mar,2022',
      name: 'Adiba Abid',
      package: 'PREMIUM',
      grade: 'PREMIUM',
      agent: 'ABC',
      location: 'Pakistan - Karachi - DHA',
      details:
        'Amrine Anas Ahmed: The mother wants a proper pre nursery set up on premises, like sand box, swings, proper art and craft set up...similar to a school set up but at home in dhA only.Student is 2 years old.',
    },
    {
      id: '4',
      date: '31,Mar,2022',
      name: 'Fazila Ahmed',
      package: 'PREMIUM',
      grade: 'PREMIUM',
      agent: 'Haseeb',
      location: 'Pakistan - Karachi - DHA',
      details:
        'Amrine Anas Ahmed: The mother wants a proper pre nursery set up on premises, like sand box, swings, proper art and craft set up...similar to a school set up but at home in dhA only.Student is 2 years old.',
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <LeadCard item={item} />}
      ListHeaderComponent={<HeaderComponent />}
    />
  );
};

export default Leads;
