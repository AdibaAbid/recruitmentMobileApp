import React, { useState } from 'react';
import { Modal, View, FlatList, TextInput, Pressable } from 'react-native';
import { styles } from './style';
import { FONT_FAMILY } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import HeaderComponent from './HeaderComponent';
import OptionLists from './OptionLists';

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
  ChangeCity,
  ChangeArea,
}) => {
  const [selected, setSelected] = useState();
  const [filteredData, setFilteredData] = useState(null);

  const searchBar = searchtext => {
    const filtered = data.filter(i =>
      i.label.toLowerCase().includes(searchtext.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}>
      <Pressable
        style={styles.centeredView}
        onPress={() => setModalVisible(false)}>
        <View style={styles.modalView}>
          <HeaderComponent
            modalLabel={modalLabel}
            setModalVisible={setModalVisible}
            width={'80%'}
          />
          {searchBarShow && (
            <View style={styles.SearchBarView}>
              <TextInput
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
                style={styles.InputBox}
              />
            </View>
          )}

          {/* OptionList */}
          <View style={styles.flatListView}>
            <FlatList
              data={filteredData ? filteredData : data}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
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
                  ChangeCity={ChangeCity}
                  ChangeArea={ChangeArea}
                />
              )}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ModalView;
