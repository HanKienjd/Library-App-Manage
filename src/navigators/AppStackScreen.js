import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import DocumentScreen from 'src/screens/DocumentSceens';
import HomeScreen from 'src/screens/HomeScreen';
import FeatureScreens from 'src/screens/FeatureScreens';
import BookScreen from 'src/screens/FeatureScreens/BookScreen';
import CheckoutScreen from 'src/screens/FeatureScreens/CheckoutScreen';
import NotificationScreen from 'src/screens/NotificationScreens';
import ProfileScreen from 'src/screens/AccountScreens/ProfileScreen';
import CategoryScreens from 'src/screens/FeatureScreens/CategoryScreen';
import SearchScreen from 'src/screens/SearchScreen';
import CheckoutDetailScreen from 'src/screens/FeatureScreens/CheckoutScreen/CheckoutDetailScreen';
import CategoryCreateScreen from 'src/screens/FeatureScreens/CategoryScreen/create';
import CategoryEditScreen from 'src/screens/FeatureScreens/CategoryScreen/edit';
import BookCreateScreen from 'src/screens/FeatureScreens/BookScreen/create';
import BookDetailScreen from 'src/screens/FeatureScreens/BookScreen/detail';
import React from 'react';
import {Icon} from 'react-native-elements';
const AppStack = createStackNavigator();
const FeatureStack = createStackNavigator();
const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const FeatureStackScreens = () => {
  return (
    <FeatureStack.Navigator
      initialRouteName="Features"
      screenOptions={{
        headerShown: false,
      }}>
      <FeatureStack.Screen name="Features" component={FeatureScreens} />
      <FeatureStack.Screen name="Categories" component={CategoryScreens} />
      <FeatureStack.Screen
        name="CategoryCreate"
        component={CategoryCreateScreen}
      />
      <FeatureStack.Screen name="Search" component={SearchScreen} />
      <FeatureStack.Screen name="Books" component={BookScreen} />
      <FeatureStack.Screen name="Checkout" component={CheckoutScreen} />
      <FeatureStack.Screen
        name="CheckoutDetail"
        component={CheckoutDetailScreen}
      />
      <FeatureStack.Screen name="CategoryEdit" component={CategoryEditScreen} />
      <FeatureStack.Screen name="BookCreate" component={BookCreateScreen} />
      <FeatureStack.Screen name="BookDetail" component={BookDetailScreen} />
    </FeatureStack.Navigator>
  );
};

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Books" component={BookScreen} />
      <HomeStack.Screen name="BookDetail" component={BookDetailScreen} />
    </HomeStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Trang chủ':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Chức năng':
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            case 'Tài liệu':
              iconName = focused ? 'document' : 'document-outline';
              break;
            case 'Thông báo':
              iconName = focused ? 'notifications' : 'notifications-outline';
              break;
            case 'Tài khoản':
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              break;
            default:
              break;
          }
          return (
            <Icon name={iconName} size={size} color={color} type="ionicon" />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Trang chủ" component={HomeStackScreens} />
      <Tab.Screen name="Chức năng" component={FeatureStackScreens} />
      <Tab.Screen name="Tài liệu" component={DocumentScreen} />
      <Tab.Screen name="Thông báo" component={NotificationScreen} />
      <Tab.Screen name="Tài khoản" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AppStackScreen = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="BottomTabApp" component={BottomTabNavigator} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
