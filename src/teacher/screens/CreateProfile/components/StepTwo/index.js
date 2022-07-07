import React, { useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { theme } from '../../../../theme';
import Button from '@teacher/button';
import { Size } from '../../../../globals';
import TextComponent from '../../../../components/text';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import styles from './styles';
import { Formik } from 'formik';
import InputComponent from '../../../../components/Input';
import SelectComponent from '../../../../components/selectComponent';

const StepTwo = ({ setCurrentPage, currentPage }) => {
  const [callingCode, setCallingCode] = useState('+92');
  const [masking, setMasking] = useState('999 9999999');
  const formRef = useRef(null);
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
      name: 'phone',
      placeholder: 'Phone',
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
      name: 'dob',
      placeholder: 'Date of Birth',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
    },
    {
      id: '4',
      name: 'country',
      placeholder: 'Country',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
    },
    {
      id: '5',
      name: 'city',
      placeholder: 'City',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
    },
    {
      id: '6',
      name: 'area',
      placeholder: 'Area',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
    },
    {
      id: '7',
      name: 'address',
      placeholder: 'Address',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
    },
    {
      id: '8',
      name: 'nid',
      placeholder: 'National ID',
      value: '',
      ref: useRef(null),
      keyboardType: 'default',
    },
  ];

  const handleEditing = param => {
    const index = data.findIndex(item => item.name === param);

    switch (param) {
      case 'name':
        data[index + 1].ref.current?.focus();
        break;
      case 'phone':
        data[index + 1].ref.current?.focus();
        break;
      case 'email':
        data[index + 1].ref.current?.focus();
        break;
      case 'dob':
        data[index + 1].ref.current?.focus();
        break;
      case 'country':
        data[index + 1].ref.current?.focus();
        break;
      case 'city':
        data[index + 1].ref.current?.focus();
        break;
      case 'area':
        data[index + 1].ref.current?.focus();
        break;
      case 'address':
        data[index + 1].ref.current?.focus();
        break;
      case 'nid':
        formRef?.current?.handleSubmit();
        break;

      default:
        break;
    }
  };

  const onSubmit = values => {
    if (currentPage >= 0 && currentPage < 3) {
      setCurrentPage(prevCount => prevCount + 1);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Formik
        innerRef={formRef}
        initialValues={{
          name: '',
          email: '',
          phone: '',
          dob: '',
          country: '',
          city: '',
          area: '',
          address: '',
          nid: '',
        }}
        onSubmit={onSubmit}
        validateOnChange
        validateOnBlur
        validateOnMount
        validationSchema={null}
        enableReinitialize>
        {({ handleChange, handleBlur, errors, values, touched }) => {
          return (
            <>
              <View style={styles.HeadingView}>
                <TextComponent
                  title={'Profile Information'}
                  size={Size.DEFAULT}
                  center
                  color={theme.textDefault}
                  family={FontFamilyEnum.MEDIUM}
                />
              </View>
              <FlatList
                data={data}
                scrollEnabled={true}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return (
                    <View key={item.id} style={styles.countryCodeContainer}>
                      {item.name === 'phone' && (
                        <View
                          style={[
                            styles.selectStyle,
                            { width: callingCode.length > 3 ? 90 : 80 },
                          ]}>
                          <SelectComponent
                            error={undefined}
                            touched={false}
                            color={theme.textNormal}
                            handleSelect={() => {}}
                            selectLabel={callingCode}
                          />
                        </View>
                      )}
                      <View style={styles.inputBox}>
                        <InputComponent
                          ref={item.ref}
                          mask={masking}
                          touched={touched[item.name]}
                          error={errors[item.name]}
                          value={values[item.name]}
                          onBlur={handleBlur(item.name)}
                          submitEditingHandle={() => handleEditing(item.name)}
                          keyboardType={item.keyboardType}
                          handleChange={handleChange(item.name)}
                          placeHolder={item.placeholder}
                        />
                      </View>
                    </View>
                  );
                }}
              />
              <View style={styles.BtnView}>
                <Button
                  title={'Next'}
                  center
                  family={FontFamilyEnum.MEDIUM}
                  size={Size.DEFAULT}
                  color={theme.bgTheme}
                  handlePress={onSubmit}
                  customStyles={styles.customBtnStyle}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default StepTwo;
