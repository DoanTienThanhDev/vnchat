import {Navigation} from 'react-native-navigation';

import {onRegisterScreensOnLaunch} from 'navigations/registers';

Navigation.events().registerAppLaunchedListener(async () => {
  onRegisterScreensOnLaunch();
});
