import React from 'react';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import { theme } from '../../../../theme';
import { TouchableOpacity, View } from 'react-native';
import ProfileHeader from '../../../../components/ProfileHeader';
import styles from '../../styles';
import { WP } from '../../../../constants';
import { SvgXml } from 'react-native-svg';
import chevronRight from 'src/teacher/assets/svgs/chevron-right';
import checkmark from 'src/teacher/assets/svgs/checkmark';
import ProgressCircle from 'react-native-progress-circle';
import { useNavigation } from '@react-navigation/native';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { DrawerScreenConstant, SCREENS } from '@constants/strings';
import StatusBarComponent from '@components/StatusBarComponent';

const HomeWithThreeSteps = () => {
  const navigation = useNavigation();
  return (
    <View style={styles().container}>
      <StatusBarComponent statusBarColor={theme.bgWhite} isBarStyle={false} />

      <View style={styles().header}>
        <ProfileHeader userName={'Saima Amir'} teacherStatus={'Teacher'} />
        <View style={styles().midContent}>
          <TextComponent
            title={
              'You are three steps away from becoming a Dot & Line teacher!'
            }
            size={Size.L}
            family={FontFamilyEnum.EXTRA_LIGHT}
            color={theme.textDark}
          />
        </View>
      </View>

      <View style={styles().progressView}>
        <TextComponent
          title={'Complete all three steps'}
          size={Size.DEFAULT}
          family={FontFamilyEnum.LIGHT}
          color={theme.textDark}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREENS.TEACHER_OTHERS, {
              screen: SCREENS.TRAINING_VIDEOS,
              name: DrawerScreenConstant.TrainingVideos,
            });
          }}
          style={styles().completeProfileView}>
          <View style={styles().parentContainer}>
            <View style={styles(theme.bgColorBtn).progressCircle}>
              <SvgXml xml={checkmark} />
            </View>

            <View>
              <TextComponent
                title={'Step 1'}
                size={Size.S}
                color={theme.textLight}
              />
              <View
                style={{
                  marginTop: -WP('1'),
                }}>
                <TextComponent
                  title={'Training Videos'}
                  size={Size.M}
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
            navigation.navigate(SCREENS.TEACHER_OTHERS, {
              screen: SCREENS.TEACHER_CREATE_PROFILE,
              name: DrawerScreenConstant.CreateProfile,
            });
          }}
          style={styles().completeProfileView}>
          <View style={styles().parentContainer}>
            <ProgressCircle
              percent={30}
              radius={22}
              borderWidth={2}
              color={theme.bgColorBtn}
              shadowColor={theme.bgLightGreen}
              outerCircleStyle={{ marginRight: WP('3.5') }}
              bgColor={theme.bgLightGreen}>
              <View
                style={{
                  top: WP('0.4'),
                }}>
                <TextComponent
                  title={'30%'}
                  size={Size.XS}
                  family={FontFamilyEnum.SEMIBOLD}
                  color={theme.textDefault}
                />
              </View>
            </ProgressCircle>
            <View>
              <TextComponent
                title={'Step 2'}
                size={Size.S}
                color={theme.textLight}
              />
              <View
                style={{
                  marginTop: -WP('1'),
                }}>
                <TextComponent
                  title={'Complete Profile'}
                  size={Size.M}
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
            navigation.navigate(SCREENS.TEACHER_OTHERS, {
              screen: SCREENS.TEACHER_CREATE_PACKAGE,
              name: DrawerScreenConstant.CreatePackages,
            });
          }}
          style={styles().completeProfileView}>
          <View style={styles().parentContainer}>
            <View style={styles().progressCircle}>
              {/* <TextComponent
                title={'50%'}
                size={Size.XS}
                family={FONT_FAMILY.SEMI_BOLD}
                center
                color={theme.textDark}
              /> */}
            </View>

            <View>
              <TextComponent
                title={'Step 3'}
                size={Size.S}
                color={theme.textLight}
              />
              <View
                style={{
                  marginTop: -WP('1'),
                }}>
                <TextComponent
                  title={'Create Package'}
                  size={Size.M}
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
      </View>
    </View>
  );
};

export default HomeWithThreeSteps;
