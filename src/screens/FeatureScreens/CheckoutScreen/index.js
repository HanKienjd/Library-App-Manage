import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Card, Divider, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TopHeader from 'src/components/layouts/TopHeader';
import {useNavigation} from '@react-navigation/native';
import ImageResize from 'src/utils';
const data = [
  {
    id: 1,
    name: 'Tình yêu và thù hận',
    image: 'anh1.png',
    user_name: 'Lê Học Hoàng Anh',
    date_start: '19/12/2021',
    date_end: '29/12/2021',
    status: 0,
  },
  {
    id: 2,
    name: 'Tình yêu và thù hận',
    image: 'anh1.png',
    user_name: 'Lê Học Hoàng Anh',
    date_start: '19/12/2021',
    date_end: '29/12/2021',
    status: 1,
  },
  {
    id: 3,
    name: 'Tình yêu và thù hận',
    image: 'anh1.png',
    user_name: 'Lê Học Hoàng Anh',
    date_start: '19/12/2021',
    date_end: '29/12/2021',
    status: 0,
  },
  {
    id: 4,
    name: 'Tình yêu và thù hận',
    image: 'anh1.png',
    user_name: 'Lê Học Hoàng Anh',
    date_start: '19/12/2021',
    date_end: '29/12/2021',
    status: 1,
  },
];
const CheckoutScreen = () => {
  const navigation = useNavigation();
  const _renderItems = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('CheckoutDetail')}>
        <View style={styles.itemContainer}>
          <Card.Image
            source={{uri: ImageResize(item.image)}}
            containerStyle={styles.image}
          />
          <View>
            <Text style={styles.checkoutName}>{item.name}</Text>
            <Text style={styles.nameUser}>{item.user_name}</Text>
            <View style={styles.checkoutDate}>
              <Text style={styles.date}>{item.date_start}</Text>
              <Text style={styles.date}>{item.date_end}</Text>
            </View>
            <Text
              style={[
                styles.statusCheckout,
                item.status === 0 ? {color: '#FF3D00'} : {color: '#2F80ED'},
              ]}>
              {item.status === 0 ? 'Quá hạn' : 'Chưa chả'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TopHeader name="Phiếu mượn" />
      <View style={styles.filterHeader}>
        <Icon name="filter" type="feather" color="#000" size={20} />
      </View>
      <Divider />
      <View style={styles.listCheckout}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={_renderItems}
        />
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  checkoutName: {
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '500',
    color: '#000',
  },
  nameUser: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '300',
  },
  checkoutDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '300',
  },
  statusCheckout: {
    fontSize: 16,
    textAlign: 'right',
    marginTop: 10,
  },
});
