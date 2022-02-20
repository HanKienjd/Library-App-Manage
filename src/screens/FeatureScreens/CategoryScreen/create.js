import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Icon, Image, Input } from 'react-native-elements';
import { launchImageLibrary } from 'react-native-image-picker';
import ApiService from 'src/api';
import TopHeaderCustom from 'src/components/layouts/TopHeaderCustom';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('imgCategory', {
    name: photo.assets[0].fileName,
    type: photo.assets[0].type,
    uri: Platform.OS === 'ios' ? photo.assets[0].uri.replace('file://', '') : photo.assets[0].uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};
const CategoryCreateScreen = () => {
  const [photo, setPhoto] = React.useState(null);
  const [name, setName] = useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      if (response) {
        setPhoto(response);
      }
    });
  };

  const resetState = () => {
    setPhoto(null);
    setName(null);
  };

  const handleUploadPhoto = async () => {
    const result = await ApiService.post('categories', createFormData(photo, { name: name }));
    if (result === 201) {
      alert('Thêm thành công');
      resetState();
    }
  };
  return (
    <View style={styles.container}>
      <TopHeaderCustom name="Tạo Danh mục" />
      {photo ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: photo.assets[0].uri }} style={styles.image} />
        </View>
      ): (
        <TouchableOpacity onPress={handleChoosePhoto}>
          <View style={styles.uploadContainer}>
            <Icon
              name="cloud-upload-outline"
              type="ionicon"
              color="#000"
              size={50}
            />
            <Text style={styles.uploadText}>Upload File</Text>
          </View>
        </TouchableOpacity>
      )}
      
      <View style={styles.inputContainer}>
        <Input label="Tên danh mục" onChangeText={value => setName(value)} />
        <Button containerStyle={styles.buttonContainer} title="Tạo" onPress={() =>handleUploadPhoto()}/>
      </View>
    </View>
  );
};

export default CategoryCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  uploadContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 5,
    height: 100,
    borderStyle: 'dotted',
  },
  inputContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
    borderRadius: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    margin: 20,
  },
  image: {
    height: 200,
  },
});
