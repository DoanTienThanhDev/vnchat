import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {COLORS} from 'themes/colors';

const Container = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
        extraHeight={200}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.keyboard}>
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgPage,
  },
  keyboard: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});
