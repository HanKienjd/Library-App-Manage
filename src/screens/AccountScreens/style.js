import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {palette} from '../../theme/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    marginTop: windowHeight * 0.1,
  },
  headerContainer: {
    height: windowHeight * 0.2,
    flexDirection: 'row',
    backgroundColor: palette.THEME,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: windowHeight * 0.1,
    left: windowWidth * 0.1,
    flexDirection: 'row',
  },
  nameUser: {
    fontSize: 20,
    color: palette.WHITE,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  label_title: {
    fontSize: 36,
    lineHeight: 49,
    color: '#2F80ED',
    fontWeight: 'bold',
  },
  avatar: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: windowWidth * 0.15,
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  label_input: {
    fontSize: 14,
    lineHeight: 19,
    color: '#2F80ED',
    marginLeft: 12,
  },
  title_for_social: {
    fontSize: 14,
    lineHeight: 19,
    color: '#2F80ED',
    fontWeight: 'bold',
  },
  background: {
    borderRadius: 7,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#2F80ED',
    borderRadius: 10,
  },
  icon_social: {
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.15)',
    shadowOffset: {width: 12, height: 3},
    borderRadius: 5,
    marginHorizontal: 10,
  },
  social_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  footer_login: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'relative',
    bottom: -windowHeight * 0.2 - 10,
  },
  info_text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
  },
  button_login: {
    borderColor: '#fff',
    width: 142,
    height: 50,
    borderRadius: 10,
  },
  button_login_container: {
    bottom: 30,
  },
  button_title: {
    fontSize: 24,
    lineHeight: 33,
    color: '#FFF',
  },
  profileUser: {
    marginLeft: 10,
    marginTop: 50,
    justifyContent: 'flex-start',
    width: windowWidth * 0.5,
  },
  profileUserItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textUser: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'left',
    marginLeft: 10,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
});
