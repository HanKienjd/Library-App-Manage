import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card} from 'react-native-elements';
import {getDataBooks, getDataBooksId} from 'src/api/apiBook';
import TopHeader from 'src/components/layouts/TopHeader';
import ImageResize from 'src/utils';
import {Icon} from 'react-native-elements';
import ActionButton from 'react-native-action-button';

const BookScreen = ({route, navigation}) => {
  const id = route.params?.id || '';
  const [books, setBooks] = useState([]);
  const [tabName, setTabName] = useState('Book');
  const fetchDataListBooks = async () => {
    await getDataBooks(data => {
      setBooks(data);
    });
  };
  const fetchDataListBooksById = async id => {
    await getDataBooksId(id, data => {
      setBooks(data);
    });
  };
  useEffect(() => {
    if (id > 0 && id !== '') {
      fetchDataListBooksById(id);
    } else {
      fetchDataListBooks();
    }
  }, [id, navigation]);

  const _renderItems = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('BookDetail', {id: item.id})}>
        <Card key={item.id} containerStyle={styles.booksContainer}>
          <Card.Image
            source={{uri: item.image}}
            style={styles.imageBook}
          />
          <Text style={styles.popularBookTitle}>{item.name || ''}</Text>
        </Card>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <TopHeader onChangeTab={value => setTabName(value)} name="Tủ Sách" />
      <FlatList data={books} renderItem={_renderItems} numColumns={2} />
      <ActionButton buttonColor="#9b59b6">
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="Create"
          onPress={() => navigation.navigate('BookCreate')}>
          <Icon
            name="plus"
            style={styles.actionButtonIcon}
            type="evilicon"
            color="#fff"
          />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 10,
  },
  booksContainer: {
    width: '47%',
    height: 230,
    margin: 5,
    backgroundColor: '#FBB37A',
    borderRadius: 15,
  },
  imageBook: {
    borderRadius: 15,
    width: 140,
    height: 150,
  },
  popularBookTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
});
