import React, {useState} from 'react';

import {
  Header,
  RNButton,
  RNContainer,
  RNInput,
  RNText,
  RNView,
} from 'components';

import {translate} from 'translate';
import {COLORS, FONTS, TYPES} from 'themes';
import {push} from 'navigations';

const ForgotPassword = ({componentId}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmitEmail = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      push({id: componentId, screen: 'CodePassword'});
    }, 500);
  };

  return (
    <RNView fill>
      <Header componentId={componentId} />
      <RNContainer>
        <RNText type={TYPES.bold} size={FONTS.S32} mHoz={8} mTop={16} lines={1}>
          {translate('AUTH.email')}
        </RNText>
        <RNView fill pHoz={8}>
          <RNText
            mTop={16}
            color={COLORS.primaryText}
            type={TYPES.regular}
            lineHeight={20}
            size={FONTS.primary}
            mBottom={32}>
            {translate('AUTH.messageGetEmail')}
          </RNText>
          <RNInput
            label={translate('AUTH.email')}
            placeholder={translate('AUTH.placeholderEmail')}
            onChangeText={setEmail}
            value={email}
            mBottom={50}
          />
          <RNButton
            title={translate('COMMON.submit')}
            disabled={!email}
            onPress={onSubmitEmail}
            loading={loading}
          />
        </RNView>
      </RNContainer>
    </RNView>
  );
};

export default ForgotPassword;
