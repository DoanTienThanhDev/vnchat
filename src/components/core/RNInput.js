import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {RNView, RNText, RNTouchable} from 'components';
import RNIcon from 'react-native-vector-icons/Ionicons';

import {COLORS, FONTS, TYPES} from 'themes';

const RNInput = ({
  errorMessage,
  touched,
  multiline = false,
  placeholder,
  value = '',
  keyboardType,
  label,
  returnKeyType,
  isPassword = false,
  placeholderTextColor,
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
  onChangeText,
  onSubmitEditing,
  textAlignVertical,
}) => {
  const [focused, setFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  const onSetSecureTextEntry = () => setSecureTextEntry(!secureTextEntry);

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
        borderColor={focused ? COLORS.primary : COLORS.borderInput}
        borderWidth={1}
        borderRadius={8}
        w="100%"
        pHoz={16}
        h={54}
        column
        pVer={8}
        style={wrapperStyle}>
        <RNView row fill>
          <RNView fill justifyCenter>
            {(focused || !!value) && label && (
              <RNText
                type={TYPES.regular}
                size={FONTS.primary}
                color={COLORS.black10}
                mBottom={1}>
                {label}
              </RNText>
            )}
            <TextInput
              placeholder={placeholder}
              value={value}
              multiline={multiline}
              caretHidden={false}
              autoCorrect={false}
              allowFontScaling={false}
              blurOnSubmit={false}
              autoCapitalize="none"
              returnKeyType={returnKeyType}
              keyboardType={keyboardType}
              placeholderTextColor={placeholderTextColor || COLORS.black10}
              secureTextEntry={secureTextEntry}
              style={[styles.textInput]}
              hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
              textAlignVertical={textAlignVertical}
              spellCheck={false}
            />
          </RNView>
          {isPassword && (
            <RNTouchable
              hit={16}
              onPress={onSetSecureTextEntry}
              mLeft={6}
              center>
              <RNIcon
                name={!secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
                color={COLORS.primaryText}
                size={22}
              />
            </RNTouchable>
          )}
        </RNView>
      </RNView>
      {touched && errorMessage && (
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

export default RNInput;

const styles = StyleSheet.create({
  textInput: {
    height: '100%',
    paddingVertical: 0,
    flex: 1,
  },
});
