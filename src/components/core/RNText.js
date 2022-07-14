import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, FONTS, TYPES} from 'themes';

const RNText = ({
  type,
  color,
  center,
  underLine,
  style,
  mTop,
  mBottom,
  mLeft,
  mRight,
  mHoz,
  mVer,
  fill,
  children,
  onPress,
  textAlign,
  lines,
  w,
  h,
  lineHeight,
  minWidth,
  maxWidth,
  size,
  ...props
}) => {
  return (
    <Text
      {...props}
      allowFontScaling={false}
      style={[
        styles.normal,
        color && {color: color || COLORS.primaryText},
        center && styles.center,
        underLine && styles.txtUnderline,
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        mHoz && {marginHorizontal: mHoz},
        mVer && {marginVertical: mVer},
        fill && styles.fill,
        textAlign && {textAlign: textAlign},
        w && {width: w},
        h && {height: h},
        lineHeight && {lineHeight},
        minWidth && {minWidth},
        maxWidth && {maxWidth},
        size && {fontSize: size || FONTS.primary},
        type && {fontWeight: type || TYPES.regular},
        style,
      ]}
      onPress={onPress && onPress}
      numberOfLines={lines}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  fill: {flex: 1},
  center: {
    textAlign: 'center',
  },
  txtUnderline: {
    textDecorationLine: 'underline',
  },
});

export default RNText;
