import React from 'react';
import { ApplicationSubmittedScreenConstant } from '@constants/strings';
import { color } from '@styles/colorConstant';
import { TouchableOpacity, View, Linking, ImageBackground } from 'react-native';
import { styles } from './styles';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import Button from '@components/Button';
import HamburgerMenuIcon from '@assets/icons/HamburgerMenuIcon';
import WarningIcon from '@assets/icons/WarningIcon';

const ApplicationRejected = ({ navigation }) => {
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
            {'Interview Rejection'}
          </Text>
        </View>
      </View>

      <View style={styles.FooterContainer}>
        <ImageBackground style={styles.ImageContainer}>
          <WarningIcon />
        </ImageBackground>

        <Text
          fontFamily={FONT_FAMILY.BOLD}
          color={color.errorAlertColor}
          customStyle={styles.TextWrapSubmitApp}
          size={SIZE.XLARGE}>
          {'Profile Rejected'}
        </Text>
        <Text
          fontFamily={FONT_FAMILY.BOLD}
          numberOfLines={0}
          customStyle={styles.TextWrapSubmitApp}
          color={color.blackBorderColor}
          size={SIZE.XXXSMALL}>
          {'Thank you for your interest in Dot & Line'}
        </Text>
        <Text
          fontFamily={FONT_FAMILY.REGULAR}
          numberOfLines={0}
          customStyle={styles.TextWrapSubmitApp}
          color={color.blackBorderColor}
          size={SIZE.XXXXSMALL}>
          {
            'Thank you for applying to Dot & Line for recruitment as a Teacher Partner. With reference to your application with us, we regret to inform you that you have not been successful at this time.'
          }
        </Text>
        <Text
          fontFamily={FONT_FAMILY.REGULAR}
          numberOfLines={0}
          customStyle={styles.TextWrapSubmitApp}
          color={color.blackBorderColor}
          size={SIZE.XXXXSMALL}>
          {
            'Please note that this was a very competitive process, as we received hundreds of applications for a handful of positions. Nevertheless, if you are still interested in being a TP, we encourage you to reapply in the next round of applications.'
          }
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

export default ApplicationRejected;
