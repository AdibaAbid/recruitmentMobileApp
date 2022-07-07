import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Text from '@components/Text';
import { color } from '@styles/colorConstant';
import { getWindowWidth } from 'src/recruitment/utils/platformUtils';
import { View } from 'react-native';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Button from '@components/Button';
import { VideoAndPicture } from '@constants/strings';
import ImageCard from '@components/ImageCard';
import RecordIcon from '@assets/svgs/RecordIcon';
import MobilePhoneIcon from '@assets/svgs/MobilePhoneIcon';
import BrightenIcon from '@assets/svgs/BrightenIcon';
import RecheckIcon from '@assets/svgs/RecheckIcon';
import PlayButtonIcon from '@assets/icons/PlayButtonIcon';
import SampleVideoModal from '@components/SampleVideoModal';
import UploadingProgressBar from '@components/UploadingProgressBar';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import SubmitButton from '@components/SubmitButton';
import { useToast } from 'react-native-toast-notifications';
import { styles } from './styles';

const FourthStepForm = ({
  errors,
  decreaseLevel,
  handleSubmit,
  touched,
  handleChange,
  values,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setErrorShow] = useState(false);
  const toast = useToast();

  const [fieldsNeedValidate, setFieldsNeedValidate] = useState([
    'profilepicture',
    'video',
  ]);

  useEffect(() => {
    const verifyInformation = () => {
      let validateFields = fieldsNeedValidate;
      setFieldsNeedValidate(validateFields);
    };
    verifyInformation();
  }, [fieldsNeedValidate]);

  let {
    videoFileProgressPercent,
    setVideoFileProgressPercent,
    imageFileProgressPercent,
    setImageFileProgressPercent,
    showProgressBar,
  } = useContext(CredientialsContext);

  useEffect(() => {
    const unsubscribe = () => {
      setTimeout(() => {
        setVideoFileProgressPercent(0);
        setImageFileProgressPercent(0);
      }, 4000);
    };

    unsubscribe();
  }, [
    setVideoFileProgressPercent,
    setImageFileProgressPercent,
    videoFileProgressPercent,
    imageFileProgressPercent,
  ]);

  const openSampleVideoModal = () => {
    setModalVisible(true);
  };

  const submitBtn = async error => {
    setIsLoading(true);

    setTimeout(() => {
      if (Object.keys(error).length > 0 && Object.keys(values).length !== 1) {
        setIsLoading(false);
        setErrorShow(true);
        toast.show('Resolve all the errors', {
          type: 'danger',
          normalColor: color.errorAlertColor,
        });
      } else {
        setIsLoading(false);
        handleSubmit();
      }
    }, 2000);
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <ImageCard
        title={VideoAndPicture.pictureYourself}
        subTitle={VideoAndPicture.acceptedFormatForPic}
        subTitle2={VideoAndPicture.requiredSize}
        highlitedText={VideoAndPicture.highlight5MB}
        handleChange={handleChange('profilepicture')}
        error={errors.profilepicture}
        showErrors={showError}
        isImageUpload={true}
      />

      <View style={styles.UploadProgressFileView}>
        {imageFileProgressPercent > 0 && (
          <UploadingProgressBar progressPercent={imageFileProgressPercent} />
        )}
      </View>

      <Text
        color={color.blackBorderColor}
        size={SIZE.SMALLEST}
        customStyle={styles.TextWrapper}
        fontFamily={FONT_FAMILY.SEMI_BOLD}>
        {VideoAndPicture.instructionForVideo}
      </Text>

      <Button
        borderRadius={12}
        isBorderColor={color.themeColorShockingPink}
        isBackgroundColor={color.themeColorShockingPink}
        onPress={openSampleVideoModal}
        label={VideoAndPicture.playBtnText}
        textColor={color.white}
        height={50}
        width={'100%'}
        isUppercase
        isBeforeTextIcon={true}
        isGetStartedButtonSvg={false}
        IconSvg={() => <PlayButtonIcon />}
      />

      <SampleVideoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.InstructionView}>
        <View>
          <View style={styles.Wrapper}>
            <RecordIcon width={25} height={25} color={color.blackBorderColor} />
            <Text
              color={color.blackBorderColor}
              size={SIZE.SMALLEST}
              numberOfLines={0}
              fontFamily={FONT_FAMILY.REGULAR}>
              {VideoAndPicture.oneMinVideo}
            </Text>
          </View>
          <View style={styles.Wrapper}>
            <MobilePhoneIcon
              width={25}
              height={25}
              color={color.blackBorderColor}
            />
            <Text
              color={color.blackBorderColor}
              size={SIZE.SMALLEST}
              numberOfLines={0}
              fontFamily={FONT_FAMILY.REGULAR}>
              {VideoAndPicture.recordVideo}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.Wrapper}>
            <BrightenIcon
              width={25}
              height={25}
              color={color.blackBorderColor}
            />
            <Text
              color={color.blackBorderColor}
              size={SIZE.SMALLEST}
              numberOfLines={0}
              fontFamily={FONT_FAMILY.REGULAR}>
              {VideoAndPicture.recordInQuitePlace}
            </Text>
          </View>

          <View style={styles.Wrapper}>
            <RecheckIcon
              width={20}
              height={20}
              color={color.blackBorderColor}
            />
            <Text
              color={color.blackBorderColor}
              size={SIZE.SMALLEST}
              numberOfLines={0}
              fontFamily={FONT_FAMILY.REGULAR}>
              {VideoAndPicture.recheckVideo}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.VideoWrapper}>
        <ImageCard
          title={VideoAndPicture.videoYourself}
          subTitle={VideoAndPicture.acceptedFormatForVideo}
          subTitle2={VideoAndPicture.videoSize}
          highlitedText={VideoAndPicture.highlight150}
          isImageUpload={false}
          handleChange={handleChange('video')}
          error={errors.video}
          showErrors={showError}
        />
      </View>

      <View style={styles.BottomUploadProgressFileView}>
        {showProgressBar && (
          <UploadingProgressBar progressPercent={videoFileProgressPercent} />
        )}
      </View>

      <View style={styles.Row}>
        <Button
          borderRadius={6}
          isBorderColor={color.transparent}
          isBackgroundColor={color.lightPink}
          onPress={() => {
            decreaseLevel();
          }}
          label={VideoAndPicture.previous}
          textColor={color.themeColorShockingPink}
          height={50}
          width={getWindowWidth() / 2.4}
          isUppercase
          isBeforeTextIcon={false}
        />
        <SubmitButton
          fieldsNeedValidate={fieldsNeedValidate}
          onPress={() => submitBtn(errors)}
          error={errors}
          touched={touched}
          width={getWindowWidth() / 2.4}
          disabledButton={isLoading}
          loading={isLoading}
          label={VideoAndPicture.next}
        />
      </View>
    </ScrollView>
  );
};

export default FourthStepForm;
