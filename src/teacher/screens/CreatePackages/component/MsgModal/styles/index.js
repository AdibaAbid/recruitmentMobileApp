import { theme } from '../../../../../theme';
import { HP, WP } from '../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: theme.bgWhite,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    top: -6,
    right: -8,
    alignItems: 'flex-end',
  },
  headerIcon: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: -10,
  },

  MsgView: {
    marginVertical: WP('2'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: HP('3'),
  },
  badgeBg: {
    paddingHorizontal: 2,
  },
  svgIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
