import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import {
  RNContainer,
  RNView,
  RNText,
  RNButton,
  RNInput,
  RNImage,
  RNTouchable,
} from 'components';

import {COLORS, FONTS, IMAGES, TYPES} from 'themes';
import {onMainContent, push} from 'navigations';
import {translate} from 'translate';
import {login} from 'features/auth/operations';

const Login = ({componentId}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(translate('AUTH.invalidEmail'))
        .required(translate('AUTH.requiredEmail')),
      password: Yup.string().required(translate('AUTH.requiredPassword')),
    }),
    onSubmit: values => {
      onLogin(values);
    },
  });

  const onChangeText = (field, value) => {
    formik.setFieldValue(field, value);
  };

  const onLogin = async ({email, password}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onMainContent();
    }, 1000);
  };

  const onForgotPassword = () => {
    push({
      id: componentId,
      screen: 'ForgotPassword',
    });
  };

  const onRegister = () => {
    push({
      id: componentId,
      screen: 'Register',
    });
  };

  return (
    <RNContainer>
      <RNView fill pHoz={8}>
        <RNView fill center pTop={50}>
          <RNImage source={IMAGES.imgLogo} w={150} h={150} />
        </RNView>
        <RNView fill>
          <RNInput
            label={translate('AUTH.email')}
            placeholder={translate('AUTH.placeholderEmail')}
            value={formik.values?.email}
            onChangeText={text => onChangeText('email', text)}
            touched={formik.touched.email}
            errorMessage={formik.errors.email}
          />
          <RNInput
            isPassword
            onChangeText={text => onChangeText('password', text)}
            value={formik.values?.password}
            label={translate('AUTH.password')}
            placeholder={translate('AUTH.placeholderPassword')}
            touched={formik.touched.password}
            errorMessage={formik.errors.password}
          />
          <RNText color={COLORS.blue} onPress={onForgotPassword} underLine>
            {translate('AUTH.forgotPassword')}
          </RNText>
          <RNButton
            title={translate('AUTH.login')}
            mTop={50}
            onPress={formik.handleSubmit}
            loading={loading}
            disabled={loading}
          />
          <RNView fill alignCenter justifyContent={'flex-end'}>
            <RNText
              type={TYPES.medium}
              size={FONTS.primary}
              color={COLORS.primaryText}>
              {translate('AUTH.loginBy')}
            </RNText>
            <RNView row mVer={12} mHoz={32} alignItems={'flex-end'}>
              <RNTouchable fill center>
                <RNImage source={IMAGES.icFacebook} w={50} h={50} />
              </RNTouchable>
              <RNTouchable fill center>
                <RNImage source={IMAGES.icGoogle} w={50} h={50} />
              </RNTouchable>
              <RNTouchable fill center>
                <RNImage source={IMAGES.icApple} w={50} h={50} />
              </RNTouchable>
            </RNView>
          </RNView>
        </RNView>
      </RNView>
      <RNText mBottom={16} mTop={12} textAlign={'center'}>
        {`${translate('AUTH.registerNewAccount')}  `}
        <RNText onPress={onRegister} color={COLORS.primary}>
          {translate('AUTH.register')}
        </RNText>
      </RNText>
    </RNContainer>
  );
};

export default Login;
