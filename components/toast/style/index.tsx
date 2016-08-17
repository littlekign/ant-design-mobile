import variables from '../../style/variables';
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: variables.grid * (Platform.OS === 'ios' ? 16 : 13.5),
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  innnerWrap: {
    borderRadius: variables.radius_2,
    alignItems: 'center',
    backgroundColor: 'rgba(34, 34, 34, 0.6)',
    padding: variables.grid * 4,
    minWidth: 100,
  },
  content: {
    color: variables.neutral_1,
    fontSize: variables.font_size_4,
  },
  image: {
    width: variables.grid * 8,
    height: variables.grid * 8,
    marginBottom: variables.grid,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
