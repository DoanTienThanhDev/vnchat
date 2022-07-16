import React from 'react';
import RNIcon from 'react-native-vector-icons/Ionicons';

import {
  RNContainer,
  RNView,
  Header,
  RNTouchable,
  RNInput,
  RNButton,
} from 'components';

import {translate} from 'translate';
import {COLORS} from 'themes';

const Register = ({componentId}) => {
  return (
    <RNContainer>
      <Header componentId={componentId} mTop={10} mHoz={2} />
      <RNView fill pHoz={8}>
        <RNView pVer={25} center>
          <RNTouchable
            w={80}
            h={80}
            borderRadius={40}
            borderWidth={2}
            borderColor={COLORS.primary}
            center>
            <RNIcon name={'camera-outline'} size={24} color={COLORS.primary} />
          </RNTouchable>
        </RNView>
        <RNInput
          label={translate('AUTH.fullName')}
          placeholder={translate('AUTH.placeholderFullName')}
        />
        <RNInput
          label={translate('AUTH.email')}
          placeholder={translate('AUTH.placeholderEmail')}
        />
        <RNInput
          label={translate('AUTH.phoneNumber')}
          placeholder={translate('AUTH.placeholderPhoneNumber')}
        />
        <RNInput
          label={translate('AUTH.gender')}
          placeholder={translate('AUTH.placeholderGender')}
        />
        <RNInput
          label={translate('AUTH.password')}
          placeholder={translate('AUTH.placeholderPassword')}
        />
        <RNInput
          label={translate('AUTH.password')}
          placeholder={translate('AUTH.confirmPassword')}
        />
        <RNButton title={translate('AUTH.register')} />
      </RNView>
    </RNContainer>
  );
};

export default Register;
