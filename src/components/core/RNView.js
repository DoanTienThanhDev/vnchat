import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from 'themes/colors';

const RNView = ({
  fill,
  children,
  row,
  column,
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
  alignItems,
  selfCenter,
  absolute,
  opacity,
  aTop = 0,
  aBottom = 0,
  aRight = 0,
  aLeft = 0,
  margin,
  borderTopRightRadius,
  borderTopLeftRadius,
  borderBottomWidth,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  wrap,
  loading,
  textLoading,
  textLoadingColor,
  bgColorIndicator,
  bgColorLoading,
  maxHeight,
  minHeight,
  minWidth,
  maxWidth,
  ...more
}) => {
  return (
    <View
      {...more}
      style={[
        fill && styles.fill,
        row && styles.row,
        column && styles.column,
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
        margin && {margin},
        borderBottomWidth && {borderBottomWidth},
        borderBottomColor && {borderBottomColor},
        borderTopRightRadius && {borderTopRightRadius},
        borderTopLeftRadius && {borderTopLeftRadius},
        borderBottomLeftRadius && {borderBottomLeftRadius},
        borderBottomRightRadius && {borderBottomRightRadius},
        color && {backgroundColor: color || COLORS.bgPage},
        h && {height: h},
        w && {width: w},
        maxHeight && {maxHeight},
        minHeight && {minHeight},
        minWidth && {minWidth},
        maxWidth && {maxWidth},
        borderRadius && {borderRadius: borderRadius},
        borderWidth && {borderWidth: borderWidth},
        borderColor && {borderColor: borderColor},
        justifyContent && {justifyContent: justifyContent},
        alignItems && {alignItems: alignItems},
        selfCenter && styles.selfCenter,
        absolute && {
          ...styles.absolute,
          top: aTop,
          bottom: aBottom,
          right: aRight,
          left: aLeft,
        },
        opacity && {opacity},
        style && style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  fill: {
    flex: 1,
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  loadingContainer: {
    zIndex: 10000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    paddingHorizontal: 16,
  },
});

export default RNView;
