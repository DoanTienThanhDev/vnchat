import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {
  Header,
  RNButton,
  RNContainer,
  RNInput,
  RNText,
  RNView,
} from 'components';

import {FONTS, TYPES} from 'themes';
import {translate} from 'translate';
import {onMainContent} from 'navigations';

const ChangePassword = ({componentId}) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required(translate('AUTH.requiredPassword')),
      confirmPassword: Yup.string().required(
        translate('AUTH.requiredPassword'),
      ),
    }),
    onSubmit: values => {
      onChangePassword(values);
    },
  });

  const onChangeText = (field, value) => {
    formik.setFieldValue(field, value);
  };

  const onChangePassword = ({password, confirmPassword}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onMainContent();
    }, 800);
  };

  return (
    <RNView fill>
      <Header componentId={componentId} />
      <RNContainer>
        <RNText type={TYPES.bold} size={FONTS.S32} mHoz={8} mTop={16} lines={1}>
          {translate('AUTH.changePassword')}
        </RNText>
        <RNView fill mTop={32} pHoz={8}>
          <RNInput
            label={translate('AUTH.password')}
            placeholder={translate('AUTH.placeholderPassword')}
            onChangeText={text => onChangeText('password', text)}
            value={formik.values.password}
          />
          <RNInput
            label={translate('AUTH.password')}
            placeholder={translate('AUTH.confirmPassword')}
            onChangeText={text => onChangeText('confirmPassword', text)}
            value={formik.values.confirmPassword}
          />
          <RNButton
            title={translate('COMMON.submit')}
            mTop={24}
            onPress={formik.handleSubmit}
            loading={loading}
          />
        </RNView>
      </RNContainer>
    </RNView>
  );
};

export default ChangePassword;
