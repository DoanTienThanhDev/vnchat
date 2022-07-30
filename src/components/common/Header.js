import {Platform, StyleSheet} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import RNIcon from 'react-native-vector-icons/Ionicons';

import {RNView, RNText, RNTouchable} from '../index';

import {COLORS, FONTS, TYPES} from 'themes';
import {isNotch} from 'utils';

const Header = ({
  componentId,
  title,
  onPressBack,
  onPressRight,
  icon,
  mTop,
  mHoz,
  iconLeft,
  sizeIcon,
  colorIcon,
}) => {
  const onBack = () => {
    Navigation.pop(componentId);
  };

  return (
    <RNView
      row
      alignItems={'flex-end'}
      borderBottomWidth={title ? 0.5 : 0}
      borderBottomColor={COLORS.borderInput}
      pTop={
        mTop ||
        Platform.select({
          ios: isNotch ? 48 : 30,
          android: isNotch ? 44 : 24,
        })
      }
      pHoz={mHoz || 8}
      style={styles.container}>
      <RNTouchable
        onPress={onPressBack || onBack}
        h={40}
        w={40}
        center
        disabled={!componentId}>
        <RNIcon
          name={!componentId ? null : iconLeft || 'chevron-back-outline'}
          size={sizeIcon || 24}
          color={colorIcon || COLORS.primaryText}
        />
      </RNTouchable>
      <RNText
        fill
        textAlign={'center'}
        color={COLORS.black}
        type={TYPES.bold}
        size={FONTS.S16}
        mBottom={8}>
        {`${title || ''}`}
      </RNText>
      <RNTouchable disabled={!onPressBack} onPress={onPressRight} w={40} h={40}>
        <RNIcon name={icon} size={24} color={COLORS.primaryText} />
      </RNTouchable>
    </RNView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Header;
