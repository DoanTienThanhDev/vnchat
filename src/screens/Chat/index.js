import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Header, RNImage, RNText, RNTouchable, RNView} from 'components';

import {push} from 'navigations';
import {COLORS, FONTS, IMAGES, TYPES} from 'themes';

const Chat = ({componentId}) => {
  const onChat = () => {
    push({screen: 'ChatBox', id: componentId});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Tin Nhắn'} mTop={1} />
      <RNView fill pHoz={28}>
        <RNTouchable
          row
          pHoz={8}
          pVer={12}
          onPress={onChat}
          style={styles.containerChat}>
          <RNView
            borderRadius={25}
            h={50}
            w={50}
            borderWidth={1}
            borderColor={COLORS.primary}>
            <RNImage source={IMAGES.icApple} />
          </RNView>
          <RNView mLeft={12} fill>
            <RNText
              color={COLORS.black}
              type={TYPES.bold}
              size={FONTS.primary}
              lines={1}
              fill
              mTop={4}>
              {'Thanh Doan'}
            </RNText>
            <RNText
              type={TYPES.regular}
              size={FONTS.primary}
              color={COLORS.primaryText}
              lines={1}
              fill>
              {'Xin chào bạn Xin chào bạn Xin chào bạn Xin chào bạn'}
            </RNText>
          </RNView>
        </RNTouchable>
      </RNView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerChat: {
    shadowColor: '#000',
    backgroundColor: COLORS.bgPage,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 6,
    marginTop: 20,
  },
});
