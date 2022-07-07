import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Image, View } from 'react-native';

import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import { theme } from '../../../../theme';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import eduBadgeWithOutline from '@teacher/assets/svgs/eduBadgeWithOutline';
import superTutorWithOutline from '@teacher/assets/svgs/superTutorWithOutline';
import teacherMangBadgeWithOutline from '@teacher/assets/svgs/teacherMangBadgeWithOutline';
import edit from '../../assets/svgs/edit';

import styles from './styles';

const HeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatarImg}>
        <Image
          source={{
            uri: 'https://rec-portal.s3.ap-south-1.amazonaws.com/rec-portal//alvinajavaid93@gmail.com/61265f205c55fa51b7b5e098-profilepic.jpeg',
            cache: 'reload',
          }}
          style={styles.avatarImg}
        />
      </View>
      <View style={styles.editStyle}>
        <SvgXml xml={edit} />
      </View>
      <View style={styles.headerNameView}>
        <TextComponent
          title={'Saima Amir'}
          center
          size={Size.XXL}
          family={FontFamilyEnum.REGULAR}
          color={theme.textDark}
        />

        <View style={styles.row}>
          <View style={styles.badgeBg}>
            <View style={styles.svgIcon}>
              <SvgXml xml={eduBadgeWithOutline} height={28} width={28} />
            </View>
          </View>
          <View style={styles.badgeBg}>
            <View style={styles.svgIcon}>
              <SvgXml xml={superTutorWithOutline} height={28} width={28} />
            </View>
          </View>

          <View style={styles.badgeBg}>
            <View style={styles.svgIcon}>
              <SvgXml
                xml={teacherMangBadgeWithOutline}
                height={28}
                width={28}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;
