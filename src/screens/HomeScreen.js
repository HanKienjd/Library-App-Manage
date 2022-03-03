import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions, FlatList, Image,
  StyleSheet,
  Text, TouchableOpacity, View
} from 'react-native';
import { Card } from 'react-native-elements';
import { getDataBooks } from 'src/api/apiBook';
import { fetchCategory } from 'src/service/apiService';
import ImageResize from 'src/utils';
const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function HomeScreen() {
  const navigation = useNavigation();

  const [category, setCategory] = useState([]);
  const [books, setBooks] = useState([]);
  const fetchListData = async () => {
    const result = await fetchCategory();
    setCategory(result || []);
    await getDataBooks(data => {
      setBooks(data || []);
    });
  };

  const LabelBanner = ({title}) => {
    return (
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{title}</Text>
      </View>
    );
  };
  const PopularBook = ({item}) => {
    if (item.id < 4) {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('BookDetail', {id: item.id})}>
          <Card key={item.id} containerStyle={styles.booksContainer}>
            <Card.Image
              source={{uri: item.image}}
              style={styles.imageBook}
            />
            <Text style={styles.popularBookTitle}>{item.name || ''}</Text>
          </Card>
        </TouchableOpacity>
      );
    }
  };

  const CategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Books', {id: item.id})}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryItemContainer}>
            <Text style={styles.content}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    fetchListData();
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../static/image/slide.jpeg')}
          style={styles.image}
        />
      </View>
      <View style={styles.mainContainer}>
        <LabelBanner title="New Book" />
        <View style={{marginBottom: 10}}>
          <FlatList
            data={books}
            renderItem={PopularBook}
            horizontal={true}
            keyExtractor={item => item.id}
          />
        </View>
        <LabelBanner title="Categories" />
        <FlatList
          data={category}
          renderItem={CategoryItem}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 4,
  },
  image: {
    position: 'absolute',
    height: heightWindow * 0.3,
    width: widthWindow,
    alignItems: 'center',
  },
  searchContainer: {
    marginTop: 20,
  },
  labelContainer: {
    height: 39,
    backgroundColor: '#828FBB',
    width: widthWindow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
    color: '#fff',
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItemContainer: {
    margin: 5,
    width: widthWindow / 3.3,
    height: heightWindow / 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAA059',
    borderRadius: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 19,
    color: '#fff',
  },
  popularBookContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  booksContainer: {
    width: 165,
    height: 230,
    margin: 5,
  },
  imageBook: {
    borderRadius: 15,
    width: 140,
    height: 150,
  },
  popularBookTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;
