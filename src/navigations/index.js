import {Navigation} from 'react-native-navigation';
import {COLORS, FONTS, TYPES} from 'themes';
import {iconsMap} from 'utils/icon';

export function push({id, screen, isBottomTabsEnable, passProps}) {
  Navigation.push(id, {
    component: {
      name: screen,
      passProps: passProps,
      options: {
        bottomTabs: {
          visible: isBottomTabsEnable || false,
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
      id: 'bottomTabs',
      bottomTabs: {
        options: {
          animations: {
            push: {
              waitForRender: true,
              enabled: true,
            },
          },
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'Home',
                    name: 'Home',
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Trang Chủ',
                  icon: iconsMap['home-outline'],
                  selectedIcon: iconsMap['home-sharp'],
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'Chat',
                    name: 'Chat',
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Tin Nhắn',
                  icon: iconsMap['chatbox-ellipses-outline'],
                  selectedIcon: iconsMap['chatbox-ellipses'],
                },
              },
            },
          },
        ],
      },
    },
  });
};

Navigation.setDefaultOptions({
  animations: {
    push: {
      waitForRender: true,
      enabled: true,
    },
  },
  statusBar: {
    backgroundColor: COLORS.bgPage,
    style: 'dark',
  },
  bottomTab: {
    textColor: COLORS.primaryText,
    iconColor: COLORS.primaryText,
    selectedIconColor: COLORS.primary,
    selectedTextColor: COLORS.primary,
    fontSize: FONTS.primary,
    fontWeight: TYPES.medium,
  },
  bottomTabs: {
    visible: true,
    animate: true,
    elevation: 10,
    titleDisplayMode: 'alwaysShow',
    preferLargeIcons: true,
    animateTabSelection: false,
  },
  layout: {
    componentBackgroundColor: COLORS.bgPage,
    backgroundColor: COLORS.bgPage,
    orientation: ['portrait'],
  },
});
