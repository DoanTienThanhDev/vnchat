import {Header, RNButton, RNText, RNView} from 'components';
import {push} from 'navigations';
import React, {useRef, useState, useEffect} from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
} from 'react-native';
import {COLORS, FONTS, TYPES} from 'themes';
import {translate} from 'translate';

const isAndroid = Platform.OS === 'android';

const defaultSize = 44;

const CodeVerify = ({componentId}) => {
  const [loading, setLoading] = useState(false);

  const _refCodeInput = useRef(null);

  const [code, setCode] = useState('');

  const onChangeText = value => {
    setCode(value);
    if (value.length === 6) {
      Keyboard.dismiss();
    }
  };

  const onFocusTextInput = () => {
    _refCodeInput?.current?.focus();
  };

  useEffect(() => {
    onFocusTextInput();
  }, []);

  const onSubmitCode = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      push({id: componentId, screen: 'ChangePassword'});
    }, 1000);
  };

  const renderInput = position => {
    return (
      <RNView
        alignCenter
        justifyCenter
        h={defaultSize}
        w={defaultSize}
        borderWidth={1}
        margin={6.5}
        borderRadius={4}
        borderColor={position === code.length ? COLORS.primary : '#DCDFE5'}>
        <RNText color={COLORS.primary} type={TYPES.bold} size={FONTS.S18}>
          {code[position] || '-'}
        </RNText>
      </RNView>
    );
  };

  return (
    <RNView fill>
      <Header componentId={componentId} />
      <RNText type={TYPES.bold} size={FONTS.S32} mHoz={28} mTop={16} lines={1}>
        {translate('AUTH.titleVerifyCode')}
      </RNText>
      <RNText
        type={TYPES.regular}
        size={FONTS.primary}
        mHoz={28}
        mTop={12}
        color={COLORS.primaryText}>
        {translate('AUTH.msgVerify')}
      </RNText>
      <RNView w={'100%'} h={defaultSize} alignCenter justifyCenter mTop={80}>
        <TextInput
          maxLength={6}
          defaultValue={code}
          ref={_refCodeInput}
          autoCorrect={false}
          spellCheck={false}
          keyboardType={isAndroid ? 'numeric' : 'number-pad'}
          onChangeText={onChangeText}
          textContentType="oneTimeCode"
          style={styles.opacity0}
        />
        <RNView style={StyleSheet.absoluteFill}>
          <TouchableWithoutFeedback
            style={[styles.btnWithoutFeedback]}
            onPress={onFocusTextInput}>
            <RNView fill alignCenter justifyCenter row h={defaultSize}>
              {renderInput(0)}
              {renderInput(1)}
              {renderInput(2)}
              {renderInput(3)}
              {renderInput(4)}
              {renderInput(5)}
            </RNView>
          </TouchableWithoutFeedback>
        </RNView>
      </RNView>

      <RNText
        mHoz={28}
        mTop={12}
        lines={2}
        size={FONTS.primary}
        color={COLORS.primaryText}
        type={TYPES.regular}>
        {`${translate('AUTH.notHasCode')} `}
        <RNText
          mLeft={10}
          size={FONTS.primary}
          type={TYPES.medium}
          color={COLORS.blue}
          underLine
          onPress={() => {}}>
          {translate('AUTH.sentAgain')}
        </RNText>
      </RNText>

      <RNView pHoz={28} pTop={40}>
        <RNButton
          title={translate('COMMON.submit')}
          disabled={code?.length < 6}
          onPress={onSubmitCode}
          loading={loading}
        />
      </RNView>
    </RNView>
  );
};

export default CodeVerify;

const styles = StyleSheet.create({
  opacity0: {opacity: 0},
  btnWithoutFeedback: {
    height: defaultSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
