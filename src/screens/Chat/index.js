import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, RNView} from 'components';

const ChatBox = () => {
  return (
    <RNView fill>
      <Header title={'Tin Nhắn'} />
    </RNView>
  );
};

export default ChatBox;

const styles = StyleSheet.create({});
