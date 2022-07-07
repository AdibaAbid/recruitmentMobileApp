import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { Size } from '../../../../globals/';
import { theme } from '../../../../theme/';
import React, { useLayoutEffect } from 'react';
import { FlatList, View } from 'react-native';
import Button from '@teacher/button';
import { defaultStyles } from '../../../../globals/defaults';
import TextComponent from '../../../../components/text';
import { WP } from '../../../../constants/';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const InvoiceScreen = ({ route }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route?.params?.name === '' ? '' : route?.params?.name,
      headerTitleStyle: {
        fontSize: 20,
        color: theme.bgTheme,
        fontFamily: FontFamilyEnum.REGULAR,
      },
    });
  });

  const InvoiceData = [
    {
      id: '0',
      title: 'Invoice Number',
      value: 'INV8707',
      textColor: theme.bgTheme,
    },
    {
      id: '0',
      value: `(0188978287263123767)
      CN-761`,
      textColor: theme.textDark,
    },
    {
      id: '2',
      title: 'Generated on',
      value: '09 Mar 2022',
      textColor: theme.textNormal,
    },
    {
      id: '3',
      title: 'Due Date',
      value: '09 Mar 2022',
      textColor: theme.textNormal,
    },
    {
      id: '4',
      title: 'Student Name',
      value: 'Karim Ali',
      textColor: theme.textNormal,
    },
    {
      id: '5',
      title: 'Amount',
      value: 'PKR 4,000',
      textColor: theme.textNormal,
    },
    {
      id: '6',
      title: 'Discount',
      value: 'PKR 0',
      textColor: theme.textNormal,
    },
    {
      id: '7',
      title: 'Status',
      value: 'Pending Transfer',
      textColor: theme.mustard,
    },
    {
      id: '8',
      title: 'Payment Status',
      value: 'Paid',
      date: '09 Mar 2022',
      subValue: 'Receipt not uploaded',
      textColor: theme.greenDark,
    },
  ];

  return (
    <>
      <FlatList
        data={InvoiceData}
        scrollEnabled={false}
        contentContainerStyle={{ paddingHorizontal: WP('5') }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <>
              <View style={styles.ProfHeader}>
                <TextComponent
                  title={item.title}
                  size={Size.S}
                  color={theme.textNormal}
                  family={FontFamilyEnum.REGULAR}
                  customStyles={styles.centerLeft}
                />
                <TextComponent
                  title={item.value}
                  size={Size.S}
                  color={item.textColor}
                  family={FontFamilyEnum.MEDIUM}
                  customStyles={styles.center}
                  numLines={3}
                />
              </View>
              <View style={styles.receiptNotUploadedText}>
                {item.date ? (
                  <TextComponent
                    title={item.date}
                    size={Size.S}
                    color={theme.textNormal}
                    family={FontFamilyEnum.REGULAR}
                  />
                ) : null}

                {item.subValue ? (
                  <TextComponent
                    title={item.subValue}
                    size={Size.S}
                    color={theme.reddish}
                    family={FontFamilyEnum.REGULAR}
                  />
                ) : null}
              </View>
            </>
          );
        }}
      />

      <View style={[defaultStyles.footerBtn, , styles.uploadBtn]}>
        <Button
          title={'Upload Receipt'}
          size={Size.S}
          center
          color={theme.bgTheme}
          family={FontFamilyEnum.SEMIBOLD}
          handlePress={() => console.log('uploaded')}
          customStyles={defaultStyles.btnFilled}
        />
      </View>
    </>
  );
};

export default InvoiceScreen;
