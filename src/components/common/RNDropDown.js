import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {RNView, RNText, RNTouchable} from 'components';
import RNIcon from 'react-native-vector-icons/Ionicons';

import {COLORS, FONTS, TYPES, SCREEN_SIZE} from 'themes';
import {translate} from 'translate';

const RNDropDown = ({
  errorMessage,
  placeholder,
  value = '',
  style,
  w,
  h,
  fill,
  mHoz,
  mVer,
  pHoz,
  pVer,
  mLeft,
  mRight,
  mTop,
  mBottom,
  wrapperStyle,
  items,
  onPress,
  touched,
  label,
}) => {
  const [isShow, setIsShow] = useState(false);

  const onHideShow = () => {
    setIsShow(!isShow);
  };

  const onSelected = item => () => {
    setIsShow(false);
    onPress && onPress(translate(item));
  };

  return (
    <RNView
      fill={fill}
      w={w}
      h={h}
      pVer={pVer}
      mLeft={mLeft}
      mRight={mRight}
      mTop={mTop}
      mBottom={mBottom}
      mVer={mVer || 12}
      mHoz={mHoz}
      pHoz={pHoz}
      column
      justifyCenter
      style={[style]}>
      <RNView
        borderColor={isShow ? COLORS.primary : COLORS.borderInput}
        borderWidth={1}
        borderRadius={8}
        w="100%"
        pHoz={16}
        h={54}
        column
        alignCenter
        style={wrapperStyle}>
        <RNTouchable row fill alignCenter onPress={onHideShow}>
          <RNView fill justifyCenter pVer={6}>
            {!!value && (
              <RNText
                type={TYPES.regular}
                size={FONTS.primary}
                color={COLORS.black10}
                mBottom={1}>
                {label}
              </RNText>
            )}
            <RNText
              mTop={2}
              color={value ? COLORS.black : COLORS.black10}
              size={FONTS.primary}
              type={TYPES.regular}>{`${value || placeholder || ''}`}</RNText>
          </RNView>
          <RNIcon
            name="chevron-down-outline"
            size={FONTS.S24}
            color={COLORS.primaryText}
          />
        </RNTouchable>
      </RNView>
      <RNView fill>
        <RNView mLeft={SCREEN_SIZE.WIDTH / 2} style={styles.dropdown}>
          {isShow &&
            items.length > 0 &&
            items.map((item, index) => {
              return (
                <RNTouchable
                  h={40}
                  justifyCenter
                  pHoz={5}
                  key={index}
                  borderBottomWidth={index !== items?.length - 1 ? 0.5 : 0}
                  borderBottomColor={COLORS.black10}
                  onPress={onSelected(item)}>
                  <RNText
                    lines={1}
                    type={TYPES.medium}
                    color={COLORS.black}>{`${translate(item)}`}</RNText>
                </RNTouchable>
              );
            })}
        </RNView>
      </RNView>
      {!!errorMessage && touched && (
        <RNText
          type={TYPES.regular}
          size={FONTS.primary}
          color={COLORS.error}
          mTop={4}>
          {errorMessage}
        </RNText>
      )}
    </RNView>
  );
};

export default RNDropDown;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: COLORS.bgPage,
    borderRadius: 4,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
