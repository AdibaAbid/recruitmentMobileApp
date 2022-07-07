import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity, View } from 'react-native';

import InputComponent from '../../../../../../components/Input';
import TextComponent from '../../../../../../components/text';
import filterIcon from 'src/teacher/screens/MyPackages/assets/svg/filterIcon';
import Button from '@teacher/button';
import { HP } from '../../../../../../constants';
import { SCREENS } from '@constants/strings';
import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import { Size } from '../../../../../../globals';
import { theme } from '../../../../../../theme';
import * as actions from '../../../../../../store/actions';
import FilterDemos from '../../../FilterDemos';

import styles from './styles';

const HeaderComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const openModal = (height, modalComponenet) => {
    action.setModalToggle(true);
    action.setModalHeight(height);
    action.setModalComponent(modalComponenet);
  };

  const onSearch = () => {
    console.log('searchs');
  };

  return (
    <View style={styles.headerParentView}>
      <View style={styles.totalPaidInvoice}>
        <View style={styles.schldView}>
          <TextComponent
            title={'Scheduled'}
            size={Size.XSs}
            color={theme.bgTheme}
            family={FontFamilyEnum.REGULAR}
            customStyles={styles.textStyle}
          />
          <TextComponent
            title={'4'}
            size={Size.M}
            color={theme.bgTheme}
            family={FontFamilyEnum.SEMIBOLD}
            customStyles={styles.textStyle}
          />
        </View>

        <View style={styles.attentedView}>
          <TextComponent
            title={'Attended'}
            size={Size.XSs}
            color={theme.drakViolet}
            family={FontFamilyEnum.REGULAR}
            customStyles={styles.textStyle}
          />
          <TextComponent
            title={'84'}
            size={Size.M}
            color={theme.drakViolet}
            family={FontFamilyEnum.SEMIBOLD}
            customStyles={styles.textStyle}
          />
        </View>

        <View style={styles.registeredView}>
          <TextComponent
            title={'Registered'}
            size={Size.XSs}
            center
            color={theme.bgTheme}
            family={FontFamilyEnum.REGULAR}
            customStyles={styles.textStyle}
          />
          <TextComponent
            title={'63'}
            center
            size={Size.M}
            color={theme.bgTheme}
            family={FontFamilyEnum.SEMIBOLD}
            customStyles={styles.textStyle}
          />
        </View>
      </View>

      <View style={{ paddingVertical: HP('2') }}>
        <Button
          title={'View Inactive Demos'}
          size={Size.S}
          center
          color={theme.bgTheme}
          family={FontFamilyEnum.SEMIBOLD}
          handlePress={() =>
            navigation.navigate(SCREENS.TEACHER_INACTIVE_DEMOS)
          }
          customStyles={styles.inactiveDemoBtn}
        />
      </View>

      <View style={styles.searchParentView}>
        <InputComponent
          placeHolder={'Search by Demo ID'}
          submitEditingHandle={() => {}}
          handleChange={onSearch}
          keyboardType={'default'}
          customStyle={styles.inputStyle}
        />
        <TouchableOpacity
          style={styles.svgView}
          onPress={() => openModal('45', <FilterDemos />)}>
          <SvgXml xml={filterIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;
