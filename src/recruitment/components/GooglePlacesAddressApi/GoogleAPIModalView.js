import React from 'react';
import { Modal, View } from 'react-native';
import { styles } from './styles';
import { getFontSize, SIZE } from '@styles/FontProperties';
import { color } from '@styles/colorConstant';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from './HeaderComponent';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_API_KEY } from 'src/recruitment/api/Axios/config';

const GoogleAPIModalView = ({
  onChangeText,
  countryCode,
  modalLabel,
  modalVisible,
  setModalVisible,
  value,
}) => {
  return (
    <>
      {/* Modal View */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <SafeAreaView style={styles.centeredView}>
          <View style={styles.modalView}>
            <HeaderComponent
              modalLabel={modalLabel}
              setModalVisible={setModalVisible}
              width={'70%'}
            />
            <View style={styles.SearchBarView}>
              <GooglePlacesAutocomplete
                placeholder="Type something..."
                onPress={(data, details = null) => {
                  setModalVisible(false);
                  onChangeText(data.description);
                }}
                minLength={2}
                keyboardShouldPersistTaps={'handled'}
                query={{
                  key: GOOGLE_PLACES_API_KEY,
                  language: 'en',
                  // type: '(cities)',
                  components: `country:${countryCode}`,
                }}
                GooglePlacesSearchQuery={{
                  // type: 'street-address',
                  rankby: 'distance',
                }}
                enablePoweredByContainer={false}
                debounce={100}
                listViewDisplayed={'auto'}
                fetchDetails
                renderDescription={row => row.description}
                styles={{
                  textInput: {
                    backgroundColor: color.textBackgroundColor,
                    color: color.blackBorderColor,
                    height: 50,
                    marginVertical: 5,
                    fontSize: getFontSize(SIZE.XXXXSMALL),
                  },
                  description: {
                    fontWeight: 'normal',
                    color: color.blackBorderColor,
                    fontSize: getFontSize(SIZE.XXXXSMALL),
                  },
                }}
                textInputProps={{
                  value: value,
                  onChange: onChangeText,
                  placeholderTextColor: color.lightGrey,
                  clearButtonMode: 'while-editing',
                  clearTextOnFocus: true,
                  multiline: false,
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default GoogleAPIModalView;
