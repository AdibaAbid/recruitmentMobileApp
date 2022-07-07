import React from 'react';

import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
// import FastImage from 'react-native-fast-image';

import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import { theme } from '../../../../../../theme/';
import TextComponent from '../../../../../../components/text';

import styles from './styles';
import Size from '../../../../../../globals/sizes';
import edu from 'src/teacher/assets/svgs/edu';
import { getLineHeight, WP } from '../../../../../../constants/';

const PackageSection = ({ data }) => {
  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}} activeOpacity={1}>
        <View style={styles.card}>
          <View>
            {/* <FastImage
              source={{
                uri: item.teacher.picture,
                priority: FastImage.priority.normal,
              }}
              style={styles.imageStyle}
              resizeMode={FastImage.resizeMode.cover}
            /> */}

            <Image
              resizeMode={'cover'}
              style={styles.imageStyle}
              source={{
                uri: 'https://rec-portal.s3.ap-south-1.amazonaws.com/rec-portal//alvinajavaid93@gmail.com/61265f205c55fa51b7b5e098-profilepic.jpeg',
              }}
            />
            <View style={[styles.onlineTag]}>
              <TextComponent
                title={'Online'}
                color={theme.blueBg}
                family={FontFamilyEnum.MEDIUM}
                size={11}
                customStyles={{
                  ...getLineHeight(17),
                  letterSpacing: 1,
                }}
              />
            </View>
          </View>

          <View style={styles.textWrapper}>
            <View style={styles.courseTitle}>
              <TextComponent
                title={item.title}
                color={theme.textDark}
                family={FontFamilyEnum.MEDIUM}
                size={Size.DEFAULT}
                numLines={2}
                customStyles={getLineHeight(24)}
              />
            </View>
          </View>

          <View style={styles.gradeView}>
            <TextComponent
              title={'15000 PKR'}
              color={theme.bgTheme}
              family={FontFamilyEnum.SEMIBOLD}
              size={Size.S}
              numLines={2}
              customStyles={{
                ...getLineHeight(24),
                paddingRight: WP('5'),
              }}
            />

            <View style={styles.iconMargin}>
              <SvgXml xml={edu} />
            </View>

            <View>
              <TextComponent
                title={'4 Students '}
                color={theme.textNormal}
                family={FontFamilyEnum.REGULAR}
                size={Size.XS}
                numLines={1}
                customStyles={getLineHeight(18)}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.messageContainer}
      horizontal
      renderItem={renderItems}
    />
  );
};

export default PackageSection;
