import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { Size } from '../../../../globals';
import { theme } from '../../../../theme';
import { getLineHeight } from '../../../../constants';
import TextComponent from '../../../../components/text';
import menu from 'src/teacher/screens/MyPackages/assets/svg/menu';
import { InactiveDemosData } from 'src/teacher/screens/CreatePackages/assets/DataList';

import styles from './styles';

const menus = [
  {
    id: '0',
    level: 'Restore',
    value: 'restore',
  },
];

const InactiveDemos = () => {
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

  const InactiveDemoCard = () => {
    return (
      <TouchableOpacity activeOpacity={1}>
        <View style={styles.packageContainer}>
          <View style={styles.badgeContainer}>
            <View style={styles.dates}>
              <TextComponent
                title={'31,Mar,2022 - 05:30 PM'}
                color={theme.textLight}
                family={FontFamilyEnum.REGULAR}
                size={Size.XS}
                numLines={1}
                customStyles={(getLineHeight(18), { paddingVertical: 3 })}
              />

              <View style={styles.badgeContainer}>
                <View style={[styles.onlineTag, styles.schldTag]}>
                  <TextComponent
                    title={'NOT SCHEDULED'}
                    color={theme.bgTheme}
                    family={FontFamilyEnum.SEMIBOLD}
                    size={11}
                    customStyles={{ ...getLineHeight(17), letterSpacing: 1 }}
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
              family={FontFamilyEnum.REGULAR}
              size={Size.DEFAULT}
              customStyles={getLineHeight(24)}
            />
            <TextComponent
              title={'#D34554'}
              color={theme.textLight}
              family={FontFamilyEnum.LIGHT}
              size={11}
              customStyles={styles.idText}
            />
          </View>

          <View>
            <View style={styles.row}>
              <TextComponent
                title={'Reason:'}
                color={theme.textLight}
                family={FontFamilyEnum.REGULAR}
                size={Size.XS}
                numLines={1}
                customStyles={getLineHeight(18)}
              />
              <TextComponent
                title={'Not Interested'}
                color={theme.textDark}
                family={FontFamilyEnum.REGULAR}
                size={Size.XS}
                numLines={1}
                customStyles={(getLineHeight(18), { paddingHorizontal: 4 })}
              />
            </View>

            <View style={styles.row}>
              <TextComponent
                title={'Comments:'}
                color={theme.textLight}
                family={FontFamilyEnum.REGULAR}
                size={Size.XS}
                numLines={1}
                customStyles={getLineHeight(18)}
              />
              <TextComponent
                title={'Not Interested as this moment'}
                color={theme.textDark}
                family={FontFamilyEnum.REGULAR}
                size={Size.XS}
                numLines={1}
                customStyles={(getLineHeight(18), { paddingHorizontal: 4 })}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={InactiveDemosData}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <InactiveDemoCard />}
    />
  );
};

export default InactiveDemos;
