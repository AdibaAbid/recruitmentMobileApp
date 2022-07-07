import React, { useEffect, useRef, useState } from 'react';

import { FlatList, View, Text, Keyboard } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Formik } from 'formik';
import { TextScaling } from '../../../teacher/globals/index';
import InputComponent from '../../../teacher/components/Input';
import SelectComponent from '../../../teacher/components/selectComponent';
import { useToast } from 'react-native-toast-notifications';
import { bindActionCreators } from 'redux';

import { theme } from '../../../teacher/theme/index';
import * as actions from '../../../teacher/store/actions';

import styles from './styles';
import { defaultStyles } from '../../../teacher/globals/defaults';
import { useNavigation } from '@react-navigation/native';
import { NavigationStack, SCREENS } from '@constants/strings';
import { color } from '@styles/colorConstant';
import { useDispatch } from 'react-redux';
import { signUpFormSchema } from '@utils/validations';
import CountryPicker from './component/CountryPicker';
import Button from '@components/Button';
import { SIZE } from '@styles/FontProperties';
import ButtonLoader from '@components/Loader';
import Logo from '@assets/svgs/Logo';
import { WP } from '../../../teacher/constants';
import StatusBarComponent from '@components/StatusBarComponent';

const SignUp = ({ code, mask }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [callingCode, setCallingCode] = useState('+92');
  const [masking, setMasking] = useState('999 9999999');

  const formRef = useRef(null);
  const navigation = useNavigation();
  const toast = useToast();
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const data = [
    {
      id: '0',
      name: 'name',
      placeholder: 'Name',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
    },
    {
      id: '1',
      name: 'number',
      placeholder: 'Phone number',
      value: '',
      ref: useRef(null),
      keyboardType: 'number-pad',
    },
    {
      id: '2',
      name: 'email',
      placeholder: 'Email',
      value: '',
      ref: useRef(null),
      keyboardType: 'email-address',
    },
    {
      id: '3',
      name: 'password',
      placeholder: 'Password',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
      secure: true,
    },
  ];

  useEffect(() => {
    if (code) {
      setCallingCode(code);
    }
  }, [code]);

  useEffect(() => {
    if (mask) {
      setMasking(mask);
    }
  }, [mask]);

  const handleEditing = param => {
    const index = data.findIndex(item => item.name === param);

    switch (param) {
      case 'name':
        data[index + 1].ref.current?.focus();
        break;
      case 'number':
        data[index + 1].ref.current?.focus();
        break;
      case 'email':
        data[index + 1].ref.current?.focus();
        break;
      case 'password':
        formRef?.current?.handleSubmit();
        break;

      default:
        break;
    }
  };

  const openCountryPicker = modalVisible => {
    action.setModalToggle(modalVisible);
    action.setModalComponent(
      <CountryPicker setMasking={setMasking} setCallingCode={setCallingCode} />,
    );
  };

  const onSubmit = values => {
    setIsLoading(true);
    let number;
    if (values.number[0] === '0') {
      number = values.phonecode + values.number.slice(1);
    } else {
      number = values.phonecode + values.number.slice(0);
    }

    if (values.number[0] === '0') {
      setIsLoading(false);
      Keyboard.dismiss();
      toast.show(
        'Phone-number should not starts with 0 or incorrect phone-number',
        {
          type: 'danger',
          normalColor: color.errorAlertColor,
        },
      );
    } else {
      const postValues = {
        name: values.name,
        email: values.email,
        password: values.password,
        phonecode: values.phonecode,
        countrycode: values.countrycode,
        number: number,
      };

      action
        .SignUpUser(postValues)
        .then(response => {
          setIsLoading(false);
          if (response) {
            action.DeviceToken();
            return navigation.navigate(NavigationStack.LANDING, {
              screen: SCREENS.OTP_SCREEN,
            });
          }
        })
        .catch(err => {
          setIsLoading(false);
          toast.show(err, {
            type: 'danger',
            normalColor: color.errorAlertColor,
          });
        });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBarComponent statusBarColor={theme.bgTheme} isBarStyle={false} />

      <View
        style={{
          marginHorizontal: WP('10'),
        }}>
        <View style={defaultStyles.modalHeader}>
          <View style={styles.logo}>
            <SvgXml xml={Logo} width={'100%'} />
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <Formik
            innerRef={formRef}
            initialValues={{
              name: '',
              email: '',
              number: '',
              password: '',
              phonecode: '+92',
              countrycode: 'PK',
            }}
            onSubmit={onSubmit}
            validateOnChange
            validateOnBlur
            validateOnMount
            validationSchema={signUpFormSchema}
            enableReinitialize>
            {({
              values,
              handleBlur,
              handleChange,
              handleSubmit,
              errors,
              touched,
            }) => {
              return (
                <>
                  <FlatList
                    data={data}
                    scrollEnabled={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                      return (
                        <View key={item.id} style={styles.countryCodeContainer}>
                          {item.name === 'number' && (
                            <View
                              style={[
                                styles.selectStyle,
                                { width: callingCode.length > 3 ? 90 : 80 },
                              ]}>
                              <SelectComponent
                                error={undefined}
                                touched={false}
                                color={theme.textNormal}
                                handleSelect={() => openCountryPicker(true)}
                                selectLabel={callingCode}
                                customStyle={{ backgroundColor: theme.bgWhite }}
                              />
                            </View>
                          )}
                          <View style={{ flex: 1 }}>
                            <InputComponent
                              ref={item.ref}
                              secure={item.secure}
                              mask={masking}
                              touched={touched[item.name]}
                              error={errors[item.name]}
                              value={values[item.name]}
                              onBlur={handleBlur(item.name)}
                              submitEditingHandle={() =>
                                handleEditing(item.name)
                              }
                              keyboardType={item.keyboardType}
                              handleChange={handleChange(item.name)}
                              placeHolder={item.placeholder}
                              customStyle={{ backgroundColor: theme.bgWhite }}
                            />
                          </View>
                        </View>
                      );
                    }}
                  />

                  <Button
                    borderRadius={10}
                    isBorderColor={theme.bgColorBtn}
                    isBackgroundColor={theme.bgColorBtn}
                    onPress={handleSubmit}
                    label={'Signup'}
                    textColor={theme.bgTheme}
                    height={45}
                    size={SIZE.XXSMALL}
                    width={'100%'}
                    marginTop={8}
                    loading={isLoading}
                    loader={
                      <ButtonLoader animating={true} bgColor={theme.bgTheme} />
                    }
                  />
                </>
              );
            }}
          </Formik>

          <View style={styles.terms}>
            <Text
              numberOfLines={2}
              allowFontScaling={TextScaling}
              style={styles.termsAndCondition}>
              {'By tapping Signup you are agreeing to Dot & Line Learning'}

              <Text
                numberOfLines={2}
                allowFontScaling={TextScaling}
                style={[styles.termsAndCondition, { color: theme.bgColorBtn }]}>
                {' Terms & Conditions'}
              </Text>
            </Text>
          </View>

          <View style={styles.signUp}>
            <Button
              borderRadius={10}
              isBorderColor={theme.bgColorBtn}
              isBackgroundColor={'transparent'}
              onPress={() => navigation.goBack()}
              label={'Back to login'}
              textColor={theme.bgColorBtn}
              height={45}
              size={SIZE.XXSMALL}
              width={'100%'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
