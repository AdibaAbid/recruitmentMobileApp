import React from 'react';
import TextComponent from '../../components/text';
import { Size } from '../../globals';
import { theme } from '../../theme';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { WP } from '../../constants';
import { SvgXml } from 'react-native-svg';
import chevronRight from 'src/teacher/assets/svgs/chevron-right';
import { useNavigation } from '@react-navigation/native';
import { FontFamilyEnum } from '../../constants/FontFamily';
import { SCREENS } from '@constants/strings';
import StatusBarComponent from '@components/StatusBarComponent';

const Notifications = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      <View style={styles().container}>
        <View style={styles().progressView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.TEACHER_NOTIFICATIONS_DETAILS, {
                screen: SCREENS.TEACHER_NOTIFICATIONS_DETAILS,
              });
            }}
            style={styles().completeProfileView}>
            <View style={styles().parentContainer}>
              <View>
                <TextComponent
                  title={'30th Nov 2021'}
                  size={Size.XS}
                  color={theme.textLight}
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
                </View>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: WP('2'),
              }}>
              <SvgXml xml={chevronRight(theme.textLight)} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.TEACHER_NOTIFICATIONS_DETAILS, {
                screen: SCREENS.TEACHER_NOTIFICATIONS_DETAILS,
              });
            }}
            style={styles().completeProfileView}>
            <View style={styles().parentContainer}>
              <View>
                <TextComponent
                  title={'30th Nov 2021'}
                  size={Size.XS}
                  color={theme.textLight}
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
                </View>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: WP('2'),
              }}>
              <SvgXml xml={chevronRight(theme.textLight)} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.TEACHER_NOTIFICATIONS_DETAILS, {
                screen: SCREENS.TEACHER_NOTIFICATIONS_DETAILS,
              });
            }}
            style={styles().completeProfileView}>
            <View style={styles().parentContainer}>
              <View>
                <TextComponent
                  title={'30th Nov 2021'}
                  size={Size.XS}
                  color={theme.textLight}
                />
                <View
                  style={{
                    marginTop: -WP('1'),
                  }}>
                  <TextComponent
                    title={'Express Package Fees Edit Option'}
                    size={Size.DEFAULT}
                    numLines={2}
                    family={FontFamilyEnum.REGULAR}
                    color={theme.textDefault}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: WP('2'),
              }}>
              <SvgXml xml={chevronRight(theme.textLight)} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Notifications;
