import React, { useState, useRef } from 'react';

// import all the components we are going to use
import { View } from 'react-native';
//Import React Native Video to play video
import Video from 'react-native-video';

import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

import { styles } from './styles';

const VideoPlayer = ({ url, thumbnail }) => {
  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(true);
  const [playerState, setPlayerState] = useState();
  const [screenType, setScreenType] = useState('content');

  const onSeek = seek => {
    //Handler for change in seekbar
    videoPlayer?.current?.seek(seek);
  };

  const onPaused = playerState => {
    //Handler for Video Pause
    setPaused(!paused);
    setPlayerState(playerState);
  };

  const onReplay = () => {
    //Handler for Replay
    setPlayerState(PLAYER_STATES.PAUSED);
    videoPlayer?.current?.seek(0);
    setCurrentTime(0);
    setPaused(true);
  };

  const onProgress = data => {
    // Video Player will progress continue even if it ends
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = data => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const onFullScreen = () => {
    setIsFullScreen(true);
    if (screenType === 'content') {
      setScreenType('cover');
    } else {
      setScreenType('content');
    }
  };

  const onSeeking = currentTime => setCurrentTime(currentTime);

  return (
    <View style={styles.container}>
      <Video
        onEnd={onEnd}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        fullscreen={isFullScreen}
        fullscreenOrientation={'landscape'}
        onProgress={onProgress}
        paused={paused}
        poster={thumbnail}
        posterResizeMode={'cover'}
        ref={videoPlayer}
        resizeMode={'contain'}
        source={{ uri: url }}
        style={styles.mediaPlayer}
        volume={10}
      />
      <MediaControls
        duration={duration}
        isLoading={isLoading}
        mainColor={'#333'}
        onFullScreen={onFullScreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        progress={currentTime}
        children={undefined}
        containerStyle={{}}
        isFullScreen={isFullScreen}
      />
    </View>
  );
};

export default VideoPlayer;
