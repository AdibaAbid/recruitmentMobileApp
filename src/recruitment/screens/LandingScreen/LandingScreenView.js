import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { getWindowWidth, scale } from 'src/recruitment/utils/platformUtils';
import { color } from '@styles/colorConstant';
import Button from '@components/Button';
import { logo } from '../../assets/images';
import Text from '@components/Text';
import { landingScreenConstant, SCREENS } from '@constants/strings';
import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import { Platform } from 'react-native';

const UpperContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const HalfContainer = styled.View`
  flex: ${Platform.OS === 'android' ? 0.5 : 1};
  align-items: center;
  justify-content: flex-end;
`;

const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${color.themeColorShockingPink};
  width: ${scale(180)}px;
  height: ${scale(180)}px;
  border-radius: 150px;
  top: 30px;
`;

const ButtonRow = styled.View`
  flex: 0.9;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.Image`
  height: 95px;
  width: 95px;
`;

const TagLineText = styled(Text)`
  margin-vertical: 10px;
`;

const MainContainer = styled.View`
  flex: 1;
  margin-horizontal: 20px;
  margin-top: 20px;
`;

const LandingScreenView = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <>
      <MainContainer>
        <UpperContainer>
          <LogoContainer>
            <LogoImage source={logo} resizeMode="contain" />
          </LogoContainer>
        </UpperContainer>
        <HalfContainer>
          <ButtonRow>
            <TagLineText
              fontFamily={FONT_FAMILY.REGULAR}
              size={SIZE.SMALLEST}
              color={color.themeColorShockingPink}
              alignCenter>
              {landingScreenConstant.alreadyHaveAnAccount}
            </TagLineText>
            <Button
              borderRadius={6}
              isBorderColor={color.lightPink}
              isBackgroundColor={color.transparent}
              onPress={() => navigate(SCREENS.LOGIN_SCREEN)}
              label={landingScreenConstant.loginText}
              textColor={color.themeColorShockingPink}
              height={50}
              width={getWindowWidth() - 80}
              isUppercase
            />
            <TagLineText
              fontFamily={FONT_FAMILY.REGULAR}
              size={SIZE.SMALLEST}
              color={color.themeColorShockingPink}
              alignCenter>
              {landingScreenConstant.areYouNew}
            </TagLineText>
            <Button
              testID="sign-up-button"
              borderRadius={6}
              isBorderColor={color.transparent}
              isBackgroundColor={color.themeColorShockingPink}
              onPress={() => navigate(SCREENS.SIGN_UP_SCREEN)}
              label={landingScreenConstant.signUp}
              textColor={color.white}
              height={50}
              width={getWindowWidth() - 80}
              isUppercase
            />
          </ButtonRow>
        </HalfContainer>
      </MainContainer>
    </>
  );
};

LandingScreenView.navigationOptions = () => ({ header: null });

LandingScreenView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LandingScreenView;
