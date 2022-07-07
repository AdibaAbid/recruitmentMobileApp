import React, { useContext } from 'react';
import { ApplicationSubmittedScreenConstant } from '@constants/strings';
import { color } from '@styles/colorConstant';
import {
  TouchableOpacity,
  View,
  Linking,
  ImageBackground,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import { styles } from './styles';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import { SubmitCheckIcon } from '@assets/images';
import Button from '@components/Button';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import { getWindowHeight } from '@utils/platformUtils';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';

const ContractSubmittedThankYou = ({ navigation }) => {
  const { isRefresh, setIsRefresh } = useContext(CredientialsContext);

  const onRefresh = async () => {
    setIsRefresh(true);
  };

  return (
    <>
      <View style={styles.parentView}>
        <TouchableOpacity
          style={styles.hamburgerMenuStyle}
          onPress={() => navigation.openDrawer()}>
          <HamburgerMenuIcon colorIcon={color.white} />
        </TouchableOpacity>
        <View style={styles.TextWrapper}>
          <Text
            fontFamily={FONT_FAMILY.MEDIUM}
            color={color.white}
            size={SIZE.HEADER_LARGE}>
            {ApplicationSubmittedScreenConstant.THANK_YOU}
          </Text>
          <Text
            fontFamily={FONT_FAMILY.MEDIUM}
            color={color.white}
            customStyle={{ marginTop: -6 }}
            size={SIZE.XXXSMALL}>
            {'Documents submitted'}
          </Text>
        </View>
      </View>
      <View style={styles.FooterContainer}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefresh}
              onRefresh={onRefresh}
              colors={[color.lightPink, color.themeColorShockingPink]}
            />
          }
          ListFooterComponent={
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: getWindowHeight() - 150,
              }}>
              <ImageBackground style={styles.ImageContainer}>
                <Image style={styles.ImageView} source={SubmitCheckIcon} />
              </ImageBackground>
              <Text
                fontFamily={FONT_FAMILY.BOLD}
                color={color.submitTextColor}
                customStyle={styles.TextWrapSubmitApp}
                size={SIZE.XLARGE}>
                {'Congratulations'}
              </Text>
              <Text
                fontFamily={FONT_FAMILY.BOLD}
                numberOfLines={0}
                color={color.blackBorderColor}
                customStyle={styles.TextWrapSubmitApp}
                size={SIZE.XXXSMALL}>
                {'You have successfully submitted your documents!'}
              </Text>
              <Text
                fontFamily={FONT_FAMILY.REGULAR}
                numberOfLines={0}
                color={color.blackBorderColor}
                customStyle={styles.TextWrapSubmitApp}
                size={SIZE.XXXXSMALL}>
                {
                  'Thank you for taking out time and submitting the required documents. The Dot & Line Recruitment Team will be reviewing your documents shortly'
                }
              </Text>
              <Text
                fontFamily={FONT_FAMILY.REGULAR}
                numberOfLines={0}
                color={color.blackBorderColor}
                customStyle={styles.TextWrapSubmitApp}
                size={SIZE.XXXXSMALL}>
                {ApplicationSubmittedScreenConstant.QUERY_MSG}
              </Text>
              <Text
                fontFamily={FONT_FAMILY.BOLD}
                color={color.blackBorderColor}
                size={SIZE.XXXXSMALL}>
                {ApplicationSubmittedScreenConstant.SUPPORT_EMAIL}
              </Text>

              <View style={styles.ButtonView}>
                <Button
                  borderRadius={5}
                  disabled={false}
                  onPress={() =>
                    Linking.openURL('mailto:recruitment@dotandlinelearning.com')
                  }
                  label={ApplicationSubmittedScreenConstant.CONTACT_US}
                  textColor={color.white}
                  isBorderColor={color.themeColorShockingPink}
                  isBackgroundColor={color.themeColorShockingPink}
                  height={50}
                  isUppercase
                />
              </View>
            </View>
          }
        />
      </View>
    </>
  );
};

export default ContractSubmittedThankYou;
