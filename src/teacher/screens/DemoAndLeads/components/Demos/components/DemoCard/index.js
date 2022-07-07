import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { getLineHeight } from '../../../../../../constants';
import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import { Size } from '../../../../../../globals';
import { theme } from '../../../../../../theme';
import TextComponent from '../../../../../../components/text';
import menu from 'src/teacher/screens/MyPackages/assets/svg/menu';
import calendar from 'src/teacher/screens/Home/assets/svgs/calendar';

import styles from './styles';

const menus = [
  {
    id: '0',
    level: 'Assigned',
    value: 'assigned',
  },
  {
    id: '1',
    level: 'Attended',
    value: 'attended',
  },
  {
    id: '2',
    level: 'Not Scheduled',
    value: 'not scheduled',
  },
  {
    id: '3',
    level: 'Not Attended',
    value: 'not attended',
  },
];
const DemoCard = ({ demoStatus }) => {
  const menuOptions = ({ item }) => (
    <MenuOption value={item.value}>
      <TextComponent
        title={item.level}
        family={FontFamilyEnum.LIGHT}
        size={Size.S}
        color={theme.textDefault}
      />
    </MenuOption>
  );

  const CheckDemoStatus = demo => {
    switch (demo) {
      case 'ASSIGNED':
        return (
          <View
            style={[
              styles.onlineTag,
              { backgroundColor: theme.transparentYellow },
            ]}>
            <TextComponent
              title={'ASSIGNED'}
              color={theme.yellow}
              family={FontFamilyEnum.SEMIBOLD}
              size={11}
              customStyles={styles.letterSpacing}
            />
          </View>
        );
      case 'SCHEDULED':
        return (
          <>
            <View style={{ alignSelf: 'center', paddingHorizontal: 4 }}>
              <SvgXml xml={calendar} />
            </View>

            <View
              style={[
                styles.onlineTag,
                { borderColor: theme.bgTheme, borderWidth: 1 },
              ]}>
              <TextComponent
                title={'SCHEDULED'}
                color={theme.bgTheme}
                family={FontFamilyEnum.SEMIBOLD}
                size={11}
                customStyles={styles.letterSpacing}
              />
            </View>
          </>
        );
      case 'ATTENDED':
        return (
          <View style={[styles.onlineTag, { backgroundColor: theme.mustard }]}>
            <TextComponent
              title={'ATTENDED'}
              color={theme.bgTheme}
              family={FontFamilyEnum.SEMIBOLD}
              size={11}
              customStyles={styles.letterSpacing}
            />
          </View>
        );
      case 'REGISTERED':
        return (
          <View
            style={[styles.onlineTag, { backgroundColor: theme.bgColorBtn }]}>
            <TextComponent
              title={'REGISTERED'}
              color={theme.bgTheme}
              family={FontFamilyEnum.SEMIBOLD}
              size={11}
              customStyles={styles.letterSpacing}
            />
          </View>
        );
      default:
        break;
    }
  };

  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={styles.packageContainer}>
        <View style={styles.badgeContainer}>
          <View style={styles.dates}>
            <TextComponent
              title={'31,Mar,2022 - 05:30 PM'}
              color={theme.textNormal}
              family={FontFamilyEnum.REGULAR}
              size={Size.XS}
              numLines={1}
              customStyles={(getLineHeight(18), { paddingVertical: 3 })}
            />

            <View style={styles.badgeContainer}>
              {CheckDemoStatus(demoStatus)}

              <View style={[styles.onlineTag, styles.OnlineTagView]}>
                <TextComponent
                  title={'ONLINE'}
                  color={theme.green}
                  family={FontFamilyEnum.SEMIBOLD}
                  size={11}
                  customStyles={styles.letterSpacing}
                />
              </View>
            </View>
          </View>

          <View style={styles.menuSelection}>
            <Menu
              onSelect={() => {}}
              rendererProps={{ preferredPlacement: 'bottom' }}>
              <MenuTrigger>
                <View style={styles.menu}>
                  <SvgXml xml={menu(theme.textLight)} />
                </View>
              </MenuTrigger>

              <MenuOptions
                customStyles={{
                  optionsContainer: styles.optionsContainer,
                  optionWrapper: styles.optionWrapper,
                }}>
                <FlatList
                  data={menus}
                  keyExtractor={item => item.id.toString()}
                  renderItem={menuOptions}
                />
              </MenuOptions>
            </Menu>
          </View>
        </View>

        <View style={styles.courseTitle}>
          <TextComponent
            title={'Fazila Ahmed'}
            color={theme.textDefault}
            family={FontFamilyEnum.SEMIBOLD}
            size={Size.DEFAULT}
            customStyles={getLineHeight(24)}
          />
          <TextComponent
            title={'#D34554'}
            color={theme.textLight}
            family={FontFamilyEnum.REGULAR}
            size={Size.XSs}
            customStyles={styles.idText}
          />
        </View>

        <View style={styles.numView}>
          <TextComponent
            title={'033334143716'}
            color={theme.textNormal}
            family={FontFamilyEnum.REGULAR}
            size={Size.XS}
            numLines={1}
            customStyles={getLineHeight(18)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DemoCard;
