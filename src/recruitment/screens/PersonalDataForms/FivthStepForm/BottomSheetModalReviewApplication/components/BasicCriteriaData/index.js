import React, { useContext } from 'react';
import Button from '@components/Button';
import { BasicCriteria } from '@constants/strings';
import { color } from '@styles/colorConstant';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import TextWithHeading from '@components/TextWithHeading';
import EditIcon from '@assets/icons/EditIcon';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { styles } from './styles';
import { View } from 'react-native';

const BasicCriteriaData = ({ values, setModalVisible }) => {
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
        {BasicCriteria.BasicCriteria}
      </Text>

      <View>
        <TextWithHeading
          title={BasicCriteria.haveLaptop}
          values={values.haveLaptop === 'true' ? 'Yes' : 'No'}
        />
      </View>

      <View>
        <TextWithHeading
          title={BasicCriteria.haveInternet}
          values={values.stableInternet === 'true' ? 'Yes' : 'No'}
        />
      </View>

      <View>
        <TextWithHeading
          title={BasicCriteria.howManyHours}
          values={`${values.hoursperweek} Hours`}
        />
      </View>

      <View>
        <TextWithHeading
          title={BasicCriteria.typeOfInternet}
          values={`${values.netSpeed} MB/s`}
        />
      </View>

      <View>
        <TextWithHeading
          title={BasicCriteria.mediumOfTeaching}
          values={
            values.teachingmedium.charAt(0).toUpperCase() +
            values.teachingmedium.slice(1)
          }
        />
      </View>

      <Button
        borderRadius={6}
        isBorderColor={color.themeColorShockingPink}
        isBackgroundColor={color.themeColorShockingPink}
        onPress={() => {
          setStepNoEditBtn(2);
          setIsReviewApplication(true);
          setModalVisible(false);
        }}
        label={BasicCriteria.editBtnText}
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

export default BasicCriteriaData;
