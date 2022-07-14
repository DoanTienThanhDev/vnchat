import React, {useState} from 'react';
import RNIcon from 'react-native-vector-icons/Ionicons';

import {
  RNContainer,
  RNView,
  RNText,
  RNButton,
  RNInput,
  RNImage,
  RNTouchable,
} from 'components';

import {COLORS, IMAGES} from 'themes';
import {Alert} from 'react-native';

const Login = () => {
  const [user, setUser] = useState({email: '', password: ''});

  const onChangeText = (field, value) => {
    if (field === 'email') {
      setUser({...user, email: value});
    } else {
      setUser({...user, password: value});
    }
  };
  const onForgotPassword = () => {
    Alert.alert('password');
  };

  const onRegister = () => {
    Alert.alert('on re');
  };
  return (
    <RNContainer>
      <RNView fill pHoz={8}>
        <RNView fill center>
          <RNIcon name="chatbox-ellipses" size={150} color={COLORS.primary} />
        </RNView>
        <RNView fill>
          <RNInput
            label={'Email'}
            placeholder={'Please enter your email'}
            errorMessage={'Email is required field'}
            touched={true}
            value={user?.email}
            onChangeText={text => onChangeText('email', text)}
          />
          <RNInput
            isPassword
            onChangeText={text => onChangeText('password', text)}
            value={user?.password}
          />
          <RNText color={COLORS.blue} onPress={onForgotPassword} underLine>
            Quên mật khẩu ?
          </RNText>
          <RNButton title={'Login'} mTop={50} />
          <RNView row mVer={12} mHoz={32} fill alignItems={'flex-end'}>
            <RNTouchable fill center>
              <RNImage source={IMAGES.icFacebook} w={50} h={50} />
            </RNTouchable>
            <RNTouchable fill center>
              <RNImage source={IMAGES.icGoogle} w={50} h={50} />
            </RNTouchable>
          </RNView>
        </RNView>
      </RNView>
      <RNText mBottom={16} mTop={12} textAlign={'center'} onPress={onRegister}>
        Đăng ký tài khoản mới ?
      </RNText>
    </RNContainer>
  );
};

export default Login;
