import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {apiSearch} from 'src/api/apiSearch';
import SearchComponent from 'src/components/SearchComponent';

function SearchScreen() {
   const [search, setSearch] = useState('');
   const [dataSearch, setDataSearch] = useState([]);
   const updateSearch = async value => {
     setSearch(value);
   };
  const navigation = useNavigation();
  useEffect(() => {
    const fetchBooks = async () => {
      await apiSearch(search, data => {
        setDataSearch(data);
      });
    };
    fetchBooks();
  }, [search]);
  const _renderItems = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        {/* <Divider inset={true} insetType="middle" />; */}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          type="antdesign"
          color="#fff"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Search</Text>
      </View>
      <View style={styles.main}>
        <SearchComponent />
      </View>
      <View style={{flex: 1, position: 'absolute', top: 0, bottom: 0}}>
        {dataSearch && dataSearch.length > 0 && (
          <FlatList
            data={dataSearch}
            renderItem={_renderItems}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
