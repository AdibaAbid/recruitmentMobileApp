import { theme } from '../../../../../../../theme';
import { WP, HP } from '../../../../../../../constants';
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
  },

  MsgView: {
    marginVertical: WP('0.5'),
  },
  textStyle: {
    paddingVertical: HP('2'),
  },
});

export default styles;
