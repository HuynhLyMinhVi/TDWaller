import {View, Text} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import styles from './styles';

const ToastGlobal = () => {
  return <Toast config={toastConfig} />;
};

const toastConfig = {
  custom: ({text1, props}) => (
    <View style={styles.container}>
      <Text style={styles.text}>{text1}</Text>
    </View>
  ),
};
export default ToastGlobal;
