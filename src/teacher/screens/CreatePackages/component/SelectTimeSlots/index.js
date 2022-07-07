import React from 'react';

import { View, FlatList } from 'react-native';

import { theme } from '../../../../theme/index';
import SmallSelectButton from '../../../../components/smallSelectButton';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import sizes from '../../../../globals/sizes';

import styles from './styles';

const SelectTimeSlots = ({ onSelect, data, seletedItems }) => {
  const SeperatorComponent = () => <View style={styles.seperatorStyle} />;

  const handleSelect = item => {
    onSelect(item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        horizontal
        contentContainerStyle={styles.flatListContainer}
        ItemSeparatorComponent={SeperatorComponent}
        renderItem={({ item }) => {
          const onSelectLevel = () => handleSelect(item);
          const itemSelected = seletedItems.some(
            selectItem => selectItem === item.id,
          );

          return (
            <View style={styles.levelBtnContainer}>
              <SmallSelectButton
                title={null}
                description={item.title}
                icon={itemSelected ? item.iconSelected : item.icon}
                size={sizes.XS}
                checked={itemSelected}
                color={itemSelected ? theme.bgColorBtn : theme.textDark}
                family={FontFamilyEnum.REGULAR}
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
    </View>
  );
};

export default SelectTimeSlots;
