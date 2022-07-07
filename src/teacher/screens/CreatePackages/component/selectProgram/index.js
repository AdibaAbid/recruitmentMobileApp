import React, { useEffect, useState } from 'react';

import { View, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import defaultConfig, { defaultStyles } from '../../../../globals/defaults';
import TextComponent from '../../../../components/text';
import { theme } from '../../../../theme/index';
import Button from '../../../../components/button';
import { SvgXml } from 'react-native-svg';
import SelectButton from '../../../../components/selectButton';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import close from '../../../../assets/svgs/close';
import sizes from '../../../../globals/sizes';
import * as actions from '../../../../store/actions';

import styles from './styles';

const SelectProgram = ({ onSelect, data, programTitle, selectedItem }) => {
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const SeperatorComponent = () => <View style={styles.seperatorStyle} />;

  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem]);

  const handleSelect = item => {
    setSelected(item.title);
  };

  const onDone = () => {
    onSelect(selected);
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
            size={sizes.M}
            center
            family={FontFamilyEnum.REGULAR}
            color={theme.bgTheme}
            title={programTitle}
          />
        </View>

        <View style={defaultStyles.modalCloseIcon} />
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
        ItemSeparatorComponent={SeperatorComponent}
        renderItem={({ item }) => {
          const onSelectLevel = () => handleSelect(item);
          const itemSelected = selected === item.title;

          return (
            <View style={styles.levelBtnContainer}>
              <SelectButton
                title={item.title}
                description={item.description}
                icon={itemSelected ? item.iconSelected : item.icon}
                size={sizes.DEFAULT}
                checked={itemSelected}
                color={itemSelected ? theme.bgTheme : theme.textDark}
                family={FontFamilyEnum.MEDIUM}
                handlePress={onSelectLevel}
                customStyles={[
                  styles.levelBtn,
                  {
                    borderColor: itemSelected
                      ? theme.bgColorBtn
                      : theme.borderLight,
                  },
                ]}
              />
            </View>
          );
        }}
      />

      <View style={defaultStyles.footerBtn}>
        <Button
          title={'Done'}
          size={sizes.S}
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

export default SelectProgram;
