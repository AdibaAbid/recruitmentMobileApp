import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { theme } from '../../../../theme';
import { SvgXml } from 'react-native-svg';
import TextComponent from '../../../../components/text';
import { defaultConfig, Size } from '../../../../globals';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { getLineHeight } from '../../../../constants';
import edu from '../../../../assets/svgs/edu';
import calendar from '../../../../assets/svgs/calendar';
import clock from '../../../../assets/svgs/clock';
import marker from '../../../../assets/svgs/marker';
import trash from 'src/teacher/assets/svgs/trash';
import { defaultStyles } from '../../../../globals/defaults';

import styles from '../../styles';

const TimeSlotCard = () => {
  const SeperatorComponent = () => <View style={defaultStyles.seperator} />;

  const listItem = (icon, text, color) => (
    <View style={styles.dates}>
      <View style={styles.iconMargin}>
        <SvgXml xml={icon} />
      </View>

      <TextComponent
        title={text}
        color={color}
        family={FontFamilyEnum.REGULAR}
        size={Size.XS}
        numLines={1}
        customStyles={getLineHeight(18)}
      />
    </View>
  );

  return (
    <FlatList
      data={['0', '1']}
      keyExtractor={item => item}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={SeperatorComponent}
      contentContainerStyle={styles.flatListContainer}
      renderItem={() => (
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.packageContainer}>
            <View style={styles.badgeContainer}>
              <View
                style={[
                  styles.onlineTag,
                  { backgroundColor: theme.lightBgThemePink },
                ]}>
                <TextComponent
                  title={'EVENING'}
                  color={theme.bgTheme}
                  family={FontFamilyEnum.REGULAR}
                  size={11}
                  customStyles={{ ...getLineHeight(17), letterSpacing: 1 }}
                />
              </View>

              <View style={[styles.onlineTag, styles.demoStyle]}>
                <TextComponent
                  title={'OPEN FOR DEMO'}
                  color={theme.bgTheme}
                  family={FontFamilyEnum.REGULAR}
                  size={11}
                  customStyles={{ ...getLineHeight(17), letterSpacing: 1 }}
                />
              </View>

              <View style={styles.menuSelection}>
                <TouchableOpacity
                  activeOpacity={defaultConfig.touchOpacity}
                  style={styles.menu}>
                  <SvgXml xml={trash} />
                </TouchableOpacity>
              </View>
            </View>

            {listItem(
              calendar,
              'Mon, Tue, Wed, Thu, Fri, Sat',
              theme.textNormal,
            )}
            {listItem(clock, '4:00Pm - 530Pm', theme.textNormal)}
            {listItem(edu, 'Seats: 5', theme.textNormal)}
            {listItem(marker, 'Pakistan, Asia/Karachi', theme.textNormal)}
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default TimeSlotCard;
