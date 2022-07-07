import { scale } from '../utils/platformUtils';

export const fontFamilyConstant = {
  poppinsBlack: 'Poppins-Black',
  poppinsBlackItalic: 'Poppins-BlackItalic',

  poppinsBold: 'Poppins-Bold',
  poppinsBoldItalic: 'Poppins-BoldItalic',

  poppinsExtraBold: 'Poppins-ExtraBold',
  poppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic',

  poppinsExtraLight: 'Poppins-ExtraLight',
  poppinsExtraLightItalic: 'Poppins-ExtraLightItalic',

  poppinsItalic: 'Poppins-Italic',

  poppinsLight: 'Poppins-Light',
  poppinsLightItalic: 'Poppins-LightItalic',

  poppinsMedium: 'Poppins-Medium',
  poppinsMediumItalic: 'Poppins-MediumItalic',

  poppinsRegular: 'Poppins-Regular',

  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',

  poppinsThin: 'Poppins-Thin',
  poppinsThinItalic: 'Poppins-ThinItalic',
};

export const FONT_FAMILY = {
  BOLD: 'BOLD',
  BOLD_ITALIC: 'BOLD ITALIC',

  BLACK: 'BLACK',
  BLACK_ITALIC: 'BLACK ITALIC',

  EXTRA_BOLD: 'EXTRA_BOLD',
  EXTRA_BOLD_ITALIC: 'EXTRA_BOLD_ITALIC',

  EXTRA_LIGHT: 'EXTRA_LIGHT',
  EXTRA_LIGHT_ITALIC: 'EXTRA_LIGHT_ITALIC',

  LIGHT: 'LIGHT',
  LIGHT_ITALIC: 'LIGHT_ITALIC',

  ITALIC: 'ITALIC',

  MEDIUM: 'MEDIUM',
  MEDIUM_ITALIC: 'MEDIUM_ITALIC',

  REGULAR: 'REGULAR',

  SEMI_BOLD_ITALIC: 'SEMI_BOLD_ITALIC',
  SEMI_BOLD: 'SEMI_BOLD',
  THIN: 'THIN',
  THIN_ITALIC: 'THIN_ITALIC',
};

export const getFontFamily = fontFamilyProp => {
  switch (fontFamilyProp) {
    case FONT_FAMILY.BOLD:
      return fontFamilyConstant.poppinsBold;
    case FONT_FAMILY.BOLD_ITALIC:
      return fontFamilyConstant.poppinsBoldItalic;

    case FONT_FAMILY.BLACK:
      return fontFamilyConstant.poppinsBlack;
    case FONT_FAMILY.BLACK_ITALIC:
      return fontFamilyConstant.poppinsBlackItalic;

    case FONT_FAMILY.LIGHT:
      return fontFamilyConstant.poppinsLight;
    case FONT_FAMILY.LIGHT_ITALIC:
      return fontFamilyConstant.poppinsLightItalic;

    case FONT_FAMILY.ITALIC:
      return fontFamilyConstant.poppinsItalic;

    case FONT_FAMILY.MEDIUM:
      return fontFamilyConstant.poppinsMedium;
    case FONT_FAMILY.MEDIUM_ITALIC:
      return fontFamilyConstant.poppinsMediumItalic;

    case FONT_FAMILY.THIN:
      return fontFamilyConstant.poppinsThin;
    case FONT_FAMILY.THIN_ITALIC:
      return fontFamilyConstant.poppinsThinItalic;

    case FONT_FAMILY.EXTRA_LIGHT:
      return fontFamilyConstant.poppinsExtraLight;
    case FONT_FAMILY.EXTRA_LIGHT_ITALIC:
      return fontFamilyConstant.poppinsExtraLightItalic;

    case FONT_FAMILY.EXTRA_BOLD:
      return fontFamilyConstant.poppinsExtraBold;
    case FONT_FAMILY.EXTRA_BOLD_ITALIC:
      return fontFamilyConstant.poppinsExtraBoldItalic;
    case FONT_FAMILY.SEMI_BOLD:
      return fontFamilyConstant.poppinsSemiBold;
    case FONT_FAMILY.SEMI_BOLD_ITALIC:
      return fontFamilyConstant.poppinsSemiBoldItalic;
    default:
      return fontFamilyConstant.poppinsRegular;
  }
};

export const SIZE = {
  LARGE: 'LARGE',
  XLARGE: 'XLARGE',
  HEADER_LARGE: 'HEADER_LARGE',
  SMALL: 'SMALL',
  XSMALL: 'XSMALL',
  XXSMALL: 'XXSMALL',
  XXXSMALL: 'XXXSMALL',
  XXXXSMALL: 'XXXXSMALL',
  SMALLEST: 'SMALLEST',
  XSMALLEST: 'XSMALLEST',
  XXSMALLEST: 'XXSMALLEST',
};

export const getFontSize = sizeProp => {
  switch (sizeProp) {
    case SIZE.XXSMALLEST:
      return scale(8);
    case SIZE.XSMALLEST:
      return scale(9);
    case SIZE.SMALLEST:
      return scale(10);
    case SIZE.XXXXSMALL:
      return scale(12);
    case SIZE.XXXSMALL:
      return scale(13);
    case SIZE.XXSMALL:
      return scale(14);
    case SIZE.XSMALL:
      return scale(16);
    case SIZE.SMALL:
      return scale(18);
    case SIZE.LARGE:
      return scale(21);
    case SIZE.XLARGE:
      return scale(24);
    case SIZE.HEADER_LARGE:
      return scale(19);
    default:
      return scale(11);
  }
};
