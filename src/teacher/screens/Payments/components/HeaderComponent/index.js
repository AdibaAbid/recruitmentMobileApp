import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { Size } from '../../../../globals/';
import { theme } from '../../../../theme/';
import InputComponent from '../../../../components/Input';
import TextComponent from '../../../../components/text';
import InvoiceSvg from '../../assets/svgs/InvoiceSvg';

import styles from './styles';

const HeaderComponent = () => {
  const onSearch = () => {
    console.log('searchs');
  };

  return (
    <View style={styles.headerParentView}>
      <View style={styles.totalPaidInvoice}>
        <View style={styles.totalView}>
          <TextComponent
            title={'Total'}
            size={Size.XSs}
            color={theme.bgTheme}
            family={FontFamilyEnum.REGULAR}
          />
          <TextComponent
            title={'20'}
            size={Size.M}
            color={theme.bgTheme}
            family={FontFamilyEnum.SEMIBOLD}
          />
        </View>

        <View style={styles.paidInvoiceView}>
          <TextComponent
            title={'Paid'}
            size={Size.XSs}
            color={theme.bgTheme}
            family={FontFamilyEnum.REGULAR}
          />
          <TextComponent
            title={'4'}
            size={Size.M}
            color={theme.bgTheme}
            family={FontFamilyEnum.SEMIBOLD}
          />
        </View>

        <View style={styles.pendingView}>
          <TextComponent
            title={'Pending'}
            size={Size.XSs}
            color={theme.bgTheme}
            family={FontFamilyEnum.REGULAR}
          />
          <TextComponent
            title={'84'}
            size={Size.M}
            color={theme.bgTheme}
            family={FontFamilyEnum.SEMIBOLD}
          />
        </View>
      </View>

      <View style={styles.searchParentView}>
        <InputComponent
          placeHolder={'Search by Invoice ID'}
          submitEditingHandle={() => {}}
          handleChange={onSearch}
          keyboardType={'default'}
          customStyle={styles.inputStyle}
        />
        <View style={styles.svgView}>
          <SvgXml xml={InvoiceSvg} />
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;
