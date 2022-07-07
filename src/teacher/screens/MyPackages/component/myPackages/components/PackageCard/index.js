import React from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { theme } from '../../../../../../theme';
import TextComponent from '../../../../../../components/text';
import { Size } from '../../../../../../globals';
import { getLineHeight, WP } from '../../../../../../constants/';
import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import edu from '../../../../../../assets/svgs/edu';
import menu from '../../../../assets/svg/menu';

import styles from '../../styles';

const menus = [
  {
    id: '0',
    level: 'Edit',
    value: 'edit',
  },
  {
    id: '1',
    level: 'Delete',
    value: 'delete',
  },
];

const PackageCard = ({ data, filterKey }) => {
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

  return data.item.label.toLowerCase() === filterKey.toLowerCase() ? (
    <TouchableOpacity onPress={() => {}} activeOpacity={1}>
      <View style={styles.card}>
        <View>
          <Image
            resizeMode={'cover'}
            style={styles.imageStyle}
            source={{
              uri: 'https://image.shutterstock.com/image-vector/science-lab-many-equipments-illustration-260nw-1541725763.jpg',
            }}
          />
          <View style={styles.tagView}>
            <View style={[styles.onlineTag]}>
              <TextComponent
                title={'ONLINE'}
                color={theme.blueBg}
                family={FontFamilyEnum.MEDIUM}
                size={11}
                customStyles={{
                  ...getLineHeight(17),
                  letterSpacing: 1,
                }}
              />
            </View>

            {data.item.isPrivate && (
              <View style={[styles.privateTag]}>
                <TextComponent
                  title={'PRIVATE'}
                  color={theme.bgWhite}
                  family={FontFamilyEnum.MEDIUM}
                  size={11}
                  customStyles={{
                    ...getLineHeight(17),
                    letterSpacing: 1,
                  }}
                />
              </View>
            )}
          </View>

          <View style={styles.menuSelection}>
            <Menu
              onSelect={() => {}}
              rendererProps={{ preferredPlacement: 'bottom' }}>
              <MenuTrigger>
                <View style={styles.menu}>
                  <SvgXml xml={menu(theme.bgTheme)} />
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

        <View style={styles.textWrapper}>
          <View style={styles.courseTitle}>
            <TextComponent
              title={data.item.title}
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
        <View style={styles.labelView}>
          <View style={styles.packageFee}>
            <TextComponent
              title={filterKey.toUpperCase()}
              color={theme.bgTheme}
              center
              family={FontFamilyEnum.REGULAR}
              size={Size.XXS}
              numLines={1}
              customStyles={getLineHeight(24)}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    filterKey === 'All' && (
      <TouchableOpacity onPress={() => {}} activeOpacity={1}>
        <View style={styles.card}>
          <View>
            <Image
              resizeMode={'cover'}
              style={styles.imageStyle}
              source={{
                uri: 'https://image.shutterstock.com/image-vector/science-lab-many-equipments-illustration-260nw-1541725763.jpg',
              }}
            />
            <View style={styles.tagView}>
              <View style={[styles.onlineTag]}>
                <TextComponent
                  title={'ONLINE'}
                  color={theme.blueBg}
                  family={FontFamilyEnum.MEDIUM}
                  size={11}
                  customStyles={{
                    ...getLineHeight(17),
                    letterSpacing: 1,
                  }}
                />
              </View>

              {data.item.isPrivate && (
                <View style={[styles.privateTag]}>
                  <TextComponent
                    title={'PRIVATE'}
                    color={theme.bgWhite}
                    family={FontFamilyEnum.MEDIUM}
                    size={11}
                    customStyles={{
                      ...getLineHeight(17),
                      letterSpacing: 1,
                    }}
                  />
                </View>
              )}
            </View>
            <View style={styles.menuSelection}>
              <Menu
                onSelect={() => {}}
                rendererProps={{ preferredPlacement: 'bottom' }}>
                <MenuTrigger>
                  <View style={styles.menu}>
                    <SvgXml xml={menu(theme.bgTheme)} />
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

          <View style={styles.textWrapper}>
            <View style={styles.courseTitle}>
              <TextComponent
                title={data.item.title}
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
          <View style={styles.labelView}>
            <View style={styles.packageFee}>
              <TextComponent
                title={data.item.label}
                color={theme.bgTheme}
                center
                family={FontFamilyEnum.REGULAR}
                size={Size.XXS}
                numLines={1}
                customStyles={getLineHeight(24)}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  );
};

export default PackageCard;
