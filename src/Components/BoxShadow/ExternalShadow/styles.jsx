import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topShadow: {
    borderRadius: 2,
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowRadius: 15,
    shadowColor: 'black',
    elevation: 20,
  },
  bottomShadow: {
    borderRadius: 10,
    padding: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowColor: 'rgba(83, 92, 136, 0.6)',
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: '#e6e7ee',
  },
});

export default styles;
