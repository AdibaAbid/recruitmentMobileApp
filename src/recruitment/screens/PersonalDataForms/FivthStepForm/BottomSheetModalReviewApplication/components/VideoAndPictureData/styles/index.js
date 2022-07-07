import { color } from '@styles/colorConstant';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 5,
  },
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  HrView: {
    borderBottomColor: color.lightPink,
    borderBottomWidth: 1,
    top: '5%',
    width: '100%',
  },
  ImageContainer: {
    backgroundColor: color.white,
    width: 180,
    justifyContent: 'center',
    marginBottom: 20,
  },
  VideoThumbnail: {
    borderRadius: 15,
    backgroundColor: color.silverWhite,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  StyledImage: {
    borderRadius: 15,
    backgroundColor: color.silverWhite,
    height: 100,
    width: 100,
  },
});
