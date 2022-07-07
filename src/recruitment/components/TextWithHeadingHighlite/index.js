import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import { FONT_FAMILY, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import { color } from '@styles/colorConstant';

const InputContainer = styled.View`
  width: ${({ width }) => (width ? width : 90)}px;
  margin-vertical: 3px;
`;

const TextWrapper = styled(Text)``;

const TextHighlight = styled(Text)`
  align-items: center;
  justify-content: center;
  top: 1px;
`;

const TextBoxContainer = styled.View`
  background-color: ${color.themeColorShockingPink};
  padding-vertical: 3px;
  padding-horizontal: 6px;
  align-items: center;
  justify-content: center;
  margin: 3px;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${color.transparent};
`;

const TextHighlightView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`;

const TextWithHeadingHighlite = ({
  title,
  values,
  numberOfLines,
  width,
  ...rest
}) => {
  const [arrayValues, setArrayValues] = useState([]);

  useEffect(() => {
    if (typeof values === 'string') {
      const value = values.split(',');
      setArrayValues([...value]);
    } else {
      setArrayValues([...values]);
    }
  }, [values]);

  return (
    <InputContainer {...rest} width={width}>
      <TextWrapper
        fontFamily={FONT_FAMILY.MEDIUM}
        numberOfLines={numberOfLines}
        color={color.blackBorderColor}>
        {title}
      </TextWrapper>
      <TextHighlightView>
        {arrayValues.map((item, index) => {
          return (
            <TextBoxContainer key={index}>
              <TextHighlight
                fontFamily={FONT_FAMILY.REGULAR}
                size={SIZE.SMALLEST}
                color={color.white}>
                {item}
              </TextHighlight>
            </TextBoxContainer>
          );
        })}
      </TextHighlightView>
    </InputContainer>
  );
};

export default TextWithHeadingHighlite;

TextWithHeadingHighlite.defaultProps = {
  multiline: false,
  textColor: color.themeColorShockingPink,
};

TextWithHeadingHighlite.propTypes = {
  title: PropTypes.string.isRequired,
};
