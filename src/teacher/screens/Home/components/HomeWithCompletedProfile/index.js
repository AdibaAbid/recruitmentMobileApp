import React, { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import TextComponent from '../../../../components/text';
import Size from '../../../../globals/sizes';
import { defaultStyles } from '../../../../globals/defaults';
import { theme } from '../../../../theme';
import Button from '../../../../components/button';
import ProfileHeader from '../../../../components/ProfileHeader';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import StatusBarComponent from '@components/StatusBarComponent';
import bookWithStars from '../../assets/svgs/bookWithStars';

import styles from './styles';
import calendar from '../../assets/svgs/calendar';
import PackageSection from './components/PackageSection';
import ReviewSection from './components/ReviewSection';

const myPackagesData = [
  {
    id: '0',
    title: 'Chemistry 101 : For all students, learn by experts',
    isDemo: true,
  },
  {
    id: '1',
    title: 'Chemistry 101 : For all students, learn by experts',
  },
  {
    id: '2',
    title: 'Chemistry 101 : For all students, learn by experts',
  },
];

const ReviewsData = [
  {
    id: '0',
  },
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
];

const HomeWithCompletedProfile = () => {
  const [packages] = useState(false);
  const emptyList = [];

  const onRefresh = () => {};

  const HeaderComponent = () => {
    return (
      <View style={styles.header}>
        <ProfileHeader userName={'Saima Amir'} teacherBadges={true} />

        <View style={styles.midContent}>
          <View style={styles.notificationView}>
            <View style={styles.parentContainer}>
              <View style={styles.iconStyle}>
                <SvgXml xml={bookWithStars} />
              </View>

              <View style={styles.textBox}>
                <TextComponent
                  title={'Chemistry 101, starting in 10 minutes'}
                  size={Size.S}
                  family={FontFamilyEnum.LIGHT}
                  color={theme.textDark}
                />
                <Button
                  title={'Start Class'}
                  size={Size.S}
                  family={FontFamilyEnum.SEMIBOLD}
                  color={theme.bgTheme}
                  handlePress={() => {}}
                  customStyles={[
                    defaultStyles.btnFilled,
                    styles.customButtonClassStyles,
                  ]}
                />
              </View>
            </View>
          </View>

          <View style={styles.scheduledView}>
            <View style={styles.parentContainer}>
              <View style={styles.calendarStyle}>
                <SvgXml xml={calendar} />
              </View>

              <View style={styles.textBox}>
                <TextComponent
                  title={'You have 2 upcoming scheduled demoes'}
                  size={Size.S}
                  family={FontFamilyEnum.LIGHT}
                  color={theme.textDark}
                />
                <Button
                  title={'View Details'}
                  size={Size.S}
                  family={FontFamilyEnum.SEMIBOLD}
                  color={theme.bgTheme}
                  handlePress={() => {}}
                  customStyles={styles.customButtonStyle}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const FooterComponent = () => {
    return (
      <View>
        <View style={styles.section}>
          <View>
            <TextComponent
              title={'Packages'}
              color={theme.bgTheme}
              size={Size.M}
              family={FontFamilyEnum.REGULAR}
            />
            <TextComponent
              title={
                'Your top performing packages. Add a time slot to earn more!'
              }
              color={theme.textLight}
              size={Size.DEFAULT}
              family={FontFamilyEnum.LIGHT}
            />
          </View>
        </View>
        <View style={styles.flatListStyle}>
          {packages ? (
            <PackageSection data={myPackagesData} />
          ) : (
            <Button
              title={'Create Package'}
              size={Size.S}
              family={FontFamilyEnum.SEMIBOLD}
              color={theme.bgTheme}
              handlePress={() => {}}
              customStyles={[
                defaultStyles.btnFilled,
                styles.customButtonClassStyles,
              ]}
            />
          )}
        </View>

        <View style={styles.section}>
          <View>
            <TextComponent
              title={'Parent Reviews'}
              color={theme.bgTheme}
              size={Size.M}
              family={FontFamilyEnum.REGULAR}
            />

            <ReviewSection data={ReviewsData} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      <FlatList
        data={emptyList}
        renderItem={() => null}
        refreshing={false}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
        keyExtractor={() => 'item'}
        ListHeaderComponent={<HeaderComponent />}
        ListFooterComponent={<FooterComponent />}
      />
    </SafeAreaView>
  );
};

export default HomeWithCompletedProfile;
