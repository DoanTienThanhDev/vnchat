import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Auth/Login';
import {onRegisterScreensOnLaunch} from './src/navigations/registers';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => Login);

Navigation.events().registerAppLaunchedListener(() => {
  onRegisterScreensOnLaunch();
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
