import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from '@styles/colorConstant';
import {
  getWindowWidth,
  scaleHeight,
} from 'src/recruitment/utils/platformUtils';
import {
  ActivityIndicator,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { BasicCriteria } from '@constants/strings';
import RadioButton from '@components/RadioButton';
import Button from '@components/Button';
import { measureConnectionSpeed } from './InternetSpeedCheck/measureConnectionSpeed';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import ActionSheetDropDownWithoutCountry from '@components/ActionSheetDropDownWithoutCountry';
import {
  BasicCriteriaRadioOptions,
  HoursPerWeek,
  preferedMediumOfTeaching,
} from 'src/recruitment/arrayConst';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import Text from '@components/Text';
import SubmitButton from '@components/SubmitButton';
import { useToast } from 'react-native-toast-notifications';
import styles from './styles';

const ThirdStepForm = ({
  handleChange,
  errors,
  values,
  decreaseLevel,
  handleSubmit,
  touched,
}) => {
  const [loading, isLoading] = useState(false);
  const toast = useToast();

  const [internetSpeed, setInternetSpeed] = useState(0);
  const { setWifiSpeed } = useContext(CredientialsContext);
  const [errorShow, setErrorShow] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);

  const [fieldsNeedValidate, setFieldsNeedValidate] = useState([
    'haveLaptop',
    'stableInternet',
    'hoursperweek',
    'teachingmedium',
  ]);

  useEffect(() => {
    const verifyInformation = () => {
      let validateFields = fieldsNeedValidate;
      setFieldsNeedValidate(validateFields);
    };
    verifyInformation();
  }, [fieldsNeedValidate]);

  const checkInternet = async () => {
    try {
      isLoading(true);
      setTimeout(async () => {
        isLoading(false);
        const networkSpeed = await measureConnectionSpeed();
        values.netSpeed = Math.round(networkSpeed.speed);
        setWifiSpeed(Math.round(networkSpeed.speed));
        setInternetSpeed(Math.round(networkSpeed.speed));
      }, 2000);
    } catch (err) {
      //console.log(err);
    }
  };
  const SubmitBtn = async error => {
    setIsShowLoading(true);

    setTimeout(() => {
      if (Object.keys(error).length > 0) {
        setErrorShow(true);
        setIsShowLoading(false);
        toast.show('Resolve all the errors', {
          type: 'danger',
          normalColor: color.errorAlertColor,
        });
      } else {
        setIsShowLoading(false);
        handleSubmit();
      }
    }, 2000);
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <RadioButton
        PROP={BasicCriteriaRadioOptions}
        label={BasicCriteria.haveLaptop}
        onChangeValue={handleChange('haveLaptop')}
        error={errors.haveLaptop}
        errorShow={errorShow}
        defaultOption={values.haveLaptop}
        spaceBetween={true}
        marginBottom={6}
      />
      <RadioButton
        PROP={BasicCriteriaRadioOptions}
        label={BasicCriteria.haveInternet}
        onChangeValue={handleChange('stableInternet')}
        error={errors.stableInternet}
        errorShow={errorShow}
        defaultOption={values.stableInternet}
        spaceBetween={true}
        marginBottom={6}
      />

      <ActionSheetDropDownWithoutCountry
        title={values.hoursperweek}
        labelText={BasicCriteria.howManyHours}
        modalLabel={BasicCriteria.chooseHours}
        data={HoursPerWeek}
        onChangeText={handleChange('hoursperweek')}
        preSelected={[{ value: values.hoursperweek }]}
        error={errors.hoursperweek}
        errorShow={errorShow}
        searchBar={false}
        width={'100%'}
      />

      <Text
        size={SIZE.SMALLEST}
        fontFamily={FONT_FAMILY.SEMI_BOLD}
        customStyle={{
          marginBottom: scaleHeight(-3),
        }}
        color={color.blackBorderColor}>
        {BasicCriteria.typeOfInternet}
      </Text>

      <View style={styles.Row}>
        <View>
          <TouchableOpacity onPress={checkInternet}>
            <TextInput
              placeholder={BasicCriteria.wifiPlaceholder}
              defaultValue={
                internetSpeed
                  ? BasicCriteria.wifi(internetSpeed)
                  : values.netSpeed !== '' &&
                    BasicCriteria.wifi(values.netSpeed)
              }
              onChangeText={handleChange('netSpeed')}
              placeholderTextColor={color.TextColor}
              editable={false}
              style={styles.textInputStyle}
            />
          </TouchableOpacity>

          <View style={styles.ErrorView}>
            <Text
              fontFamily={FONT_FAMILY.SEMI_BOLD}
              size={SIZE.XSMALLEST}
              color={
                !internetSpeed && errors.netSpeed && errorShow
                  ? color.pinkRed
                  : color.white
              }>
              {(!internetSpeed && errors.netSpeed) || errorShow
                ? errors.stableInternet
                : ''}
            </Text>
          </View>
        </View>

        {loading && (
          <View>
            <ActivityIndicator
              size={'small'}
              color={color.themeColorShockingPink}
              animating={loading}
              style={
                Platform.OS === 'ios'
                  ? styles.iosAnimatedLoader
                  : styles.androidAnimatedLoader
              }
            />
          </View>
        )}
        <Button
          borderRadius={3}
          isBorderColor={color.themeColorShockingPink}
          isBackgroundColor={color.themeColorShockingPink}
          onPress={checkInternet}
          label={BasicCriteria.checkNow}
          textColor={color.white}
          height={45}
          width={getWindowWidth() / 2.4}
        />
      </View>

      <ActionSheetDropDownWithoutCountry
        title={values.teachingmedium}
        labelText={BasicCriteria.mediumOfTeaching}
        modalLabel={BasicCriteria.chooseOption}
        data={preferedMediumOfTeaching}
        onChangeText={handleChange('teachingmedium')}
        preSelected={[{ value: values.teachingmedium }]}
        error={errors.teachingmedium}
        errorShow={errorShow}
        searchBar={false}
        width={'100%'}
      />

      <View style={styles.Row}>
        <Button
          borderRadius={6}
          isBorderColor={color.transparent}
          isBackgroundColor={color.lightPink}
          onPress={() => {
            decreaseLevel();
          }}
          label={BasicCriteria.previous}
          textColor={color.themeColorShockingPink}
          height={50}
          width={getWindowWidth() / 2.4}
          isUppercase
          isBeforeTextIcon={false}
        />

        <SubmitButton
          fieldsNeedValidate={fieldsNeedValidate}
          onPress={() => SubmitBtn(errors)}
          error={errors}
          touched={touched}
          width={getWindowWidth() / 2.4}
          disabledButton={isShowLoading}
          loading={isShowLoading}
          label={BasicCriteria.next}
        />
      </View>
    </ScrollView>
  );
};

export default ThirdStepForm;
