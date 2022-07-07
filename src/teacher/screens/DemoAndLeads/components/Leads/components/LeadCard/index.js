import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import { Size } from '../../../../../../globals';
import { theme } from '../../../../../../theme';
import { getLineHeight } from '../../../../../../constants';
import TextComponent from '../../../../../../components/text';
import * as actions from '../../../../../../store/actions';
import LeadDetails from '../LeadDetails';

import styles from './styles';

const LeadCard = ({ item }) => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const openModal = (height, modalComponenet) => {
    action.setModalToggle(true);
    action.setModalHeight(height);
    action.setModalComponent(modalComponenet);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => openModal('65', <LeadDetails data={item} />)}>
      <View style={styles.packageContainer}>
        <View style={styles.badgeContainer}>
          <View style={styles.dates}>
            <TextComponent
              title={item.date}
              color={theme.textLight}
              family={FontFamilyEnum.REGULAR}
              size={Size.XS}
              numLines={1}
              customStyles={(getLineHeight(18), { paddingVertical: 3 })}
            />

            <View style={styles.badgeContainer}>
              <View style={[styles.onlineTag, styles.premiumTag]}>
                <TextComponent
                  title={item.package}
                  color={theme.bgTheme}
                  family={FontFamilyEnum.SEMIBOLD}
                  size={11}
                  customStyles={{ ...getLineHeight(17), letterSpacing: 1 }}
                />
              </View>
              <View
                style={[
                  styles.onlineTag,
                  { backgroundColor: theme.lightBgThemePink },
                ]}>
                <TextComponent
                  title={item.grade}
                  color={theme.bgTheme}
                  family={FontFamilyEnum.SEMIBOLD}
                  size={11}
                  customStyles={{ ...getLineHeight(17), letterSpacing: 1 }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.courseTitle}>
          <TextComponent
            title={item.name}
            color={theme.textDefault}
            family={FontFamilyEnum.REGULAR}
            size={Size.DEFAULT}
            customStyles={getLineHeight(24)}
          />
        </View>

        <View style={styles.detailView}>
          <View style={styles.row}>
            <TextComponent
              title={item.location}
              color={theme.textLight}
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

export default LeadCard;
