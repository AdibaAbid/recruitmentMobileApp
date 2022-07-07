import React, { useState } from 'react';
import {
  Modal,
  Platform,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { styles } from './style';
import { FONT_FAMILY, getFontFamily } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import {
  scale,
  scaleHeight,
  scaleWidth,
} from 'src/recruitment/utils/platformUtils';
import styled from 'styled-components/native';
import HeaderComponent from './HeaderComponent';
import OptionLists from './OptionLists';

const InputBox = styled.TextInput`
  border-color: ${color.textBackgroundColor};
  border-width: 1px;
  border-radius: ${scaleHeight(3)}px;
  color: ${color.blackBorderColor};
  background-color:${color.textBackgroundColor}
  font-size: ${scale(13)}px;
  padding-left: ${scaleWidth(15)}px;
  width: 86%;
  font-family: ${getFontFamily(FONT_FAMILY.REGULAR)};
  padding-vertical: ${Platform.OS === 'android' ? 5 : 8}px;
`;

const SearchBarView = styled.View`
  top: 30px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

const ModalView = ({
  onChangeText,
  onChangeCode,
  modalLabel,
  setFlag,
  modalVisible,
  setModalVisible,
  data,
  showFlag,
  searchBarShow,
  setMasked,
  countrycode,
}) => {
  const [selected, setSelected] = useState();
  const [filteredData, setFilteredData] = useState(null);

  const searchBar = searchtext => {
    const filtered = data.filter(i =>
      i.title.toLowerCase().includes(searchtext.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <>
      {/* Modal View */}
      <TouchableOpacity
        style={styles.centeredView}
        onPress={() => setModalVisible(false)}>
        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <HeaderComponent
                modalLabel={modalLabel}
                setModalVisible={setModalVisible}
                width={'80%'}
              />
              {searchBarShow && (
                <SearchBarView>
                  <InputBox
                    multiline={false}
                    allowFontScaling={false}
                    testID="input-box"
                    placeholder={'Type Something...'}
                    placeholderTextColor={color.lightGrey}
                    onChangeText={label => searchBar(label)}
                    fontFamily={FONT_FAMILY.REGULAR}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoFocus={true}
                  />
                </SearchBarView>
              )}

              {/* OptionList */}
              <View style={styles.flatListView}>
                <FlatList
                  data={filteredData ? filteredData : data}
                  keyExtractor={item =>
                    item.id ? item.id.toString() : item.value + item.title
                  }
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <OptionLists
                      listItems={data}
                      options={item}
                      setModalVisible={setModalVisible}
                      onChangeText={onChangeText}
                      showFlag={showFlag}
                      setFlag={setFlag}
                      setFilteredData={setFilteredData}
                      setSelected={setSelected}
                      selected={selected}
                      onChangeCode={onChangeCode}
                      setMasked={setMasked}
                      countrycode={countrycode}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    </>
  );
};

export default ModalView;
