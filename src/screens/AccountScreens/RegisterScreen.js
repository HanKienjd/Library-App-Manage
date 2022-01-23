import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import {fetchLogin} from 'src/service/apiService';
import {LOGIN_SCREEN} from 'src/constants/screens';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterScreen = ({navigation}) => {
  const [fullName, onChangeFullName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const onHandleLogin = async () => {
    const data = {email: email, password: password};
    const result = await fetchLogin(data);
    if (result) {
      navigation.navigate('Home');
      await AsyncStorage.setItem('token', result.accessToken);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require('../../static/image/Login.jpg')}
          style={styles.background}>
          <View style={styles.mainContainer}>
            <View>
              <View>
                <Text style={styles.label_title}>Register</Text>
              </View>
              <View style={styles.formContainer}>
                <Text style={styles.label_input}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeFullName}
                  keyboardAppearance="light"
                />
                <Text style={styles.label_input}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeEmail}
                  keyboardAppearance="light"
                />
                <Text style={styles.label_input}>Password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangePassword}
                  keyboardAppearance="light"
                />
              </View>
            </View>
            <View style={styles.social_container}>
              <View style={styles.social_container}>
                <View style={styles.icon_social}>
                  <Image source={require('../../static/image/google.png')} />
                </View>
                <Image
                  source={require('../../static/image/facebook.png')}
                  style={styles.icon_social}
                />
                <Image
                  source={require('../../static/image/apple-black-logo.png')}
                  style={styles.icon_social}
                />
              </View>
            </View>
            <View style={styles.footer_register}>
              <Text
                style={styles.info_text}
                onPress={() => navigation.navigate(LOGIN_SCREEN)}>
                Already Member? Login
              </Text>
              <Button
                title="Register"
                type="outline"
                buttonStyle={styles.button_login}
                titleStyle={styles.button_title}
                containerStyle={styles.button_login_container}
                onPress={onHandleLogin}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    marginTop: windowHeight * 0.2,
  },
  label_title: {
    fontSize: 36,
    lineHeight: 49,
    color: '#2F80ED',
    fontWeight: 'bold',
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
    justifyContent: 'flex-start',
    margin: 10,
  },
  footer_register: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
});
