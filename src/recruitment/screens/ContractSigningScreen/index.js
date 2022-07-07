import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import { color } from '@styles/colorConstant';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { ContractSigningScreenConstant, SCREENS } from '@constants/strings';
import DocumentUploadBtn from '@components/DocumentUploadBtn';
import Button from '@components/Button';
import { Formik } from 'formik';
import { contractSigningValidations } from '@utils/validations';
import { GetUserTimeSlot, UploadDocsFiles } from '@api/Axios/client';
import { useToast } from 'react-native-toast-notifications';
import ButtonLoader from '@components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { data } from './components/arrayList';

const ContractSigningScreen = ({ navigation }) => {
  const toast = useToast();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [documents, setDocument] = useState([]);
  const [asyncContractSign, setAsyncContractSign] = useState();
  const [asyncCnicImageFront, setAsyncCnicImageFront] = useState();
  const [asyncCnicImageBack, setAsyncCnicImageBack] = useState();
  const [asyncCV, setAsyncCV] = useState();
  const [showError, setShowError] = useState(false);
  const [removeKey, setRemoveKey] = useState();
  const [asyncPaymentProof, setAsyncPaymentProof] = useState();
  const [asyncDegreeImg, setAsyncDegreeImg] = useState();
  const initialValues = {
    contractsign: asyncContractSign || '',
    cnicimagefront: asyncCnicImageFront || '',
    cnicimageback: asyncCnicImageBack || '',
    paymentproof: asyncCV || '',
    cv: asyncPaymentProof || '',
    degreeimg: asyncDegreeImg || '',
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    appData(setRefreshing);
  };

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      appData();
    }
    return () => {
      unmounted = true;
    };
  }, []);

  const appData = async setRefresh => {
    let contract = await AsyncStorage.getItem('contractsign');
    let cnicImageFront = await AsyncStorage.getItem('cnicimagefront');
    let cnicImageBack = await AsyncStorage.getItem('cnicimageback');
    let paymentProof = await AsyncStorage.getItem('paymentproof');
    let CV = await AsyncStorage.getItem('cv');
    let degreeImg = await AsyncStorage.getItem('degreeimg');
    let allKeys = await AsyncStorage.getAllKeys();
    console.log('🚀 ~ file: index.js ~ line 56 ~ appData ~ allKeys', allKeys);

    setAsyncContractSign(JSON.parse(contract));
    setAsyncCnicImageFront(JSON.parse(cnicImageFront));
    setAsyncCnicImageBack(JSON.parse(cnicImageBack));
    setAsyncCV(JSON.parse(paymentProof));
    setAsyncPaymentProof(JSON.parse(CV));
    setAsyncDegreeImg(JSON.parse(degreeImg));
    const res = await GetUserTimeSlot();
    if (res.userdata.errordocuments.length > 0) {
      let apiErrorDoc = res.userdata.errordocuments;
      const filteredDoc = data.filter(item =>
        apiErrorDoc.includes(item.docKey),
      );
      let removeKeys = filteredDoc.map(i => {
        return i.key;
      });
      setRefresh && setRefresh(false);
      setRemoveKey(removeKeys);
      setDocument(filteredDoc);
    }
  };

  const onSubmit = async values => {
    let removeAsyncData = Object.keys(values);
    setIsLoading(true);

    let res = Object.keys(values).filter(item => removeKey.includes(item));
    let isValues = res.map(i => {
      if (values[i] === '') {
        setShowError(true);
        setIsLoading(false);
      }
      return values[i];
    });
    const checkValues = isValues.some(i => i === '');

    if (checkValues) {
    } else {
      await AsyncStorage.multiRemove(removeAsyncData);
      const result = await UploadDocsFiles(values);
      setIsLoading(false);
      if (result) {
        toast.show('Successfully uploaded file', {
          type: 'success',
          normalColor: color.successAlertColor,
        });
        navigation.navigate(SCREENS.CONTRACT_SIGNING_SUBMITTED);
      }
    }
  };

  const handleChange = (e, item) => {
    formRef.current.setFieldValue(item, e);
    let updatedValue = {};
    updatedValue = {
      fileName: e.fileName,
      type: e.type,
      uri: e.uri,
    };
    AsyncStorage.setItem([item].toString(), JSON.stringify(updatedValue));
  };

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={contractSigningValidations}
      validateOnMount
      validateOnBlur
      enableReinitialize>
      {({ handleSubmit, values }) => {
        return (
          <>
            <View style={styles.parentView}>
              <TouchableOpacity
                style={styles.hamburgerMenuStyle}
                onPress={() => navigation.openDrawer()}>
                <HamburgerMenuIcon colorIcon={color.white} />
              </TouchableOpacity>
              <View style={styles.textWrapperView}>
                <Text
                  fontFamily={FONT_FAMILY.MEDIUM}
                  color={color.white}
                  size={SIZE.HEADER_LARGE}>
                  {ContractSigningScreenConstant.contractSigning}
                </Text>
                <View style={styles.subtitleView}>
                  <Text
                    fontFamily={FONT_FAMILY.REGULAR}
                    color={color.white}
                    size={SIZE.XXXXSMALL}>
                    {ContractSigningScreenConstant.subTitle}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.FooterContainer}>
              {documents.length === 0 ? (
                <ActivityIndicator
                  animating={true}
                  color={color.themeColorShockingPink}
                  size={'large'}
                />
              ) : (
                <FlatList
                  data={documents}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                      colors={[color.lightPink, color.themeColorShockingPink]}
                    />
                  }
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.DocumentView}>
                        <DocumentUploadBtn
                          title={item.title}
                          subTitle={item.subTitle}
                          subTitle2={item.subTitle2}
                          highlitedText={'5MB'}
                          value={values[item.key]}
                          handleChange={e => handleChange(e, item.key)}
                          error={showError && 'This field is required'}
                          pdfUpload={item.isPDF}
                        />
                      </View>
                    );
                  }}
                />
              )}
            </View>

            <View style={styles.BtnContainer}>
              <Button
                borderRadius={6}
                isBorderColor={color.transparent}
                isBackgroundColor={color.themeColorShockingPink}
                onPress={handleSubmit}
                disabled={isLoading}
                label={ContractSigningScreenConstant.submit}
                textColor={color.white}
                height={50}
                isUppercase
                marginVertical={15}
                width={'100%'}
                loading={isLoading}
                loader={<ButtonLoader animating={true} />}
              />
            </View>
          </>
        );
      }}
    </Formik>
  );
};

export default ContractSigningScreen;
