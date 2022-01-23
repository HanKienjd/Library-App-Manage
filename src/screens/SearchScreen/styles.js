import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#828FBB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
    lineHeight: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  main: {
    marginTop: 10,
  },
});
export default styles;
