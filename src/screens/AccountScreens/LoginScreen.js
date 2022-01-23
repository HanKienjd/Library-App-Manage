import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchLogin} from 'src/service/apiService';
import {styles} from './style.js';

const LoginScreen = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('token').then(value => {
      if (value) {
        navigation.navigate('App');
      }
    });
  }, [navigation]);

  const onHandleLogin = async () => {
    const data = {email: email, password: password};
    const result = await fetchLogin(data);
    if (result) {
      await AsyncStorage.setItem('token', result.accessToken);
      await navigation.navigate('App');
    } else {
      Alert.alert('Login failed', 'Please check your email and password');
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
                <Text style={styles.label_title}>Login</Text>
              </View>
              <View style={styles.formContainer}>
                <Text style={styles.label_input}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeEmail}
                  keyboardAppearance="light"
                  defaultValue={email}
                />
                <Text style={styles.label_input}>Password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangePassword}
                  keyboardAppearance="light"
                  secureTextEntry={true}
                  defaultValue={password}
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
              <Text style={styles.title_for_social}>Forgot password</Text>
            </View>
            <View style={styles.footer_login}>
              <Button
                title="Login"
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

export default LoginScreen;
