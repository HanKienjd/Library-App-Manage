import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { palette } from 'src/theme/color';
import { styles } from './style';
import ImageResize from 'src/utils';

const ProfileScreen = ({ navigation }) => {
    const onLogout = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{
                            uri: ImageResize('10.jpg'),
                        }}
                        style={styles.avatar}
                    />
                    <Text style={styles.nameUser}>Hung</Text>
                </View>
            </View>
            <View style={styles.profileUser}>
                <View style={styles.profileUserItem}>
                    <Icon name="user" type="evilicon" size={30} />
                    <Text style={styles.textUser}>Sử dụng tài khoản KMA</Text>
                </View>
                <View style={styles.profileUserItem}>
                    <Icon name="calendar" type="evilicon" size={30} />
                    <Text style={styles.textUser}>Sinh ngày 34/12/2000</Text>
                </View>
                <View style={styles.profileUserItem}>
                    <Icon name="phone" type="feather" size={30} />
                    <Text style={styles.textUser}>39293923239</Text>
                </View>
                <View style={styles.profileUserItem}>
                    <Icon name="email-outline" type="material-community" size={30} />
                    <Text style={styles.textUser}>kienp544@gmail.com</Text>
                </View>
                <View style={styles.profileUserItem}>
                    <Icon name="rename-box" type="material-community" size={30} />
                    <Text style={styles.textUser}>Hung Giang</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="Chỉnh sửa thông tin"
                    buttonStyle={{
                        backgroundColor: 'rgba(78, 116, 289, 1)',
                        borderRadius: 20,
                    }}
                    containerStyle={styles.buttonContainer}
                />
                <Button
                    title="Đăng xuất"
                    onPress={onLogout}
                    buttonStyle={{
                        backgroundColor: palette.ALIZARIN,
                        borderRadius: 20,
                    }}
                    containerStyle={styles.buttonContainer}
                />
            </View>
        </View>
    );
};

export default ProfileScreen;
