import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import { defaultConfig } from '../../../../../../globals';
import { theme } from '../../../../../../theme';
import TextComponent from '../../../../../../components/text';
import { defaultStyles } from '../../../../../../globals/defaults';
import close from 'src/teacher/assets/svgs/close';
import sizes from '../../../../../../globals/sizes';
import { HP } from '../../../../../../constants/';
import Button from '../../../../../../components/button';
import * as actions from '../../../../../../store/actions';

import styles from './styles';

const LeadDetails = ({ data }) => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const detailData = [
    {
      id: '0',
      title: 'Location',
      value: data.location,
    },
    {
      id: '1',
      title: 'Package',
      value: data.package,
    },
    {
      id: '2',
      title: 'Grade',
      value: data.grade,
    },
    {
      id: '3',
      title: 'Agent',
      value: data.agent,
    },
    {
      id: '4',
      title: 'Details',
      value: data.details,
    },
  ];

  const Header = () => {
    return (
      <View>
        <View style={defaultStyles.modalHeader}>
          <TouchableOpacity activeOpacity={defaultConfig.touchOpacity}>
            <View style={defaultStyles.modalCloseIcon}>
              <SvgXml xml={close} />
            </View>
          </TouchableOpacity>

          <View style={styles.logo}>
            <TextComponent
              size={sizes.S}
              center
              family={FontFamilyEnum.REGULAR}
              color={theme.textDefault}
              title={data.date}
            />
          </View>
        </View>
        <View>
          <TextComponent
            size={sizes.M}
            center
            family={FontFamilyEnum.REGULAR}
            color={theme.textDefault}
            title={data.name}
          />
        </View>
      </View>
    );
  };

  const Details = ({ item }) => {
    return item.title === 'Details' ? (
      <View style={styles.detailContainer}>
        <TextComponent
          size={sizes.S}
          family={FontFamilyEnum.REGULAR}
          color={theme.textLight}
          title={item.title}
          customStyles={{ paddingVertical: HP('1') }}
        />
        <TextComponent
          size={sizes.S}
          family={FontFamilyEnum.REGULAR}
          color={theme.textDefault}
          title={item.value}
        />
      </View>
    ) : (
      <View style={styles.rowContainer}>
        <TextComponent
          size={sizes.S}
          family={FontFamilyEnum.REGULAR}
          color={theme.textLight}
          title={item.title}
          customStyles={styles.titleTextStyle}
        />
        <TextComponent
          size={sizes.S}
          family={FontFamilyEnum.REGULAR}
          color={theme.textDefault}
          title={item.value}
          customStyles={styles.valueTextStyle}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={detailData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Details item={item} />}
        ListHeaderComponent={<Header />}
      />
      <View style={defaultStyles.footerBtn}>
        <Button
          title={'Claim'}
          size={sizes.S}
          center
          color={theme.bgTheme}
          family={FontFamilyEnum.SEMIBOLD}
          handlePress={() => {
            action.setModalToggle(false);
          }}
          customStyles={defaultStyles.btnFilled}
        />
      </View>
    </View>
  );
};

export default LeadDetails;
