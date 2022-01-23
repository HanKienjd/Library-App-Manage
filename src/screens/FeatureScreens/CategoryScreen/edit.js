import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import TopHeaderCustom from 'src/components/layouts/TopHeaderCustom';
import {Button, Icon, Image, Input} from 'react-native-elements';
import ImageResize from 'src/utils';
const CategoryEditScreen = ({route}) => {
  const {id} = route.params;
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState(null);

  return (
    <View style={styles.container}>
      <TopHeaderCustom name="Sửa danh mục" />
      <Image
        source={{uri: ImageResize('10.jpg')}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        onPress={() => console.log('changeImage')}>
        <View style={styles.iconContainerCenter}>
          <Icon
            name="camera"
            type="material-community"
            color="#fff"
            size={30}
          />
        </View>
      </Image>
      <View style={styles.inputContainer}>
        <Input
          label="Tên danh mục"
          defaultValue="History and Geography"
          onChangeText={value => setName(value)}
        />
        <Button title="Sửa" containerStyle={styles.button} />
      </View>
    </View>
  );
};

export default CategoryEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '80%',
    height: 300,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  iconUpload: {
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
  },
});
