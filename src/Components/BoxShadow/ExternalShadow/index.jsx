import {View} from 'react-native';
import React from 'react';
import styles from './styles';
const ExternalShadow = ({children, style, ...props}) => {
  return (
    <View style={{...styles.topShadow}}>
      <View style={[styles.bottomShadow]}>{children}</View>
    </View>
  );
};

export default ExternalShadow;
