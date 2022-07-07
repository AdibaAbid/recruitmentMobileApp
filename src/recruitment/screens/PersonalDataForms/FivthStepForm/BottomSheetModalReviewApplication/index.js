import React, { useContext, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import HeaderComponent from './components/HeaderComponent';
import PersonalInfoData from './components/PersonalInfoData';
import EducationScreenData from './components/EducationScreenData';
import { getWindowWidth, scale } from 'src/recruitment/utils/platformUtils';
import BasicCriteriaData from './components/BasicCriteriaData';
import VideoAndPictureData from './components/VideoAndPictureData';
import {
  AsyncStorageDataConstant,
  SCREENS,
  submitApplication,
} from '@constants/strings';
import Button from '@components/Button';
import { color } from '@styles/colorConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { SubmitApplication } from 'src/recruitment/api/Axios/client';

const BottomSheetModalReviewApplication = ({
  modalVisible,
  setModalVisible,
  values,
  navigation,
}) => {
  const [loader, setLoader] = useState(false);
  let { setIsFormSubmited } = useContext(CredientialsContext);

  const onSubmit = async () => {
    setLoader(true);
    setModalVisible(modalVisible);
    const res = await SubmitApplication();

    if (res.status === 'true') {
      setLoader(false);
      navigation.navigate(SCREENS.HOME);
      setIsFormSubmited('true');
      AsyncStorage.setItem(AsyncStorageDataConstant.FORM_SUBMITED, 'true');
    }
  };

  const data = [
    {
      id: 1,
      item: (
        <PersonalInfoData values={values} setModalVisible={setModalVisible} />
      ),
    },
    {
      id: 2,
      item: (
        <EducationScreenData
          values={values}
          setModalVisible={setModalVisible}
        />
      ),
    },
    {
      id: 3,
      item: (
        <BasicCriteriaData values={values} setModalVisible={setModalVisible} />
      ),
    },
    {
      id: 4,
      item: (
        <VideoAndPictureData
          values={values}
          setModalVisible={setModalVisible}
        />
      ),
    },
    {
      id: 5,
      item: (
        <View
          style={{
            marginVertical: scale(30),
          }}>
          <Button
            borderRadius={6}
            isBorderColor={color.transparent}
            isBackgroundColor={color.lightPink}
            onPress={onSubmit}
            label={submitApplication.submit}
            textColor={color.themeColorShockingPink}
            height={50}
            width={'100%'}
            isUppercase
            isBeforeTextIcon={false}
            isAfterTextIcon={loader}
            IconSvg={() => (
              <ActivityIndicator
                style={{ left: 10, top: 5 }}
                size="small"
                color={color.themeColorShockingPink}
              />
            )}
          />
        </View>
      ),
    },
  ];
  const FooterComponent = () => (
    <View
      style={{
        flex: 1,
        width: getWindowWidth() - 40,
      }}>
      <PersonalInfoData values={values} setModalVisible={setModalVisible} />
      {/* <EducationScreenData
      values={values}
      setModalVisible={setModalVisible}
    />
    <BasicCriteriaData
      values={values}
      setModalVisible={setModalVisible}
    />
    <VideoAndPictureData
      values={values}
      setModalVisible={setModalVisible}
    /> */}
      <View
        style={{
          marginVertical: scale(30),
        }}>
        <Button
          borderRadius={6}
          isBorderColor={color.transparent}
          isBackgroundColor={color.lightPink}
          onPress={onSubmit}
          label={submitApplication.submit}
          textColor={color.themeColorShockingPink}
          height={50}
          width={'100%'}
          isUppercase
          isBeforeTextIcon={false}
          isAfterTextIcon={loader}
          IconSvg={() => (
            <ActivityIndicator
              style={{ left: 10, top: 5 }}
              size="small"
              color={color.themeColorShockingPink}
            />
          )}
        />
      </View>
    </View>
  );

  return (
    <Modal
      // animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.centeredInnerView}
        onPress={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalView}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.videoView}>
                <HeaderComponent
                  setModalVisible={setModalVisible}
                  modalLabel={submitApplication.reviewApplication}
                  width={'100%'}
                />
              </View>
            }
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  width: getWindowWidth() - 40,
                }}>
                {item.item}
              </View>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default BottomSheetModalReviewApplication;
