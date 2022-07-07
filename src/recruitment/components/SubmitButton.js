import React from 'react';
import Button from '@components/Button';
import { color } from '@styles/colorConstant';
import ButtonLoader from './Loader';
import { useToast } from 'react-native-toast-notifications';

const SubmitButton = ({
  fieldsNeedValidate,
  error,
  onPress,
  touched,
  loading,
  disabledButton,
  setErrorShow,
  label,
  width,
}) => {
  const toast = useToast();

  const isFormComplete =
    fieldsNeedValidate.length === 0 ||
    (Object.keys(touched).length >= 1 && Object.keys(error).length === 0);
  const fieldsTouchedHasError = Object.keys(error).filter(value =>
    Object.keys(touched).includes(value),
  );

  const isFormErrored = fieldsTouchedHasError.length > 0;

  const onPressFunction = () => {
    if (isFormErrored && !isFormComplete) {
      setErrorShow && setErrorShow(true);
      toast.show('Resolve all the errors', {
        type: 'danger',
        normalColor: color.errorAlertColor,
      });
    } else {
      onPress();
    }
  };

  return (
    <Button
      borderRadius={6}
      disabled={disabledButton}
      onPress={onPressFunction}
      label={label}
      textColor={color.white}
      height={50}
      width={width}
      isUppercase
      isBackgroundColor={color.themeColorShockingPink}
      isBorderColor={color.themeColorShockingPink}
      loading={loading}
      loader={<ButtonLoader animating={true} />}
    />
  );
};

export default SubmitButton;
