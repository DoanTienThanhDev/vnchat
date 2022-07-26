import React from 'react';
import RNIcon from 'react-native-vector-icons/Ionicons';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {
  RNContainer,
  RNView,
  Header,
  RNTouchable,
  RNInput,
  RNButton,
  RNDropDown,
} from 'components';

import {translate} from 'translate';
import {COLORS} from 'themes';

const GENDERS = ['AUTH.male', 'AUTH.female', 'AUTH.other'];

const Register = ({componentId}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      avatar: '',
      password: '',
      fullName: '',
      gender: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(translate('AUTH.invalidEmail'))
        .required(translate('AUTH.requiredEmail')),
      password: Yup.string().required(translate('AUTH.requiredPassword')),
      fullName: Yup.string().required(translate('AUTH.requiredFullName')),
      gender: Yup.string().required(translate('AUTH.requiredGender')),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        translate('AUTH.passwordNotMatch'),
      ),
    }),
    onSubmit: values => {},
  });

  const onChangeText = (value, field) => {
    formik.setFieldValue(field, value);
  };

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
          value={formik.values?.fullName}
          onChangeText={text => onChangeText(text, 'fullName')}
          touched={formik.touched.fullName}
          errorMessage={formik.errors.fullName}
        />
        <RNInput
          label={translate('AUTH.email')}
          placeholder={translate('AUTH.placeholderEmail')}
          value={formik.values?.email}
          onChangeText={text => onChangeText(text, 'email')}
          touched={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <RNDropDown
          placeholder={translate('AUTH.placeholderGender')}
          items={GENDERS}
          value={formik.values?.gender}
          onPress={text => onChangeText(text, 'gender')}
          touched={formik.touched.gender}
          errorMessage={formik.errors.gender}
          label={translate('AUTH.gender')}
        />
        <RNInput
          label={translate('AUTH.password')}
          placeholder={translate('AUTH.placeholderPassword')}
          value={formik.values?.password}
          onChangeText={text => onChangeText(text, 'password')}
          isPassword
          touched={formik.touched.password}
          errorMessage={formik.errors.password}
        />
        <RNInput
          label={translate('AUTH.password')}
          placeholder={translate('AUTH.confirmPassword')}
          value={formik.values?.confirmPassword}
          onChangeText={text => onChangeText(text, 'confirmPassword')}
          isPassword
          touched={formik.touched.confirmPassword}
          errorMessage={formik.errors.confirmPassword}
        />
        <RNButton
          title={translate('AUTH.register')}
          onPress={formik.handleSubmit}
        />
      </RNView>
    </RNContainer>
  );
};

export default Register;
