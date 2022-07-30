import {Navigation} from 'react-native-navigation';
import {store} from './src/features/store';
import {startUp} from './src/features/general/operations';
import {onRegisterScreensOnLaunch} from './src/navigations/registers';

Navigation.events().registerAppLaunchedListener(async () => {
  await onRegisterScreensOnLaunch();
  store.dispatch(startUp());
});
