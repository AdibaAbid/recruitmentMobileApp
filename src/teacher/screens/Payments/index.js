import React from 'react';
import { FlatList } from 'react-native';
import HeaderComponent from './components/HeaderComponent';
import InvoiceCard from './components/InvoiceCard';
import StatusBarComponent from '@components/StatusBarComponent';
import { theme } from '../../theme';

const Payments = () => {
  const data = [
    {
      id: '0',
      invoiceNum: 'INV8707',
      isPaid: false,
    },
    {
      id: '1',
      invoiceNum: 'INV8708',
      isPaid: true,
    },
    {
      id: '2',
      invoiceNum: 'INV8709',
      isPaid: false,
    },
    {
      id: '3',
      invoiceNum: 'INV8710',
      isPaid: true,
    },
  ];

  return (
    <>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <InvoiceCard
            isReceiptPaid={item.isPaid}
            invoiceNum={item.invoiceNum}
          />
        )}
        ListHeaderComponent={<HeaderComponent />}
      />
    </>
  );
};

export default Payments;
