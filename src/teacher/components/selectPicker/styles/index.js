import { StyleSheet } from 'react-native';
import { theme } from '../../../../teacher/theme/index';
import { HP, WP } from '../../../../teacher/constants/index';

export default StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderColor: theme.borderLight,
    borderRadius: 10,
    paddingHorizontal: WP('5'),
    paddingVertical: HP('2'),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 9,
    shadowColor: theme.greyLightBorder,
    backgroundColor: theme.bgWhite,
    borderBottomWidth: 0.8,
    borderBottomColor: theme.borderLight,
  },
  selectText: {
    flex: 1,
    marginRight: WP('2'),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
