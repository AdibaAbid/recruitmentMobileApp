import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SvgXml } from 'react-native-svg';
import * as ImagePicker from 'react-native-image-picker';

import defaultConfig, {
  defaultStyles,
} from '../../../../../../globals/defaults';
import { WP } from '../../../../../../constants/';
import TextComponent from '../../../../../../components/text';
import { theme } from '../../../../../../theme/index';
import Button from '../../../../../../components/button';
import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import close from '../../../../../../assets/svgs/close';
import sizes from '../../../../../../globals/sizes';
import * as actions from '../../../../../../store/actions';
import uploadImg from 'src/teacher/screens/CreateProfile/components/StepThree/assets/svg/uploadImg';

import styles from './styles';

const ImageComponent = ({ courseImgName }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');

  const action = bindActionCreators(actions, dispatch);

  const onDone = () => {
    action.setModalToggle(false);
    courseImgName(imageName);
  };

  const openGalleryForImageOrVideo = async () => {
    let fileSizeCount;
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
        fileSizeCount = response.assets[0].fileSize / 1024;
        fileSizeCount = fileSizeCount / 1024;

        setImage(src.uri.uri);
        const splitStr = src.uri.fileName.split('.');
        const fileName = splitStr[0].slice(0, 15);
        const ext = splitStr[1];
        setImageName(`${fileName}.${ext}`);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={defaultStyles.modalHeader}>
        <TouchableOpacity
          onPress={() => {
            action.setModalToggle(false);
          }}
          activeOpacity={defaultConfig.touchOpacity}>
          <View style={defaultStyles.modalCloseIcon}>
            <SvgXml xml={close} />
          </View>
        </TouchableOpacity>

        <View style={styles.logo}>
          <TextComponent
            size={sizes.L}
            center
            family={FontFamilyEnum.REGULAR}
            color={theme.bgTheme}
            title={'Add Course Image'}
          />
        </View>

        <View style={defaultStyles.modalCloseIcon} />
      </View>

      <View style={styles.childContainer}>
        <View>
          <TouchableOpacity
            style={styles.textView}
            onPress={() => openGalleryForImageOrVideo()}>
            <SvgXml xml={uploadImg} />
            <TextComponent
              title={imageName ? imageName : 'Upload Image'}
              size={sizes.DEFAULT}
              numLines={1}
              color={theme.textNormal}
              family={FontFamilyEnum.REGULAR}
              customStyles={{
                paddingHorizontal: WP('3'),
              }}
            />
          </TouchableOpacity>
        </View>

        {image && (
          <View style={styles.imgView}>
            <View style={[styles.blackShadow, { top: 0 }]} />
            <Image
              style={styles.imgStyle}
              source={{
                uri: image,
              }}
              resizeMode="cover"
            />
            <View style={[styles.blackShadow, { bottom: 0 }]} />
          </View>
        )}
      </View>

      <View style={defaultStyles.footerBtn}>
        <Button
          title={'Done'}
          size={sizes.S}
          center
          color={theme.bgTheme}
          family={FontFamilyEnum.SEMIBOLD}
          handlePress={onDone}
          customStyles={defaultStyles.btnFilled}
        />
      </View>
    </View>
  );
};

export default ImageComponent;
