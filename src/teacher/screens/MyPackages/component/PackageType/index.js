import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SvgXml } from 'react-native-svg';

import { theme } from '../../../../theme';
import TextComponent from '../../../../components/text';
import { defaultConfig, Size } from '../../../../globals';
import { defaultStyles } from '../../../../globals/defaults';
import close from 'src/teacher/assets/svgs/close';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import Button from '../../../../components/button';
import { HP, WP } from '../../../../constants/';
import CheckBox from '../../../../components/checkBox';
import * as actions from '../../../../store/actions';

import styles from './styles';

const PackageType = ({ data, onSelect }) => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const [packageTypes, setPackageTypes] = useState([]);

  const handleCheckBox = label => {
    setPackageTypes(label);
  };

  const onDone = () => {
    onSelect(packageTypes);
    action.setModalToggle(false);
  };

  return (
    <View style={styles.container}>
      <View style={defaultStyles.modalHeader}>
        <TouchableOpacity
          onPress={() => {
            action.setModalToggle(false);
          }}
          activeOpacity={defaultConfig.touchOpacity}>
          <View style={defaultStyles.modalCloseIcon}>
            <SvgXml xml={close} />
          </View>
        </TouchableOpacity>

        <View style={styles.logo}>
          <TextComponent
            size={Size.L}
            center
            family={FontFamilyEnum.REGULAR}
            color={theme.bgTheme}
            title={'Filters'}
          />
        </View>

        <TextComponent
          size={Size.S}
          center
          family={FontFamilyEnum.REGULAR}
          color={theme.bgTheme}
          title={'Clear'}
        />
      </View>

      <View
        style={{
          paddingTop: HP('2'),
          paddingHorizontal: WP('9'),
        }}>
        <TextComponent
          title={'Package Type'}
          size={Size.M}
          family={FontFamilyEnum.REGULAR}
          color={theme.bgTheme}
        />
      </View>

      <View style={styles.checkbox}>
        <CheckBox
          data={data}
          width={'50%'}
          numOfColumn={1}
          checkedItems={packageTypes}
          handleCheckBox={handleCheckBox}
        />
      </View>

      <View style={defaultStyles.footerBtn}>
        <Button
          title={'Apply'}
          size={Size.S}
          center
          color={theme.bgTheme}
          family={FontFamilyEnum.SEMIBOLD}
          handlePress={onDone}
          customStyles={defaultStyles.btnFilled}
        />
      </View>
    </View>
  );
};

export default PackageType;
