import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import UploadingProgressBar from './components/UploadingProgressBar';
import ModuleRegisteration from './components/ModuleRegisteration';
import VideoPlayer from './components/VideoPlayer';
import StatusBarComponent from '@components/StatusBarComponent';
import imgTraining from './assets/svgs/imgTraining';
import playBtn from './assets/svgs/playBtn';
import { theme } from '../../theme/';

import { styles } from './styles';

const TrainingVideos = () => {
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBarComponent statusBarColor={theme.bgWhite} />

      <UploadingProgressBar progressPercent={10} />

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
              <SvgXml xml={imgTraining} style={styles.thumbnail} />
              <View style={styles.shadow}>
                <SvgXml xml={playBtn} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <ModuleRegisteration setIsVideoPlay={setIsVideoPlay} />
    </View>
  );
};

export default TrainingVideos;
