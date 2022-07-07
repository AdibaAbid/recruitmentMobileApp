import React from 'react';

import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';

const StackScreen = createStackNavigator();

const MyTransition = {
  gesturesEnabled: false,
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
      }),
    },
  }),
};

const StackScreens = props => {
  const { component, name, params, myOptions } = props;

  return (
    <StackScreen.Screen
      name={name}
      component={component}
      options={{
        ...MyTransition,
        ...myOptions,
      }}
      initialParams={params}
    />
  );
};

export default StackScreens;
