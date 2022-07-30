import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import RNIcon from 'react-native-vector-icons/Ionicons';
import SideMenu from 'react-native-side-menu-updated';

import {Header, RNText, RNTouchable, RNView} from 'components';
import Menu from 'screens/SideMenu';

import {COLORS, FONTS, SCREEN_SIZE, TYPES} from 'themes';

import {translate} from 'translate';
import {Navigation} from 'react-native-navigation';

const Home = ({componentId}) => {
  const [isMenu, setMenu] = useState(false);
  const menu = <Menu />;

  const onChangeMenu = () => {
    setMenu(!isMenu);
  };

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      bottomTabs: {
        visible: isMenu ? false : true,
        drawBehind: isMenu ? false : true,
      },
    });
  }, [isMenu, componentId]);

  return (
    <SideMenu
      menu={isMenu ? menu : null}
      isOpen={isMenu}
      onChange={onChangeMenu}>
      <RNView fill>
        <RNView
          h={200}
          color={COLORS.primary}
          borderBottomRightRadius={32}
          borderBottomLeftRadius={32}>
          <Header
            iconLeft={'menu-outline'}
            onPressBack={onChangeMenu}
            componentId={componentId}
            sizeIcon={32}
            colorIcon={COLORS.bgPage}
          />
        </RNView>
      </RNView>
    </SideMenu>
  );
};

export default Home;

const styles = StyleSheet.create({});
