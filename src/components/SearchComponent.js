import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  FlatList,
  Text,
} from 'react-native';
import {SearchBar, Divider} from 'react-native-elements';
const widthWindow = Dimensions.get('window').width;

const SearchComponent = () => {
  
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search by name, author"
        onChangeText={updateSearch}
        value={search}
        inputContainerStyle={styles.searchBarInput}
        containerStyle={styles.searchBarContainer}
        platform={Platform.OS}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    width: widthWindow * 0.9,
    borderWidth: 0,
    borderRadius: 20,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#f1f1f1',
  },
  searchBarInput: {
    backgroundColor: '#fff',
    height: 37,
  },
  itemContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default SearchComponent;
