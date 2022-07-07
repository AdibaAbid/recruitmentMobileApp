import React from 'react';
import { ApplicationSubmittedScreenConstant } from '@constants/strings';
import { color } from '@styles/colorConstant';
import {
  TouchableOpacity,
  View,
  Linking,
  ImageBackground,
  Image,
} from 'react-native';
import { styles } from './styles';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import { SubmitCheckIcon } from '@assets/images';
import Button from '@components/Button';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';

const ThankYouScreen = ({ navigation }) => {
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
          {/* <TextWrap
            fontFamily={FONT_FAMILY.REGULAR}
            color={color.white}
            size={SIZE.SMALLEST}>
            {ApplicationSubmittedScreenConstant.FOR_YOUR_SUBMISSION}
          </TextWrap> */}
        </View>
      </View>

      <View style={styles.FooterContainer}>
        <ImageBackground style={styles.ImageContainer}>
          <Image style={styles.ImageView} source={SubmitCheckIcon} />
        </ImageBackground>

        <Text
          fontFamily={FONT_FAMILY.BOLD}
          color={color.submitTextColor}
          customStyle={styles.TextWrapSubmitApp}
          size={SIZE.XLARGE}>
          {ApplicationSubmittedScreenConstant.APPLICATION_SUBMITED}
        </Text>
        <Text
          fontFamily={FONT_FAMILY.BOLD}
          numberOfLines={0}
          customStyle={styles.TextWrapSubmitApp}
          color={color.blackBorderColor}
          size={SIZE.XXXSMALL}>
          {ApplicationSubmittedScreenConstant.SICCESSFULLY_SUBMITED}
        </Text>
        <Text
          fontFamily={FONT_FAMILY.REGULAR}
          numberOfLines={0}
          customStyle={styles.TextWrapSubmitApp}
          color={color.blackBorderColor}
          size={SIZE.XXXXSMALL}>
          {ApplicationSubmittedScreenConstant.MSG_PARA}
        </Text>
        <Text
          fontFamily={FONT_FAMILY.REGULAR}
          numberOfLines={0}
          customStyle={styles.TextWrapSubmitApp}
          color={color.blackBorderColor}
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
    </>
  );
};

export default ThankYouScreen;
