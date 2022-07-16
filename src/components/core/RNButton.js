import React from 'react';
import {ActivityIndicator} from 'react-native';

import {RNTouchable, RNText, RNView} from 'components';

import {COLORS, FONTS, TYPES} from 'themes';

const RNButton = ({
  children,
  loading,
  disabled,
  title,
  onPress,
  style,
  textColor,
  color,
  mTop,
  mVer,
}) => {
  return (
    <RNTouchable
      pVer={14}
      borderRadius={8}
      mVer={mVer || 16}
      h={48}
      w="100%"
      center
      disabled={disabled}
      color={disabled ? COLORS.black10 : color || COLORS.primary}
      style={style}
      mTop={mTop}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'small'} color={COLORS.bgPage} />
      ) : (
        <>
          {children || (
            <RNView row fill>
              <RNText
                lineHeight={20}
                color={textColor || COLORS.bgPage}
                size={FONTS.S16}
                type={TYPES.medium}>
                {title}
              </RNText>
            </RNView>
          )}
        </>
      )}
    </RNTouchable>
  );
};

export default RNButton;
