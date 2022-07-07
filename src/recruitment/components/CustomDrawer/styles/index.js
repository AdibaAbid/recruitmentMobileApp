import { color } from '@styles/colorConstant';
import { scale } from '@utils/platformUtils';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    justifyContent: 'space-between',
    flex: 1,
  },
  DrawerItemStyle: {
    marginHorizontal: 10,
    width: '75%',
  },
  HrView: {
    borderBottomColor: color.disabledBgColor,
    borderBottomWidth: 1,
    top: '-5%',
    width: ' 90%',
  },
  SubtitleText: {
    marginVertical: -3,
  },
  ProfileNameView: {
    flex: 1,
  },
  ImageView: {
    height: 100,
    flexDirection: 'row',
    left: 15,
    alignItems: 'center',
  },
  ImageContainer: {
    borderBottomLeftRadius: scale(50),
    borderTopLeftRadius: scale(50),
    borderBottomRightRadius: scale(50),
    borderTopRightRadius: scale(50),
    backgroundColor: color.blackShadow,
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AlternateImageView: {
    backgroundColor: color.blackShadow,
    width: 85,
    height: 85,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
  },
  FooterConatiner: {
    justifycontent: 'flex-end',
    alignItem: 'flex-end',
    flex: 0.9,
    top: -30,
    left: 8,
  },
  SocialIconContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
