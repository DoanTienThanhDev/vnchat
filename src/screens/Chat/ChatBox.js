import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Composer, Send} from 'react-native-gifted-chat';
import {StyleSheet} from 'react-native';
import RNIcon from 'react-native-vector-icons/Ionicons';
import {RNView, Header, RNTouchable, RNContainer} from 'components';
import {COLORS} from 'themes';

const ChatBox = ({componentId}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Xin chào bạn minh là Thành Đoàn',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderComposer = props => {
    return (
      <RNView row center fill borderRadius={1} borderColor={COLORS.primary}>
        <RNTouchable
          mHoz={12}
          center
          w={30}
          h={30}
          borderWidth={1}
          borderColor={COLORS.primary}
          borderRadius={4}>
          <RNIcon name="camera-outline" size={20} color={COLORS.primary} />
        </RNTouchable>
        <Composer {...props} style={styles.chatInput} />
      </RNView>
    );
  };
  const renderIconSend = props => {
    return (
      <Send {...props} containerStyle={styles.sendContainer}>
        <RNIcon
          name="send-outline"
          size={24}
          color={COLORS.primary}
          style={styles.icSend}
        />
      </Send>
    );
  };

  return (
    <RNView fill>
      <Header title={'Thanh Doan'} componentId={componentId} />
      <RNContainer>
        <GiftedChat
          messages={messages && messages}
          onSend={text => onSend(text)}
          renderComposer={renderComposer}
          user={{
            _id: 1,
          }}
          alwaysShowSend
          renderSend={renderIconSend}
          optionTintColor={COLORS.primary}
          messagesContainerStyle={styles.message}
        />
      </RNContainer>
    </RNView>
  );
};

const styles = StyleSheet.create({
  chatInput: {
    flex: 1,
    borderRadius: 1,
    borderColor: COLORS.primary,
  },
  icSend: {
    marginLeft: 30,
  },
  sendContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },
});

export default ChatBox;
