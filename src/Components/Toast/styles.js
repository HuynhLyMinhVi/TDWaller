import {StyleSheet} from 'react-native';
import {trendyColor, height, width} from '../../assets/styles/common.js';

export default StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#7593ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: height(2),
    paddingHorizontal: 12,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
