import {Navigation} from 'react-native-navigation';
import {COLORS} from 'themes/colors';

export function push({
  id,
  screen,
  title,
  isTopBarEnable,
  isBottomTabsEnable,
  rightButtonIcon,
  elevation,
  passProps,
  textRightTop,
  disabledRight,
  colorBtnRight,
}) {
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
          visible: isTopBarEnable,
          title: {
            text: title,
            alignment: 'center',
            fontSize: 16,
            fontFamily: '',
          },
          rightButtons:
            rightButtonIcon || textRightTop
              ? [
                  {
                    id: rightButtonIcon || textRightTop,
                    text: textRightTop,
                    enabled: disabledRight,
                    disabledColor: COLORS.neutral2,
                    icon: '',
                    color: colorBtnRight,
                  },
                ]
              : [],
          elevation: elevation,
          backButton: {
            showTitle: false,
            color: COLORS.white,
          },
        },
      },
    },
  });
}
