import {Navigation} from 'react-native-navigation';

export function push({id, screen, isBottomTabsEnable, passProps}) {
  Navigation.push(id, {
    component: {
      name: screen,
      passProps: passProps,
      options: {
        bottomTabs: {
          visible: isBottomTabsEnable,
          drawBehind: !isBottomTabsEnable,
        },
        topBar: {
          visible: false,
        },
      },
    },
  });
}

export const onLogin = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
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
};

export const onMainContent = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
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
};
