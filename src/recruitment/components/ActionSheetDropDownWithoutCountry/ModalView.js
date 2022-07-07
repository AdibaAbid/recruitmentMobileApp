/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, TextInput, View } from 'react-native';
import { styles } from './style';
import { FlatList } from 'react-native-gesture-handler';
import {
  FONT_FAMILY,
  getFontFamily,
  getFontSize,
  SIZE,
} from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import { getWindowWidth } from 'src/recruitment/utils/platformUtils';
import HeaderComponent from './HeaderComponent';
import OptionLists from './OptionLists';
import Text from '@components/Text';
import { CompalintScreenConstant } from '@constants/strings';
import Button from '@components/Button';

const ModalView = ({
  onChangeText,
  modalLabel,
  modalVisible,
  setModalVisible,
  data,
  searchBarShow,
  multiple,
  onChangeBlogger,
  isBlogger,
  changeOtherAboutUs,
  addButtonText,
  preSelected,
}) => {
  const [filteredData, setFilteredData] = useState(null);
  const [dataRerender, setDataRerender] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showOtherInstitute, setShowOtherInstitute] = useState('');

  useEffect(() => {
    return () => setDataRerender([]);
  }, []);

  useEffect(() => {
    if (preSelected && preSelected.length) {
      setSelectedItems(preSelected);
    }
  }, [preSelected]);

  useEffect(() => {
    if (data) {
      setDataRerender(data);
    }
  }, [data]);

  const searchBar = searchtext => {
    const filtered = data.filter(i =>
      i.label.toString().toLowerCase().includes(searchtext.toLowerCase()),
    );
    if (filtered?.length === 0) {
      setShowButton(true);
    }

    setFilteredData(filtered);
  };

  const onChangeSelect = selectedData => {
    if (multiple) {
      let items = [...selectedItems];
      let index = items.findIndex(item => item.id === selectedData.id);

      if (index !== -1) {
        items.splice(index, 1);
      } else {
        items.push(selectedData);
      }
      setSelectedItems(items);
      onChangeText(items);
    } else {
      onChangeText(selectedData.value.toString());
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <Pressable
        style={styles().centeredView}
        onPress={() => setModalVisible(false)}>
        <View style={styles().modalView}>
          <HeaderComponent
            modalLabel={modalLabel}
            setModalVisible={setModalVisible}
            width={'75%'}
          />
          {searchBarShow && (
            <View style={styles().SearchBarView}>
              <TextInput
                multiline={false}
                allowFontScaling={false}
                testID="input-box"
                placeholder={'Type Something...'}
                placeholderTextColor={color.lightGrey}
                onChangeText={label => {
                  setShowOtherInstitute(label);
                  searchBar(label);
                }}
                fontFamily={FONT_FAMILY.REGULAR}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                style={styles().InputBox}
              />
            </View>
          )}

          {filteredData?.length === 0 && showButton && addButtonText && (
            <View
              style={{
                alignItems: 'center',
                height: 100,
                justifyContent: 'center',
                marginVertical: 15,
              }}>
              <Button
                borderRadius={6}
                isBorderColor={color.transparent}
                isBackgroundColor={color.lightPink}
                onPress={() => {
                  setModalVisible(false);
                  onChangeText(showOtherInstitute);
                }}
                label={addButtonText}
                textColor={color.themeColorShockingPink}
                height={50}
                width={'90%'}
                isUppercase
                isBeforeTextIcon={false}
              />
            </View>
          )}

          {/* OptionList */}
          <View
            style={{
              flex: 1,
              top: 20,
              backgroundColor: color.white,
              justifyContent: 'center',
            }}>
            {data.length > 0 ? (
              <FlatList
                data={filteredData ? filteredData : dataRerender}
                keyExtractor={(item, index) => item.id + item.value + index}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}
                renderItem={({ item }) => (
                  <OptionLists
                    options={item}
                    setModalVisible={setModalVisible}
                    onChangeText={onChangeText}
                    setSelected={onChangeSelect}
                    selected={selectedItems.some(
                      select =>
                        select.value.toString().toLowerCase() ===
                        item.value.toString().toLowerCase(),
                    )}
                    onChangeBlogger={onChangeBlogger}
                    isBlogger={isBlogger}
                    multiple={multiple}
                    changeOtherAboutUs={changeOtherAboutUs}
                  />
                )}
              />
            ) : (
              <View style={styles().noDataView}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: getFontSize(SIZE.XXXSMALL),
                    fontFamily: getFontFamily(FONT_FAMILY.MEDIUM),
                    color: color.themeColorShockingPink,
                  }}>
                  {CompalintScreenConstant.nothingToShow}
                </Text>
              </View>
            )}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ModalView;
