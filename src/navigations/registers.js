import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator} from 'react-native';
import {NavigationProvider} from 'react-native-navigation-hooks';
import React from 'react';

import {store, persistor} from 'features/store';

import {
  Login,
  Register,
  Home,
  ForgotPassword,
  CodePassword,
  ChangePassword,
} from 'screens';

const SCREENS = {
  Login,
  Register,
  Home,
  ForgotPassword,
  CodePassword,
  ChangePassword,
};

export const onRegisterScreensOnLaunch = () => {
  return Object.keys(SCREENS).map(item => {
    const Component = SCREENS[item];
    Navigation.registerComponent(
      item,
      () => props => {
        return (
          <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
              <NavigationProvider value={{componentId: props.componentId}}>
                <Component {...props} />
              </NavigationProvider>
            </PersistGate>
          </Provider>
        );
      },
      () => Component,
    );
  });
};
