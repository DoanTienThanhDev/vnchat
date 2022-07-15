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
        <RNInput label={'Họ và tên'} placeholder={'Nhập họ và tên của bạn'} />
        <RNInput label={'Email'} placeholder={'Nhập email của bạn'} />
        <RNInput
          label={'Số điện thoại'}
          placeholder={'Nhập số điện thoại của bạn'}
        />
        <RNInput label={'Giới tính'} placeholder={'Chọn giới tính của bạn'} />
        <RNInput label={'Mật khẩu'} placeholder={'Nhập mật khẩu'} />
        <RNInput label={'Mật khẩu'} placeholder={'Nhập lại mật khẩu'} />
        <RNButton title={translate('AUTH.login')} />
      </RNView>
    </RNContainer>
  );
};

export default Register;
