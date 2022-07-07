import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { scale } from 'src/recruitment/utils/platformUtils';
import { color } from '@styles/colorConstant';
import ShareAFriendIcon from '@assets/svgs/ShareAFriendIcon';
import LogoutIcon from '@assets/svgs/LogoutIcon';
import Text from '@components/Text';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import FbIcon from '@assets/svgs/FbIcon';
import InstaIcon from '@assets/svgs/InstaIcon';
import WhatsAppIcon from '@assets/svgs/WhatsAppIcon';
import EmailSocialIcon from '@assets/svgs/EmailSocialIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerScreenConstant,
  NavigationStack,
  SCREENS,
  USERINFO,
} from '@constants/strings';
import UserNameIcon from '@assets/svgs/UserNameIcon';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import { PROFILE_IMAGE_URL } from 'src/recruitment/api/Axios/config';
import { GetUserData } from 'src/recruitment/api/Axios/client';
import { styles } from './styles';

const ImageContainer = styled.Image`
  border-bottom-left-radius: ${scale(50)}px;
  border-top-left-radius: ${scale(50)}px;
  border-bottom-right-radius: ${scale(50)}px;
  border-top-right-radius: ${scale(50)}px;
  background-color: ${color.blackShadow};
  width: 85px;
  height: 85px;
  justify-content: center;
  align-items: center;
`;

const AlternateImageView = styled.View`
  background-color: ${color.blackShadow};
  width: 85px;
  height: 85px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const BodyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-item: center;
`;
const FooterConatiner = styled.View`
  justify-content: flex-end;
  align-item: flex-end;
  flex: 0.9;
  top: -30px;
  left: 8px;
`;

const SocialIconContainer = styled.View`
  flex-direction: row;
  margin-vertical: 5px;
  margin-horizontal: 5px;
`;

const ImageView = styled.View`
  height: 100px;
  flex-direction: row;
  left: 15px;
  align-items: center;
`;

const ProfileNameView = styled.View`
  flex: 1;
`;

const SubtitleText = styled(Text)`
  margin-vertical: -3px;
`;
const HrView = styled.View`
  border-bottom-color: ${color.disabledBgColor};
  border-bottom-width: 1px;
  top: -5%;
  width: 90%;
`;

const CustomDrawer = props => {
  let {
    setUserID,
    setUserPhoneNumber,
    setUserProfileImage,
    setUserEmail,
    setIsFormSubmited,
  } = useContext(CredientialsContext);
  const [userProfilePic, setUserProfilePic] = useState();
  const [userName, setUserName] = useState();

  const [email, setEmail] = useState();

  useEffect(() => {
    let unmounted = false;
    const appData = async () => {
      const res = await GetUserData();

      if (res.success) {
        if (!unmounted) {
          if (res.userdata.profilepicture) {
            setUserProfilePic(res.userdata.profilepicture);
            setEmail(res.userdata.email);
            setUserName(res.userdata.name);
          }
        }
      }
    };
    appData();
    return () => {
      unmounted = true;
    };
  }, []);

  const LogoutBtn = async () => {
    setUserProfileImage(null);
    setUserEmail(null);
    setUserID(null);
    setUserPhoneNumber(null);
    await AsyncStorage.removeItem(USERINFO.USER_SIGN_IN_TOKEN);
    await AsyncStorage.removeItem(USERINFO.ACTIVE_USER);

    props.navigation.replace(NavigationStack.LANDING, {
      screen: SCREENS.LOGIN_SCREEN,
    });
    setIsFormSubmited(null);
  };

  return (
    <View {...props} style={styles.contentContainerStyle}>
      <View style={styles.BodyContainer}>
        <View style={styles.ImageView}>
          {userProfilePic ? (
            <ImageContainer
              source={{
                uri: PROFILE_IMAGE_URL(userProfilePic, email),
              }}
              resizeMode="cover"
              width={200}
              height={200}
            />
          ) : (
            <AlternateImageView>
              <UserNameIcon width={30} height={30} />
            </AlternateImageView>
          )}
          <ProfileNameView>
            <Text
              size={SIZE.XSMALL}
              fontFamily={FONT_FAMILY.SEMI_BOLD}
              color={color.black}
              style={styles.DrawerItemStyle}>
              {userName && userName}
            </Text>
            <SubtitleText
              size={SIZE.XXXXSMALL}
              fontFamily={FONT_FAMILY.REGULAR}
              color={color.silver}
              style={styles.DrawerItemStyle}>
              {userName && DrawerScreenConstant.teacherApplicant}
            </SubtitleText>
          </ProfileNameView>
        </View>

        <View>
          <DrawerItemList {...props} />
        </View>
      </View>

      <FooterConatiner>
        <HrView />

        <View>
          <DrawerItem
            label={DrawerScreenConstant.tellUsAFriend}
            inactiveTintColor={color.themeColorShockingPink}
            icon={() => <ShareAFriendIcon height={20} width={20} />}
            style={
              (styles.DrawerItemStyle, { marginVertical: -6, left: '-10%' })
            }
          />
          <DrawerItem
            label={DrawerScreenConstant.logOut}
            inactiveTintColor={color.themeColorShockingPink}
            onPress={LogoutBtn}
            style={([styles.DrawerItemStyle], { left: '-10%' })}
            icon={() => <LogoutIcon height={20} width={20} />}
          />
        </View>
        <View>
          <Text
            size={SIZE.XXXXSMALL}
            fontFamily={FONT_FAMILY.REGULAR}
            color={color.silver}
            style={styles.DrawerItemStyle}>
            {DrawerScreenConstant.reachOutUs}
          </Text>
          <SocialIconContainer>
            <FbIcon width={20} height={20} />
            <InstaIcon width={20} height={20} />
            <WhatsAppIcon width={20} height={20} />
            <EmailSocialIcon width={20} height={30} />
          </SocialIconContainer>
        </View>
      </FooterConatiner>
    </View>
  );
};
export default CustomDrawer;
