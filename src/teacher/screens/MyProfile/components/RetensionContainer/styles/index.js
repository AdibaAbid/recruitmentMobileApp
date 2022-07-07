import { theme } from '../../../../../theme';
import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../../../constants';

export default StyleSheet.create({
  retentionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  retentionTextBox: {
    borderRightWidth: 1,
    borderRightColor: theme.borderDark,
    paddingHorizontal: WP('0.4'),
  },
  retentionThirdBox: {
    paddingHorizontal: WP('0.6'),
  },
  midContainer: {
    paddingVertical: HP('2'),
    paddingHorizontal: HP('2'),
    borderRadius: 10,
    alignContent: 'space-between',
    borderColor: theme.borderDark,
    borderWidth: 0.6,
    elevation: 3,
    shadowColor: theme.greyLightBorder,
    backgroundColor: theme.bgWhite,
    borderBottomWidth: 0.8,
    borderBottomColor: theme.borderDark,
  },
  retensionView: {
    padding: WP('1'),
  },
  detailBtnView: {
    marginTop: HP('2'),
  },
});
