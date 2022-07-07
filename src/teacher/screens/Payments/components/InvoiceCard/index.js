import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';

import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { Size } from '../../../../globals/';
import { theme } from '../../../../theme/';
import { getLineHeight, HP, WP } from '../../../../constants/';
import TextComponent from '../../../../components/text';
import { SCREENS } from '@constants/strings';

import styles from './styles';

const InvoiceCard = ({ invoiceNum, isReceiptPaid }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate(SCREENS.TEACHER_PAYMENTS_STACKS, {
          screen: SCREENS.TEACHER_INVOICE_SCREEN,
          params: { name: invoiceNum },
        })
      }
      style={{ paddingVertical: HP('1'), paddingHorizontal: WP('4') }}>
      <View style={styles.packageContainer}>
        <View style={styles.badgeContainer}>
          <View style={[styles.onlineTag, { paddingHorizontal: 2 }]}>
            <TextComponent
              title={invoiceNum}
              color={theme.bgTheme}
              family={FontFamilyEnum.MEDIUM}
              size={11}
              customStyles={{ ...getLineHeight(17), letterSpacing: 1 }}
            />
          </View>
          {isReceiptPaid ? (
            <View style={[styles.onlineTag, styles.paidTxt]}>
              <TextComponent
                title={'PAID'}
                color={theme.green}
                family={FontFamilyEnum.SEMIBOLD}
                size={11}
                customStyles={{ ...getLineHeight(17), letterSpacing: 1 }}
              />
            </View>
          ) : (
            <View style={[styles.onlineTag, styles.notUploadedTxt]}>
              <TextComponent
                title={'RECEIPT NOT UPLOADED'}
                color={theme.reddish}
                family={FontFamilyEnum.SEMIBOLD}
                size={11}
                customStyles={{ ...getLineHeight(17), letterSpacing: 1 }}
              />
            </View>
          )}
        </View>

        <View style={styles.courseTitle}>
          <TextComponent
            title={'Qasim Ali'}
            color={theme.textDefault}
            family={FontFamilyEnum.REGULAR}
            size={Size.DEFAULT}
            numLines={2}
            customStyles={getLineHeight(24)}
          />
        </View>

        <View style={styles.timingView}>
          <View style={styles.packageFee}>
            <TextComponent
              title={'Due on: 22/12/2022'}
              color={theme.textNormal}
              family={FontFamilyEnum.REGULAR}
              size={Size.S}
              numLines={1}
              customStyles={getLineHeight(21)}
            />
          </View>

          <View style={styles.rupees}>
            <TextComponent
              title={'PKR 5000/-'}
              color={theme.bgTheme}
              family={FontFamilyEnum.MEDIUM}
              size={Size.M}
              numLines={1}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InvoiceCard;
