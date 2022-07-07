import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SvgXml } from 'react-native-svg';

import { theme } from '../../../../theme';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { WP } from '../../../../constants';
import * as actions from '../../../../store/actions';
import uploadImg from 'src/teacher/screens/CreateProfile/components/StepThree/assets/svg/uploadImg';
import ImageComponent from './components/ImageComponent';

import styles from '../../styles';

const UploadCourseImage = () => {
  const dispatch = useDispatch();
  const [imageName, setImageName] = useState('');
  const action = bindActionCreators(actions, dispatch);

  const openModal = (height, modalComponenet) => {
    action.setModalToggle(true);
    action.setModalHeight(height);
    action.setModalComponent(modalComponenet);
  };

  return (
    <TouchableOpacity
      style={styles.uploadImageView}
      onPress={() =>
        openModal('55', <ImageComponent courseImgName={setImageName} />)
      }>
      <SvgXml xml={uploadImg} />
      <TextComponent
        title={imageName ? imageName : 'Add Course Photo'}
        size={Size.S}
        color={theme.textDark}
        family={FontFamilyEnum.LIGHT}
        customStyles={{
          paddingHorizontal: WP('2'),
        }}
      />
    </TouchableOpacity>
  );
};

export default UploadCourseImage;
