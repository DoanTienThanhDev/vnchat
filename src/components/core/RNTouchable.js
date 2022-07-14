import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const RNTouchable = ({
  fill,
  children,
  row,
  alignCenter,
  justifyCenter,
  center,
  style,
  mTop,
  mBottom,
  mLeft,
  mRight,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHoz,
  pVer,
  mHoz,
  mVer,
  color,
  h,
  w,
  borderRadius,
  borderWidth,
  borderColor,
  justifyContent,
  borderBottomWidth,
  borderBottomColor,
  alignItems,
  selfCenter,
  maxHeight,
  minHeight,
  minWidth,
  maxWidth,
  onPress,
  activeOpacity,
  hit,
  column,
  ...more
}) => {
  return (
    <TouchableOpacity
      {...more}
      style={[
        fill && styles.fill,
        row && styles.row,
        alignCenter && styles.alignCenter,
        justifyCenter && styles.justifyCenter,
        center && styles.center,
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        pTop && {paddingTop: pTop},
        pBottom && {paddingBottom: pBottom},
        pLeft && {paddingLeft: pLeft},
        pRight && {paddingRight: pRight},
        pHoz && {paddingHorizontal: pHoz},
        pVer && {paddingVertical: pVer},
        mHoz && {marginHorizontal: mHoz},
        mVer && {marginVertical: mVer},
        color && {backgroundColor: color},
        h && {height: h},
        w && {width: w},
        maxHeight && {maxHeight},
        minHeight && {minHeight},
        minWidth && {minWidth},
        maxWidth && {maxWidth},
        column && styles.column,
        borderRadius && {borderRadius: borderRadius},
        borderWidth && {borderWidth: borderWidth},
        borderColor && {borderColor: borderColor},
        justifyContent && {justifyContent: justifyContent},
        alignItems && {alignItems: alignItems},
        selfCenter && styles.selfCenter,
        borderBottomWidth && {borderBottomWidth},
        borderBottomColor && {borderBottomColor},
        style,
      ]}
      hitSlop={{
        top: hit || 0,
        bottom: hit || 0,
        left: hit || 0,
        right: hit || 0,
      }}
      onPress={onPress && onPress}
      activeOpacity={activeOpacity || 0.3}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  fill: {
    flex: 1,
  },
  alignCenter: {alignItems: 'center'},
  justifyCenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {flexDirection: 'column'},
  selfCenter: {alignSelf: 'center'},
});

export default RNTouchable;
