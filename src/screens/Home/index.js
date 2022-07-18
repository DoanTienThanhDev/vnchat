import {StyleSheet} from 'react-native';
import React from 'react';
import RNIcon from 'react-native-vector-icons/Ionicons';

import {RNText, RNTouchable, RNView} from 'components';

import {COLORS, FONTS, TYPES} from 'themes';
import {translate} from 'translate';

const Home = () => {
  return (
    <RNView fill>
      <RNView
        h={180}
        color={COLORS.primary}
        borderBottomRightRadius={32}
        borderBottomLeftRadius={32}>
        <RNTouchable mTop={50} w={50} h={50} center>
          <RNIcon name="menu" size={32} color={COLORS.bgPage} />
        </RNTouchable>
        <RNText
          type={TYPES.bold}
          size={FONTS.S28}
          color={COLORS.bgPage}
          mLeft={28}>
          {translate('COMMON.appName')}
        </RNText>
      </RNView>
    </RNView>
  );
};

export default Home;

const styles = StyleSheet.create({});
