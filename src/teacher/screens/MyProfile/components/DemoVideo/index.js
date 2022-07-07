import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import TextComponent from '../../../../components/text';
import { theme } from '../../../../theme';
import styles from './styles';
import { Size } from '../../../../globals';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import VideoPlayer from 'src/teacher/screens/TrainingVideos/components/VideoPlayer';
import { SvgXml } from 'react-native-svg';
import playButton from 'src/teacher/screens/TrainingVideos/assets/svgs/playButton';
import demoVideoImg from '../../assets/svgs/demoVideoImg';

const DemoVideo = () => {
  const [isVideoPlay, setIsVideoPlay] = useState(false);

  return (
    <View style={styles.ProfContainer}>
      <View style={styles.ProfHeader}>
        <TextComponent
          title={'Demo Video'}
          size={Size.DEFAULT}
          family={FontFamilyEnum.REGULAR}
          color={theme.textDefault}
        />
        <TouchableOpacity>
          <TextComponent
            title={'Upload New'}
            center
            size={Size.S}
            family={FontFamilyEnum.MEDIUM}
            color={theme.bgTheme}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.videoView}>
        {/* <VideoPlayer
          video={sampleVideo}
          style={{ backgroundColor: theme.textDesc }}
          videoWidth={1600}
          videoHeight={900}
          disableControlsAutoHide
          seekBarWidth={1}
          seekProgressStart={4}
          // thumbnail={avatar}
        /> */}
        <View>
          {isVideoPlay ? (
            <View>
              <VideoPlayer
                thumbnail={''}
                url={
                  'https://rec-portal.s3.ap-south-1.amazonaws.com/rec-portal//xainab.tahir30@gmail.com/612f9eb7f25bf6a61ee47483-v1.mp4'
                }
              />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.touchableView}
              onPress={() => setIsVideoPlay(true)}>
              <View>
                <SvgXml
                  xml={demoVideoImg}
                  style={styles.thumbnail}
                  width={'100%'}
                />
                <View style={styles.shadow}>
                  <SvgXml xml={playButton} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default DemoVideo;
