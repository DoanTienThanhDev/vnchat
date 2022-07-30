import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import RNIcon from 'react-native-vector-icons/Ionicons';

import {RNButton, RNImage, RNText, RNTouchable, RNView} from 'components';

import {COLORS, FONTS, IMAGES, SCREEN_SIZE, TYPES} from 'themes';

export default function Menu() {
  return (
    <RNView fill color={COLORS.bgMenu}>
      <RNView fill>
        <RNView h={100} justifyContent={'flex-end'}>
          <RNTouchable row alignCenter pVer={4} pHoz={12}>
            <RNView
              h={50}
              w={50}
              borderWidth={1}
              borderColor={COLORS.primary}
              borderRadius={25}>
              <RNImage source={IMAGES.icApple} />
            </RNView>
            <RNText
              fill
              color={COLORS.bgPage}
              mLeft={10}
              size={FONTS.S20}
              type={TYPES.bold}>
              {'Thanh Doan'}
            </RNText>
          </RNTouchable>
        </RNView>
        <RNView h={2} color={COLORS.bgPage} mTop={6} mBottom={16} />
        <ScrollView>
          <RNTouchable
            row
            alignCenter
            fill
            pVer={16}
            pHoz={12}
            borderBottomWidth={0.5}
            borderColor={COLORS.bgPage}>
            <RNIcon name="settings-outline" size={24} color={COLORS.bgPage} />
            <RNText
              fill
              color={COLORS.bgPage}
              mLeft={10}
              size={FONTS.S16}
              type={TYPES.medium}>
              {'Cài đặt'}
            </RNText>
            <RNIcon
              name="chevron-forward-outline"
              size={24}
              color={COLORS.bgPage}
            />
          </RNTouchable>
          <RNTouchable
            row
            alignCenter
            fill
            pVer={16}
            pHoz={12}
            borderBottomWidth={0.5}
            borderColor={COLORS.bgPage}>
            <RNIcon
              name="information-circle-outline"
              size={24}
              color={COLORS.bgPage}
            />
            <RNText
              fill
              color={COLORS.bgPage}
              mLeft={10}
              size={FONTS.S16}
              type={TYPES.medium}>
              {'Quy Định & Chính Sách'}
            </RNText>
            <RNIcon
              name="chevron-forward-outline"
              size={24}
              color={COLORS.bgPage}
            />
          </RNTouchable>
          <RNTouchable
            row
            alignCenter
            fill
            pVer={16}
            pHoz={12}
            borderBottomWidth={0.5}
            borderColor={COLORS.bgPage}>
            <RNIcon name="globe-outline" size={24} color={COLORS.bgPage} />
            <RNText
              fill
              color={COLORS.bgPage}
              mLeft={10}
              size={FONTS.S16}
              type={TYPES.medium}>
              {'Ngôn Ngữ'}
            </RNText>
            <RNIcon
              name="chevron-forward-outline"
              size={24}
              color={COLORS.bgPage}
            />
          </RNTouchable>
        </ScrollView>
      </RNView>
      <RNButton height={60} title={'Đăng Xuất'} borderRadius={0.1} mVer={0.1} />
    </RNView>
  );
}
