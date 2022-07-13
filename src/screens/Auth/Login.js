import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  RNContainer,
  RNView,
  RNText,
  RNButton,
  RNInput,
  RNImage,
} from 'components';
import {IMAGES} from 'themes';

const Login = () => {
  return (
    <RNContainer>
      <RNView fill center>
        <RNImage source={IMAGES.imgLogo} resizeMode="contain" w={100} h={100} />
        <RNText>LOGIN</RNText>
      </RNView>
      <RNView row pVer={36}>
        <RNView fill center>
          <RNImage source={IMAGES.icFacebook} w={50} h={50} />
        </RNView>
        <RNView fill center>
          <RNImage source={IMAGES.icGoogle} w={50} h={50} />
        </RNView>
      </RNView>
    </RNContainer>
  );
};

export default Login;
