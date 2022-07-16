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
  const [email, setEmail] = useState('');

  const onSubmitEmail = () => {
    push({id: componentId, screen: 'Code'});
  };

  return (
    <RNContainer>
      <Header mTop={10} mHoz={1} componentId={componentId} />
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
        <RNButton title={translate('COMMON.submit')} disabled={!email} />
      </RNView>
    </RNContainer>
  );
};

export default ForgotPassword;
