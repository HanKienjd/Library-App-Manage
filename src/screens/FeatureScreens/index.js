import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const ListFeature = [
    {
        key: 1,
        name: 'Danh mục',
        icon: 'bookshelf',
        type: 'material-community',
        screen: 'Categories',
    },
    {
        key: 2,
        name: 'Đầu sách',
        icon: 'book-open',
        type: 'feather',
        screen: 'Books',
    },
    {
        key: 3,
        name: 'Tìm sách',
        icon: 'search',
        type: 'feather',
        screen: 'Search',
    },
    {
        key: 4,
        name: 'Phiếu mượn',
        icon: 'card-text',
        type: 'material-community',
        screen: 'Checkout',
    },
];

const FeatureScreens = ({ navigation }) => {
    const _renderItems = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                <Card containerStyle={styles.cardContainer}>
                    <Icon type={item.type} name={item.icon} size={60} color="#fff" />
                    <Text style={styles.textCard}>{item.name}</Text>
                </Card>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList data={ListFeature} renderItem={_renderItems} numColumns={2} keyExtractor={(item) => item.key} />
        </View>
    );
};

export default FeatureScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        backgroundColor: '#828FBB',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 150,
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    textCard: {
        fontSize: 18,
        lineHeight: 21,
        color: '#fff',
    },
});
