import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, Alert} from 'react-native';
import ActionButton from 'react-native-action-button';
import {Card, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TopHeader from 'src/components/layouts/TopHeader';
import {fetchCategory} from 'src/service/apiService';
import ImageResize from 'src/utils';
const CategoryScreen = ({onSelectItem, onReset}) => {
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);
  const [idSelect, setIdSelect] = useState(null);
  const {isSelectItem, key} = onSelectItem;

  const fetchDataListCategories = async () => {
    const response = await fetchCategory();
    setCategory(response);
  };
  useEffect(() => {
    fetchDataListCategories();
  }, []);

  const resetState = () => {
    setIdSelect(null);
    onReset(false);
  };

  const actionSelectItem = item => {
    if (isSelectItem && idSelect > 0) {
      if (key === 'edit') {
        navigation.navigate('CategoryEdit', {id: idSelect});
      } else if (key === 'delete') {
        Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xóa không?', [
          {
            text: 'Cancel',
            onPress: () => resetState(),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => setIdSelect(null)},
        ]);
      }
    } else if (isSelectItem) {
      setIdSelect(item.id);
    } else {
      navigation.navigate('Books', {id: item.id});
    }
  };
  const _renderItems = ({item}) => {
    return (
      <Card
        key={item.id}
        containerStyle={
          isSelectItem && item.id === idSelect
            ? [styles.booksContainer, styles.booksSelectContainer]
            : [styles.booksContainer]
        }>
        <TouchableOpacity onPress={() => actionSelectItem(item)}>
          <Card.Image
            source={{uri: ImageResize(item.image)}}
            style={styles.imageBook}
          />
          <Text style={styles.popularBookTitle}>{item.name || ''}</Text>
        </TouchableOpacity>
      </Card>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={category}
        renderItem={_renderItems}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const CategoryScreens = ({navigation}) => {
  const [isSelectItem, setIsSelectItem] = useState(false);
  const [tabName, setTabName] = useState('Category');
  const [keyAction, setKeyAction] = useState(null);

  const resetState = () => {
    setIsSelectItem(false);
  };

  const onAction = ({key}) => {
    setIsSelectItem(currentItem => !currentItem);
    setKeyAction(key);
  };
  return (
    <View style={{flex: 1}}>
      <TopHeader onChangeTab={value => setTabName(value)} name="Danh mục" />
      <View style={{flex: 1}}>
        {
          {
            Category: (
              <CategoryScreen
                onSelectItem={{isSelectItem: isSelectItem, key: keyAction}}
                onReset={() => resetState()}
              />
            ),
          }[tabName]
        }
      </View>
      <ActionButton buttonColor="#9b59b6">
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="Create"
          onPress={() => navigation.navigate('CategoryCreate')}>
          <Icon
            name="plus"
            style={styles.actionButtonIcon}
            type="evilicon"
            color="#fff"
          />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Edit"
          onPress={() => onAction({key: 'edit'})}>
          <Icon
            name="md-create"
            style={styles.actionButtonIcon}
            type="ionicon"
            color="#fff"
          />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="rgba(231,76,60,1)"
          title="Delete"
          onPress={() => onAction({key: 'delete'})}>
          <Icon
            name="delete"
            style={styles.actionButtonIcon}
            type="antdesign"
            color="#fff"
          />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default CategoryScreens;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    marginTop: 10,
  },
  booksContainer: {
    width: '47%',
    height: 230,
    margin: 5,
    backgroundColor: '#FBB37A',
    borderRadius: 15,
  },
  booksSelectContainer: {
    borderColor: '#fff',
    borderWidth: 10,
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
    wordWrap: 'break-word',
  },
});
