import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { getWindowHeight } from 'src/recruitment/utils/platformUtils';
import { color } from '@styles/colorConstant';
import LandingScreenView from './LandingScreenView';

const Container = styled.SafeAreaView`
  background-color: ${color.white};
  height: ${getWindowHeight()}px;
  justify-content: space-around;
`;

const LandingScreen = ({ navigation }) => {
  return (
    <Container>
      <LandingScreenView navigation={navigation} />
    </Container>
  );
};

LandingScreen.navigationOptions = () => ({ header: null });

LandingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LandingScreen;
