import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Text from './Text';
import { color } from '@styles/colorConstant';
import {
  scale,
  getWindowWidth,
  getWindowHeight,
  heightRatio,
} from 'src/recruitment/utils/platformUtils';
import { FONT_FAMILY } from '@styles/FontProperties';
import { Platform } from 'react-native';

const Container = styled.View`
  flex: 1;
  height: ${heightRatio >= 1.2
    ? getWindowHeight() - 130
    : getWindowHeight() - 48}px;
`;

const innerBoxWidth = getWindowWidth() - scale(64);

const ContentContainer = styled.View`
  width: ${innerBoxWidth}px;
  flex: 1;
  align-item: center;
  width: 100%;
`;
const InputFieldWrapper = styled.View`
  flex: 0.6;
  justify-content: center;
`;
const TextWrapper = styled(Text)`
  margin-top: ${Platform.OS === 'android' ? -8 : -4}px;
`;

const FormBox = ({
  children,
  title,
  subTitle,
  titleFontFamily,
  subTitleFontFamily,
  titleSize,
  subTitleSize,
  marginVertical,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <ContentContainer>
        <InputFieldWrapper>
          <Text
            size={titleSize}
            fontFamily={titleFontFamily}
            color={color.blackBorderColor}>
            {title}
          </Text>
          <TextWrapper
            size={subTitleSize}
            numberOfLines={0}
            fontFamily={subTitleFontFamily}
            color={color.blackBorderColor}>
            {subTitle}
          </TextWrapper>
        </InputFieldWrapper>

        {children}
      </ContentContainer>
    </Container>
  );
};

FormBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormBox;
