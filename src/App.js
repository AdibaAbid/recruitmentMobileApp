import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import CredientialsProvider from './recruitment/context/CredientialsContext';
import { Provider, useSelector } from 'react-redux';
import { LogBox, StatusBar, SafeAreaView } from 'react-native';
import AppNavigation from '@navigation/AppNavigation';
import { color } from './recruitment/styles/colorConstant';
import { SafeAreaContainer } from './recruitment/styles';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './teacher/store/actions';
import { ToastProvider } from 'react-native-toast-notifications';
import ToastAlert from './recruitment/components/ToastAlert';
import BottomSheetModal from './teacher/components/bottomSheet';
import store from './teacher/store';
import { HP } from './teacher/constants';
import {
  requestUserPermission,
  NotificationListner,
} from '@utils/pushNotification_helper';
import { ForegroundHandler } from '@utils/foregroundHandler';
import { MenuProvider } from 'react-native-popup-menu';

LogBox.ignoreLogs(['Node of type rule not supported as an inline style']); //Ignore all log notifications

const BottomSheet = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const { modalHeight, modalToggle, modalComponent } = useSelector(
    state => state.commonReducers,
  );

  useEffect(() => {}, []);

  return (
    <BottomSheetModal
      show={modalToggle}
      onOuterClick={() => action.setModalToggle(false)}
      height={HP(modalHeight)}
      children={modalComponent}
    />
  );
};

const App = () => {
  const notificationListen = navigation => {
    requestUserPermission();
    NotificationListner(navigation);
  };
  return (
    <Provider store={store}>
      <MenuProvider>
        <CredientialsProvider>
          <SafeAreaView>
            <StatusBar
              translucent
              backgroundColor={color.transparent}
              barStyle={'dark-content'}
            />
          </SafeAreaView>

          <SafeAreaContainer>
            {/* Alerts all over the app */}
            <ToastProvider
              successColor={color.successAlertColor}
              dangerColor={color.errorAlertColor}
              warningColor={color.warningAlertColor}
              animationDuration={250}
              swipeEnabled={true}
              duration={3000}
              renderToast={toastOptions => (
                <ToastAlert toastOptions={toastOptions} />
              )}>
              {/* <ForegroundHandler /> */}
              <AppNavigation>
                {navigation => {
                  ForegroundHandler(navigation);
                  notificationListen(navigation);
                }}
              </AppNavigation>

              <BottomSheet />
            </ToastProvider>
          </SafeAreaContainer>
        </CredientialsProvider>
      </MenuProvider>
    </Provider>
  );
};

export default App;
