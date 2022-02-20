import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { apiSearch } from 'src/api/apiSearch';
import SearchComponent from 'src/components/SearchComponent';
import ImageResize from 'src/utils';
function SearchScreen() {
    const [search, setSearch] = useState('');
    const [dataSearch, setDataSearch] = useState([]);
    const updateSearch = async (value) => {
        setSearch(value);
    };
    const navigation = useNavigation();

    const fetchBooks = async () => {
        await apiSearch(search, (data) => {
            setDataSearch(data);
        });
    };

    useEffect(() => {
        fetchBooks();
    }, [search]);

    const EmptyComponent = ({ title }) => (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 40,
            }}
        >
            <Text style={{ fontSize: 24, color: 'lightgray' }}>Không có dữ liệu</Text>
        </View>
    );

    const _renderItems = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { id: item.id })}>
                <View style={styles.itemContainer}>
                    <View>
                        <Image
                            source={{
                                uri: ImageResize(item.image),
                            }}
                            style={styles.tinyLogo}
                        />
                    </View>
                    <View style={styles.boxInfo}>
                        <Text numberOfLines={1} style={styles.nameBook}>
                            {item.name}
                        </Text>
                        <Text numberOfLines={2} style={styles.nameAuthor}>
                            Tác giả: {item.author}
                        </Text>
                        <Text>Xuất bản: {item.year_release}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrowleft" type="antdesign" color="#fff" size={30} onPress={() => navigation.goBack()} />
                <Text style={styles.title}>Tìm kiếm</Text>
            </View>
            <View style={styles.main}>
                <SearchComponent search={search} updateSearch={updateSearch} placeholder="Tìm kiếm theo tên, tác giả" />
            </View>
            <View style={{ flex: 1, marginTop: 14 }}>
                <FlatList
                    data={dataSearch}
                    extraData={dataSearch}
                    renderItem={_renderItems}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<EmptyComponent title="Nothing here, come back later.." />}
                />
            </View>
        </View>
    );
}

export default SearchScreen;
