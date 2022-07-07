import React, { useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { SafeAreaView, View } from 'react-native';

import { theme } from '../../../../teacher/theme';
import SliderContent from './component/SliderContent';
import Button from '../../../../teacher/components/button';
import { HP } from '../../../../teacher/constants/index';
import TextComponent from '../../../../teacher/components/text';
import sizes from '../../../../teacher/globals/sizes';
import StatusBarComponent from '@components/StatusBarComponent';
import { FontFamilyEnum } from '../../../../teacher/constants/FontFamily';
import { welcome01, welcome02, welcome03, welcome04 } from '../assets/json';
import {
  AsyncStorageDataConstant,
  NavigationStack,
  SCREENS,
} from '@constants/strings';

import styles from './styles';

const data = [
  {
    id: 0,
    title: 'Earn. Inspire.\nAchieve. ',
    description: 'All from the comfort of your own home!',
    icon: welcome01,
  },
  {
    id: 1,
    title: 'With Dot & Line’s Video-Based Training',
    description: 'Get certified as a Teacher Partner today!',
    icon: welcome03,
  },
  {
    id: 2,
    title: 'And readily available support!',
    description:
      'Our Teacher Managers and Teacher Support Team are always there for you',
    icon: welcome02,
  },
  {
    id: 3,
    title: 'Become a Super Teacher today',
    description: 'And reach for the stars!',
    icon: welcome04,
  },
];

const Screens = ({ navigation }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    AsyncStorage.setItem(AsyncStorageDataConstant.ALREADY_LAUNCHED_APP, 'true');
  }, []);

  const onNext = () => {
    const index = swiperRef?.current?.getCurrentIndex();
    const numIndex = Number(index);

    if (numIndex < 3) {
      swiperRef?.current?.scrollToIndex({
        index: numIndex + 1,
        animated: true,
      });
    } else {
      navigation.replace(NavigationStack.LANDING, {
        screen: SCREENS.LOGIN_SCREEN,
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBarComponent statusBarColor={theme.bgWhite} isBarStyle={false} />

      <View style={styles.container}>
        <View style={styles.skip}>
          <TextComponent
            handlePress={() =>
              navigation.replace(NavigationStack.LANDING, {
                screen: SCREENS.LOGIN_SCREEN,
              })
            }
            family={FontFamilyEnum.MEDIUM}
            size={sizes.DEFAULT}
            color={theme.textNormal}
            title={'Skip'}
          />
        </View>

        <View style={{ flex: 1 }}>
          <SwiperFlatList
            ref={swiperRef}
            autoplay={false}
            showPagination
            paginationDefaultColor={theme.textDesc}
            paginationActiveColor={theme.bgTheme}
            paginationStyle={{
              marginBottoms: HP('5'),
            }}
            paginationStyleItem={{ width: 6, height: 6, marginLeft: 2 }}
            data={data}
            renderItem={({ item }) => (
              <View style={styles.child} key={item.id}>
                <SliderContent
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.footerBtn}>
          <Button
            title={'Next'}
            center
            size={sizes.DEFAULT}
            family={FontFamilyEnum.SEMIBOLD}
            color={theme.bgTheme}
            handlePress={onNext}
            customStyles={{ backgroundColor: theme.bgColorBtn }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screens;
