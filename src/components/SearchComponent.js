import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
const widthWindow = Dimensions.get('window').width;

const SearchComponent = ({ updateSearch, search, placeholder }) => {
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder={placeholder}
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
        borderWidth: 0,
        borderRadius: 999,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
        marginHorizontal: 4,
    },
    searchBarInput: {
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
        height: 37,
    },
    itemContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

export default SearchComponent;
