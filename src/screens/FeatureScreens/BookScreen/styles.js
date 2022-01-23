import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  uploadContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 5,
    height: 100,
    borderStyle: 'dotted',
  },
  inputContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
    borderRadius: 10,
  },
  imageContainer: {
    width: '50%',
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  iconContainerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
