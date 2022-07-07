import { theme } from '../../../../../../../../../theme';
import { HP, WP } from '../../../../../../../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  BtnView: {
    justifyContent: 'flex-end',
    backgroundColor: theme.bgWhite,
    height: 80,
    marginLeft: '-5%',
    width: '110%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 28,
    },
    shadowOpacity: 0.46,
    shadowRadius: 1.14,
    elevation: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },

  ParentView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ChildView: {
    paddingHorizontal: WP('5'),
  },
  customBtnStyle: {
    backgroundColor: theme.bgColorBtn,
    width: 100,
    marginRight: '10%',
  },
  txtView: {
    paddingVertical: HP('2'),
    borderColor: theme.borderLight,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
