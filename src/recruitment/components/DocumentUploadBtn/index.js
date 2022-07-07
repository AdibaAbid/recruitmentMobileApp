import React, { useState } from 'react';
import { color } from '@styles/colorConstant';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import * as ImagePicker from 'react-native-image-picker';
import { View, Modal, TouchableOpacity } from 'react-native';
import UploadButtonIcon from '@assets/svgs/UploadButtonIcon';
import Button from '../Button';
import { VideoAndPicture } from '@constants/strings';
import { styles } from './styles';
import { useToast } from 'react-native-toast-notifications';
import CheckIcon from '@assets/icons/CheckIcon';
import DocumentPicker from 'react-native-document-picker';

const DocumentUploadBtn = ({
  title,
  subTitle,
  subTitle2,
  highlitedText,
  handleChange,
  error,
  pdfUpload,
  value,
}) => {
  const toast = useToast();
  const [image, setImage] = useState('');
  const [show, setShow] = useState(false);
  const [pdfDoc, setPdfDoc] = React.useState();

  const openCamera = () => {
    setShow(false);
    const imageOptions = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
        saveToPhotos: true,
      },
    };
    ImagePicker.launchCamera(imageOptions, response => {
      handleChange({
        uri: response.assets[0]?.uri,
        type: response.assets[0]?.type,
        fileName: response.assets[0]?.fileName,
      });

      setImage(response.assets[0]?.uri);
      toast.show('Successfully uploaded file', {
        type: 'success',
        normalColor: color.successAlertColor,
      });
    });
  };

  const openGalleryForImageOrVideo = async () => {
    setShow(false);
    const imageOptions = {
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(imageOptions, response => {
      if (response.didCancel) {
      } else if (response.errorCode) {
      } else {
        const src = {
          uri: response.assets[0],
        };

        handleChange({
          uri: src.uri.uri,
          type: src.uri.type,
          fileName: src.uri.fileName,
        });
        setImage(src.uri.uri);
        toast.show('Successfully uploaded file', {
          type: 'success',
          normalColor: color.successAlertColor,
        });
      }
    });
  };

  const selectPdfFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      if (res) {
        toast.show('Successfully uploaded file', {
          type: 'success',
          normalColor: color.successAlertColor,
        });

        handleChange({
          uri: res[0]?.uri,
          type: res[0]?.type,
          fileName: res[0]?.name,
        });
        setPdfDoc(res[0].uri);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        //For Unknown Error
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.CardContainer}
        onPress={() => {
          pdfUpload ? selectPdfFile() : setShow(true);
        }}>
        <View style={styles.TextContainer}>
          <Text
            fontFamily={FONT_FAMILY.BOLD}
            size={SIZE.SMALLEST}
            numberOfLines={2}
            color={color.subTitleColor}>
            {title}
          </Text>
          <Text
            fontFamily={FONT_FAMILY.REGULAR}
            size={SIZE.XSMALLEST}
            color={color.subTitleColor}>
            {subTitle}
          </Text>
          <View style={styles.row}>
            <Text
              fontFamily={FONT_FAMILY.REGULAR}
              size={SIZE.XSMALLEST}
              color={color.subTitleColor}>
              {subTitle2}
            </Text>
            <View style={styles.HighlightText}>
              <Text
                fontFamily={FONT_FAMILY.BOLD}
                size={SIZE.XSMALLEST}
                color={color.subTitleColor}>
                {highlitedText}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.ImagePickerButton,
            image || pdfDoc || value
              ? { backgroundColor: color.submitTextColor }
              : {},
          ]}
          onPress={() => (pdfUpload ? selectPdfFile() : setShow(true))}>
          {image || pdfDoc || value ? (
            <CheckIcon colorIcon={color.white} size={25} />
          ) : (
            <UploadButtonIcon width={15} height={15} color={color.white} />
          )}
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.ErrorView}>
        <Text
          fontFamily={FONT_FAMILY.SEMI_BOLD}
          size={SIZE.XSMALLEST}
          color={error && value === '' ? color.pinkRed : color.white}>
          {error}
        </Text>
      </View>

      <View style={styles.parentModalView}>
        <Modal
          visible={show}
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => {
            setShow(!show);
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setShow(!show);
            }}
            style={styles.parentModalView}>
            <View style={styles.modalView}>
              <View style={styles.ButtonWrapper}>
                <Button
                  borderRadius={6}
                  isBorderColor={color.transparent}
                  isBackgroundColor={color.themeColorShockingPink}
                  onPress={() => openCamera()}
                  label={VideoAndPicture.takePhoto}
                  textColor={color.white}
                  height={50}
                  isUppercase
                  marginVertical={5}
                  width={'100%'}
                />
                <Button
                  borderRadius={6}
                  isBorderColor={color.transparent}
                  isBackgroundColor={color.themeColorShockingPink}
                  onPress={() => openGalleryForImageOrVideo()}
                  label={VideoAndPicture.chooseFromGallery}
                  textColor={color.white}
                  height={50}
                  isUppercase
                  marginVertical={5}
                  width={'100%'}
                />
                <Button
                  borderRadius={6}
                  isBorderColor={color.lightPink}
                  isBackgroundColor={color.white}
                  onPress={() => setShow(!show)}
                  label={VideoAndPicture.close}
                  textColor={color.themeColorShockingPink}
                  height={40}
                  isUppercase
                  marginVertical={5}
                  width={'100%'}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
  );
};

export default DocumentUploadBtn;
