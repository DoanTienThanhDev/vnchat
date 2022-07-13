import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Auth/Login';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => Login);

Navigation.events().registerAppLaunchedListener(() => {
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
