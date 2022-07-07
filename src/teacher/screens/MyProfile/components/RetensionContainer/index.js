import React from 'react';
import { View } from 'react-native';
import TextComponent from '../../../../components/text';
import { theme } from '../../../../theme';
import styles from './styles';
import { Size } from '../../../../globals';
import { FontFamilyEnum } from '../../../../constants/FontFamily';

const RetensionContainer = () => {
  return (
    <View style={styles.midContainer}>
      <View style={styles.retentionContainer}>
        <View style={styles.retentionTextBox}>
          <View style={styles.retensionView}>
            <TextComponent
              title={'Retention Rate'}
              center
              size={Size.XS}
              family={FontFamilyEnum.LIGHT}
              color={theme.textDark}
            />
          </View>
          <TextComponent
            title={'12%'}
            center
            size={Size.DEFAULT}
            family={FontFamilyEnum.MEDIUM}
            color={theme.bgTheme}
          />
        </View>

        <View style={styles.retentionTextBox}>
          <View style={styles.retensionView}>
            <TextComponent
              title={'Demo Conversion'}
              center
              size={Size.XS}
              family={FontFamilyEnum.LIGHT}
              color={theme.textDefault}
            />
          </View>

          <TextComponent
            title={'12%'}
            center
            size={Size.DEFAULT}
            family={FontFamilyEnum.MEDIUM}
            color={theme.bgTheme}
          />
        </View>

        <View style={styles.retentionThirdBox}>
          <View style={styles.retensionView}>
            <TextComponent
              title={'Retention Rate'}
              center
              size={Size.XS}
              family={FontFamilyEnum.LIGHT}
              color={theme.textDefault}
            />
          </View>
          <TextComponent
            title={'12%'}
            center
            size={Size.DEFAULT}
            family={FontFamilyEnum.MEDIUM}
            color={theme.bgTheme}
          />
        </View>
      </View>

      <View style={styles.detailBtnView}>
        <TextComponent
          title={'View Details'}
          center
          size={Size.XS}
          color={theme.bgTheme}
        />
      </View>
    </View>
  );
};

export default RetensionContainer;
