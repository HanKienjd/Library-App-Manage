import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TopHeader = ({name, ...props}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.iconItems}>
            <Icon
              name="arrowleft"
              type="antdesign"
              color="#fff"
              size={30}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerTitle}>{name}</Text>
          </View>
          <View style={styles.iconItems}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Icon name="search" type="feather" color="#fff" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tài khoản')}>
              <Icon name="user" type="entypo" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#828FBB',
    paddingHorizontal: 10,
  },
  headerTop: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 26,
    color: '#fff',
    marginLeft: 10,
    width: '100%',
  },
  headerBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    alignItems: 'flex-end',
  },
  navigationText: {
    fontSize: 20,
    lineHeight: 23,
    color: '#fff',
    fontWeight: 'bold',
  },
  active: {
    color: '#828FBB',
  },
  activeNavigation: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  iconItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
  },
});
