import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {
  FONT_FAMILY,
  getFontFamily,
  SIZE,
  getFontSize,
} from '@styles/FontProperties';
import { color as colorConstant } from '@styles/colorConstant';

const StyledText = styled.Text`
  font-family: ${({ fontFamily }) => getFontFamily(fontFamily)};
  font-size: ${({ size }) => getFontSize(size)}px;
  text-transform: ${({ isUppercase }) => (isUppercase ? 'uppercase' : 'none')};
  text-align: ${({ alignCenter }) => (alignCenter ? 'center' : 'left')};
  justify-content: center;
  color: ${({ color }) => color};
  text-decoration-line: ${({ isUnderlined }) =>
    isUnderlined ? 'underline' : 'none'};
  text-decoration-color: ${({ color }) => color};
`;

const Text = ({
  children,
  fontFamily,
  size,
  color,
  isUppercase,
  isUnderlined,
  alignCenter,
  allowFontScaling,
  numberOfLines,
  customStyle,
  ...rest
}) => (
  <StyledText
    fontFamily={fontFamily}
    color={color}
    multiline
    numberOfLines={numberOfLines}
    size={size}
    isUppercase={isUppercase}
    isUnderlined={isUnderlined}
    alignCenter={alignCenter}
    allowFontScaling={false}
    style={customStyle}
    {...rest}>
    {children}
  </StyledText>
);

Text.defaultProps = {
  fontFamily: FONT_FAMILY.MEDIUM,
  color: colorConstant.black,
  isUppercase: false,
  isUnderlined: false,
  alignCenter: false,
  allowFontScaling: true,
  numberOfLines: 1,
};

Text.propTypes = {
  // children: PropTypes.node.isRequired,
  fontFamily: PropTypes.oneOf([
    FONT_FAMILY.BOLD,
    FONT_FAMILY.BOLD_ITALIC,
    FONT_FAMILY.LIGHT,
    FONT_FAMILY.LIGHT_ITALIC,
    FONT_FAMILY.MEDIUM,
    FONT_FAMILY.REGULAR,
    FONT_FAMILY.SEMI_BOLD,
    FONT_FAMILY.THIN,
    FONT_FAMILY.THIN_ITALIC,
    FONT_FAMILY.MEDIUM,
  ]),
  size: PropTypes.oneOf([
    SIZE.LARGE,
    SIZE.HEADER_LARGE,
    SIZE.XLARGE,
    SIZE.SMALL,
    SIZE.XSMALL,
    SIZE.XXSMALL,
    SIZE.XXXSMALL,
    SIZE.XXXXSMALL,
    SIZE.SMALLEST,
    SIZE.XSMALLEST,
    SIZE.XXSMALLEST,
  ]),
  color: PropTypes.any,
  isUppercase: PropTypes.bool,
  isUnderlined: PropTypes.bool,
  alignCenter: PropTypes.bool,
  allowFontScaling: PropTypes.bool,
  numberOfLines: PropTypes.number,
};

export default Text;
