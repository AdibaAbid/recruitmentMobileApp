import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as actions from '../../../../store/actions';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../../../theme';
import TextComponent from '../../../../components/text';
import Button from '@teacher/button';
import { defaultConfig, Size } from '../../../../globals';
import { defaultStyles } from '../../../../globals/defaults';
import filterIcon from '../../assets/svg/filterIcon';
import PackageType from '../PackageType';
import {
  programList,
  packageData,
} from 'src/teacher/screens/CreatePackages/assets/DataList';
import PackageCard from './components/PackageCard';
import { DrawerScreenConstant, SCREENS } from '@constants/strings';
import { FontFamilyEnum } from '../../../../constants/FontFamily';

import styles from './styles';

const MyPackages = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const action = bindActionCreators(actions, dispatch);
  const [filter, setFilter] = useState('All');
  const SeperatorComponent = () => <View style={defaultStyles.seperator} />;

  const openModal = (height, modalComponenet) => {
    action.setModalToggle(true);
    action.setModalHeight(height);
    action.setModalComponent(modalComponenet);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.filterTxt}>
          <TextComponent
            title={'Filter by: '}
            size={Size.XS}
            center
            color={theme.textDefault}
          />

          <TextComponent
            title={filter}
            size={Size.XS}
            center
            color={theme.bgTheme}
          />
        </View>

        <TouchableOpacity
          activeOpacity={defaultConfig.touchOpacity}
          onPress={() =>
            openModal(
              '50',
              <PackageType data={programList} onSelect={setFilter} />,
            )
          }>
          <View style={styles.filterIcon}>
            <SvgXml xml={filterIcon} />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={packageData}
        keyExtractor={item => item.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        ItemSeparatorComponent={SeperatorComponent}
        renderItem={item => <PackageCard data={item} filterKey={filter} />}
      />

      <View style={[defaultStyles.footerBtn, styles.heading]}>
        <Button
          title={'Create Package'}
          size={Size.S}
          center
          color={theme.bgTheme}
          family={FontFamilyEnum.SEMIBOLD}
          handlePress={() =>
            navigation.navigate(SCREENS.TEACHER_OTHERS, {
              screen: SCREENS.TEACHER_CREATE_PACKAGE,
              name: DrawerScreenConstant.CreatePackages,
            })
          }
          customStyles={defaultStyles.btnFilled}
        />
      </View>
    </View>
  );
};

export default MyPackages;
