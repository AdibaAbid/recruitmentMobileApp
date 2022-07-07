import React from 'react';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import { theme } from '../../../../theme';
import { View } from 'react-native';
import { WP, HP } from '../../../../constants';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import StatusBarComponent from '@components/StatusBarComponent';

const NotificationsDetails = () => {
  return (
    <View
      style={{
        paddingHorizontal: WP('5'),
      }}>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      <View>
        <TextComponent
          title={'30th Nov 2021'}
          size={Size.XS}
          color={theme.textLight}
          customStyles={{
            paddingVertical: HP('2'),
          }}
        />
        <View
          style={{
            marginTop: -WP('1'),
          }}>
          <TextComponent
            title={'Express Package Fees Edit Option'}
            size={Size.DEFAULT}
            numLines={2}
            family={FontFamilyEnum.MEDIUM}
            color={theme.bgTheme}
          />

          <TextComponent
            title={'Posted By Muhammad Ali'}
            size={Size.XS}
            numLines={2}
            family={FontFamilyEnum.MEDIUM}
            color={theme.textLight}
          />
        </View>
      </View>

      <View>
        <TextComponent
          title={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
          }
          size={Size.S}
          family={FontFamilyEnum.LIGHT}
          color={theme.textDefault}
          customStyles={{
            paddingVertical: HP('5'),
          }}
        />
      </View>
    </View>
  );
};

export default NotificationsDetails;
