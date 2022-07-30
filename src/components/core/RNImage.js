import React from 'react';
import {Image, StyleSheet} from 'react-native';

const RNImage = ({
  fill,
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
  selfCenter,
  source,
  defaultSource,
  tintColor,
  resizeMode,
}) => {
  return (
    <Image
      style={[
        fill && styles.fill,
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
        borderRadius && {borderRadius: borderRadius},
        borderWidth && {borderWidth: borderWidth},
        borderColor && {borderColor: borderColor},
        selfCenter && styles.selfCenter,
        tintColor && {tintColor},
        style && style,
      ]}
      defaultSource={defaultSource}
      source={source}
      resizeMode={resizeMode || 'cover'}
    />
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  selfCenter: {alignSelf: 'center'},
});

export default RNImage;
