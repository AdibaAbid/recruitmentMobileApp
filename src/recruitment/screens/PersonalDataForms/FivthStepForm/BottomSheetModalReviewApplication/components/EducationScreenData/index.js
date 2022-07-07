import React, { useContext } from 'react';
import Button from '@components/Button';
import { EducationAndWorkExprience } from '@constants/strings';
import { color } from '@styles/colorConstant';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import TextWithHeading from '@components/TextWithHeading';
import EditIcon from '@assets/icons/EditIcon';
import { getWindowWidth } from 'src/recruitment/utils/platformUtils';
import TextWithHeadingHighlite from '@components/TextWithHeadingHighlite';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { View } from 'react-native';
import { styles } from './styles';

const EducationScreenData = ({ values, setModalVisible }) => {
  let { setStepNoEditBtn, setIsReviewApplication } =
    useContext(CredientialsContext);

  return (
    <View style={styles.MainContainer}>
      <Text
        fontFamily={FONT_FAMILY.BOLD}
        color={color.themeColorShockingPink}
        customStyle={{
          marginBottom: 5,
        }}
        size={SIZE.SMALL}>
        {EducationAndWorkExprience.heading}
      </Text>

      <View>
        <TextWithHeading
          title={EducationAndWorkExprience.higestQualification}
          values={values.education}
          width={'100%'}
        />
      </View>
      <View style={styles.Row}>
        <TextWithHeading
          title={EducationAndWorkExprience.teachingExprience}
          values={
            values.yearofteaching > 0
              ? `${values.yearofteaching} Years`
              : `${values.yearofteaching} Year`
          }
        />
        <TextWithHeading
          title={EducationAndWorkExprience.yearOfGrad}
          values={values.gradyear}
        />
      </View>

      <View style={styles.Row}>
        <TextWithHeading
          title={EducationAndWorkExprience.majorSpecialization}
          numberOfLines={2}
          values={values.major}
        />
        <TextWithHeading
          title={EducationAndWorkExprience.currentlyWorking}
          values={values.currentlyworking}
        />
      </View>

      <View>
        <TextWithHeading
          title={EducationAndWorkExprience.nameOfInstitute}
          numberOfLines={2}
          values={values.institute}
        />
      </View>

      <View>
        <TextWithHeadingHighlite
          title={EducationAndWorkExprience.teachUsWithDotAndLine}
          width={getWindowWidth() - 20}
          values={values.subjectatdotandline}
        />
      </View>

      <Button
        borderRadius={6}
        isBorderColor={color.themeColorShockingPink}
        isBackgroundColor={color.themeColorShockingPink}
        onPress={() => {
          setStepNoEditBtn(1);
          setIsReviewApplication(true);
          setModalVisible(false);
        }}
        label={EducationAndWorkExprience.editBtnText}
        textColor={color.white}
        height={40}
        width={'100%'}
        isBeforeTextIcon={true}
        IconSvg={() => <EditIcon />}
      />
      <View style={styles.HrView} />
    </View>
  );
};

export default EducationScreenData;
