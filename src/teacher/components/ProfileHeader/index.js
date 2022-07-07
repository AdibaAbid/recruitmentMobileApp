import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { theme } from '../../../teacher/theme';
import TextComponent from '../../../teacher/components/text';
import { Size } from '../../../teacher/globals';
import styles from './styles';
import { FontFamilyEnum } from '../../constants/FontFamily';
import { SvgXml } from 'react-native-svg';
import eduBadge from '@teacher/assets/svgs/eduBadge';
import teacherMangBadge from '@teacher/assets/svgs/teacherMangBadge';
import superTutorBadge from '@teacher/assets/svgs/superTutorBadge';
import questionMark from '@teacher/assets/svgs/questionMark';
import MsgModal from '../../screens/CreatePackages/component/MsgModal';
import awardBadge from '@teacher/assets/svgs/awardBadge';

const ProfileHeader = ({ userName, teacherStatus, teacherBadges }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.avatarImg}>
          <Image
            source={{
              uri: 'https://rec-portal.s3.ap-south-1.amazonaws.com/rec-portal//alvinajavaid93@gmail.com/61265f205c55fa51b7b5e098-profilepic.jpeg',
              cache: 'reload',
            }}
            style={styles.avatarImg}
          />
        </View>

        <View style={styles.profileName}>
          <TextComponent
            title={`Hi, ${userName}!`}
            size={Size.L}
            center
            family={FontFamilyEnum.REGULAR}
            color={theme.textDefault}
          />
          {teacherBadges && (
            <View style={styles.row}>
              <View
                style={[styles.badgeBg, { backgroundColor: theme.bgColorBtn }]}>
                <View style={styles.svgIcon}>
                  <SvgXml xml={eduBadge} />
                </View>
              </View>
              <View
                style={[
                  styles.badgeBg,
                  { backgroundColor: theme.badgeMustard },
                ]}>
                <View style={styles.svgIcon}>
                  <SvgXml xml={superTutorBadge} />
                </View>
              </View>

              <View
                style={[styles.badgeBg, { backgroundColor: theme.bgTheme }]}>
                <View style={styles.svgIcon}>
                  <SvgXml xml={teacherMangBadge} />
                </View>
              </View>

              <TouchableOpacity
                style={styles.questionMark}
                onPress={() => setShowModal(true)}>
                <SvgXml xml={questionMark} />
              </TouchableOpacity>
            </View>
          )}

          {showModal && (
            <MsgModal
              showModal={showModal}
              setShowModal={setShowModal}
              showMsg={'Our profile badges show off your special achievements!'}
              showBtn={true}
              btnTitle={'Got It'}
              icon={awardBadge}
              title={'You earned it!'}
              showCloseBtn={false}
              midContentComponent={true}
              handlePress={() => setShowModal(false)}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
