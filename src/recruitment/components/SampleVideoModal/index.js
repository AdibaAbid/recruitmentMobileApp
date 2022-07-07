import React from 'react';
import Button from '@components/Button';
import { VideoAndPicture } from '@constants/strings';
import { color } from '@styles/colorConstant';
import { Modal, Platform, View } from 'react-native';
import { styles } from './style';
import Video from 'react-native-video';
import { sampleVideo } from '@assets/videos';
import VideoPlayer from './component/VideoPlayer';
// import VideoPlayer from 'react-native-video-player';
const SampleVideoModal = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.videoView}>
              {Platform.OS === 'android' ? (
                // <VideoPlayer
                //   video={sampleVideo}
                //   style={{
                //     backgroundColor: color.silverWhite,
                //     borderRadius: 10,
                //     height: 200,
                //   }}
                //   videoWidth={1600}
                //   videoHeight={900}
                //   disableControlsAutoHide
                //   autoplay
                //   seekBarWidth={1}
                //   seekProgressStart={4}
                // />
                <VideoPlayer
                  url={
                    'https://rec-portal.s3.ap-south-1.amazonaws.com/rec-portal//xainab.tahir30@gmail.com/612f9eb7f25bf6a61ee47483-v1.mp4'
                  }
                />
              ) : (
                <Video
                  source={sampleVideo}
                  style={styles.backgroundVideo}
                  resizeMode="contain"
                  controls={true}
                />
              )}
            </View>

            <View style={styles.closeBtn}>
              <Button
                borderRadius={6}
                isBorderColor={color.lightPink}
                isBackgroundColor={color.white}
                onPress={() => setModalVisible(!modalVisible)}
                label={VideoAndPicture.close}
                textColor={color.themeColorShockingPink}
                height={40}
                isUppercase
                width={'100%'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SampleVideoModal;
